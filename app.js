const express = require('express');
const todoRouter = require('./routes/todoRoutes')

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

app.use(express.json());


const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Todo API',
            version: '1.0.0',
            description: 'Test project to connect swagger with a todo crud app',
        },
    },
    servers: [
        {
            url: "http://localhost:3000",
        },
    ],
    apis: ["./routes/*.js", './models/*.js', './controller/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use('/todo', todoRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});