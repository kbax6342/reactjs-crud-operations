import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express()


const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "test"
    })

    app.use(cors());
    app.use(express.json());

app.get("/", (req, res) => {
    res.json("hello this is the backend")
})


app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"

    db.query(q, (err, data) => {
        if (err) {
          console.log(err);
          return res.json(err);
        }
        return res.json(data);
      });

});

app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`, `description`, `cover`) VALUES (?)"
    const values2 = [
        req.body.title,
        req.body.description,
        req.body.cover
    ]

app.


    db.query(q, [values2], (err, data) => {
        if(err) return res.json(err)
        return res.json("Book has been created successfully")
    })

})

app.listen(8000, () => {
    console.log("Connected to backend")
})