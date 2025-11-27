/*
 *  Author: Your Sensei
 * Instagram: https://www.instagram.com/your_sensei2007?igsh=NG5vNnRmYTRzbDk4
 *  Api's site: https://nekos.best
 */
let opts = document.getElementById("opts");
let artist_name = document.getElementById('artist_name');
let source_url = document.getElementById('source_url');
let imgBoard = document.getElementById('imgBoard');
let infoBoard = document.getElementById('infoBoard');
let dataType = "neko";

let options = [
  { value: "neko", text: "Neko" },
  { value: "waifu", text: "Waifu" },
  { value: "husbando", text: "Husbando" },
  { value: "kitsune", text: "Kitsune" },
  { value: "lurk", text: "Lurk" },
  { value: "shoot", text: "Shoot" },
  { value: "sleep", text: "Sleep" },
  { value: "shrug", text: "Shrug" },
  { value: "stare", text: "Stare" },
  { value: "wave", text: "Wave" },
  { value: "poke", text: "Poke" },
  { value: "smile", text: "Smile" },
  { value: "peck", text: "Peck" },
  { value: "wink", text: "Wink" },
  { value: "blush", text: "Blush" },
  { value: "smug", text: "Smug" },
  { value: "tickle", text: "Tickle" },
  { value: "yeet", text: "Yeet" },
  { value: "think", text: "Think" },
  { value: "highfive", text: "Highfive" },
  { value: "feed", text: "Feed" },
  { value: "bite", text: "Bite" },
  { value: "bored", text: "Bored" },
  { value: "nom", text: "Nom" },
  { value: "yawn", text: "Yawn" },
  { value: "facepalm", text: "Facepalm" },
  { value: "cuddle", text: "Cuddle" },
  { value: "kick", text: "Kick" },
  { value: "happy", text: "Happy" },
  { value: "hug", text: "Hug" },
  { value: "baka", text: "Baka" },
  { value: "pat", text: "Pat" },
  { value: "angry", text: "Angry" },
  { value: "run", text: "Run" },
  { value: "nod", text: "Nod" },
  { value: "nope", text: "Nope" },
  { value: "kiss", text: "Kiss" },
  { value: "dance", text: "Dance" },
  { value: "punch", text: "Punch" },
  { value: "handshake", text: "Handshake" },
  { value: "slap", text: "Slap" },
  { value: "cry", text: "Cry" },
  { value: "pout", text: "Pout" },
  { value: "handhold", text: "Handhold" },
  { value: "thumbsup", text: "Thumbsup" },
  { value: "laugh", text: "Laugh" },
];

options.forEach((opt) => {
  const option = document.createElement('option');
  option.value = opt.value;
  option.text = opt.text;
  opts.appendChild(option);
});

async function getData(){
  try {
    let res = await fetch(`https://nekos.best/api/v2/${dataType}`);
    let data = await res.json();
    setTimeout(()=>{
      imgBoard.style.backgroundImage =`url(${data.results[0].url})`;
      artist_name.innerText = data.results[0].artist_name;
      source_url.href = data.results[0].source_url;
      infoBoard.style.display = "flex";
    },1500)
  } catch (err) {
    console.error("Error:", err);
  }
}

function updateSelectedValue(){
  dataType = opts.value;
}

getData(); //Default

/*
 setInterval(() => {
  console.log(dataType)
},1000)
*/

/* 
*  Author: Your Sensei
 * Instagram: https://www.instagram.com/your_sensei2007?igsh=NG5vNnRmYTRzbDk4
 *  Api's site: https://nekos.best
 */
