const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`
╭––『 اوامر المطور 』
1- برايفت
2- للجميع
3- اصنع-جروب
4- ايقاف-البوت
5- اضافه-مميز
6- ازاله-مميز
7- اضافه-مطور
8- ازاله-مطور
9- اضافه-ريك
10- ازاله-ريك
11- اضافه-استيكر
12- ازاله-استيكر
13- اضافه-صوره
14- ازاله-صوره
15- اضافه-فيديو
16- ازاله-فيديو
17- قايمه-المميزين
18- قايمه-ريكات
19- قايمه-فيديو
20- قايمه-صوره
21- اخرجج
22- بلوك
23- فك-بلوك
24- قايمه-بلوكات
╰–––––––––––––––༓

╭––『 اوامر تحميلات 』
1- تيكتوك
2- تيكتوك-صوت
3- يوتيوب3
4- يوتيوب4
5- بحث
╰–––––––––––––––༓

╭––『 اوامر جروب 』
1- لينك-جروب
2- امسح
3- صوره-جروب
4- اسم-جروب
5- وصف-جروب
6- ضيف
7- طرد
8- مشرف
9- نزلو
10- منشن-خفي
11- منشن
12- اقفل-جروب-بعد
13- جروب
14- رستر-لينك
15- لينكات-جروب
╰–––––––––––––––༓

╭––『 Other Menu 』
┆❏.ping 🅕
┆❏.menu 🅕
┆❏.listpem 🅕
┆❏.liststicker 🅕
┆❏.listimage 🅕
┆❏.listvideo 🅕
┆❏.listvn 🅕
┆❏.listbadword 🅕
┆❏.listpc 🅕
┆❏.listgc 🅕
┆❏.owner 🅕
┆❏.rentbot 🅟
┆❏.listrentbot 🅟
┆❏.donate 🅕
┆❏.friend 🅕
┆❏.obfuscate 🅕
┆❏.styletext 🅕
┆❏.fliptext 🅕
┆❏.tts 🅕
┆❏.say 🅕
┆❏.togif 🅕
┆❏.toqr 🅕
┆❏.bass 🅕
┆❏.blown 🅕
┆❏.deep 🅕
┆❏.earrape 🅕
┆❏.fast 🅕
┆❏.fat 🅕
┆❏.nightcore 🅕
┆❏.reverse 🅕
┆❏.robot 🅕
┆❏.slow 🅕
┆❏.smooth 🅕
┆❏.squirrel 🅕
┆❏.tinyurl 🅕
┆❏.tinyurl 🅕
┆❏.tourl 🅕
┆❏.tovn 🅕
┆❏.toaudio 🅕
┆❏.tomp3 🅕
┆❏.tomp4🅕
┆❏.toimg 🅕
┆❏.toonce 🅕
┆❏.sticker 🅕
┆❏.take 🅕
┆❏.emoji 🅕
┆❏.volume 🅕
┆❏.ebinary 🅕
┆❏.dbinary 🅕
┆❏.ssweb 🅕
┆❏.quoted 🅕
┆❏.runtime 🅕
┆❏.sound1 - sound161 🅕
╰–––––––––––––––༓

╭––『 Fun Menu 』
┆❏.define 🅕
┆❏.truth 🅕
┆❏.dare 🅕
┆❏.couple 🅕
┆❏.soulmate 🅕
┆❏.stupidcheck 🅕
┆❏.handsomecheck 🅕
┆❏.uncleancheck 🅕
┆❏.hotcheck 🅕
┆❏.smartcheck 🅕
┆❏.greatcheck 🅕
┆❏.evilcheck 🅕
┆❏.dogcheck 🅕
┆❏.coolcheck 🅕
┆❏.waifucheck 🅕
┆❏.awesomecheck 🅕
┆❏.gaycheck 🅕
┆❏.cutecheck 🅕
┆❏.lesbiancheck 🅕
┆❏.hornycheck 🅕
┆❏.prettycheck 🅕
┆❏.lovelycheck 🅕
┆❏.uglycheck 🅕
┆❏.hot 🅕
┆❏.sexy 🅕
┆❏.kind 🅕
┆❏.idiot 🅕
┆❏.handsome 🅕
┆❏.beautiful 🅕
┆❏.cute 🅕
┆❏.pretty 🅕
┆❏.lesbian 🅕
┆❏.noob 🅕
┆❏.bastard 🅕
┆❏.foolish 🅕
┆❏.nerd 🅕
┆❏.asshole 🅕
┆❏.gay 🅕
┆❏.smart 🅕
┆❏.stubble 🅕
┆❏.doggo 🅕
┆❏.horny 🅕
┆❏.cunt 🅕
┆❏.wibu 🅕
┆❏.noobra 🅕
┆❏.nibba 🅕
┆❏.nibbi 🅕
┆❏.comrade 🅕
┆❏.mumu 🅕
┆❏.rascal 🅕
┆❏.scumbag 🅕 
┆❏.nuts 🅕
┆❏.fagot 🅕
┆❏.scoundrel 🅕
┆❏.ditch 🅕
┆❏.dope 🅕
┆❏.gucci 🅕
┆❏.lit 🅕
┆❏.dumbass 🅕
┆❏.crackhead 🅕
┆❏.mf 🅕
┆❏.motherfucker 🅕
┆❏.sucker 🅕
┆❏.fuckboy 🅕
┆❏.playboy 🅕
┆❏.fuckgirl 🅕
┆❏.playgirl 🅕
┆❏.quotes 🅕
┆❏.can 🅕
┆❏.is 🅕
┆❏.when 🅕
┆❏.where 🅕
┆❏.what 🅕
┆❏.how 🅕
┆❏.rate 🅕
┆❏.cry 🅟
┆❏.kill 🅟
┆❏.hug 🅟
┆❏.pat 🅟
┆❏.lick 🅟 
┆❏.kiss 🅟
┆❏.bite 🅟
┆❏.yeet 🅟
┆❏.bully 🅟
┆❏.bonk 🅟
┆❏.wink 🅟
┆❏.poke 🅟
┆❏.nom 🅟
┆❏.slap 🅟
┆❏.smile 🅟 
┆❏.wave 🅟
┆❏.awoo 🅟
┆❏.blush 🅟
┆❏.smug 🅟
┆❏.glomp 🅟 
┆❏.happy 🅟
┆❏.dance 🅟
┆❏.cringe 🅟
┆❏.cuddle 🅟
┆❏.highfive 🅟 
┆❏.shinobu 🅟
┆❏.handhold 🅟
┆❏.horny 🅕
┆❏.checkme 🅕
┆❏.confess 🅕
┆❏.leave 🅕
╰–––––––––––––––༓

╭––『 Random Photo 』
┆❏.aesthetic 🅟
┆❏.coffee 🅟
┆❏.wikimedia 🅟
┆❏.wallpaper 🅟
┆❏.art 🅟
┆❏.bts 🅟
┆❏.woof 🅕
┆❏.meow 🅕
┆❏.lizard 🅕
┆❏.cosplay 🅟
┆❏.hacker 🅟
┆❏.cyber 🅟
┆❏.gamewallpaper 🅟
┆❏.islamic 🅟
┆❏.jennie 🅟
┆❏.jiso 🅟
┆❏.satanic 🅟
┆❏.justina 🅟
┆❏.cartoon 🅟
┆❏.pentol 🅟
┆❏.cat 🅕
┆❏.kpop 🅕
┆❏.exo 🅟
┆❏.lisa 🅟
┆❏.space 🅟
┆❏.car 🅟
┆❏.technology 🅟
┆❏.bike 🅟
┆❏.shortquote 🅟
┆❏.antiwork 🅕
┆❏.hacking 🅕
┆❏.boneka 🅕
┆❏.rose 🅕
┆❏.ryujin 🅕
┆❏.ulzzangboy 🅕
┆❏.ulzzanggirl 🅕
┆❏.wallml 🅕
┆❏.wallphone 🅕
┆❏.mountain 🅟
┆❏.goose 🅕
┆❏.profilepic 🅕
┆❏.couplepic 🅕
┆❏.programming 🅟
┆❏.pubg 🅕
┆❏.blackpink 🅕
┆❏.randomboy 🅕  
┆❏.randomgirl 🅕
┆❏.hijab 🅕  
┆❏.chinese 🅕
┆❏.indo 🅕
┆❏.japanese 🅕
┆❏.korean 🅕
┆❏.malay 🅕
┆❏.thai 🅕
┆❏.vietnamese 🅕
╰–––––––––––––––༓

╭––『 Anime 』
┆❏.akira 🅟
┆❏.akiyama 🅟
┆❏.ana 🅟
┆❏.asuna 🅟
┆❏.ayuzawa 🅟
┆❏.boruto 🅟
┆❏.chiho 🅟
┆❏.chitoge 🅟
┆❏.cosplayloli 🅟
┆❏.cosplaysagiri 🅟
┆❏.deidara 🅟
┆❏.doraemon 🅟
┆❏.elaina 🅟
┆❏.emilia 🅟
┆❏.erza 🅟
┆❏.gremory 🅟
┆❏.hestia 🅟
┆❏.hinata 🅟
┆❏.husbu 🅟
┆❏.inori 🅟
┆❏.isuzu 🅟
┆❏.itachi 🅟
┆❏.itori 🅟
┆❏.kaga 🅟
┆❏.kagura 🅟
┆❏.kakasih 🅟
┆❏.kaori 🅟
┆❏.keneki 🅟
┆❏.kotori 🅟
┆❏.kurumi 🅟
┆❏.loli 🅟
┆❏.madara 🅟
┆❏.megumin 🅟
┆❏.mikasa 🅟
┆❏.mikey 🅟
┆❏.miku 🅟
┆❏.minato 🅟
┆❏.naruto 🅟
┆❏.neko 🅟
┆❏.neko2 🅟
┆❏.nekonime 🅟
┆❏.nezuko 🅟
┆❏.onepiece 🅟
┆❏.pokemon 🅟
┆❏.randomnime 🅟
┆❏.randomnime2 🅟
┆❏.rize 🅟
┆❏.sagiri 🅟
┆❏.sakura 🅟
┆❏.sasuke 🅟
┆❏.shina 🅟
┆❏.shinka 🅟
┆❏.shinomiya 🅟
┆❏.shizuka 🅟
┆❏.shota 🅟
┆❏.tejina 🅟
┆❏.toukachan 🅟
┆❏.tsunade 🅟
┆❏.waifu 🅟
┆❏.animewall 🅟
┆❏.yotsuba 🅟
┆❏.yuki 🅟
┆❏.yulibocil 🅟
┆❏.yumeko 🅟
┆❏.8ball 🅕
┆❏.tickle 🅕
┆❏.gecg 🅕
┆❏.feed 🅕
╰–––––––––––––––༓

╭––『 Anime NSFW 』
┆❏.hentai 🅕
┆❏.gifhentai 🅕
┆❏.gifblowjob 🅕
┆❏.hentaivid 🅕
┆❏.hneko 🅕
┆❏.nwaifu 🅕
┆❏.animespank 🅕
┆❏.trap 🅕
┆❏.gasm 🅕
┆❏.ahegao 🅕
┆❏.ass 🅕
┆❏.bdsm 🅕
┆❏.blowjob 🅕
┆❏.cuckold 🅕
┆❏.cum 🅕
┆❏.milf 🅕
┆❏.eba 🅕
┆❏.ero 🅕
┆❏.femdom 🅕
┆❏.foot 🅕
┆❏.gangbang 🅕
┆❏.glasses 🅕
┆❏.jahy 🅕
┆❏.masturbation 🅕
┆❏.manga 🅕
┆❏.neko-hentai 🅕
┆❏.neko-hentai2 🅕
┆❏.nsfwloli 🅕
┆❏.orgy 🅕
┆❏.panties 🅕 
┆❏.pussy 🅕
┆❏.tentacles 🅕
┆❏.thights 🅕
┆❏.yuri 🅕
┆❏.zettai 🅕
╰–––––––––––––––༓

╭––『 Textpro Maker 』
┆❏.candy 🅟 
┆❏.christmas 🅟 
┆❏.3dchristmas 🅟 
┆❏.sparklechristmas 🅟
┆❏.deepsea 🅟 
┆❏.scifi 🅟 
┆❏.rainbow 🅟 
┆❏.waterpipe 🅟 
┆❏.spooky 🅟 
┆❏.pencil 🅟 
┆❏.circuit 🅟 
┆❏.discovery 🅟 
┆❏.metalic 🅟 
┆❏.fiction 🅟 
┆❏.demon 🅟 
┆❏.transformer 🅟 
┆❏.berry 🅟 
┆❏.thunder 🅟 
┆❏.magma 🅟 
┆❏.3dstone 🅟 
┆❏.neonlight 🅟 
┆❏.glitch 🅟 
┆❏.harrypotter 🅟 
┆❏.brokenglass 🅟 
┆❏.papercut 🅟 
┆❏.watercolor 🅟 
┆❏.multicolor 🅟 
┆❏.neondevil 🅟 
┆❏.underwater 🅟 
┆❏.graffitibike 🅟
┆❏.snow 🅟 
┆❏.cloud 🅟 
┆❏.honey 🅟 
┆❏.ice 🅟 
┆❏.fruitjuice 🅟 
┆❏.biscuit 🅟 
┆❏.wood 🅟 
┆❏.chocolate 🅟 
┆❏.strawberry 🅟 
┆❏.matrix 🅟 
┆❏.blood 🅟 
┆❏.dropwater 🅟 
┆❏.toxic 🅟 
┆❏.lava 🅟 
┆❏.rock 🅟 
┆❏.bloodglas 🅟 
┆❏.hallowen 🅟 
┆❏.darkgold 🅟 
┆❏.joker 🅟 
┆❏.wicker 🅟
┆❏.firework 🅟 
┆❏.skeleton 🅟 
┆❏.blackpink 🅟 
┆❏.sand 🅟 
┆❏.glue 🅟 
┆❏.1917 🅟 
┆❏.leaves 🅟
╰–––––––––––––––༓

╭––『 PhotoOxy Maker 』
┆❏.shadow 🅟 
┆❏.write 🅟 
┆❏.romantic 🅟 
┆❏.burnpaper 🅟
┆❏.smoke 🅟 
┆❏.narutobanner 🅟 
┆❏.love 🅟 
┆❏.undergrass 🅟
┆❏.doublelove 🅟 
┆❏.coffecup 🅟
┆❏.underwaterocean 🅟
┆❏.smokyneon 🅟
┆❏.starstext 🅟
┆❏.rainboweffect 🅟
┆❏.balloontext 🅟
┆❏.metalliceffect 🅟
┆❏.embroiderytext 🅟
┆❏.flamingtext 🅟
┆❏.stonetext 🅟
┆❏.writeart 🅟
┆❏.summertext 🅟
┆❏.wolfmetaltext 🅟
┆❏.nature3dtext 🅟
┆❏.rosestext 🅟
┆❏.naturetypography 🅟
┆❏.quotesunder 🅟
┆❏.shinetext 🅟
╰–––––––––––––––༓

╭––『 Ephoto360 Maker 』
┆❏.glitchtext 🅟
┆❏.writetext 🅟
┆❏.advancedglow 🅟
┆❏.typographytext 🅟
┆❏.pixelglitch 🅟
┆❏.neonglitch 🅟
┆❏.flagtext 🅟
┆❏.flag3dtext 🅟
┆❏.deletingtext 🅟
┆❏.blackpinkstyle 🅟
┆❏.glowingtext 🅟
┆❏.underwatertext 🅟
┆❏.logomaker 🅟
┆❏.cartoonstyle 🅟
┆❏.papercutstyle 🅟
┆❏.watercolortext 🅟
┆❏.effectclouds 🅟
┆❏.blackpinklogo 🅟
┆❏.gradienttext 🅟
┆❏.summerbeach 🅟
┆❏.luxurygold 🅟
┆❏.multicoloredneon 🅟
┆❏.sandsummer 🅟
┆❏.galaxywallpaper 🅟
┆❏.1917style 🅟
┆❏.makingneon 🅟
┆❏.royaltext 🅟
┆❏.freecreate 🅟
┆❏.galaxystyle 🅟
┆❏.lighteffects 🅟
╰–––––––––––––––༓
`}

