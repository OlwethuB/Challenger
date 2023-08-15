const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); // Third-party middleware to add functionality to Express apps.
const port = process.env.PORT || 8808; 

// require routes 
const routes = require('./router');

// Middleware 

app.use(express.json());
// app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.use((err, req, res, next) => { // error handling in middleware
    res.status(500).send('Somme Broke Bruv!')
});

app.use(cookieParser()) // Load the cookie-parsing middleware

// Use routes
app.get("/", routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Bcrypt is an authentication middleware

