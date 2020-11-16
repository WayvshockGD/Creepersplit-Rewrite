const {MessageEmbed} = require('discord.js')
const config = require('../../config.json')
const hexRgb = require('hex-rgb');

module.exports = {
    name: "color",
    description: "gets a color based on input",
    aliases: ["c", "hex"],
    usage: 'hex <color>',
    async run(message, args) {

      if (!config.config.owners.includes(message.author.id)) {
        return message.reply(`This command was Disabled due to having errors it will be fixed soon`)
      }

        const noHex = new MessageEmbed()
        .setColor(config.config.embedColors.red)
        .setDescription(`${config.config.emotes.cross} Please Provide a Hex Color! ex: \`#ffff\``)
  
      const hex = args[0]

      const imgError = new MessageEmbed()
      .setColor(config.config.embedColors.red)
      .setDescription(`${config.config.emotes.cross} I cannot convert images into hex colors!`)


      if(message.attachments.size > 0 ) {
          return message.channel.send(imgError)
      }
       
      
      if(!hex) {
          return message.channel.send(noHex)
      }

      const color = hexRgb(`${hex}`, {format: 'array'})
      const colorEmbed = new MessageEmbed()
       .setColor(hex)
       .setDescription(`**Hex**: \`[${hex}]\` \n\n**RGB**: \`[${color}]\``)
        
      message.channel.send(colorEmbed)

      
  
    },
  };