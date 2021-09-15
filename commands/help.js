const Discord = require('discord.js');

const dot = ":diamond_shape_with_a_dot_inside:";

module.exports = {
	name: 'help',
	description: 'The help command',
	execute(message, args) {
        var lolCmd = "1: Rank Info :brain:\n `!lol rank SUMMONER_NAME`\n\n";
        //lolCmd += "2: Champion Mastery :bulb:\n `!lol mastery SUMMONER_NAME`\n\n";
        //lolCmd += "3: Weekly Free Rotation :watch:\n `!lol freerotation`\n\n";

        var apex = "1: Player Stats :bulb:\n`!apex player ORIGIN_USERNAME`\n\n";

		const helpEmbed = new Discord.MessageEmbed();
        helpEmbed.setColor('#0099ff');
        helpEmbed.setTitle('Eine Liste aller vorhandener Befehle');
        helpEmbed.setDescription('Alle vorhandenen Befehle!');
        helpEmbed.addFields(
            {name : dot + ' League of Legends', value: lolCmd + "\n"},
            {name : dot + ' Help Command :hammer_and_wrench:', value : '`!help`'},
        );
        message.channel.send(helpEmbed);
	},
};