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

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    age NUMBER NOT NULL
  )
`);

// Creates a new post
function addPost(title: string, description: string) {
    const result = db.run(
        "INSERT INTO posts (title, description) VALUES (?, ?)",
        [title, description]
    );
}

// Creates a new user
function addUser(username: string, email: string, age: number) {
    const result = db.run(
        "INSERT INTO users (username, email, age) VALUES (?, ?, ?)",
        [username, email, age]
    );
}

// Gets all posts
function getAllPosts() {
    return db.query("SELECT * FROM posts").all();
}

// Gets all users
function getAllUsers() {
    console.log(db.query("SELECT * FROM users").all())
    return db.query("SELECT * FROM users").all();
}


// Gets certain post by id
function getPostByID(id: number) {
    console.log(db.query("SELECT * FROM posts WHERE id = ?").get(id))
    return db.query("SELECT * FROM posts WHERE id = ?").get(id);
}

// Gets certain user by id
function getUserByID(id: number) {
    console.log(db.query("SELECT * FROM users WHERE id = ?").get(id))
    return db.query("SELECT * FROM users WHERE id = ?").get(id);
}

// Gets user by username
function getUserByUsername(username: string) {
    console.log(db.query("SELECT * FROM users WHERE username = ?").get(username))
    return db.query("SELECT * FROM users WHERE username = ?").get(username);
}

// Edits post by id
function editPostByID(id: number, title: string | null, description: string | null) {
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
}

// Edits users by id
function editUserByID(id: number, username: string | null, email: string | null, age: number | null) {
    const result = db.run(`
        UPDATE users
        SET 
            username = COALESCE(?, username),
            email = COALESCE(?, email),
            age = COALESCE(?, age)
        WHERE id = ?
    `, [username, email, age, id]);

    if (result.changes === 0) {
        console.log(`No user found with id ${id}`);
        return;
    }
}

// Deletes post by id
function deletePostByID(id: number) {
    const result = db.run("DELETE FROM posts WHERE id = ?", [id]);

    if (result.changes === 0) {
        console.log(`No post found with id ${id}`);
        return;
    }
}

// Deletes user by id
function deleteUserByID(id: number) {
    const result = db.run("DELETE FROM users WHERE id = ?", [id]);

    if (result.changes === 0) {
        console.log(`No post found with id ${id}`);
        return;
    }
}

// Deletes user by username
function deleteUserByUsername(username: string) {
    const result = db.run("DELETE FROM users WHERE username = ?", [username]);

    if (result.changes === 0) {
        console.log(`No post found with username ${username}`);
        return;
    }
}
