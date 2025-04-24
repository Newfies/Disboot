// Packages and Requires
const dotenv = require('dotenv').config();
const { Client, Events, GatewayIntentBits, EmbedBuilder, SlashCommandBuilder, PermissionsBitField, Permissions, Embed, Activity, ActivityType, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });
const { exec } = require('child_process');
const pm2 = require("pm2");
const chalk = require('chalk');

// Process.env Variables
const TOKEN = process.env.TOKEN

// Variables


// Custom Functions
// Timestamp System
function getTimestamp() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Logging System
function log(LOG, CODE) {
    if (CODE == 1) { console.log("[ " + chalk.white('LOG') + " @ " + getTimestamp() + "] | " + LOG); } // For Regular Logging
    if (CODE == 2) { console.log("[ " + chalk.yellow('WARNING') + " @ " + getTimestamp() + "] | " + LOG); } // For Warning Logging
    if (CODE == 3) { console.log("[ " + chalk.red('ERROR') + " @ " + getTimestamp() + "] | " + LOG); } // For Error Logging
    if (CODE == 4) { console.log("[ " + chalk.blue('SERVER') + " @ " + getTimestamp() + "] | " + LOG); } // For Logging Changes To Discord Server
}

// SlashCommandBuilder
function SCB(name, desc) {
    return new SlashCommandBuilder().setName(name).setDescription(desc);
}


// Client Slash Command Makers
const ping = SCB('ping', 'Simple ping command!');
const run = SCB('run', 'This starts banning the users');

// Client.On's
// Ready
client.on("ready", async () => {
    log(`${client.user.tag} is now running!`, 1);

    // Client Slash Command Creators
    await client.application.commands.create(ping); // Command for /ping
    log(`/ping command registered`, 1);

    await client.application.commands.create(run); // Command for /run
    log(`/run command registered`, 1);

    // Set bot activity status
    client.user.setActivity({
        name: `For Suspicious Accounts`,
        type: ActivityType.Watching,
    });
});

// interactionCreate
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return; // If its not a command it returns

    if (interaction.commandName === 'ping') {
        if (!interaction.replied && !interaction.deferred) {
            await interaction.reply({
                content: 'Pong!',
                ephemeral: true
            });
        }
    }

    if (interaction.commandName === 'run') {
        if (!interaction.replied && !interaction.deferred) {
                const userId = "558822081068793857";
            
                try {
                    await interaction.guild.members.ban(userId);
                    await interaction.reply({
                        content: `User with ID ${userId} has been banned.`,
                        ephemeral: true
                    });
                    log(`User ${userId} was banned by ${interaction.user.tag}`, 1);
                } catch (err) {
                    await interaction.reply({
                        content: `Failed to ban user with ID ${userId}. Error: ${err.message}`,
                        ephemeral: true
                    });
                    log(`Failed to ban user ${userId}: ${err}`, 3);
                }
            }            
    }
})


// Login To Bot
client.login(TOKEN);