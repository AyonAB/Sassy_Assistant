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
  bot.sendMessage(chatId, "Welcome " + msg.from.first_name + " " + msg.from.last_name + ", I'm the personal assistant of @Fek_U_Bish aka ∆¥∆Ñ D∆$. Now what do you wanna know bout him! Lemme make it easy for yea, choose any from below!", 
    {
    "reply_markup": {
        "keyboard": [["Who the hell is he?", "His Likes/Hobbies?"], ["Need his FB Profile?"], ["You like him, send him Love!"]]
        }
    });
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
  if(msg.text.toString().toLowerCase() == 'madafaka' || msg.text.toString().toLowerCase().includes('bitch')){
    var reply = "You madafaka bitch!";
    bot.sendMessage(chatId, reply);
  } 
  if(msg.text.toString().toLowerCase() == 'who the hell is he?' || msg.text.toString().toLowerCase().includes('who is he') || msg.text.toString().toLowerCase().includes('about him')){
    var reply = "He is as you may know Ayon Das, 22 years old from Kolkata, WB, India! Engineer in Information Technology, loves coding but n00b af! Currently working as a Junior Network Engineer but he hates the job due to lack of coding!";
    bot.sendMessage(chatId, reply);
  }
  if(msg.text.toString().toLowerCase().includes('likes/hobbies') || msg.text.toString().toLowerCase().includes('hobbies')){
    var reply = "He loves technologies. \nLoves football(A big fan of Liverpool FC) \nRock/Metal music lover, hates pop and modern autotuned-computer processed music! \nHe also plays guitar though not pro, kek! \nAnd he do drugs and addiction from cig-weed to rum-whiskey!(Allthough very controlled)";
    bot.sendMessage(chatId, reply);
  }
  if(msg.text.toString().toLowerCase() == 'need his fb profile?' || msg.text.toString().toLowerCase().includes('fb profile') || msg.text.toString().toLowerCase().includes('fb')){
    var reply = "You think I this crazy to give you that! I may be sexy but not stupid! LOL";
    bot.sendMessage(chatId, reply);
  } 
  if(msg.text.toString().toLowerCase() == 'you like him, send him love!' || msg.text.toString().toLowerCase().includes('i like him') || msg.text.toString().toLowerCase().includes('i love him')){
    var reply = "Thank you very much! Your love convoyed to him!";
    console.log(msg.from.first_name + "\n" + msg.from.username);
    bot.sendMessage(chatId, reply);
  }  
  if(msg.text.toString().toLowerCase().includes('bye')){
    reply = "Good bye dear, kek!";
    bot.sendMessage(chatId, reply);
  }
  if(msg.text.toString().toLowerCase().includes('fuck') || msg.text.toString().toLowerCase().includes('fek')){
    reply = "Excuse me! How dare you! I have Bf btw!";
    bot.sendMessage(chatId, reply);
  }
  //console.log(msg.text.toString().toLowerCase());
});