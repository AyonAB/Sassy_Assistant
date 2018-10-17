const dotenv = require("dotenv");
dotenv.config();
process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');
 
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.BOT_API_KEY;

 
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
 
// starting/welcoming text
bot.onText(/\/start/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
 
  const chatId = msg.chat.id;
  //const resp = match[1]; // the captured "whatever"
 
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, "Welcome " + msg.from.first_name + " " + msg.from.last_name + ", I'm the personal assistant of @Fek_U_Bish aka ∆¥∆Ñ D∆$. Now what do you wanna know bout him boi!");
});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
 
  const chatId = msg.chat.id;
  //const resp = match[1]; // the captured "whatever"
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, "Fek this shit!");
});
// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if(msg.text.toString().toLowerCase() == 'madafaka'){
    var reply = "You madafaka bitch!";
    bot.sendMessage(chatId, reply);
  } 
  if(msg.text.toString().toLowerCase().includes('bye')){
    reply = "Good bye dear!";
    bot.sendMessage(chatId, reply);
  }
  //console.log(msg.text.toString().toLowerCase());
});