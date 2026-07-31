function createRoom(){

const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

let code = "";

for(let i = 0; i < 5; i++){

code += chars[Math.floor(Math.random()*chars.length)];

}


document.getElementById("roomArea").innerHTML = `

<h2>✅ Room Tsawbat</h2>

<p>Code dyal room:</p>

<div class="room-code">
${code}
</div>

<p>Sift had code l s7abek 🔥</p>

`;

}



function showJoin(){

document.getElementById("roomArea").innerHTML = `

<h2>🔑 Dkhol Room</h2>

<input id="codeInput" placeholder="Dkhel Code">

<br><br>

<button onclick="joinRoom()">
Dkhol
</button>

`;

}



function joinRoom(){

let code = document.getElementById("codeInput").value;


if(code){

document.getElementById("roomArea").innerHTML = `

<h2>✅ Dkhlt l Room</h2>

<div class="room-code">
${code.toUpperCase()}
</div>

`;

}

}