global.animemenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Anime 』
┆❏.akira 🅟
┆❏.akiyama 🅟
┆❏.ana 🅟
┆❏.asuna 🅟
┆❏.ayuzawa 🅟
┆❏.boruto 🅟
┆❏.chiho 🅟
┆❏.chitoge 🅟
┆❏.cosplayloli 🅟
┆❏.cosplaysagiri 🅟
┆❏.deidara 🅟
┆❏.doraemon 🅟
┆❏.elaina 🅟
┆❏.emilia 🅟
┆❏.erza 🅟
┆❏.gremory 🅟
┆❏.hestia 🅟
┆❏.hinata 🅟
┆❏.husbu 🅟
┆❏.inori 🅟
┆❏.isuzu 🅟
┆❏.itachi 🅟
┆❏.itori 🅟
┆❏.kaga 🅟
┆❏.kagura 🅟
┆❏.kakasih 🅟
┆❏.kaori 🅟
┆❏.keneki 🅟
┆❏.kotori 🅟
┆❏.kurumi 🅟
┆❏.loli 🅟
┆❏.madara 🅟
┆❏.megumin 🅟
┆❏.mikasa 🅟
┆❏.mikey 🅟
┆❏.miku 🅟
┆❏.minato 🅟
┆❏.naruto 🅟
┆❏.neko 🅟
┆❏.neko2 🅟
┆❏.nekonime 🅟
┆❏.nezuko 🅟
┆❏.onepiece 🅟
┆❏.pokemon 🅟
┆❏.randomnime 🅟
┆❏.randomnime2 🅟
┆❏.rize 🅟
┆❏.sagiri 🅟
┆❏.sakura 🅟
┆❏.sasuke 🅟
┆❏.shina 🅟
┆❏.shinka 🅟
┆❏.shinomiya 🅟
┆❏.shizuka 🅟
┆❏.shota 🅟
┆❏.tejina 🅟
┆❏.toukachan 🅟
┆❏.tsunade 🅟
┆❏.waifu 🅟
┆❏.animewall 🅟
┆❏.yotsuba 🅟
┆❏.yuki 🅟
┆❏.yulibocil 🅟
┆❏.yumeko 🅟
┆❏.8ball 🅕
┆❏.tickle 🅕
┆❏.gecg 🅕
┆❏.feed 🅕
╰–––––––––––––––༓
`}

global.ownermenu = (prefix) => {
return `╭––『 اوامر المطور 』
1- برايفت
2- للجميع
3- اصنع-جروب
4- ايقاف-البوت
5- اضافه-مميز
6- ازاله-مميز
7- اضافه-مطور
8- ازاله-مطور
9- اضافه-ريك
10- ازاله-ريك
11- اضافه-استيكر
12- ازاله-استيكر
13- اضافه-صوره
14- ازاله-صوره
15- اضافه-فيديو
16- ازاله-فيديو
17- قايمه-المميزين
18- قايمه-ريكات
19- قايمه-فيديو
20- قايمه-صوره
21- اخرجج
22- بلوك
23- فك-بلوك
24- قايمه-بلوكات
╰–––––––––––––––༓
`}

global.othermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Other Menu 』
┆❏.ping 🅕
┆❏.menu 🅕
┆❏.listpem 🅕
┆❏.liststicker 🅕
┆❏.listimage 🅕
┆❏.listvideo 🅕
┆❏.listvn 🅕
┆❏.listbadword 🅕
┆❏.listpc 🅕
┆❏.listgc 🅕
┆❏.owner 🅕
┆❏.rentbot 🅟
┆❏.listrentbot 🅟
┆❏.donate 🅕
┆❏.friend 🅕
┆❏.obfuscate 🅕
┆❏.styletext 🅕
┆❏.fliptext 🅕
┆❏.tts 🅕
┆❏.say 🅕
┆❏.togif 🅕
┆❏.toqr 🅕
┆❏.bass 🅕
┆❏.blown 🅕
┆❏.deep 🅕
┆❏.earrape 🅕
┆❏.fast 🅕
┆❏.fat 🅕
┆❏.nightcore 🅕
┆❏.reverse 🅕
┆❏.robot 🅕
┆❏.slow 🅕
┆❏.smooth 🅕
┆❏.squirrel 🅕
┆❏.tinyurl 🅕
┆❏.tinyurl 🅕
┆❏.tourl 🅕
┆❏.tovn 🅕
┆❏.toaudio 🅕
┆❏.tomp3 🅕
┆❏.tomp4🅕
┆❏.toimg 🅕
┆❏.toonce 🅕
┆❏.sticker 🅕
┆❏.take 🅕
┆❏.emoji 🅕
┆❏.volume 🅕
┆❏.ebinary 🅕
┆❏.dbinary 🅕
┆❏.ssweb 🅕
┆❏.quoted 🅕
┆❏.runtime 🅕
┆❏.sound1 - sound161 🅕
╰–––––––––––––––༓
`}

