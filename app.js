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

// SIGUIENTE FRASE CON SONIDO DE PAPEL
function nextReflection() {
    const paperSfx = document.getElementById('paper-audio');
    if (paperSfx) paperSfx.play();

    currentIndex = (currentIndex + 1) % reflections.length;
    document.getElementById('reflection-input').value = "";
    document.getElementById('save-feedback').innerText = "";
    renderReflection();
}

// GUARDAR REFLEXIÓN
function saveReflection() {
    const text = document.getElementById('reflection-input').value.trim();
    if (!text) return alert("Escribe algo antes de guardar.");
    
    const todayStr = new Date().toLocaleDateString();
    localStorage.setItem(`ref_${currentIndex}`, text);
    localStorage.setItem(`date_${currentIndex}`, todayStr);
    
    if (!completedReflections.includes(currentIndex)) {
        completedReflections.push(currentIndex);
        localStorage.setItem('completedReflections', JSON.stringify(completedReflections));
    }
    
    document.getElementById('save-feedback').innerText = "✅ Guardado en el diario.";
    updateStats();
}

// RENDERIZAR DIARIO (HISTORIAL)
function renderHistory() {
    const container = document.getElementById('history-list');
    if (completedReflections.length === 0) {
        container.innerHTML = "<p>Aún no tienes reflexiones guardadas.</p>";
        return;
    }
    
    container.innerHTML = completedReflections.map(idx => {
        const text = localStorage.getItem(`ref_${idx}`);
        const date = localStorage.getItem(`date_${idx}`);
        return `
            <div class="history-item">
                <small>${date}</small>
                <p><strong>Frase:</strong> ${reflections[idx].quote}</p>
                <p><strong>Tu reflexión:</strong> ${text}</p>
            </div>
        `;
    }).join('');
}

// BORRAR TODO EL PROGRESO
function resetData() {
    if (confirm("¿Estás seguro? Se borrarán todas tus reflexiones y tu racha de días.")) {
        localStorage.clear();
        location.reload();
    }
}

// SOS ESTOICO
function handlePanic() {
    const sosAudio = document.getElementById('sos-audio');
    if (sosAudio) { sosAudio.currentTime = 0; sosAudio.play(); }
    const arsenal = [
        { t: "⚔️ ¡A LAS ARMAS!", x: "El dolor es el gimnasio de la voluntad." },
        { t: "🛡️ PERSPECTIVA", x: "¿Esto importará en 5 años? Probablemente no." },
        { t: "🧱 CIUDADELA", x: "Tu mente es el único lugar donde eres invencible." }
    ];
    const golpe = arsenal[Math.floor(Math.random() * arsenal.length)];
    alert(`${golpe.t}\n\n"${golpe.x}"`);
}

// MODO ENFOQUE
function toggleFocusMode() {
    const body = document.body;
    const audio = document.getElementById('focus-audio');
    const btn = document.getElementById('focus-btn');
    focusActive = !focusActive; 

    if (focusActive) {
        body.classList.add('focus-on');
        btn.innerText = "✖ Salir del Enfoque";
        audio.volume = 0;
        audio.play();
        let vol = 0;
        let fadeIn = setInterval(() => {
            if (vol < 0.4) { vol += 0.05; audio.volume = vol; }
            else { clearInterval(fadeIn); }
        }, 200);
    } else {
        body.classList.remove('focus-on');
        btn.innerText = "🧘 Entrar en Modo Enfoque";
        audio.pause();
    }
}

function renderReflection() {
    if (typeof reflections === 'undefined') return;
    const r = reflections[currentIndex];
    document.getElementById('quote-text').innerText = r.quote;
    document.getElementById('quote-author').innerText = r.author;
    document.getElementById('quote-explanation').innerText = r.explanation;
    document.getElementById('quote-question').innerText = r.question;
}

function updateStats() {
    document.getElementById('streak-count').innerText = streakDays;
}

window.onload = () => { updateStats(); renderReflection(); showView('landing'); };