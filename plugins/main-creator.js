let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:GHOST BOT;;\nFN:GHOST BOT\nORG:GHOST BOT\nTITLE:\nitem1.TEL;waid=51982004738:51982004738\nitem1.X-ABLabel:GHOST BOT\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:GHOST BOT\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: '@byOsozn⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
