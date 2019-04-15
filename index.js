const express = require('express');
const bodyParser = require('body-parser');

const HTTP_PORT = process.env.HTTP_PORT || 3000;

const app = express();
const users = []; // Array of users who have logged in, theese will be obejcts tracked by the server.

app.use(bodyParser.json());

// Routes:
app.post('/sign-in', (req, res) => {
    const { user, password } = req.body;


});

app.get('/sign-in-redirect', (req, res) => {

});

app.post('/new-user', (req, res) => {
    const { user, password } = req.body;
});

app.get('new-user-redirect', (req, res) => {

});

app.post('/view-path', (req, res) => {
    const { userToken, path } = req.body; // The userToken is the index in the array of users. Maybe a unqiue id for that user and it finds it in the array, i dunno yet tho.
});

app.get('/path-redirect', (req, res) => {

});

app.post('/dowload-file', (req, res) => {
    const { userToken, path } = req.body;
})





app.listen(HTTP_PORT, () => console.log(`Running on port ${HTTP_PORT}`));