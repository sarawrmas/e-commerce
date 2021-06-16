# E-commerce

## Acceptance Criteria
<!-- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file  
THEN I am able to connect to a database using Sequelize -->

<!-- WHEN I enter schema and seed commands  
THEN a development database is created and is seeded with test data -->

<!-- WHEN I enter the command to invoke the application  
THEN my server is started and the Sequelize models are synced to the MySQL database -->

<!-- WHEN I open API GET routes in Insomnia Core for categories, products, or tags  
THEN the data for each of these routes is displayed in a formatted JSON -->

WHEN I test API POST, PUT, and DELETE routes in Insomnia Core  
THEN I am able to successfully create, update, and delete data in my database

## Fill Out the API Routes to Perform RESTful CRUD Operations
Fill out the unfinished routes in:
* product-routes.js
* tag-routes.js
* category-routes.js

To perform CRUD operations:
<!-- * GET routes to return all categories, all products, and all tags -->
<!-- * GET routes to return a single category, a single product, and a single tag -->
* POST, PUT, and DELETE routes for categories

HINT: Be sure to look at your module project's code for syntax help and use your model's column definitions to figure out what req.body will be for POST and PUT routes!

## Seed the Database
After creating the models and routes, run 'npm run seed' to seed data to your database so that you can test your routes.

## Sync Sequelize to the Database on Server Start
Create the code needed in server.js to sync the Sequelize models to the MySQL database on server start.

TAKE COMMENTED GREEN TEXT OUT OF CONNECTION.JS  
SET FORCE TO FALSE IN SERVER.JS



## GET ALL routes
* Products: http://localhost:3001/api/products  
* Categories: http://localhost:3001/api/categories  
* Tags: http://localhost:3001/api/tags

## GET ONE routes
* Products: http://localhost:3001/api/products/1  
* Categories: http://localhost:3001/api/categories/1  
* Tags: http://localhost:3001/api/tags/1

## POST routes
* Products: http://localhost:3001/api/products/1  
{
  "product_name": "Iron Maiden Tank Top",
  "price": 20.00,
  "stock": 18,
  "tagIds": [1]
}

* Categories: http://localhost:3001/api/categories/1  
{
  "category_name": "Jackets"
}

* Tags: http://localhost:3001/api/tags/1
{
  "tag_name": "pink"
}

## PUT routes
* Products: http://localhost:3001/api/products/2  
<!-- updates to blue -->
{
  "tagIds": [3]
}

* Categories: http://localhost:3001/api/categories/2
<!-- updates "shorts" to "bottoms"   -->
{
  "category_name": "Bottoms"
}

* Tags: http://localhost:3001/api/tags/2
<!-- updates "pop music" to "pop" -->
{
  "tag_name": "pop"
}

## DELETE routes
* Products: http://localhost:3001/api/products/3  
* Categories: http://localhost:3001/api/categories/3  
* Tags: http://localhost:3001/api/tags/3