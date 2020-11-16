const { MessageEmbed } = require("discord.js");
const con = require('../../config.json')

module.exports = {
    name: "uptime",
    description: "give a view on the bots uptime",
    aliases: ["up", "u"],
    usage: 'uptime',
    async run(message, args, bot) {

let days = Math.floor(bot.uptime / 86400000);
      let hours = Math.floor(bot.uptime / 3600000) % 24;
      let minutes = Math.floor(bot.uptime / 60000) % 60;
      let seconds = Math.floor(bot.uptime / 1000) % 60;

      const up = new MessageEmbed()
      .setColor(con.config.embedColors.blue)
      .setTitle('Uptime')
      .setDescription(`${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`)
      message.channel.send(up)

      
    }
}