global.downloadmenu = (prefix) => {
return `
╭––『 اوامر تحميلات 』
1- تيكتوك
2- تيكتوك-صوت
3- يوتيوب3
4- يوتيوب4
5- بحث
6- جوجل
╰–––––––––––––––༓
`}

global.groupmenu = (prefix) => {
return `╭––『 اوامر جروب 』
1- لينك-جروب
2- امسح
3- صوره-جروب
4- اسم-جروب
5- وصف-جروب
6- ضيف
7- طرد
8- مشرف
9- نزلو
10- منشن-خفي
11- منشن
12- اقفل-جروب-بعد
13- جروب
14- رستر-لينك
15- لينكات-جروب
╰–––––––––––––––༓
`}

global.funmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Fun Menu 』
┆❏.define 🅕
┆❏.truth 🅕
┆❏.dare 🅕
┆❏.couple 🅕
┆❏.soulmate 🅕
┆❏.stupidcheck 🅕
┆❏.handsomecheck 🅕
┆❏.uncleancheck 🅕
┆❏.hotcheck 🅕
┆❏.smartcheck 🅕
┆❏.greatcheck 🅕
┆❏.evilcheck 🅕
┆❏.dogcheck 🅕
┆❏.coolcheck 🅕
┆❏.waifucheck 🅕
┆❏.awesomecheck 🅕
┆❏.gaycheck 🅕
┆❏.cutecheck 🅕
┆❏.lesbiancheck 🅕
┆❏.hornycheck 🅕
┆❏.prettycheck 🅕
┆❏.lovelycheck 🅕
┆❏.uglycheck 🅕
┆❏.hot 🅕
┆❏.sexy 🅕
┆❏.kind 🅕
┆❏.idiot 🅕
┆❏.handsome 🅕
┆❏.beautiful 🅕
┆❏.cute 🅕
┆❏.pretty 🅕
┆❏.lesbian 🅕
┆❏.noob 🅕
┆❏.bastard 🅕
┆❏.foolish 🅕
┆❏.nerd 🅕
┆❏.asshole 🅕
┆❏.gay 🅕
┆❏.smart 🅕
┆❏.stubble 🅕
┆❏.doggo 🅕
┆❏.horny 🅕
┆❏.cunt 🅕
┆❏.wibu 🅕
┆❏.noobra 🅕
┆❏.nibba 🅕
┆❏.nibbi 🅕
┆❏.comrade 🅕
┆❏.mumu 🅕
┆❏.rascal 🅕
┆❏.scumbag 🅕 
┆❏.nuts 🅕
┆❏.fagot 🅕
┆❏.scoundrel 🅕
┆❏.ditch 🅕
┆❏.dope 🅕
┆❏.gucci 🅕
┆❏.lit 🅕
┆❏.dumbass 🅕
┆❏.crackhead 🅕
┆❏.mf 🅕
┆❏.motherfucker 🅕
┆❏.sucker 🅕
┆❏.fuckboy 🅕
┆❏.playboy 🅕
┆❏.fuckgirl 🅕
┆❏.playgirl 🅕
┆❏.quotes 🅕
┆❏.can 🅕
┆❏.is 🅕
┆❏.when 🅕
┆❏.where 🅕
┆❏.what 🅕
┆❏.how 🅕
┆❏.rate 🅕
┆❏.cry 🅟
┆❏.kill 🅟
┆❏.hug 🅟
┆❏.pat 🅟
┆❏.lick 🅟 
┆❏.kiss 🅟
┆❏.bite 🅟
┆❏.yeet 🅟
┆❏.bully 🅟
┆❏.bonk 🅟
┆❏.wink 🅟
┆❏.poke 🅟
┆❏.nom 🅟
┆❏.slap 🅟
┆❏.smile 🅟 
┆❏.wave 🅟
┆❏.awoo 🅟
┆❏.blush 🅟
┆❏.smug 🅟
┆❏.glomp 🅟 
┆❏.happy 🅟
┆❏.dance 🅟
┆❏.cringe 🅟
┆❏.cuddle 🅟
┆❏.highfive 🅟 
┆❏.shinobu 🅟
┆❏.handhold 🅟
┆❏.horny 🅕
┆❏.checkme 🅕
┆❏.confess 🅕
┆❏.leave 🅕
╰–––––––––––––––༓
`}

global.stalkermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Stalker 』
┆❏.igstalk 🅟
┆❏.ffstalk 🅟
┆❏.mlstalk 🅟
┆❏.npmstalk 🅟
┆❏.ghstalk 🅟
╰–––––––––––––––༓
`}

