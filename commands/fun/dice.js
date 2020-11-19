module.exports = {
    name: "dice",
    description: "rolls a random number",
    aliases: ["die"],
    usage: 'dice',
    async run(message, args, bot) {

        const m = await message.channel.send('Rolling...')

        setTimeout(() => {
            m.edit(`You Rolled a \`${Math.floor(Math.random() * 10)}\`!`)
        }, 1500);

    }
}
