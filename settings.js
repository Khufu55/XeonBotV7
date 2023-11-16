const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['201121968769'] //ur owner number
global.ownernomer = "20112196876" //ur owner number2
global.ownername = "KHUFU ALMOZ3G" //ur owner name
global.ytname = "يوتيوب: خوفو ص المزعجين" //ur yt chanel name
global.socialm = "خش كلمني نسيف بعض  م متكبر" //ur github or insta name
global.location = "مصرييي" //ur location

//new
global.botname = "BOT KHUFU ALMOZ3G"
global.ownernumber = '201121968769'
global.ownername = 'KHUFU'
global.ownerNumber = ["201121968769@s.whatsapp.net"]
global.ownerweb = "https://www.youtube.com/@khufualmoz3g974"
global.websitex = "https://www.youtube.com/@khufualmoz3g974"
global.wagc = "https://chat.whatsapp.com/Ivno4IbIyxMKSgyg6f1dKw"
global.themeemoji = '☺️'
global.wm = "201121968769"
global.botscript = 'https://www.youtube.com/@khufualmoz3g974' //script link
global.packname = "201121968769"
global.author = "خوفو ص المزعجين ☺️"
global.creator = "201121968769@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.port = '5000'
global.wlcm = []

//media target
global.thum = 'https://telegra.ph/file/1b9fc7f9043bb46ad3098.jpg' //ur thumb pic
global.log0 = 'https://telegra.ph/file/1b9fc7f9043bb46ad3098.jpg' //ur logo pic
global.err4r = 'https://telegra.ph/file/1b9fc7f9043bb46ad3098.jpg' //ur error pic
global.thumb = 'https://telegra.ph/file/1b9fc7f9043bb46ad3098.jpg' //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'ضن يغالي',
    admin: 'انت مش ادمن يعسل',
    botAdmin: 'لازم اكون ادمن عشان اقدر اعمل الامر',
    premime: 'انت لست عضو مميز',
    owner: 'المطور فقط من يستطيع استخدام هاذا الامر',
    group: 'في جروبات فقط',
    private: 'برايفتت فقط',
    bot: 'الامر ده ل بوت بس',
    wait: 'انتظر......',
    linkm: 'فين لينك',
    endLimit: 'استخدم بما في الكفايه انتظر لجين لما بوت يرستر عشان تستخدمو',
    nsfw: 'مقفوله كلم الادمن عشان يشغلها',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})