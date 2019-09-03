const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("617433033167077392")
setInterval(function() {
channel.send(`ana o7ibo batata batata batata batata batata batata`);
}, 30)
})

client.login(process.env.BOT_TOKEN);