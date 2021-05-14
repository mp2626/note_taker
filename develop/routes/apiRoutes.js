
const { v4: uuidv4 } = require("uuid");
const notes = require('../db/db.json');

module.exports = (app) => {

    app.get('/api/notes', function (req, res) {
        res.json(notes)
    });

    app.post('/api/notes', function (req, res) {
        data = req.body
        data.id = uuidv4()
        console.log(data);
        notes.push(req.body);
        res.json(true);
    })
};