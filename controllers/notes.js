const Note = require('../models/note');


const index = (req, res) => {
    res.render('notes/index',{
        notes : Note.getAll(),
        title : "All Notes",
    })
};


const show = (req, res) =>{
    res.render('notes/show',{
        note: Note.getOne(req.params.id),
        title : "Show Page"
    })
}


module.exports = {
    index,
    show
};