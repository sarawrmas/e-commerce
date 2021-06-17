# E-commerce

## Table of Contents
* [Description](#description)
* [Languages](#languages)
* [Installation](#installation)
* [Routes](#routes)
* [Demonstration](#demonstration)
* [Questions](#questions)
* [Credits](#credits)

## Description
As a manager at an internet retail company, you want a back end for your e-commerce website that uses the latest technologies so that you can compete with other e-commerce companies. The aptly named E-commerce application is here to help. With a few CRUD routes, you can:
* Access products along with their categories and tags
* Access categories along with their associated products
* Access tags along with their associated products
* Add new products, categories, and tags
* Update a product's tags, a category name, and tag names
* Delete any product, category, or tag

## Languages
This application was built using:
* JavaScript
* Node/NPM
* Dotenv
* Express.js
* MySQL2
* Sequelize

## Installation
1. **Copy Link:** Hit the "Code" button within this GitHub repo to copy link.
1. **Clone:** Use the command "git clone *paste link here*".
1. **NPM:** Run the command **npm install** to install Node Package Manager and dependencies.
1. **MySql:** Using MySQL shell command line, run the command **source db/schema.sql** to download the database to your remote workspace.
1. **Seeds:** Using the repository's integrated terminal, run the command **npm run seed** to seed existing data to the database.
1. **Connect to Server**: After following installation instructions above, use your integrated terminal to start the server with **npm start** or **node server.js.**

## Routes
Navigate to Insomnia Core. Use the base link http://localhost:3001/api/*given spec*

Given specifications are outlined below.

Example: to GET the product with an id of 1, add the 'products/*product id*' endpoint from the GET (one) category to the end of the base link:  
http://localhost:3001/api/products/1  
Run in Insomnia using the 'GET' route.

**GET (all):**
* products  
* categories  
* tags

**GET (one):**
* products/*product id*
* categories/*category id*
* tags/*tag id*

**POST:**
* products  
JSON:  
{  
  "product_name": "*some string*",  
  "price": *some decimal*,  
  "stock": *some integer*,  
  "tagIds": [*array of some integers*]  
}

* categories  
JSON:  
{  
  "category_name": "*some string*"  
}

* tags  
JSON:  
{  
  "tag_name": "*some string*"  
}

**PUT:**
* products/*product id*  
JSON:  
{  
  "tagIds": [*array of some integers*]  
}

* categories/*category id*  
JSON:  
{  
  "category_name": "*some string*"  
}

* tags/*category id*  
JSON:  
{  
  "tag_name": "*some string*"  
}

**DELETE:**
* products/*product id*  
* categories/*category id*  
* tags/*category id*

## Demonstration
Would you like to see the back end of E-commerce in action?

Watch this [demo](https://www.youtube.com/watch?v=JsFl8in5I6g).

## Questions
Have questions about this project?  
GitHub: https://github.com/sarawrmas  
Email: sara.m.adamski@gmail.com

## Credits
The Coding Bootcamp at UT Austin  
Sara Adamski



------------------------------------------------------------------------------------------------------------------------------

## Seed the Database
After creating the models and routes, run 'npm run seed' to seed data to your database so that you can test your routes.

## Sync Sequelize to the Database on Server Start
Create the code needed in server.js to sync the Sequelize models to the MySQL database on server start.

## GET ALL routes
* Products: http://localhost:3001/api/products  
* Categories: http://localhost:3001/api/categories  
* Tags: http://localhost:3001/api/tags

## GET ONE routes
* Products: http://localhost:3001/api/products/1  
* Categories: http://localhost:3001/api/categories/1  
* Tags: http://localhost:3001/api/tags/1

## POST routes
* Products: http://localhost:3001/api/products  
{
  "product_name": "Iron Maiden Tank Top",
  "price": 20.00,
  "stock": 18,
  "tagIds": [1]
}

* Categories: http://localhost:3001/api/categories 
{
  "category_name": "Jackets"
}

* Tags: http://localhost:3001/api/tags
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