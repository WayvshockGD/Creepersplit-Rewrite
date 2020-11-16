const { faces } = require('../../text/lennyFaces')

module.exports = {
    name: "lenny",
    description: "Gives a lenny for some reason",
    aliases: ["l"],
    usage: 'lenny',
    async run(message, args, bot) {

        const m = await message.channel.send('Getting your lenny')

        setTimeout(() => {
            m.edit(faces[Math.floor(Math.random() * faces.length)])
        }, 1400);

    }
}