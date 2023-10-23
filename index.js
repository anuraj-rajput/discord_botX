const { Client, GatewayIntentBits } = require('discord.js');
// const commands = require("./command.js")
// const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]
});
client.on('messageCreate', (message) => {
    console.log(message.content);
    if (message.author.bot) return;
    message.reply(`hello ${message.author}`);
})
client.on('interactionCreate', message => { 
    message.reply("pong")
})

client.login("MTE1NjQ4MDUzODMxNjY1NjcxMQ.GapLzF.9Xy5MQG_TdasIA9WnBwWJExrKvEVOXoI78_V1U")