module.exports = {
    name: "ping",
    description: "Pong!",
    aliases: ["pong"],
    usage: 'ping',
    async run(message, bot) {

        const ping = Date.now() - message.createdTimestamp + ' ms';

      const m = await message.channel.send("Pinging...")
      setTimeout(() => {
        m.edit(`**:ping_pong: pong!** \nDiscord latency: \`${Math.round(message.client.ws.ping)}\` \nBot Latency: \`${Date.now() - message.createdTimestamp}\``)
    }, 1600);
    },
  };