const { MessageEmbed } = require('discord.js')
const ms = require('parse-ms')
const mongoose = require('mongoose')
const con = require('../../config.json')

mongoose.connect(con.config.dataBaseURl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Data = require('../../models/data')

let reward = 100
let timeout = 86400000

module.exports = {
    name: "daily",
    description: "Gives the person Money",
    aliases: [],
    usage: 'balance',
    async run(message, args, bot) {

        if (!con.config.owners.includes(message.author.id)) {
            return message.reply(`This command was Disabled due to having errors it will be fixed soon`)
          }

         Data.findOne({
             userID: message.author.id
         }, (err, data) => {
             if(err) console.log(err)
             if(!data) {
                 const newData = new Data({
                     name: message.author.tag,
                     userID: message.author.id,
                     lb: "all",
                     money: reward,
                     daily: Date.now(),
                 })
                 newData.save().catch(err => console.log(err))
                 setTimeout(() => {
                    const cre = new MessageEmbed()
                    .setDescription('New Data file Created!')
                    .setColor(con.config.embedColors.blue)
                   message.channel.send(cre)
               }, 5000)
                 const claimed2 = new MessageEmbed()
                 .setDescription(`You have recieved ${reward} Dollars in your bank account!`)
                 .setColor(con.config.embedColors.blue)
                 return message.channel.send(claimed2)
             } else {
                 if(timeout - (Date.now() - data.daily) > 0) {
                     let time = ms(timeout - (Date.now() - data.daily))

                     const already = new MessageEmbed()
                     .setDescription(`You have already collected your Daily!`)
                     .setFooter(`Your can collect again in: ${time.hours}h ${time.minutes}m ${time.seconds}s`)
                     .setColor(con.config.embedColors.red)
                     return message.reply(already)
                 } else {
                     data.money += reward

                     data.daily = Date.now()
                     data.save().catch(err => console.log(err))

                     const claimed = new MessageEmbed()
                     .setDescription(`You have recieved ${reward} Dollars in your bank account!`)
                     .setColor(con.config.embedColors.blue)

                     return message.channel.send(claimed)
                 }
             }
             
         })

    }
}