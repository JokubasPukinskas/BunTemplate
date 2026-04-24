// Bun SQLite
import { Database } from "bun:sqlite";

const db = new Database("data.db");

// Create table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT
  )
`);


// Gets all posts
function getAll() {
    return db.query("SELECT * FROM posts").all();
}


// Gets certain post by id
function getByID(id: number) {
    return db.query("SELECT * FROM posts WHERE id = ?").get(id);
}


// Deletes post by id
function deleteByID(id: number) {
    const result = db.run("DELETE FROM posts WHERE id = ?", [id]);

    if (result.changes === 0) {
        console.log(`No post found with id ${id}`);
        return;
    }

    console.log(`Post with id ${id} deleted`);
    console.log(getAll());
}


// Edits post by id
function editByID(id: number, title: string | null, description: string | null) {
    const result = db.run(`
        UPDATE posts
        SET 
            title = COALESCE(?, title),
            description = COALESCE(?, description)
        WHERE id = ?
    `, [title, description, id]);

    if (result.changes === 0) {
        console.log(`No post found with id ${id}`);
        return;
    }

    console.log(getAll());
}


// Creates a new post
function addPost(title: string, description: string) {
    const result = db.run(
        "INSERT INTO posts (title, description) VALUES (?, ?)",
        [title, description]
    );

    console.log(`Post added with id ${result.lastInsertRowid}`);
    console.log(getAll());
}


//Console.logs/Functions
console.log(getAll());
console.log(getByID(1));

// deleteByID(3);
//editByID(1, null, "Text2");
addPost("bleh", "poop");