const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
    name: "joke",
    description: "gets a random joke",
    aliases: ["j"],
    usage: 'joke',
    async run(message, args, bot) {

        const m = await message.channel.send('Getting your joke...')

        let data = await random.getJoke()

        setTimeout(() => {
            m.edit(data)
        }, 1600);


    }
}