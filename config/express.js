import express from 'express'
const app = express();
app.get('/', (req, res) => {
    res.status(200).send(Template()) 
    })
    //...
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
export default app;
