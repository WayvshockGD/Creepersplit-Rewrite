const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
    userName: String,
    userID: String,
    itemCount: Number,
    fishRoll: String,
    Laptop: String,
    Crossbow: String,
    Cake: String
})

module.exports = mongoose.model("itemData", dataSchema)