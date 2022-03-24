// AS A manager at an internet retail company
// I WANT a back end for my e-commerce website that uses the latest technologies
// SO THAT my company can compete with other e-commerce companies

// X GIVEN a functional Express.js API
// X WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
// X THEN I am able to connect to a database using Sequelize
// X WHEN I enter schema and seed commands
// X THEN a development database is created and is seeded with test data
// WHEN I enter the command to invoke the application
// THEN my server is started and the Sequelize models are synced to the MySQL database
// WHEN I open API GET routes in Insomnia for categories, products, or tags
// THEN the data for each of these routes is displayed in a formatted JSON
// WHEN I test API POST, PUT, and DELETE routes in Insomnia
// THEN I am able to successfully create, update, and delete data in my database

// Use Insomia to show GET routes returning all categories, products, and tags
// Use Insomia to show GET routes returning a single category, product, or tag
// Use Insomia to show POST, PUT, and DELETE routes for categories
// Use Insomia to show POST, PUT, and DELETE routes for products and tags

const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force: false})
.then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })
});
