
const { v4: uuidv4 } = require("uuid");
const notes = require('../db/db.json');

module.exports = (app) => {

    app.get('/api/notes', function (req, res) {
        res.json(notes)
    });

    app.post('/api/notes', function (req, res) {
        id = uuidv4();
        console.log(id)
        console.log(notes);
        notes.push(req.body);
        res.json(true);
    })
};