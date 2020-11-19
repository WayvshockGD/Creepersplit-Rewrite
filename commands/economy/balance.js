const { MessageEmbed } = require('discord.js')
const mongoose = require('mongoose')
const con = require('../../config.json')

mongoose.connect(con.config.dataBaseURl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Data = require('../../models/data')

module.exports = {
    name: "balance",
    description: "Shows the balance of the person",
    aliases: ["bal"],
    usage: 'balance',
    async run(message, args, bot) {

         if(!args[0]) {
             var user = message.author
         } else {
             var user = message.mentions.members.first()
         }

         Data.findOne({
             userID: user.id
         }, (err, data) => {
             if(err) console.log(err)
             if(!data) {
                 const newData = new Data({
                     name: message.author.tag,
                     userID: user.id,
                     lb: "all",
                     money: 0,
                     daily: 0,
                 })
                 newData.save().catch(err => console.log(err))

                 setTimeout(() => {
                     const cre = new MessageEmbed()
                     .setDescription('New Data file Created!')
                     .setColor(con.config.embedColors.blue)
                    message.channel.send(cre)
                }, 5000)

                 const bal = new MessageEmbed()
                 .setDescription(`${message.author.tag}'s Current balance: \`$0\`.`)
                 .setColor(con.config.embedColors.blue)
                 return message.channel.send(bal)
             } else {
                 const bal2 = new MessageEmbed()
                 .setDescription(`${message.author.tag}'s Current balance: \`$${data.money}\`.`)
                 .setColor(con.config.embedColors.blue)
                return message.channel.send(bal2)
             }
         })

    }
}