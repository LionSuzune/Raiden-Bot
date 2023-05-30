/**
    * Created By AdrianTzy
    * Mau Recode? Simpen Nama Gw!!!!
    * Hapus Credit Masuk Neraka Paling Bawah
*/
const fs = require('fs')
const chalk = require('chalk')

// Gak Usah Di Ganti
global.apikey = 'APOLOZEA' // https://api.lolhuman.xyz
global.rosekey = 'cba86fac49e37d63f9bd4561' // https://api.itsrose.site

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'Raiden Shogun-MD'
global.namaowner = 'Uzui Michelle Celestia'

//—————「 Setting Owner 」—————//
global.owner = '62887433094409'
global.nomerowner = ["62887433094409"]
global.premium = ['62887433094409']

//—————「 Set Wm 」—————//
global.packname = 'Raiden Shogun'
global.author = 'V1.2'
global.isLink = 'https://chat.whatsapp.com/JkMDB7UqVsaIsKX91QtP9D'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '```DONE DONG >_<```',
    admin: '```Perintah Ini Hanya Bisa Digunakan Oleh Admin Group```',
    botAdmin: '```Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group```',
    owner: '```Perintah Ini Hanya Bisa Digunakan Oleh Owner```',
    group: '```Perintah Ini Hanya Bisa Digunakan Di Group Chat```',
    private: '```Perintah Ini Hanya Bisa Digunakan Di Private Chat```',
    bot: '```Fitur Khusus Pengguna Nomor Bot```',
    wait: '```TUNGGU PROSES```',
    endLimit: '```Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12```',
    error: '```MAAF SEDANG ERROR```',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 10,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/6d78dbc8e389cf01b79cf.jpg'
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
