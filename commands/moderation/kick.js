const {MessageEmbed} = require('discord.js');
const { error } = require('log-symbols');
const config = require('../../config.json')

module.exports = {
    name: "kick",
    description: "Kicks the user based on who the person mentioned",
    aliases: ["k"],
    usage: 'kick @mention <reason>',
    async run(message, bot, args) {
    let member = message.mentions.members.first()

    const redColor = config.config.embedColors.red;
    const greenColor = config.config.embedColors.check;

    const crossEmote = config.config.emotes.cross;
    const checkEmote = config.config.emotes.check;
    
    const cID = config.config.clientID;

    const invalid = new MessageEmbed()
        .setDescription(`${crossEmote} Mention Someone Valid To kick!`)
        .setColor(redColor)

    const KickME = new MessageEmbed()
    .setDescription(`${crossEmote} I cant Kick Myself!`)
    .setColor(redColor)

    const permError = new MessageEmbed()
    .setDescription(`${crossEmote} You must have the permission: \`Kick Members to use this command!\``)
    .setColor(redColor);

    const permError2 = new MessageEmbed()
    .setDescription(`${crossEmote} I must have the permission \`Kick Members to kick someone!\``)
    .setColor(redColor);

    const notkickable = new MessageEmbed()
    .setDescription(`${crossEmote} I cannot kick someone that is higher than me!`)
    .setColor(redColor)

    const errorEmbed = new MessageEmbed()
    .setDescription(`${crossEmote} I could not Kick that person because: ${error}`)
    .setColor(redColor)

    if (!message.member.hasPermission("KICK_MEMBERS")){
        return message.channel.send(permError);
    } else if (!message.guild.me.hasPermission('KICK_MEMBERS')) {
        return message.channel.send(permError2)
    } else {
        
        if (!member)
            
            return message.channel.send(invalid);

            //if(member === cID)
            //return message.channel.send(KickME) //has to be fixed

        if(!member.kickable) 
            return message.channel.send(notkickable);

        let reason = args.slice(1).join(' ');
        if (!reason) 
            reason = "No reason provided";
        member.kick(reason)
            .catch(error => message.channel.send(`Sorry ${message.author} I couldn't kick because of : ${error}`));

            const kicked = new MessageEmbed()
            .setDescription(`${checkEmote} Successfully kicked: ${member.user.tag} with reason: ${reason}`)
            .setColor(greenColor)

            message.channel.send(kicked);
            //*${member.user}** has been kicked by **${message.author}** because: ${reason}
    }
}
  
}