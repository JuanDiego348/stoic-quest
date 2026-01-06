let streakDays = parseInt(localStorage.getItem('streakDays')) || 0;
let completedReflections = JSON.parse(localStorage.getItem('completedReflections')) || [];
let focusActive = false; 

const msPerDay = 24 * 60 * 60 * 1000;
const startDate = new Date('2024-01-01').getTime();
const daysPassed = Math.floor((Date.now() - startDate) / msPerDay);
let currentIndex = daysPassed % (typeof reflections !== 'undefined' ? reflections.length : 1);

function showView(viewId) {
    if (focusActive) toggleFocusMode();
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    const target = document.getElementById('view-' + viewId);
    if (target) target.style.display = 'block';
    if (viewId === 'history') renderHistory();
}

function renderReflection() {
    if (typeof reflections === 'undefined') return;
    const r = reflections[currentIndex];
    document.getElementById('quote-text').innerText = r.quote;
    document.getElementById('quote-author').innerText = r.author;
    document.getElementById('quote-explanation').innerText = r.explanation;
    document.getElementById('quote-question').innerText = r.question;
    document.getElementById('save-feedback').innerText = "";
}

function nextReflection() {
    const paper = document.getElementById('paper-audio');
    if(paper) paper.play();
    currentIndex = (currentIndex + 1) % reflections.length;
    document.getElementById('reflection-input').value = "";
    renderReflection();
}

function toggleFocusMode() {
    const body = document.body;
    const audio = document.getElementById('focus-audio');
    const btn = document.getElementById('focus-btn');
    focusActive = !focusActive; 

    if (focusActive) {
        body.classList.add('focus-on'); 
        btn.innerText = "✖ Salir";
        if (audio) {
            audio.volume = 0;
            audio.play();
            let vol = 0;
            let fadeIn = setInterval(() => {
                if (vol < 0.4) { vol += 0.05; audio.volume = vol; }
                else { clearInterval(fadeIn); }
            }, 200);
        }
    } else {
        body.classList.remove('focus-on');
        btn.innerText = "🧘 Modo Enfoque";
        if (audio) { audio.pause(); audio.currentTime = 0; }
    }
}

function handlePanic() {
    const sos = document.getElementById('sos-audio');
    if(sos) sos.play();
    const consejos = ["¿Esto depende de ti?", "Respira profundo.", "El obstáculo es el camino."];
    alert("🛡️ " + consejos[Math.floor(Math.random() * consejos.length)]);
}

function saveReflection() {
    const text = document.getElementById('reflection-input').value.trim();
    if (!text) return alert("Escribe algo.");
    localStorage.setItem(`ref_${currentIndex}`, text);
    localStorage.setItem(`date_${currentIndex}`, new Date().toLocaleDateString());
    if (!completedReflections.includes(currentIndex)) {
        completedReflections.push(currentIndex);
        localStorage.setItem('completedReflections', JSON.stringify(completedReflections));
    }
    document.getElementById('save-feedback').innerText = "✅ Guardado.";
}

function renderHistory() {
    const container = document.getElementById('history-list');
    container.innerHTML = completedReflections.map(idx => `
        <div style="border-bottom:1px solid #333; padding:10px;">
            <small>${localStorage.getItem(`date_${idx}`)}</small><br>
            <i>"${reflections[idx].quote}"</i><br>
            <p>${localStorage.getItem(`ref_${idx}`)}</p>
        </div>`).join('');
}

function resetData() {
    if(confirm("¿Borrar todo?")) { localStorage.clear(); location.reload(); }
}

window.onload = () => { renderReflection(); showView('landing'); };