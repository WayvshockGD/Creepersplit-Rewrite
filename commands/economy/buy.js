const { MessageEmbed } = require('discord.js')
const ms = require('parse-ms')
const mongoose = require('mongoose')
const con = require('../../config.json')

mongoose.connect(con.config.dataBaseURl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Data = require('../../models/itemData')

module.exports = {
    name: "buy",
    description: "Buy something from the list by doing " + con.config.prefix + "shop",
    aliases: [],
    usage: 'buy [item]',
    async run(message, args, bot) {

        const by = args[0]

        if(!by) {
            return message.reply('You have to Say A \`ID\` or \`Item\` from the list!')
        }

        if(by === '1', 'crossbow') {
            return message.reply('you bought the Crossbow for \`$500\`!')
        }

        if(by === '2', 'laptop') {
            return message.reply('you bought the Laptop for \`650\`!')
        }


    }
}