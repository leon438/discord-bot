const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ",";

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("상태메세지");
});

client.on("message", async (message) => {
  if (message.content === prefix + "핑") {
    message.channel.send("퐁!");
  }
});

client.login(process.env.TOKEN);
