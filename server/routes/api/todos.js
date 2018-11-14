const express = require('express')
const mongodb = require('mongodb')
const router = express.Router();

router.get('/', async (req, res) => {

    const todos = await load_todos();
    res.send(await todos.find({}).toArray());
});

// Add Todos
router.post('/', async (req, res) => {
    const todos = await load_todos();
    await todos.insertOne({
            text: req.body.text,
            createAt: new Date(),
        }),
        res.status(201).send();
});

//Delete Todos
router.delete('/:id', async (req, res) => {
    const todos = await load_todos();
    await todos.deleteOne({
        _id: new mongodb.ObjectID(req.params.id)
    });
    res.status(201).send();
});

async function load_todos(element) {

    const client = await mongodb.MongoClient.connect('mongodb://admin:admin1@ds161183.mlab.com:61183/todo_app-vue-express-mongodb', {
        useNewUrlParser: true
    });

    return client.db('todo_app-vue-express-mongodb').collection('todos')

}



module.exports = router;