// set up the server
const PORT = process.env.PORT ?? 8000;
const express = require('express');
const app = express()
const pool = require('./db') // this would be the connection to the database
const cors = require('cors') // this is a package that allows us to make requests from one domain to another, e.g. from localhost:3000 to localhost:8000


// use cors
app.use(cors()) // cors will be used for all routes, this is to allow requests from the front end to the back end

// get all todos
app.get('/todos/:userEmail', async (req, res) => {

    const { userEmail } = req.params // get this from front end
    console.log(userEmail)
    try {
        const todos = await pool.query('SELECT * FROM todos WHERE user_email=$1', [userEmail])
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