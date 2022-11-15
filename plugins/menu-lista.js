
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
wm = global.wm
vs = global.vs
let { exp, limit, dorracoins, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)

const sections = [{
title: comienzo + ' 🔰 𝐼𝑁𝐹𝑂 𝐷𝑂𝑅𝑅𝐴𝑇-𝐵𝑂𝑇 🔰 ' + fin,
rows: [
{title: "𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐄 𝐌𝐈 𝐂𝐑𝐄𝐀𝐃𝐎𝐑", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚘𝚜 𝚗ú𝚖𝚎𝚛𝚘𝚜 𝚍𝚎 𝚖𝚒 𝚌𝚛𝚎𝚊𝚍𝚘𝚛", rowId: `${usedPrefix}creator`},  
{title: "𝐈𝐍𝐅𝐎𝐁𝐎𝐓", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚒𝚗𝚏𝚘𝚋𝚘𝚝", rowId: `${usedPrefix}infobot`},
{title: "𝐌𝐄𝐍𝐔 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎", description: "𝙼𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚖𝚎𝚗𝚞 𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘", rowId: `${usedPrefix}allmenu`},

]},{
title: comienzo + ' 💲 𝐌𝐄𝐍𝐔 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀 💲' + fin,
rows: [
{title: "🏆 𝐓𝐀𝐁𝐋𝐀 𝐂𝐋𝐀𝐒𝐈𝐅𝐈𝐂𝐀𝐓𝐎𝐑𝐈𝐀", rowId: `${usedPrefix}lb`},
{title: "⛏️ 𝐌𝐈𝐍𝐀𝐑", rowId: `${usedPrefix}minar`},
{title: "👨‍🏭 𝐓𝐑𝐀𝐁𝐀𝐉𝐀𝐑", rowId: `${usedPrefix}work`},
{title: "👜 𝐁𝐀𝐋𝐀𝐍𝐂𝐄", rowId: `${usedPrefix}bal`},
{title: "💰 𝐌𝐄𝐍𝐔 𝐑𝐏𝐆", rowId: `${usedPrefix}rpgmenu`},
{title: "💎 𝐂𝐎𝐌𝐏𝐑𝐀𝐑 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒", rowId: `${usedPrefix}buyall`}
]},{	
title: comienzo + ' 🌟 𝐌𝐄𝐍𝐔𝐒 ' + fin,
rows: [
{title: "📦 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒", rowId: `${usedPrefix}descargasmenu`},
{title: "🎧 𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎𝐒", rowId: `${usedPrefix}audios`},  
{title: "🎮 𝐌𝐄𝐍𝐔 𝐉𝐔𝐄𝐆𝐎𝐒", rowId: `${usedPrefix}juegosdelgrupo`},
 {title: "🔰 𝐌𝐄𝐍𝐔 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒", rowId: `${usedPrefix}stickermenu`},
 {title: "🏛 𝐌𝐄𝐍𝐔 𝐀𝐍𝐈𝐌𝐄", rowId: `${usedPrefix}animemenu`},
 {title: "👑 𝐌𝐄𝐍𝐔 𝐎𝐖𝐍𝐄𝐑", rowId: `${usedPrefix}soloparaelpropietario`},  
{title: "🔞 𝐌𝐄𝐍𝐔 +18", rowId: `${usedPrefix}hornymenu`}
]},{	
title: comienzo + '🗂️ 𝐄𝐍𝐀𝐁𝐋𝐄/𝐃𝐈𝐒𝐀𝐁𝐋𝐄 ' + fin,
rows: [
{title: "🕋 𝐄𝐍𝐀𝐁𝐋𝐄 𝐌𝐄𝐍𝐔 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎", rowId: `${usedPrefix}enable`},  
{title: "✨ 𝐄𝐍𝐀𝐁𝐋𝐄 𝐖𝐄𝐋𝐂𝐎𝐌𝐄", rowId: `${usedPrefix}enable welcome`},
 {title: "✨ 𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 ", rowId: `${usedPrefix}disable welcome`},
{title: "🔗 𝐄𝐍𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊", rowId: `${usedPrefix}enable antilink`},  
 {title: "🔗 𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊", rowId: `${usedPrefix}disable antilink`},
{title: "🧬 𝐄𝐍𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐀𝐑𝐀𝐁𝐄𝐒", rowId: `${usedPrefix}enable antiarabes`},    
{title: "🧬 𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐀𝐑𝐀𝐁𝐄𝐒", rowId: `${usedPrefix}disable antiarabes`},
 {title: "🥵 𝐄𝐍𝐀𝐁𝐋𝐄 𝐌𝐎𝐃𝐎𝐇𝐎𝐑𝐍𝐘", rowId: `${usedPrefix}enable modohorny`},
 {title: "🥵 𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐌𝐎𝐃𝐎𝐇𝐎𝐑𝐍𝐘", rowId: `${usedPrefix}disable modohorny`},
{title: "⛔ 𝐄𝐍𝐀𝐁𝐋𝐄 𝐑𝐄𝐒𝐓𝐑𝐈𝐂𝐓", rowId: `${usedPrefix}enable restrict`},
{title: "⛔ 𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐑𝐄𝐒𝐓𝐑𝐈𝐂𝐓", rowId: `${usedPrefix}disable restrict`},
 {title: "📵 𝐄𝐍𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐋𝐋𝐀𝐌𝐀𝐃𝐀", rowId: `${usedPrefix}enable anticall`},
 {title: "📵 𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐋𝐋𝐀𝐌𝐀𝐃𝐀", rowId: `${usedPrefix}disable anticall`},   
{title: "🎵 𝐄𝐍𝐀𝐁𝐋𝐄 𝐀𝐔𝐃𝐈𝐎𝐒", rowId: `${usedPrefix}enable audios`},
{title: "🎵 𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐀𝐔𝐃𝐈𝐎𝐒", rowId: `${usedPrefix}disable audios`}
]}]





let name = await conn.getName(m.sender)

//let name = conn.getName(m.sender)

const listMessage = {
      
text: `
일곱ㅤhi! ${username}


ㅤㅤ· FECHA: ${week}, ${date}

║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

· TIEMPO ACTIVO: ${uptime}

║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

ㅤㅤ· USUARIOS: ${rtotalreg


//${name} ${ucapan()}

title: null,

buttonText: "𝗦𝗘𝗟𝗘𝗖𝗖𝗜𝗢𝗡𝗘 𝗔𝗤𝗨𝗜", 

sections }

await conn.sendMessage(m.chat, listMessage)

}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')

handler.tags = ['group', 'owner']

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|menulista|\?)$/i

handler.exp = 20


export default handler

function clockString(ms) {

  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')

}

function ucapan() {

  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto

  let res = "Buenas madrugadas"

  if (time >= 4) {

    res = "Buenos Días"

  }

  if (time >= 11) {

    res = "Buenas Tardes"

  }

  if (time >= 15) {

    res = "Buenas tardes"

  }

  if (time >= 17) {

    res = "Buenas noches"

  }

  return res

}

