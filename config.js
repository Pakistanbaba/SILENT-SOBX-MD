const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "WVpFCJoK#nOaNcUVMcDSqYyBendJPTr43em-liC3Sqdj-buq9D5w",
    CAPTION: process.env.CAPTION || "POWERED ༆ZIDDI 𓃮BADSHAH749𓄂 ༆♔︎.",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "true",
    AUTO_REPLY: process.env.AUTO_REPLY || "true",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://chat.whatsapp.com/JfVU2pqJ7mbENMr2lYGu6f",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M SILENT-SOBX-MD WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "༆ZIDDI 𓃮BADSHAH845𓄂 ༆♔︎.",
    STATUS_REPLY: process.env.STATUS_REPLY || "`➺үσυя sтαтυs sεεη נυsт ησω вү sιℓεηт-sσвx-м∂`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
