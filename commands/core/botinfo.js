const { MessageEmbed } = require("discord.js");
const con = require('../../config.json')
const dep = require('../../package.json');

module.exports = {
    name: "botinfo",
    description: "Shows Info about the bot",
    aliases: ["bi", "bot"], 
    usage: 'Bot Stats',
    async run(message, args, bot) {

        const info = new MessageEmbed()
        .setTitle('Showing Bot Stats')
        .setDescription(`================== \n Prefix - \`${con.config.prefix}\` \nVersion - \`${dep.version}\` \nGuilds: \`${bot.guilds.cache.size}\` \n==================`)
        .addField('Dependencies', `Discord.js - \`${dep.dependencies["discord.js"]}\` \nsomething-random-on-discord - \`${dep.dependencies["something-random-on-discord"]}\` \nmongoose - \`${dep.dependencies.mongoose}\` \nhex-rgb - \`${dep.dependencies["hex-rgb"]}\` \n==================`)
        .addField('Database Clusters', '\`Atlas\`')
        .setColor(con.config.embedColors.blue)
        message.channel.send(info)

      
    },
  };