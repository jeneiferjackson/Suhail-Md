const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349138916225";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_50_09_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDcwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDg5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxODUsXG4gICAgICAgIDM1LFxuICAgICAgICA4NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMixcbiAgICAgICAgMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzLFxuICAgICAgICA2NCxcbiAgICAgICAgNDksXG4gICAgICAgIDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODUsXG4gICAgICAgIDg5LFxuICAgICAgICAyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY5LFxuICAgICAgICA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTczLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDksXG4gICAgICAgIDMyLFxuICAgICAgICA4OSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDk5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM5LFxuICAgICAgICA1OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc0LFxuICAgICAgICA4OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMCxcbiAgICAgICAgODksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDc4LFxuICAgICAgICA4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQUtUL1JTQTN0OVRrYjhSb0lsa2dhRFVheG9lZ3VqNjI5bTFNL25SR2dkTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMUlGM0YyRGdSMHVrME9tX2Z3bFNRZ1wiLFxuICBcInBob25lSWRcIjogXCIxOTU3YTFiNi0yNzdlLTQ4NTMtYmRjOS0wZGJjMmE5NDc4ZTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUxLFxuICAgICAgMTksXG4gICAgICAxNzgsXG4gICAgICAxMTcsXG4gICAgICAxMjAsXG4gICAgICAxOTcsXG4gICAgICAxNjQsXG4gICAgICAxMzEsXG4gICAgICAxODEsXG4gICAgICAxNzUsXG4gICAgICAyMDcsXG4gICAgICAyNDYsXG4gICAgICAyNDYsXG4gICAgICAxODcsXG4gICAgICA0NSxcbiAgICAgIDE3MixcbiAgICAgIDEwOSxcbiAgICAgIDE2MCxcbiAgICAgIDExOSxcbiAgICAgIDkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNixcbiAgICAgIDE3MSxcbiAgICAgIDI0NSxcbiAgICAgIDI1NCxcbiAgICAgIDIzMCxcbiAgICAgIDIwMCxcbiAgICAgIDIxNyxcbiAgICAgIDExOCxcbiAgICAgIDExOCxcbiAgICAgIDEsXG4gICAgICAxMjIsXG4gICAgICAyMjksXG4gICAgICAzNCxcbiAgICAgIDE1NCxcbiAgICAgIDExOCxcbiAgICAgIDEzLFxuICAgICAgMTQ1LFxuICAgICAgNDEsXG4gICAgICAyMDgsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQbkcxSWNERUk2aXJNWUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVlZGhvZG41TzVPdXhsZUZnUXFMazVXVFpvbjdDeStoelZmQWszOUhTRHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaG5Tam8zdzR2WW1ucjZVOEhRZ0lxOE1pTDlqT1czajFWdjZhVU1Ga1YvRzRmcE16bE1LeDl2eFM4K3JsblJzRjVlYzJVSWFVNGhVVWVjWFpsaEdERGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL3ZHYWNGZWVKZHFnYUNTMmFzYkQzejlmdGVBVjlyV0czdWd6cnUwUUlvd3JiQmZWaCtoV3NsT1QxUnJQeDlCUlA4bTNxdzJ4TUdEQzZ0RCttZUh1aUE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM4OTE2MjI1OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDcxOTI3ODI2NDc0ODQ6MjVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM4OTE2MjI1OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1ODEzODY0M1xufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SMILE-MD",
  ownername:process.env.OWNER_NAME|| "It'x Smile",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
