const board = document.querySelector(".board");

document.getElementById("createRoom").addEventListener("click", createRoom);
document.getElementById("joinRoom").addEventListener("click", joinRoom);


function createRoom(){

    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let code = "";

    for(let i = 0; i < 5; i++){
        code += chars[Math.floor(Math.random()*chars.length)];
    }


    board.innerHTML = `

    <h2>🎉 Room Tsawbat</h2>

    <p>Sift had code l s7abek:</p>

    <div class="room-code">
        ${code}
    </div>


    <button id="copyBtn">
        📋 Copy Code
    </button>


    <br><br>


    <button id="startBtn">
        🎮 Bda L3ba
    </button>

    `;


    document.getElementById("copyBtn").onclick = ()=>{

        navigator.clipboard.writeText(code);

        alert("Code tcopya ✅");

    };


    document.getElementById("startBtn").onclick = ()=>{

        startGame();

    };

}



function joinRoom(){

    const code = prompt("Dkhel Code:");

    if(!code) return;


    board.innerHTML = `

    <h2>✅ Rak Dkhelti</h2>

    <p>Room:</p>

    <div class="room-code">
        ${code.toUpperCase()}
    </div>

    <p>Tsna host ybda l3ba 🎮</p>

    `;

}




function startGame(){

    let gameWords = getRandomWords(25);


    let html = `

    <h2>🎮 Code Names</h2>

    <div class="game-board">

    `;


    gameWords.forEach(word=>{

        html += `

        <div class="word-card">

            ${word}

        </div>

        `;

    });



    html += `

    </div>

    `;


    board.innerHTML = html;

}
