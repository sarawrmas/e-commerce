# E-commerce

## Acceptance Criteria
<!-- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file  
THEN I am able to connect to a database using Sequelize -->

WHEN I enter schema and seed commands  
THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application  
THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia Core for categories, products, or tags  
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia Core  
THEN I am able to successfully create, update, and delete data in my database

## Mock-Up
* GET routes to return all categories, all products, and all tags
* GET routes to return a single category, a single product, and a single tag
* POST, PUT, and DELETE routes for categories
**Your walkthrough video should also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia Core!**

## Installation
* MySQL2 to connect Express.js API to a MySQL database
* Sequelize "                                        "
<!-- * dotenv to use environment variables to store sensitive data:
  * MySQL username
  * MySQL password
  * database name -->
  TAKE COMMENTED GREEN TEXT OUT OF SERVER.JS BEFORE SUBMITTING

## Associations
<!-- You'll need to execute association methods on your Sequelize models to create the following relationships between them:

* Product belongs to Category, as a category can have multiple products but a product can only belong to one category.
* Category has many Product models.
* Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products.
* Tag belongs to many Product models. -->

HINT: Make sure you set up foreign key relationships that match the column we created in the respective models.

## Fill Out the API Routes to Perform RESTful CRUD Operations
Fill out the unfinished routes in:
* product-routes.js
* tag-routes.js
* category-routes.js

to perform create, read, update, and delete operations using your Sequelize models.

NOTE: The functionality for creating the many-to-many relationship for products is already done for you.

HINT: Be sure to look at your module project's code for syntax help and use your model's column definitions to figure out what req.body will be for POST and PUT routes!

## Seed the Database
After creating the models and routes, run 'npm run seed' to seed data to your database so that you can test your routes.

## Sync Sequelize to the Database on Server Start
Create the code needed in server.js to sync the Sequelize models to the MySQL database on server start.