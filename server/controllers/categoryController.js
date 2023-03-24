import connection from '../database/db.js';


export const categoryPost = async (req, res) => {
    try {
        const { name } = req.body;
        const sqlInsert = `INSERT INTO categories (name) VALUES (?)`;
        connection.query(sqlInsert, name, (error, result) => {
            if (error) {
                console.log(error);
            }
            res.send(result);
        })
    } catch (error) {
        console.log(error);
    }
}

export const getAllCategories = async (req, res) => {

    try {
        const sqlInsert = `SELECT * FROM categories`;
        connection.query(sqlInsert, (error, result) => {
            if (error) {
                console.log(error);
            }
            res.send(result)
        })
    } catch (error) {
        console.log(error);
    }
}

export const getDetails = async (req, res) => {

    const categories = req.query.categories;

    if (!categories) {
        return res.status(400).send('Categories parameter is required');
    }

    const category = categories.split(',')[0];
    let sql = `SELECT * FROM articles WHERE JSON_CONTAINS(categories, '["${category}"]')`;

    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error retrieving articles');
        } else {
            res.status(200).send(result);
        }
    });
};

