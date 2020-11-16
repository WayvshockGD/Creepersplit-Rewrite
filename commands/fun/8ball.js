const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "8ball",
  description: "gives random responses",
  aliases: ["8"],
  usage: '8ball <message>',
  async run(message, args, bot) {

    var responses = [
        "no",
        "yes",
        "maybe",
        "so?",
        "could be",
        "idk",
        "future looks bright",
        "i dont think so",
        "i think so",
        "try again",
        "ok"
    ]

    const ballArgs = args[0]

    if(!ballArgs) {
        return message.reply("Please say Something for me to respond to!")
    }

    message.channel.send(responses[Math.floor(Math.random() * responses.length)])
    }
}