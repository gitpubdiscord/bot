const Discord = require("discord.js");

module.exports = (client, member) => {
	let channel = member.guild.channels.find((c) => c.name === "welcome");
	let role = member.guild.roles.find((r) => r.name === "Member");

	let embed = new Discord.RichEmbed()
		.setColor(client.config.colors.primary)
		.setAuthor("GitPub", member.guild.iconURL())
		.setDescription(`Welcome ${member} to the GitPub discord server!`)
		.setThumbnail(member.user.avatarURL)
		.setTimestamp();

	channel.send(embed);
	member.addRole(role);
};
