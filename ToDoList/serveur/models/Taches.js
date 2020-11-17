const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Taches = new Schema({
   tache: {
      type: String
   },

   description: {
    type: String
   },

}, {
   collection: 'taches'
})

module.exports = mongoose.model('Taches', Taches)