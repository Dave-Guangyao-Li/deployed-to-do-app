// set up the server
const PORT = process.env.PORT ?? 8000;
const express = require('express');
const app = express()
const pool = require('./db') // this would be the connection to the database


// get all todos
app.get('/todos', async (req, res) => {
    try {
        const todos = await pool.query('SELECT * FROM todos')
        res.json(todos.rows)

    } catch (error) {
        console.log(error)
    }
})



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}
)