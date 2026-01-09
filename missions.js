const RANGOS = [
    { min: 0,  max: 10, titulo: "Efebo", icono: "🛡️" },
    { min: 11, max: 21, titulo: "Hoplita", icono: "⚔️" },
    { min: 22, max: 32, titulo: "Centurión", icono: "🦅" },
    { min: 33, max: 33, titulo: "Filósofo", icono: "👑" }
];

const MISIONES_DB = [
    // FASE 1
    { id: 1, fase: 1, titulo: "Cama Militar", desc: "Haz tu cama perfectamente al despertar." },
    { id: 2, fase: 1, titulo: "Ducha Fría", desc: "Al menos 30 segundos de agua fría." },
    { id: 3, fase: 1, titulo: "Ayuno Móvil", desc: "No toques el móvil por 30 minutos." },
    { id: 4, fase: 1, titulo: "Lectura de Oro", desc: "Lee 10 páginas de filosofía." },
    { id: 5, fase: 1, titulo: "Cero Azúcar", desc: "24 horas sin azúcares añadidos." },
    { id: 6, fase: 1, titulo: "Gratitud", desc: "Escribe 3 cosas por las que agradeces." },
    { id: 7, fase: 1, titulo: "Caminata", desc: "20 min de caminata sin distracciones." },
    { id: 8, fase: 1, titulo: "Mente Limpia", desc: "5 min de meditación en silencio." },
    { id: 9, fase: 1, titulo: "Orden", desc: "Limpia tu espacio de trabajo." },
    { id: 10, fase: 1, titulo: "Planificación", desc: "Escribe tus 3 tareas clave de mañana." },
    { id: 11, fase: 1, titulo: "Incomodidad", desc: "Haz algo que te dé pereza hacer." },
    // FASE 2
    { id: 12, fase: 2, titulo: "Memento Mori", desc: "Reflexiona sobre la brevedad de la vida." },
    { id: 13, fase: 2, titulo: "Silencio", desc: "Pasa 1 hora sin hablar." },
    { id: 14, fase: 2, titulo: "Cuerpo de Acero", desc: "Entrenamiento intenso de 30 min." },
    { id: 15, fase: 2, titulo: "Ayuno Dopamina", desc: "Sin redes sociales por 4 horas." },
    { id: 16, fase: 2, titulo: "Control", desc: "No te quejes de nada durante el día." },
    { id: 17, fase: 2, titulo: "Lectura II", desc: "Lee sobre un gran estoico." },
    { id: 18, fase: 2, titulo: "Finanzas", desc: "Recorta un gasto innecesario." },
    { id: 19, fase: 2, titulo: "Obstáculo", desc: "Convierte un problema en oportunidad." },
    { id: 20, fase: 2, titulo: "Ayuda", desc: "Haz un favor sin esperar nada." },
    { id: 21, fase: 2, titulo: "Postura", desc: "Mantén la espalda recta todo el día." },
    { id: 22, fase: 2, titulo: "Verdad", desc: "Sé totalmente honesto hoy." },
    // FASE 3
    { id: 23, fase: 3, titulo: "Amor Fati", desc: "Acepta un evento negativo con alegría." },
    { id: 24, fase: 3, titulo: "Desapego", desc: "Regala algo que ya no necesites." },
    { id: 25, fase: 3, titulo: "Examen Nocturno", desc: "Examen de conciencia antes de dormir." },
    { id: 26, fase: 3, titulo: "Dieta Natural", desc: "Solo come alimentos naturales hoy." },
    { id: 27, fase: 3, titulo: "Enfoque Profundo", desc: "90 min de trabajo concentrado." },
    { id: 28, fase: 3, titulo: "Sin Opinión", desc: "No juzgues a los demás hoy." },
    { id: 29, fase: 3, titulo: "Templanza", desc: "Evita cualquier exceso hoy." },
    { id: 30, fase: 3, titulo: "Escritura", desc: "Escribe una carta a tu yo futuro." },
    { id: 31, fase: 3, titulo: "Coraje", desc: "Enfrenta un miedo postergado." },
    { id: 32, fase: 3, titulo: "Justicia", desc: "Haz algo justo por alguien." },
    { id: 33, fase: 3, titulo: "Sabiduría", desc: "Enseña un principio a alguien." }
];

function renderMissions() {
    const completed = JSON.parse(localStorage.getItem('completedMissions')) || [];
    [1, 2, 3].forEach(fase => {
        const grid = document.getElementById(`grid-fase-${fase}`);
        if (!grid) return;
        grid.innerHTML = MISIONES_DB.filter(m => m.fase === fase).map(m => `
            <div class="mission-card ${completed.includes(m.id) ? 'completed' : ''}" onclick="toggleMission(${m.id})">
                <div class="mission-check">${completed.includes(m.id) ? '✅' : '⬜'}</div>
                <h4>${m.titulo}</h4>
                <p style="font-size: 0.7rem; color: #888;">${m.desc}</p>
            </div>
        `).join('');
    });
    updateRankUI();
}

function toggleMission(id) {
    let completed = JSON.parse(localStorage.getItem('completedMissions')) || [];
    const audio = document.getElementById('paper-audio');
    if (completed.includes(id)) {
        completed = completed.filter(mId => mId !== id);
    } else {
        completed.push(id);
        if(audio) { audio.currentTime = 0; audio.play(); }
    }
    localStorage.setItem('completedMissions', JSON.stringify(completed));
    renderMissions();
}

function updateRankUI() {
    const completed = JSON.parse(localStorage.getItem('completedMissions')) || [];
    const count = completed.length;
    let rango = RANGOS[0];
    if (count >= 11 && count < 22) rango = RANGOS[1];
    else if (count >= 22 && count < 33) rango = RANGOS[2];
    else if (count >= 33) rango = RANGOS[3];

    document.getElementById('mission-count').innerText = count;
    document.getElementById('rank-title').innerText = rango.titulo;
    document.getElementById('rank-icon-big').innerText = rango.icono;
    document.getElementById('rank-label').innerText = rango.titulo;
    
    const progress = document.getElementById('rank-progress');
    if(progress) progress.style.width = (count / 33 * 100) + "%";
}