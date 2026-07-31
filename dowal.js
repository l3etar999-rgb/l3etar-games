const dowal = [

"🇲🇦 المغرب",
"🇩🇿 الجزائر",
"🇫🇷 فرنسا",
"🇪🇸 إسبانيا",
"🇺🇸 أمريكا",
"🇧🇷 البرازيل",
"🇯🇵 اليابان",
"🇨🇦 كندا",
"🇩🇪 ألمانيا",
"🇮🇹 إيطاليا",
"🇹🇷 تركيا",
"🇬🇧 إنجلترا"

];


const game = document.getElementById("game");


document.getElementById("start").onclick = function(){

let word = dowal[Math.floor(Math.random()*dowal.length)];


game.innerHTML = `

<h2>
الكلمة هي:
</h2>

<div class="room-code">

${word}

</div>

<p>
خلي صحابك يسولوك حتى يعرفوها 😎
</p>

`;

};
