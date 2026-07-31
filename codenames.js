const board = document.querySelector(".board");

document.getElementById("createRoom").onclick = createRoom;
document.getElementById("joinRoom").onclick = joinRoom;

let currentWords = [];


const words = [
"دار","زنقة","حانوت","قهوة","أتاي","خبز","طاجين","كسكس",
"حريرة","مسمن","بغرير","سوق","جامع","مدرسة","جامعة",
"طوموبيل","طاكسي","طوبيس","مطار","بحر","جبل","واد",
"شمس","قمر","نجمة","ليل","نهار","شتا","برد",
"ديسكورد","سيرفر","بوت","شات","كيبورد","ماوس",
"بلايستيشن","بيسي","لعبة","ستريم","يوتوب",
"كورة","هدف","لاعب","مدرب","ملعب","جمهور",
"قط","كلب","حصان","حوت","طير","أسد",
"كتاب","قلم","مكتب","كرسي","سبورة",
"موسيقى","فيلم","تصويرة","كاميرا",
"بيتزا","كسرة","فواكه","تفاح","برتقال"
];


function randomWords(){

let copy=[...words];
let result=[];

while(result.length < 25){

let i=Math.floor(Math.random()*copy.length);

result.push(copy[i]);

copy.splice(i,1);

}

return result;

}



function createRoom(){

let chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
let code="";

for(let i=0;i<5;i++){
code+=chars[Math.floor(Math.random()*chars.length)];
}


board.innerHTML=`

<h2>🎉 الروم تصايبات</h2>

<p>صيفط هاد الكود لصحابك:</p>

<div class="room-code">${code}</div>

<button id="copyBtn">📋 كوبي الكود</button>

<button id="startBtn">🎮 بدا اللعب</button>

`;


copyBtn.onclick=()=>{

navigator.clipboard.writeText(code);

alert("تنسخ الكود ✅");

};



startBtn.onclick=()=>{

currentWords=randomWords();

board.innerHTML=`

<h2>🔥 Code Names</h2>

<div class="words">

${currentWords.map(w=>`

<div class="word">${w}</div>

`).join("")}

</div>

`;

};

}



function joinRoom(){

let code=prompt("دخل كود الروم (5 حروف):");


if(!code || code.length!==5){

alert("دخل كود صحيح");

return;

}


board.innerHTML=`

<h2>✅ دخلتي للروم</h2>

<p>الكود:</p>

<div class="room-code">${code.toUpperCase()}</div>

<p>تسنى مول الروم يبدا اللعب 🎮</p>

`;

}
