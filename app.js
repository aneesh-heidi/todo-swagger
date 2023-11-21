const express = require('express');
const todoRouter = require('./routes/todoRoutes')


const app = express();

app.use(express.json());

app.use('/todo', todoRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});