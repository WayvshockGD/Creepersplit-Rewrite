module.exports = {
    name: "dice",
    description: "rolls a random number",
    aliases: ["die"],
    usage: 'dice',
    async run(message, args, bot) {

        var numbers = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
        ]

        const m = await message.channel.send('Rolling...')

        setTimeout(() => {
            m.edit(`You Rolled a \`${numbers[Math.floor(Math.random() * numbers.length)]}\`!`)
        }, 1500);

    }
}