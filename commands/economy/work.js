const { MessageEmbed } = require('discord.js')
const ms = require('parse-ms')
const mongoose = require('mongoose')
const con = require('../../config.json')

mongoose.connect(con.config.dataBaseURl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Data = require('../../models/data')

let timeout = 60000

let currency = [
    10,
    20,
    30,
    40,
    50
]

var places = [
    "Mcdonalds",
    "Freddy's pizzeria",
    "walmart",
    "cluck n bell",
    "The fast bomb",
    "Dank memers search command"
]

module.exports = {
    name: "work",
    description: "work for dat money",
    aliases: [],
    usage: 'work',
    async run(message, args, bot) {

        if (!con.config.owners.includes(message.author.id)) {
            return message.reply(`This Command is Currently being Fixed`)
          }

        const cur = currency[Math.floor(Math.random() * currency.length)]

         Data.findOne({
             userID: message.author.id
         }, (err, data) => {
             if(err) console.log(err)
             if(!data) {
                 const newData = new Data({
                     name: message.author.tag,
                     userID: message.author.id,
                     lb: "all",
                     money: cur,
                     daily: data.daily,
                 })
                 newData.save().catch(err => console.log(err))
                 setTimeout(() => {
                    const cre = new MessageEmbed()
                    .setDescription('New Data file Created!')
                    .setColor(con.config.embedColors.blue)
                   message.channel.send(cre)
               }, 5000)
                 const claimed2 = new MessageEmbed()
                 .setDescription(`${message.author.tag} Worked for: ${places[Math.floor(Math.random() * places.length)]} and earned: $${cur}`)
                 .setColor(con.config.embedColors.blue)
                 return message.channel.send(claimed2)
             } else {
                 if(timeout - (Date.now() - data.daily) > 0) {
                     let time = ms(timeout - (Date.now() - data.daily))

                     const already = new MessageEmbed()
                     .setDescription(`You have To wait: ${time.minutes}m ${time.seconds}s`)
                     .setColor(con.config.embedColors.red)
                     return message.reply(already)
                 } else {
                     data.money += cur

                     data.daily = Date.now()
                     data.save().catch(err => console.log(err))

                     const claimed = new MessageEmbed()
                     .setDescription(`${message.author.tag} Worked for: ${places[Math.floor(Math.random() * places.length)]} and earned: $${cur}`)
                     .setColor(con.config.embedColors.blue)

                     return message.channel.send(claimed)

                     // responses[Math.floor(Math.random() * responses.length)]
                 }
             }
             
         })

    }
}