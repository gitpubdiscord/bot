module.exports = (client) => {
	console.log(`\n             GitPub\n`);
	console.log(
		`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`
	);
	console.log(`Logged in as ${client.user.tag} [ID: ${client.user.id}]\n`);

	client.user.setStatus("available");
	client.user.setPresence({
		game: {
			name: "code.",
			type: "WATCHING",
		},
	});
};
