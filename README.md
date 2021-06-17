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
2. **Clone:** Use the command "git clone *paste link here*".
3. **NPM:** Run the command **npm install** to install Node Package Manager and dependencies.
4. **Dotenv:** From your root folder, create a .env file with the following information:
  * DB_NAME='ecommerce_db'
  * DB_USER='*your mysql username*'
  * DB_PW='*your mysql password*'  
  Your MySQL login information will then be passed to config/connection.js. This is necessary to sync the Sequelize models to the MySQL database on server start.
5. **MySql:** Using MySQL shell command line, run the command **source db/schema.sql** to download the database to your remote workspace.
6. **Seeds:** Using the repository's integrated terminal, run the command **npm run seed** to seed existing data to the database.
7. **Connect to Server**: After following installation instructions above, use your integrated terminal to start the server with **npm start** or **node server.js.**

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
* categories/*category id* (see note below)  
* tags/*category id*

NOTE: Categories for products cannot be null! When running delete categories route, only delete categories that do not have associated products. To accomplish this, delete a category after using a POST route to create one.

## Demonstration
Would you like to see E-commerce back-end in action?

Watch this [demo](https://youtu.be/8ABc2NKk8Z8).

## Questions
Have questions about this project?  
GitHub: https://github.com/sarawrmas  
Email: sara.m.adamski@gmail.com

## Credits
Models, CRUD routes, server connection: Sara Adamski  
Database, seeds, dependencies: The Coding Bootcamp at UT Austin