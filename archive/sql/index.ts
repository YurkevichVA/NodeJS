import express, { Request, Response } from 'express';
import mysql2 from 'mysql2';
import { resolve } from 'path';

const app = express();
const port = 3000;

app.use(express.json());

const pool = mysql2.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "CA371r1F8v2tg",
    database: "cats_app"
}).promise();

const createCatsTable = async () => {
  try {
      await pool.query(`
          CREATE TABLE IF NOT EXISTS cats (
            id integer PRIMARY KEY AUTO_INCREMENT,
            breed VARCHAR (255) NOT NULL,
            image TEXT NOT NULL,
            age VARCHAR (255) NOT NULL
          );
      `);
      console.log('Cats table created or already exists.');
  } catch (error) {
      console.error('Error creating cats table:', error);
  }
};

const deleteAllCatsData = async () => {
  try {
      await pool.query('DROP TABLE IF EXISTS cats');
      console.log('All data deleted from cats table.');
  } catch (error) {
      console.error('Error deleting data from cats table:', error);
  }
};

deleteAllCatsData();
createCatsTable();


app.post('/add-cat', async (req, res) => {
  try {
    const { catBreed, catPhoto, catAge } = req.body;

    console.log(req.body);

    const query = 'INSERT INTO cats (breed, image, age) VALUES (?, ?, ?)';
    const [result] = await pool.query(query, [catBreed, catPhoto, catAge]);

    res.status(201).json({ message: 'Cat added to the database' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the cat to the database' });
  }
});

app.get('/get-all-cats', async (req, res) => {
    try {

      const breedFilter = req.query.breed;
      const ageFilter = req.query.age;
      const count = req.query.count;
      const ageSortDirection = req.query.ageSortDirection === 'desc' ? 'DESC' : 'ASC';

      let query = 'SELECT breed, image, age FROM cats';
      const values = [];

      if (breedFilter) {
          query += ' WHERE breed = ?';
          values.push(breedFilter);
      }
      
      if (ageFilter) {
          if (breedFilter) {
              query += ' AND age = ?';
          } else {
              query += ' WHERE age = ?';
          }
          values.push(ageFilter);
      }

      if (count) {
          query += ' LIMIT ?';
          values.push(Number(count));
      }

      query += ` ORDER BY age ${ageSortDirection}`;

      const [rows] = await pool.query(query, values);

      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching cat data' });
    }
});

app.delete('/delete-cat/:catId', async (req, res) => {
    try {
      const catId = req.params.catId;
      const query = 'DELETE FROM cats WHERE id = ?';
      const [result] = await pool.query(query, [catId]);

      if (result && (('changedRows' in result  && result.changedRows > 0) || ('affectedRows' in result && result.affectedRows))) {
        res.status(200).send('Cat deleted successfully');
      } else {
        res.status(404).send('Cat with the specified ID not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while deleting the cat' });
    }
});

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.sendFile(resolve('./public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
