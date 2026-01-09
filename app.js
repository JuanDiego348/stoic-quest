let streakDays = parseInt(localStorage.getItem('streakDays')) || 0;
let completedReflections = JSON.parse(localStorage.getItem('completedReflections')) || [];
let currentReflectionIndex = 0;

window.onload = () => {
    updateStreakUI();
    renderReflection();
    if (typeof renderMissions === "function") renderMissions();
    if (typeof updateRankUI === "function") updateRankUI();
};

function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => {
        v.style.display = 'none';
        v.classList.remove('active');
    });
    const target = document.getElementById('view-' + viewId);
    if (target) {
        target.style.display = 'block';
        target.classList.add('active');
    }
    if (viewId === 'history') renderHistory();
}

function handlePanic() {
    const sosSfx = document.getElementById('sos-audio');
    if (sosSfx) { sosSfx.currentTime = 0; sosSfx.play(); }

    const frasesSOS = [
        "¿Esto que te perturba estará presente dentro de 50 años? - Marco Aurelio",
        "No es lo que te sucede, sino cómo lo percibes lo que importa. - Epicteto",
        "Sufres más en tu imaginación que en la realidad. - Séneca",
        "Si no está bajo tu control, que no te importe. - Epicteto",
        "La mejor venganza es no ser como tu enemigo. - Marco Aurelio"
    ];
    alert("🚨 SOS ESTOICO 🚨\n\n" + frasesSOS[Math.floor(Math.random() * frasesSOS.length)]);
}

function renderReflection() {
    const q = reflections[currentReflectionIndex];
    document.getElementById('quote-text').innerText = q.quote;
    document.getElementById('quote-author').innerText = q.author;
    document.getElementById('quote-explanation').innerText = q.explanation;
    document.getElementById('quote-question').innerText = q.question;
}

function nextReflection() {
    currentReflectionIndex = (currentReflectionIndex + 1) % reflections.length;
    renderReflection();
    document.getElementById('reflection-input').value = "";
    document.getElementById('save-feedback').innerText = "";
}

function saveReflection() {
    const input = document.getElementById('reflection-input').value;
    if (input.trim().length < 5) return alert("Escribe algo más profundo.");
    
    if (!completedReflections.includes(currentReflectionIndex)) {
        completedReflections.push(currentReflectionIndex);
        localStorage.setItem('completedReflections', JSON.stringify(completedReflections));
        streakDays++;
        localStorage.setItem('streakDays', streakDays);
        updateStreakUI();
    }
    localStorage.setItem(`ref_${currentReflectionIndex}`, input);
    document.getElementById('save-feedback').innerText = "Reflexión guardada en el Diario.";
}

function updateStreakUI() {
    document.getElementById('streak-count').innerText = streakDays;
}

function renderHistory() {
    const container = document.getElementById('history-list');
    if (completedReflections.length === 0) {
        container.innerHTML = "<p style='text-align:center;'>Aún no hay historias en tu diario.</p>";
        return;
    }
    container.innerHTML = completedReflections.map(idx => `
        <div class="history-item" style="background:#1a1a1a; padding:15px; border-radius:8px; margin-bottom:10px; border-left: 4px solid #ffd700;">
            <p><i>"${reflections[idx].quote}"</i></p>
            <p><strong>Tu reflexión:</strong> ${localStorage.getItem(`ref_${idx}`)}</p>
        </div>
    `).join('');
}

function mockLogin() {
    const name = document.getElementById('reg-name').value;
    if(name.trim() === "") return alert("¡Debes escribir un nombre!");
    document.getElementById('arena-register').style.display = 'none';
    document.getElementById('arena-dashboard').style.display = 'block';
}

function resetData() {
    if(confirm("¿Estás seguro? Perderás todo tu camino estoico.")) {
        localStorage.clear();
        location.reload();
    }
}