global.randphotomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Random Photo 』
┆❏.aesthetic 🅟
┆❏.coffee 🅟
┆❏.wikimedia 🅟
┆❏.wallpaper 🅟
┆❏.art 🅟
┆❏.bts 🅟
┆❏.woof 🅕
┆❏.meow 🅕
┆❏.lizard 🅕
┆❏.cosplay 🅟
┆❏.hacker 🅟
┆❏.cyber 🅟
┆❏.gamewallpaper 🅟
┆❏.islamic 🅟
┆❏.jennie 🅟
┆❏.jiso 🅟
┆❏.satanic 🅟
┆❏.justina 🅟
┆❏.cartoon 🅟
┆❏.pentol 🅟
┆❏.cat 🅕
┆❏.kpop 🅕
┆❏.exo 🅟
┆❏.lisa 🅟
┆❏.space 🅟
┆❏.car 🅟
┆❏.technology 🅟
┆❏.bike 🅟
┆❏.shortquote 🅟
┆❏.antiwork 🅕
┆❏.hacking 🅕
┆❏.boneka 🅕
┆❏.rose 🅕
┆❏.ryujin 🅕
┆❏.ulzzangboy 🅕
┆❏.ulzzanggirl 🅕
┆❏.wallml 🅕
┆❏.wallphone 🅕
┆❏.mountain 🅟
┆❏.goose 🅕
┆❏.profilepic 🅕
┆❏.couplepic 🅕
┆❏.programming 🅟
┆❏.pubg 🅕
┆❏.blackpink 🅕
┆❏.randomboy 🅕  
┆❏.randomgirl 🅕
┆❏.hijab 🅕  
┆❏.chinese 🅕
┆❏.indo 🅕
┆❏.japanese 🅕
┆❏.korean 🅕
┆❏.malay 🅕
┆❏.thai 🅕
┆❏.vietnamese 🅕
╰–––––––––––––––༓
`}

global.randvideomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Random Video 』
┆❏.tiktokgirl 🅟
┆❏.tiktoknukthy 🅟
┆❏.tiktokkayes 🅟
┆❏.tiktokpanrika 🅟
┆❏.tiktoknotnot 🅟
┆❏.tiktokghea 🅟
┆❏.tiktoksantuy 🅟
┆❏.tiktokbocil 🅟
╰–––––––––––––––༓
`}

