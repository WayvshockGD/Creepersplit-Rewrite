const { MessageEmbed } = require("discord.js");
const con = require('../../config.json');

module.exports = {
    name: "poll",
    description: "use the poll command for your own functionality",
    aliases: ["p"],
    usage: 'poll [word] [word]',
    async run(message, args, bot) {

         let poll = args.join(" ");

         if (!poll) {
             return message.channel.send(`Provide arguments for me to say!`)
         }

         const pollEmbed = new MessageEmbed()
         .setDescription(`${poll}`)
         .setAuthor(`New poll by: ${message.author.tag}`)
         .setColor(con.config.embedColors.green)
         .setTimestamp()

         const m = await message.channel.send(pollEmbed); // Await for the message to be sent so you can add the reactions
         m.react('🔼');
         m.react(`🔽`);
    }
}