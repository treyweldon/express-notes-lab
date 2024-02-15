const notes = [
    {id: 1234, note: 'Learn JavaScript', done: true},
    {id: 2345, note: 'Walk Sawyer', done: false},
    {id: 3456, note: 'Study Spanish', done: false},
    {id: 4567, note: 'Eat Dinner', done: true},
    {id: 5678, note: 'Make a beat', done: false},
];


const getAll = () =>{
    return notes;
}

const getOne = (id) =>{
    id = parseInt(id);
    return notes.find(note => note.id === id);
}


module.exports = {
    getAll,
    getOne,
}