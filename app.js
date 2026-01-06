// --- ESTADO INICIAL ---
let streakDays = parseInt(localStorage.getItem('streakDays')) || 0;
let completedReflections = JSON.parse(localStorage.getItem('completedReflections')) || [];
let focusActive = false; 

// Selección de frase del día
const msPerDay = 24 * 60 * 60 * 1000;
const startDate = new Date('2024-01-01').getTime();
const daysPassed = Math.floor((Date.now() - startDate) / msPerDay);
let currentIndex = daysPassed % (typeof reflections !== 'undefined' ? reflections.length : 1);

// --- NAVEGACIÓN ---
function showView(viewId) {
    if (focusActive) toggleFocusMode(); // Apagar lluvia si cambias de pestaña
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    const target = document.getElementById('view-' + viewId);
    if (target) target.style.display = 'block';
    if (viewId === 'history') renderHistory();
}

// --- BOTÓN SIGUIENTE (CON SONIDO DE PAPEL) ---
function nextReflection() {
    const paperSfx = document.getElementById('paper-audio');
    if (paperSfx) {
        paperSfx.currentTime = 0;
        paperSfx.play();
    }
    currentIndex = (currentIndex + 1) % reflections.length;
    document.getElementById('reflection-input').value = "";
    document.getElementById('save-feedback').innerText = "";
    renderReflection();
}

// --- MODO ENFOQUE (LLUVIA PROGRESIVA) ---
function toggleFocusMode() {
    const body = document.body;
    const audio = document.getElementById('focus-audio');
    const btn = document.getElementById('focus-btn');
    focusActive = !focusActive; 

    if (focusActive) {
        body.classList.add('focus-on'); 
        btn.innerText = "✖ Salir del Enfoque";
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
        btn.innerText = "🧘 Entrar en Modo Enfoque";
        if (audio) { audio.pause(); audio.currentTime = 0; }
    }
}

// --- BOTÓN SOS (TROMPETAS) ---
function handlePanic() {
    const sosAudio = document.getElementById('sos-audio');
    if (sosAudio) { sosAudio.currentTime = 0; sosAudio.play(); }

    const arsenal = [
        "¿Esto que te preocupa depende de ti? Si no, déjalo ir.",
        "El dolor es inevitable, el sufrimiento es opcional.",
        "No es lo que te sucede, sino cómo reaccionas lo que importa.",
        "La mejor venganza es no ser como quien te causó el daño."
    ];
    alert("🛡️ CONSEJO DE EMERGENCIA: \n\n" + arsenal[Math.floor(Math.random() * arsenal.length)]);
}

// --- DIARIO Y DATOS ---
function saveReflection() {
    const text = document.getElementById('reflection-input').value.trim();
    if (!text) return alert("Escribe tu reflexión.");
    
    localStorage.setItem(`ref_${currentIndex}`, text);
    localStorage.setItem(`date_${currentIndex}`, new Date().toLocaleDateString());
    
    if (!completedReflections.includes(currentIndex)) {
        completedReflections.push(currentIndex);
        localStorage.setItem('completedReflections', JSON.stringify(completedReflections));
    }
    document.getElementById('save-feedback').innerText = "✅ Guardado en el Diario.";
}

function renderHistory() {
    const container = document.getElementById('history-list');
    if (completedReflections.length === 0) {
        container.innerHTML = "<p>Aún no hay historias en tu diario.</p>";
        return;
    }
    container.innerHTML = completedReflections.map(idx => `
        <div style="background:#1a1a1a; padding:15px; border-radius:8px; margin-bottom:10px; border-left: 4px solid #ffd700;">
            <small style="color:#888">${localStorage.getItem(`date_${idx}`)}</small><br>
            <p><i>"${reflections[idx].quote}"</i></p>
            <p><strong>Tu reflexión:</strong> ${localStorage.getItem(`ref_${idx}`)}</p>
        </div>
    `).join('');
}

function resetData() {
    if(confirm("¿Estás seguro? Perderás todo tu progreso.")) {
        localStorage.clear();
        location.reload();
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

window.onload = () => { renderReflection(); showView('landing'); };