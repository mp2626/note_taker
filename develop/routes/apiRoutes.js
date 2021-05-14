
const notes = require('../db/db.json');

module.exports = (app) => {
    console.log(notes);
    app.get('/api/notes', (req, res) => res.json(notes));
};