const { MessageEmbed } = require('discord.js');
const config = require('../../config');

module.exports = {
    name: 'unban',
    description: "Unbans a user",
    usage: 'unban [user]',
    async run(message, args, bot) {
        let member = args[0];

        const redColor = config.config.embedColors.red;
        const greenColor = config.config.embedColors.green;

        const crossEmote = config.config.emotes.cross;
        const checkEmote = config.config.emotes.check;

        const nan = new MessageEmbed()
        .setDescription(`${crossEmote} User ID must be a number!`)
        .setColor(redColor);

        const noMember = new MessageEmbed()
        .setDescription(`${crossEmote} Please provide a user ID of whom you would like to unban!`)
        .setColor(redColor);

        const noperm = new MessageEmbed()
        .setDescription(`${crossEmote} You must have the permission \`Ban Members\` to unban members`)
        .setColor(redColor);

        const noperm2 = new MessageEmbed()
        .setDescription(`${crossEmote} I must have the permission \`Ban Members\` to unban a member`)
        .setColor(redColor);

        //const;

        let error;
        const errorEmbed = new MessageEmbed()
        .setDescription(`${crossEmote} Could not unban member: ${error}`)
        .setColor(redColor);

        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(noperm)
        } else if (!message.guild.me.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(noperm2)
        } else {
            if (!member) {
                return message.channel.send(noMember)
            };
    
            if (isNaN(member)) {
                return message.channel.send(nan);
            };

            try {
                await message.guild.members.unban(member)
                message.channel.send(successEmbed);
            } catch (e) {
                error = e;
                message.channel.send(errorEmbed)
            }
        }
    }
}