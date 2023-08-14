const express = require('express');
const router = express.Router();
const mysql = require("mysql2");
const config = require('../config');
const connection = mysql.createConnection(config); // connect to mysql database using configuration for config
connection.connect();



// Defining routes....

// GET (/ OR /challenger) - Home page it will display all routes with it description
router.get( '/', (req, res) => {

});

// GET (/users) - Display a list of users
router.get('/users', (req, res) => {

});

// GET (/user/:id) - Display a single user
router.get('/user/', (req, res) => {

});

// PUT (/user/:id) - Update user’s record
router.put('/user/:id', (req, res) => {

});

// PATCH (/user/:id) - To modify a user’s record
router.patch('/user/:id', (req, res) =>{

});

// POST (/register) - To register a new user
router.post('/register', (req, res) => {

});

// DELETE (/user/:id) - To delete a single user
router.delete('/user/:id', (req, res) => {

});

// POST (/book) - To add a new book
router.post('/book', (req, res) => {

});

// GET (/books) - Display a list of books
router.get('/book', (req, res) => {

});

// GET (/book/:id) - Display a single book
router.get('/book/:id', (req, res) => {

});

// PUT AND PATCH (/book/:id) - Modify or replace a book’s record
router.put('/book/:id', (req, res) => {

});

router.patch('/book/:id', (req, res) => {

});

// DELETE (/book/:id) - Delete a book
router.delete('/book/:id', (req, res) => {

});

// POST (/bookAuthor) - Add a book’s author details
router.post('/bookAuthor', (req, res) => {

});

// GET (/bookDetails) - Display a list of books and authors avoid duplicate
router.get('/bookDetails', (req, res) => {

});

// PUT/PATCH (/bookAuthor/:id) - Update book author details
router.patch('/bookAuthor/:id', (req, res) => {

});

// DELETE (/bookAuthor/:id) - Remove book author detail
router.delete('/bookAuthor/:id', (req, res) => {

});

// POST (/order/:userID/:bookID) - Add to cart
router.post('/order/:userID/:bookID', (req, res) => {

});

// PUT OR PATCH (/order/:userID/:bookID) - Update order detail details
router.put('/order/:userID/:bookID', (req, res) => {

});

// DELETE (/order/:userID/:bookID) - Delete a order detail
router.delete('order/:userID/:bookID', (req, res) => {

});

// GET (/checkout/:userID/:bookID) - Display a list of user with the products they want to pay
router.get('checkout/:userID/:bookID', (req, res) => {

});


module.exports = router;

