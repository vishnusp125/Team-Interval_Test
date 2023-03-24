import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

 const connection = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        const sql1 = `CREATE TABLE IF NOT EXISTS articles (
            id INT(11) NOT NULL AUTO_INCREMENT,
            heading VARCHAR(255) NOT NULL,
            read_time INT(11) NOT NULL,
            description TEXT NOT NULL,
            categories JSON NOT NULL,
            thumbnail_image VARCHAR(255) NOT NULL, 
            featured_image VARCHAR(255) NOT NULL,
            verified BOOLEAN NOT NULL DEFAULT false,
            newest BOOLEAN NOT NULL DEFAULT false,
            trending BOOLEAN NOT NULL DEFAULT false,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (id))`  
        connection.query(sql1, (err, result) => {
            if (err) {
                console.log(err);
            } else {  
                console.log("Connected to MySQL");
            }
        })
    }
})
const sql2 = `CREATE TABLE IF NOT EXISTS categories (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)`;
connection.query(sql2, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Table created successfully");
    }
});

    
export default connection; 