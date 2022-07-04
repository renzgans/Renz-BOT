/**
 - Created By Renz Official
*/

const fs = require("fs")
const chalk = require("chalk")

// Other
global.thum = fs.readFileSync("./plugins/media/image/loc.jepg")
global.log0 = fs.readFileSync("./plugins/media/image/loc.jepg")
global.err4r = fs.readFileSync("./plugins/media/image/loc.jepg")
global.locimg = fs.readFileSync("./plugins/media/image/loc.jepg")
global.owner = ['6281250365581', '6281250365581']
global.numberOwner = "6281250365581"
global.group = "https://chat.whatsapp.com/HSSbStv1qCQ8zwapaTqGp3"
global.rkyt = []
global.banUser = ['6281366679021@s.whatsapp.net']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.wlcm = ['120363043965529911@g.us','120363023112413670@g.us','19054091487-1424650263@g.us','120363022988111568@g.us']
global.gcrevoke = ['19054091487-1424650263@g.us']
global.packname = "IG:@RenzStoreDL"
global.author = "IG:@RenzStoreDL"
global.sessionName = "session"
global.footer = "© Created By IG:@RenzStoreDL"
global.linkgrupss = "https://chat.whatsapp.com/HSSbStv1qCQ8zwapaTqGp3"
global.antitags = true
global.txtSewabot = "Perma : 1 DL\nPerma : 1 DL\nPerma : 1 DL\nPerma : 1 DL\nPerma : 1 DL"
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Success',
    admin: 'Fitur Khusus Admin Group, Makanya Jadi Admin Tolol!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu Tolol Banget!',
    owner: 'Fitur Khusus Renz',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Sabar Ya Anjing...',
    linkm: 'Linknya Mana Goblok?',
    ban: 'Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner'
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
