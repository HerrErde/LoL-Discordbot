// Initialize Setups
require("dotenv").config();
const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();
const {prefix} = require('./config.json');
bot.login(process.env.token);

// Command Handler
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log("Bot Online")
});

// Execute Commands
bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).trim().split('/ +/');
    const command = args.shift().toLowerCase();
    const first = command.split(' ')[0];
    if (!bot.commands.has(first)) {
        return;
    }

    try {
        bot.commands.get(first).execute(message, args);
    } catch (error) {
        message.reply("Dieser Befehl kann nicht ausgeführt werden!");
    }
});