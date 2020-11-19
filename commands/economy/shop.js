const { MessageEmbed } = require("discord.js")
const c = require('../../config.json')

module.exports = {
    name: "shop",
    description: "shop",
    aliases: ["sh"],
    usage: 'shop',
    async run(message, args, bot) {

        const shopLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

        const ShopEmbed = new MessageEmbed()
        .setTitle(`The Shop`)
        .addField(`\`Crossbow\` :bow_and_arrow:`, `ID: \`1\` \nPrice: $\`500\``,true)
        .addField(`\`Laptop\` :computer:`, `ID: \`2\` \nPrice: $\`650\``,true)
        .addField(`\`Fish Cake\` :fish_cake:`, `ID: \`3\` \nPrice: $\`100\``,true)
        .addField(`\`Fishing Rod\` :fishing_pole_and_fish:`, `ID: \`4\` \nPrice: $\`750\``,true)
        .addField(`\`The Holy Cake\` :cake:`, `ID: \`5\` \nPrice: $\`1000\``,true)
        .addField(`\`Shop Links:\` :shopping_cart:`, `Item Descriptions: [Click](${shopLink})`,true)
        .setColor(c.config.embedColors.blue)
        .setFooter(`Use ${c.config.prefix}buy to buy one of the items`)

       message.channel.send(ShopEmbed)
    }

}