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
    const sql = 'SELECT * FROM Users';
    connection.query(sql, (error, results, fields) => {
        if (error) {
            console.log('error getting user info: ', error);
            res.status(500).send('Error');
        } else {
            console.log('User info retrieved successfully');
            res.json(results);
        }
    });
});

// GET (/user/:id) - Display a single user
router.get('/user/', (req, res) => {
    const { userID } = req.params;
    const sql = ' SELECT * FROM Users WHERE userID= ?';
    const params = [userID];
    connection.query(sql, params, (error, results, fields) => {
        if (error) {
            console.log('Error getting user by ID: ', error);
            res.status(500).send('Error');
        } else if (results.length === 0){
            console.log('User not found');
        } else {
            console.log('User ID retrieved successfully');
            res.json(results[0]);
        }
    });

});

// PUT (/user/:id) - Update user’s record
router.put('/user/:id', (req, res) => {
    const { userID } = req.params;
    const { firstName, lastName, DOB, email, password, profilePic } = req.body;
    const sql = 'UPDATE books SET firstName = ?, lastName = ?, DOB = ?, email = ?, password = ?, profilePic = ?  WHERE userID = ?';
    const params = [firstName, lastName, DOB, email, password, profilePic];
    connection.query(sql, params, (error, results, fields) => {
        if (error) {
            console.log('Error updating user: ', error);
            res.status(500).send('Error');
        } else {
            console.log('User updated');
            res.json({ message: 'User updated successfully' });
        }
    });
});

// PATCH (/user/:id) - To modify a user’s record
router.patch('/user/:id', (req, res) =>{

});

// POST (/register) - To register a new user
router.post('/register', (req, res) => {
    const { firstName, lastName, DOB, email, password, profilePic } = req.body;
    const sql = 'INSERT INTO Users (firstName, lastName, DOB, email, password, profilePic) VALUES (?, ?, ?)';
    const params = [firstName, lastName, DOB, email, password, profilePic];
    connection.query(sql, params, (error, results, fields) => {
        if (error) {
            console.log('Error adding user: ', error);
            res.status(500).send('error');
        } else {
            console.log('User added successfully');
            res.status(201).send('User inserted successfully');
        }
    });
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

