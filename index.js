const Discord = require('discord.js');
const BotConfig = require('./config.json');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

bot.on('ready', () => {
    bot.user.setActivity("With TNT", {
        type: "PLAYING"
      });

    setTimeout(() => {
        console.log('Logging into client...');
    }, 1000);
    setTimeout(() => {
        console.log('Loading modules...');
    }, 6000);
    setTimeout(() => {
        console.log('Ready!');
    }, 13000);
})

const fs = require('fs')

const folders = fs.readdirSync('./commands');

for (const category of folders) {
    const folder = fs.readdirSync(`./commands/${category}/`).filter(file => file.endsWith(".js"));
    for(const File of folder) {
        const command = require(`./commands/${category}/${File}`)
        bot.commands.set(command.name, command);
    }
}

const prefix = BotConfig.config.prefix

bot.on('message', m => {
    if (!m.content.startsWith(prefix)) return;
    
    const args = m.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();
    const message = m;

    const command = bot.commands.get(cmd)
        || bot.commands.find(c => c.aliases && c.aliases.includes(cmd));
        
        if (!command) return;
        
        try {
            command.run(message, args, bot)
        } catch (error) {
            console.error(error)
            m.channel.send(`There was an error executing command: \n\n \`\`\`js\n\`${command.name}\`\n\`\`\``)
        }
})

bot.on('message', message => {

	if (message.content === '<@!711493973281079356>') {
		message.channel.send('Hello my prefix is: `' + prefix + "`");
	}

});

setTimeout(() => {
    bot.login(BotConfig.config.token);
}, 13000);