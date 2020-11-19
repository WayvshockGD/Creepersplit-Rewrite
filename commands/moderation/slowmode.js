const { MessageEmbed } = require("discord.js")
const con = require('../../config.json')

module.exports = {
    name: "slowmode",
    description: "Makes the channel go brrrrrrrrrrrrrrrrrr",
    aliases: ["slow"], 
    usage: 'slowmode [number]',
    async run(message, args, bot) {

const amount = parseInt(args[0])
        if(message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.reply('You must have Manage Channels perm to change the slowmode')
        }
        if(isNaN(amount)) return message.reply(`You have to set the number! ex: \`${con.config.prefix}slowmode 3h\``)
        if(args[0] === amount + "s") {
        message.channel.setRateLimitPerUser(amount)
        const amountsec = new MessageEmbed()
        .setDescription(`${con.config.emotes.check} slowmode set to ${amount} second(s)!`)
        .setColor(con.config.embedColors.green)
        if(amount > 1) {
        message.channel.send(amountsec)
        return
        }
        else {message.channel.send(amountsec)
        return }
    } if(args[0] === amount + "min") {
        message.channel.setRateLimitPerUser(amount * 60)
        const amountmin = new MessageEmbed()
        .setDescription(`${con.config.emotes.check} slowmode set to ${amount} minutes(s)!`)
        .setColor(con.config.embedColors.green)
        if(amount > 1) {
        message.channel.send(amountmin)
        return
        } else { 
            message.channel.send(amountmin)  
    
    return }
    } if(args[0] === amount + "h") {
        if (amount > (6 || "6")) {
          return message.channel.send(`Slowmode cannot be higher than 6 hours`)
        }
        message.channel.setRateLimitPerUser(amount * 60 * 60)
        const amounthour = new MessageEmbed()
        .setDescription(`${con.config.emotes.check} slowmode set to ${amount} hours(s)!`)
        .setColor(con.config.embedColors.green)
        if(amount > 1) {
        message.channel.send(amounthour)
        return
        } else {
            message.channel.send(amounthour)
        return}
    } else {

        const only = new MessageEmbed()
        .setDescription("You can only set seconds(s), minutes(min) and hours(h)")
        message.channel.send(only)


    }

    }
}