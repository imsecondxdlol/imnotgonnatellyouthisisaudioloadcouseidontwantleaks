var Config = {};
//            __     __        __        __  
//  /\  |  | |  \ | /  \ |    /  \  /\  |  \ 
// /~~\ \__/ |__/ | \__/ |___ \__/ /~~\ |__/ 
//   configuration file             v1.03

// Server name
// default: "audioload"
Config.serverName = "[ESP] HypeRP";

// Text background
// Enable or disable text background
// default: true
Config.textBackground = false;

// Server logo image url
// put the image on the images folder then
// set this to its filename (eg "logo.png")
// (leave it false to not use it)
// default: false
Config.serverImage = "first_trai.png";


// Song playlist
// only use .ogg files!
// put songs on the songs folder, then add them here
Config.playlist = [
	{url: "a-ha-Take_On_Me.ogg", name: "a-ha - Take On Me "},
	{url: "Alan_Walker-Alone.ogg", name: "Alan Walker - Alone "},
	{url: "Axwell_Ingrosso-Sun_Is_Shining.ogg", name: "Axwell Ingrosso - Sun Is Shining "},
	{url: "Capital_Cities_-_Safe_and_Sound_lyrics_.ogg", name: "Capital Cities - Safe and Sound "},
	{url: "Coldplay-Hymn_For_The_Weekend_Seeb_remix_.ogg", name: "Coldplay - Hymn For The Weekend (Seeb remix) "},
	{url: "Daft_Punk-Get_Lucky.ogg", name: "Daft Punk - Get Lucky "},
	{url: "Evanescence_-_Bring_Me_To_Life_Video_.ogg", name: "Evanescence - Bring Me To Life "},
	{url: "Fall_Out_Boy_-_Centuries.ogg", name: "Fall Out Boy - Centuries "},
	{url: "I_Will_Survive.ogg", name: "Gloria Gaynor - I Will Survive "},
	{url: "IanJ_amp_Michael_Edward_-_Battle_Scars_Remix_.ogg", name: "IanJ and Michael Edward - Battle Scars Remix "},
	{url: "Imagine_Dragons-Warriors.ogg", name: "Imagine Dragons - Warriors "},
	{url: "Lemaitre-Closer.ogg", name: "Lemaitre - Closer "},
	{url: "Lenka-Blue_Skies.ogg", name: "Lenka - Blue Skies "},
	{url: "Lisa_Mitchell-Neopolitan_Dreams.ogg", name: "Lisa Mitchell - Neopolitan Dreams "},
	{url: "M83-Midnight_City.ogg", name: "M83 - Midnight City "},
	{url: "Martin_Garrix-In_The_Name_Of_Love.ogg", name: "Martin Garrix - In The Name Of Love "},
	{url: "The_Eagles_Hotel_California_Lyrics.ogg", name: "The Eagles - Hotel California "},
];

// Songs volume
// from 0 to 1
// 0 = 0%
// 1 = 100%
// (you can use values higher than 1 for 100%+ volume)
// default: 0.5
Config.songVolume = 0.5;

// Random song order
// default: true
Config.songShuffle = true;

// Background type
//
// Available types:
// "bars"
// "bars2"
// "dualbars"
// "quadbars"
// "squares"
// "circle"
//
// default: "bars"
Config.background = "circle";

// Background opacity
// sets the opacity of the audio visualization
// from 0 to 1
// 0.0 = 0%, fully transparent
// 1.0 = 100%, fully opaque
// default: 1.0
Config.backgroundOpacity = 1.0;

// Background image url
// put the image on the images folder then
// set this to its filename (eg "background.jpg")
// (set it false to not use it)
// default: "blackbackground.jpg"
Config.backgroundImage = "blackbackground.jpg";

// Background rendering fps
// This can cause a large impact performance-wise
// recommended value: 30
// maximum value: 60
// default: 30
Config.backgroundFps = 30;

// Font family
// (do not use spaces in font's filename)
// default: "UpheavalPro.ttf"
Config.fontType = "UpheavalPro.ttf";

// Font color
// Use hexadecimal color values
// default: "#FFFFFF"
Config.fontColor = "#FFFFFF";

// Colors used for background/layout purposes
// Use hexadecimal color values
// Primary color
// default: "#00FF9B"

Config.primaryColor = "#00FF9B";
// Secondary color
// default: "#21001E"
Config.secondaryColor = "#21001E";
// Background color
// default: "#101010"
Config.backgroundColor = "#101010";

// Loading screen messages
Config.messages = [
	"Bienvenido a HypeRP",
	"Respeta las reglas y diviertete!",
	"Tenemos un equipo de administración excelente",
	"Visita nuestro foro!",
	"Relajate mientras descargas los addons y escucha la musica",
];

// Messages delay (in milliseconds)
// delay per number of characters in message
// default: 200
Config.messagesDelay = 200;