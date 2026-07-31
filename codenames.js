const board = document.querySelector(".board");

document.getElementById("createRoom").addEventListener("click", createRoom);
document.getElementById("joinRoom").addEventListener("click", joinRoom);

function createRoom() {

    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let code = "";

    for (let i = 0; i < 5; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }

    board.innerHTML = `
        <h2>🎉 Room Tsawbat</h2>

        <p>Sift had code l s7abek:</p>

        <div class="room-code">${code}</div>

        <button id="copyBtn">📋 Copy Code</button>

        <br><br>

        <button id="startBtn">🎮 Bda L3ba</button>
    `;

    document.getElementById("copyBtn").onclick = () => {
        navigator.clipboard.writeText(code);
        alert("Code tcopya!");
    };

    document.getElementById("startBtn").onclick = () => {
        board.innerHTML = `
            <h2>🚧 L3ba mazal katsawb...</h2>

            <p>F lmar7ala jaya ghadi yban Board dyal Code Names.</p>
        `;
    };

}

function joinRoom() {

    const code = prompt("Dkhel Code:");

    if (!code) return;

    board.innerHTML = `
        <h2>✅ Rak Dkhelti</h2>

        <p>Room:</p>

        <div class="room-code">${code.toUpperCase()}</div>

        <p>Tsna Host ybda l3ba.</p>
    `;

}
