const display = document.getElementById('display');

const bucinQuotes = [
    "Jangan lupa tersenyum, karena senyummu adalah kebahagiaan orang lain. ❤️",
    "Kamu itu seperti matahari, selalu bisa menerangi hariku. ☀️",
    "Tetap semangat! Cinta sejati selalu datang pada waktunya. 💕",
    "Kamu hebat, dan aku bangga melihat perjuanganmu. 🥰",
    "Hidup ini indah, apalagi kalau ada kamu di sisiku. 🌹",
    "Kamu itu alasan aku percaya pada keajaiban. ✨",
    "Terus maju, jangan biarkan apapun menghentikanmu! 🚀",
    "Setiap detik bersamamu adalah hadiah tak ternilai. 🎁",
    "Cintaku padamu tak akan pudar, seperti bintang yang selalu ada di langit malam. 🌟",
    "Kamu adalah alasan aku percaya bahwa tak ada hal yang mustahil. 💫",
    "Bersamamu, setiap detik terasa seperti keajaiban. 💖",
    "Aku mencintaimu lebih dari kata-kata bisa ungkapkan. 📝",
    "Setiap perjalanan hidup kita adalah cerita indah yang akan selalu aku kenang. 📖",
    "Kamu itu seperti angin, tak terlihat tapi selalu ada. 🌬️",
    "Apapun yang terjadi, aku selalu ada untukmu. 💪",
    "Kamu adalah pelengkap hidupku, tak ada yang bisa menggantikanmu. 💕",
    "Aku tak butuh alasan untuk mencintaimu, karena kamu adalah segalanya bagiku. 💞",
    "Cinta kita adalah kekuatan yang tak bisa dihentikan. 💥",
    "Aku berjanji akan selalu setia, selalu ada untukmu, apapun yang terjadi. 💍",
    "Kamu adalah bintang terindah dalam hidupku. 🌟",
    "Aku tidak akan pernah berhenti mencintaimu, tidak peduli apapun yang terjadi. 🥺"
];

function appendValue(value) {
    display.textContent += value;
}

function clearDisplay() {
    display.textContent = '';
}

function deleteLast() {
    display.textContent = display.textContent.slice(0, -1);
}

function displayMotivation() {
    const randomQuote = bucinQuotes[Math.floor(Math.random() * bucinQuotes.length)];
    display.textContent = randomQuote;
}