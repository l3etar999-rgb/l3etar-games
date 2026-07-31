document.getElementById("createRoom").addEventListener("click", () => {

const code = Math.random().toString(36).substring(2,7).toUpperCase();

document.querySelector(".board").innerHTML = `
<h2>🎉 Room Tsawbat!</h2>

<p>Code dyalk:</p>

<h1 style="font-size:55px;color:#d41445;">${code}</h1>

<p>Sift had code l s7abek.</p>
`;

});

document.getElementById("joinRoom").addEventListener("click", () => {

const code = prompt("Dkhel Code:");

if(!code) return;

document.querySelector(".board").innerHTML = `
<h2>🚪 Rak dkhelti</h2>

<p>Room:</p>

<h1 style="font-size:55px;color:#8e24aa;">
${code.toUpperCase()}
</h1>
`;

});
