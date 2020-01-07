require('dotenv').config({ path: '.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Chatkit = require('@pusher/chatkit-server');

const app = express();
// this doesnt need to be hidden
const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:d0438195-980b-44ab-aa30-0adc46c40b14',
    key: 'a7a36f47-1532-4607-9098-b127ba02a7c6:KMtrxsdd8GTpyJyC7axygSfb0Zv0yWmZNa5HgDeXhgM='
});


// express middleware
app.use(cors());

// JSON returned 
app.use(bodyParser.json());

// Returns middleware that only parses urlencoded within certain mb's
app.use(bodyParser.urlencoded({ extended: true }));


// post routes #4
// sends userid to the req.body
app.post('/users', (req, res) => {
    const { userId } = req.body;
    // sends information to chatkit
    chatkit
        .createUser({
            id: userId,
            name: userId,
        })
        .then(() => {
            res.sendStatus(201);
        })
        .catch(err => {
            if (err.error === 'services/chatkit/user_already_exists') {
                console.log(`User already exists: ${userId}`);
                res.sendStatus(200);
            } else {
                res.status(err.status).json(err);
            }
        });
});

app.post('/authenticate', (req, res) => {
    const authData = chatkit.authenticate({
        userId: req.query.user_id,
    });
    res.status(authData.status).send(authData.body);
});

app.set('port', process.env.PORT || 5200);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});