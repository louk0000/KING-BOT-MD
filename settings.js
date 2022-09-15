const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['212609493719']
global.premium = ['212609493719']
global.ownernomer = '212609493719'
global.ownername = 'ШHłТΞ HΛϾКΞЯS'
global.botname = '[𝐋𝐎9𝐌𝐀𝐍𝐄 𝛃𝚯𝚪🤘]'
global.footer = '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷'
global.ig = 'https://github.com/KING-BOT-OFFICIAL'
global.sc = 'https://github.com/KING-BOT-OFFICIAL/KING-BOT-MD'
global.myweb = 'https://youtube.com/channel/UCgwWV1Cya4_gUFKYOQYQtHw'
global.packname = '[𝐋𝐎9𝐌𝐀𝐍𝐄 𝛃𝚯𝚪🤘]'
global.author = '𝐋𝐎9𝐌𝐀𝐍𝐄 𝐌𝐀𝐑𝐑𝐀𝐊𝐄𝐂𝐇'
global.sessionName = 'session'
global.region = 'Sri Lanka'
global.reactmoji = '🎭'
global.prefa = ['','!','.','🇱🇰','⚙️','🤘']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'هاد لعيبة اصاط هيࢪ ديال ادمين!',
    botAdmin: 'لبوت خاص هيࢪ بلأدمين اصديقي!',
    owner: 'هاد لعيبة ڪنقدࢪ نديࢪها هير انا هه!',
    group: 'هادي منوعة فالخاص ديࢪها فالڪࢪوب!',
    private: 'Features Used Only For Private Chat!',
    bot: 'هادي مختاصة هيࢪ مول لبوت لي يقدࢪ يديرها',
    wait: '⏳ ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ ᴀ ᴍᴏᴍᴇɴᴛ...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./src/logo.jpeg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
