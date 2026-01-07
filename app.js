// --- ESTADO INICIAL ---
let streakDays = parseInt(localStorage.getItem('streakDays')) || 0;
let completedReflections = JSON.parse(localStorage.getItem('completedReflections')) || [];
let focusActive = false; 

const msPerDay = 24 * 60 * 60 * 1000;
const startDate = new Date('2024-01-01').getTime();
const daysPassed = Math.floor((Date.now() - startDate) / msPerDay);
let currentIndex = daysPassed % (typeof reflections !== 'undefined' ? reflections.length : 1);

// --- INICIALIZACIÓN ---
window.onload = () => {
    updateStreakUI();
    renderReflection();
    if (typeof renderMissions === "function") renderMissions(); // ESTO CARGA LAS MISIONES
};

// --- NAVEGACIÓN ---
function showView(viewId) {
    if (focusActive) toggleFocusMode(); 

    document.querySelectorAll('.view').forEach(v => {
        v.style.display = 'none';
        v.classList.remove('active');
    });

    const target = document.getElementById('view-' + viewId);
    if (target) {
        target.style.display = 'block';
        target.classList.add('active');
    }

    if (viewId === 'missions') renderMissions();
    if (viewId === 'history') renderHistory();
}

// --- CONTADOR DE RACHA ---
function updateStreakUI() {
    const streakCountEl = document.getElementById('streak-count');
    if (streakCountEl) streakCountEl.innerText = streakDays;
}

// --- GUARDAR REFLEXIÓN Y SUMAR RACHA ---
function saveReflection() {
    const input = document.getElementById('reflection-input');
    const feedback = document.getElementById('save-feedback');
    
    if (!input.value.trim()) {
        alert("Primero escribe tu reflexión, mentor.");
        return;
    }

    // 1. Guardar el texto en el diario
    localStorage.setItem(`ref_${currentIndex}`, input.value);
    localStorage.setItem(`date_${currentIndex}`, new Date().toLocaleDateString());

    // 2. Si no se había completado hoy, sumar racha
    if (!completedReflections.includes(currentIndex)) {
        completedReflections.push(currentIndex);
        localStorage.setItem('completedReflections', JSON.stringify(completedReflections));
        
        // Sumar racha numéricamente
        streakDays++;
        localStorage.setItem('streakDays', streakDays);
    }

    // 3. ACTUALIZAR INTERFAZ (Vital para que veas el cambio)
    updateStreakUI(); 
    if(feedback) feedback.innerText = "✅ ¡Progreso guardado, Guerrero!";
    
    // Limpiar input opcionalmente después de unos segundos
    setTimeout(() => { if(feedback) feedback.innerText = ""; }, 3000);
}

// Asegúrate de que resetData limpie TODO
function resetData() {
    if(confirm("@777thementor, ¿seguro que quieres eliminar todo tu esfuerzo?")) {
        localStorage.clear();
        window.location.reload();
    }
}

// --- MODO ENFOQUE Y OTROS ---
function toggleFocusMode() {
    focusActive = !focusActive;
    const container = document.getElementById('main-container');
    const audio = document.getElementById('focus-audio');
    
    if (focusActive) {
        container.classList.add('focus-on');
        if(audio) audio.play();
    } else {
        container.classList.remove('focus-on');
        if(audio) audio.pause();
    }
}

function handlePanic() {
    const sosSfx = document.getElementById('sos-audio');
    if (sosSfx) sosSfx.play();
    alert("¡Respira! 'No es lo que te sucede, sino cómo reaccionas lo que importa.' - Epicteto");
}

function renderReflection() {
    if (typeof reflections === 'undefined') return;
    const r = reflections[currentIndex];
    document.getElementById('quote-text').innerText = r.quote;
    document.getElementById('quote-author').innerText = r.author;
    document.getElementById('quote-explanation').innerText = r.explanation;
    document.getElementById('quote-question').innerText = r.question;
}

function nextReflection() {
    currentIndex = (currentIndex + 1) % reflections.length;
    renderReflection();
    document.getElementById('reflection-input').value = "";
    document.getElementById('save-feedback').innerText = "";
}

function renderHistory() {
    const container = document.getElementById('history-list');
    if (completedReflections.length === 0) {
        container.innerHTML = "<p>Aún no hay historias en tu diario.</p>";
        return;
    }
    container.innerHTML = completedReflections.map(idx => `
        <div class="history-item" style="background:#1a1a1a; padding:15px; border-radius:8px; margin-bottom:10px; border-left: 4px solid #ffd700;">
            <small>${localStorage.getItem(`date_${idx}`)}</small>
            <p><i>"${reflections[idx].quote}"</i></p>
            <p><strong>Tu reflexión:</strong> ${localStorage.getItem(`ref_${idx}`)}</p>
        </div>
    `).join('');
}