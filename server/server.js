// set up the server
const PORT = process.env.PORT ?? 8000;
const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}
)