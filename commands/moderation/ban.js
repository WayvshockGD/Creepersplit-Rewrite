const {MessageEmbed} = require('discord.js');
const config = require('../../config.json')

module.exports = {
    name: "ban",
    description: "haha person get ban hammer",
    aliases: ["b", "hammer"],
    usage: 'ban @mention <reason>',
    async run(message, bot, args) {
    let member = message.mentions.members.first()

    const redColor = config.config.embedColors.red;
    const greenColor = config.config.embedColors.check;

    const crossEmote = config.config.emotes.cross;
    const checkEmote = config.config.emotes.check;
    
    const cID = config.config.clientID;

    const invalid = new MessageEmbed()
        .setDescription(`${crossEmote} Mention Someone Valid To Ban!`)
        .setColor(redColor)

    const banME = new MessageEmbed()
    .setDescription(`${crossEmote} I can't Ban Myself!`)
    .setColor(redColor)

    const permError = new MessageEmbed()
    .setDescription(`${crossEmote} You must have the permission: \`Ban Members to use this command!\``)
    .setColor(redColor)
    
    const permError1 = new MessageEmbed()
    .setDescription(`${crossEmote} I must have the permission \`Ban Members\` to ban someone!`);

    const notbannable = new MessageEmbed()
    .setDescription(`${crossEmote} I cannot ban someone that is higher than me!`)
    .setColor(redColor)

    const errorEmbed = new MessageEmbed()
    .setDescription(`${crossEmote} I could not Ban that person because: ${error}`)
    .setColor(redColor)

    if (!message.member.hasPermission("BAN_MEMBERS")){
        return message.channel.send(permError);
    } else if (!message.guild.me.hasPermission('BAN_MEMBERS')) {
        return message.channel.send(permError2)
    } else {
        
        if (!member)
            
            return message.channel.send(invalid);

            //if(member === cID)
            //return message.channel.send(KickME) //has to be fixed

        if(!member.bannable) 
            return message.channel.send(notbannable);

        let reason = args.join(' ').slice(1);
        if(!reason) 
            reason = "No reason provided";
        member.ban(reason)
            .catch(error => message.channel.send(`Sorry ${message.author} I couldn't ban because of : ${error}`));

            const Banned = new MessageEmbed()
            .setDescription(`${checkEmote} Successfully Banned: \`${member.user.tag}\` with reason: ${reason}`)
            .setColor(greenColor)
 
            message.channel.send(Banned);
            //*${member.user}** has been kicked by **${message.author}** because: ${reason}
    }
}
  
}