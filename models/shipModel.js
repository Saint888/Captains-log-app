const mongoose = require('mongoose')

const Schema = mongoose.Schema

const shipSchema = new Schema({
    title: { 
        type: String,
        required: true
    },
    entry: { 
        type: String, required: true 
    },
    shipisBroken: { 
        type: Boolean, default: true
    }},
    { timestamps: true })
    

const Ship = mongoose.model('ships', shipSchema)

module.exports = Ship