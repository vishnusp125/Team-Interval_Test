import express from 'express';
import connection from './database/db.js'
import articleRouter from './routes/articleRouter.js';
import categoryRouter from './routes/categoryRouter.js';
import dotenv from 'dotenv';

const app = express()
dotenv.config()


app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.use('/', articleRouter)
app.use('/', categoryRouter)


const port = process.env.PORT

app.listen(port, () => console.log(`Server started at port ${port}`));  