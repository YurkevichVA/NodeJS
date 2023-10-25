import mysql2 from "mysql2";
import { title } from "process";

const pool = mysql2.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "CA371r1F8v2tg",
    database: "notes_app"
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