global.textpromenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Textpro Maker 』
┆❏.candy 🅟 
┆❏.christmas 🅟 
┆❏.3dchristmas 🅟 
┆❏.sparklechristmas 🅟
┆❏.deepsea 🅟 
┆❏.scifi 🅟 
┆❏.rainbow 🅟 
┆❏.waterpipe 🅟 
┆❏.spooky 🅟 
┆❏.pencil 🅟 
┆❏.circuit 🅟 
┆❏.discovery 🅟 
┆❏.metalic 🅟 
┆❏.fiction 🅟 
┆❏.demon 🅟 
┆❏.transformer 🅟 
┆❏.berry 🅟 
┆❏.thunder 🅟 
┆❏.magma 🅟 
┆❏.3dstone 🅟 
┆❏.neonlight 🅟 
┆❏.glitch 🅟 
┆❏.harrypotter 🅟 
┆❏.brokenglass 🅟 
┆❏.papercut 🅟 
┆❏.watercolor 🅟 
┆❏.multicolor 🅟 
┆❏.neondevil 🅟 
┆❏.underwater 🅟 
┆❏.graffitibike 🅟
┆❏.snow 🅟 
┆❏.cloud 🅟 
┆❏.honey 🅟 
┆❏.ice 🅟 
┆❏.fruitjuice 🅟 
┆❏.biscuit 🅟 
┆❏.wood 🅟 
┆❏.chocolate 🅟 
┆❏.strawberry 🅟 
┆❏.matrix 🅟 
┆❏.blood 🅟 
┆❏.dropwater 🅟 
┆❏.toxic 🅟 
┆❏.lava 🅟 
┆❏.rock 🅟 
┆❏.bloodglas 🅟 
┆❏.hallowen 🅟 
┆❏.darkgold 🅟 
┆❏.joker 🅟 
┆❏.wicker 🅟
┆❏.firework 🅟 
┆❏.skeleton 🅟 
┆❏.blackpink 🅟 
┆❏.sand 🅟 
┆❏.glue 🅟 
┆❏.1917 🅟 
┆❏.leaves 🅟
╰–––––––––––––––༓
`}

global.photooxymenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 PhotoOxy Maker 』
┆❏.shadow 🅟 
┆❏.write 🅟 
┆❏.romantic 🅟 
┆❏.burnpaper 🅟
┆❏.smoke 🅟 
┆❏.narutobanner 🅟 
┆❏.love 🅟 
┆❏.undergrass 🅟
┆❏.doublelove 🅟 
┆❏.coffecup 🅟
┆❏.underwaterocean 🅟
┆❏.smokyneon 🅟
┆❏.starstext 🅟
┆❏.rainboweffect 🅟
┆❏.balloontext 🅟
┆❏.metalliceffect 🅟
┆❏.embroiderytext 🅟
┆❏.flamingtext 🅟
┆❏.stonetext 🅟
┆❏.writeart 🅟
┆❏.summertext 🅟
┆❏.wolfmetaltext 🅟
┆❏.nature3dtext 🅟
┆❏.rosestext 🅟
┆❏.naturetypography 🅟
┆❏.quotesunder 🅟
┆❏.shinetext 🅟
╰–––––––––––––––༓
`}

