import mysql2 from "mysql2";
import { title } from "process";

const pool = mysql2.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

console.log(await pool.query("SELECT * FROM notes;"));

console.log("\n\n___________________________________________________\n\n");

const getById = (id: number) => {
    // return pool.query(`SELECT * FROM notes WHERE id = ${id};`); !! НЕБЕЗПЕЧНО !!
    return pool.query('SELECT * FROM notes WHERE id = ?;', [id]);  // БЕЗПЕЧНО
}

console.log(await getById(1));

console.log("\n\n___________________________________________________\n\n");

const createNote = (title: string, contens: string) => {
    return pool.query(`
    INSERT INTO notes (title, contents)
    VALUES
    (?, ?);`, [title, contens]);
}

//createNote('Jaja', 'Binks');

console.log("\n\n___________________________________________________\n\n");

const deleteNote = (id: number) => {
    return pool.query(`DELETE FROM notes WHERE id = ?` [id]);
}

//deleteNote(4);
//deleteNote(5);