import connection from '../database/db.js';


export const articlePost = async (req, res) => {
    try {
        const article = {
            heading: req.body.heading,
            read_time: req.body.read_time,
            description: req.body.description,
            categories: JSON.stringify(req.body.categories),
            thumbnail_image: req.body.thumbnail_image,
            featured_image: req.body.featured_image,
        };

        const query = 'INSERT INTO articles SET ?';

        connection.query(query, article, (error, results) => {
            if (error) throw error;
            res.status(200).send('Article added successfully!');
        });
    } catch (error) {
        console.log(error);
    }
}

export const getAllArticles = async (req, res) => {
    try {
        const sqlInsert = `SELECT * FROM articles`;
        connection.query(sqlInsert, (error, result) => {
            if (error) {
                console.log(error);
            }
            res.status(200).send(result)
        })
    } catch (error) {
        console.log(error);
    }
}

export const articleEdit = async (req, res) => {
    try {
        const { id } = req.params;
        const { heading, read_time, description, categories, thumbnail_image, featured_image } = req.body;

        const sqlUpdate = `UPDATE articles SET heading=?,read_time=?,description=?,categories=?,thumbnail_image=?,
        featured_image=? WHERE id = ?`;
        connection.query(sqlUpdate, [heading, read_time, description, JSON.stringify(categories), thumbnail_image, featured_image,
            id], (error, result) => {
                if (error) {
                    console.log(error);
                }
                res.status(200).send("Edited Successfully");
            })
    } catch (error) {
        console.log(error);
    }
}

export const articleDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const sqlDelete = `DELETE FROM articles WHERE id = ?`;
        connection.query(sqlDelete, id, (error, result) => {
            if (error) {
                console.log(error);
            }
            res.send("Deleted Successfully")
        })
    } catch (error) {
        console.log(error);
    }
}







