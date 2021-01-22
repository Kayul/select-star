require('dotenv').config();

const eightball = require('8ball')
const Discord = require('discord.js');

const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
    if (msg.endsWith("?")) {
        msg.reply(eightball());
    }
});