global.ephoto360menu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Ephoto360 Maker 』
┆❏.glitchtext 🅟
┆❏.writetext 🅟
┆❏.advancedglow 🅟
┆❏.typographytext 🅟
┆❏.pixelglitch 🅟
┆❏.neonglitch 🅟
┆❏.flagtext 🅟
┆❏.flag3dtext 🅟
┆❏.deletingtext 🅟
┆❏.blackpinkstyle 🅟
┆❏.glowingtext 🅟
┆❏.underwatertext 🅟
┆❏.logomaker 🅟
┆❏.cartoonstyle 🅟
┆❏.papercutstyle 🅟
┆❏.watercolortext 🅟
┆❏.effectclouds 🅟
┆❏.blackpinklogo 🅟
┆❏.gradienttext 🅟
┆❏.summerbeach 🅟
┆❏.luxurygold 🅟
┆❏.multicoloredneon 🅟
┆❏.sandsummer 🅟
┆❏.galaxywallpaper 🅟
┆❏.1917style 🅟
┆❏.makingneon 🅟
┆❏.royaltext 🅟
┆❏.freecreate 🅟
┆❏.galaxystyle 🅟
┆❏.lighteffects 🅟
╰–––––––––––––––༓
`}

global.nsfwmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Anime NSFW 』
┆❏.hentai 🅕
┆❏.gifhentai 🅕
┆❏.gifblowjob 🅕
┆❏.hentaivid 🅕
┆❏.hneko 🅕
┆❏.nwaifu 🅕
┆❏.animespank 🅕
┆❏.trap 🅕
┆❏.gasm 🅕
┆❏.ahegao 🅕
┆❏.ass 🅕
┆❏.bdsm 🅕
┆❏.blowjob 🅕
┆❏.cuckold 🅕
┆❏.cum 🅕
┆❏.milf 🅕
┆❏.eba 🅕
┆❏.ero 🅕
┆❏.femdom 🅕
┆❏.foot 🅕
┆❏.gangbang 🅕
┆❏.glasses 🅕
┆❏.jahy 🅕
┆❏.masturbation 🅕
┆❏.manga 🅕
┆❏.neko-hentai 🅕
┆❏.neko-hentai2 🅕
┆❏.nsfwloli 🅕
┆❏.orgy 🅕
┆❏.panties 🅕 
┆❏.pussy 🅕
┆❏.tentacles 🅕
┆❏.thights 🅕
┆❏.yuri 🅕
┆❏.zettai 🅕
╰–––––––––––––––༓
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})