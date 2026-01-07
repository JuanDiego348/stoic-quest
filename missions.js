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
    { id: 4, fase: 1, titulo: "Lectura de Oro", desc: "Lee 10 páginas de Marco Aurelio." },
    { id: 5, fase: 1, titulo: "Cero Azúcar", desc: "24 horas sin azúcares añadidos." },
    { id: 6, fase: 1, titulo: "Gratitud", desc: "Escribe 3 cosas por las que agradeces." },
    { id: 7, fase: 1, titulo: "Caminata", desc: "Camina 15 min en silencio total." },
    { id: 8, fase: 1, titulo: "Visualización", desc: "Imagina un obstáculo y acéptalo." },
    { id: 9, fase: 1, titulo: "Sin Quejas", desc: "Pasa el día sin quejarte de nada." },
    { id: 10, fase: 1, titulo: "Postura", desc: "Mantén la espalda recta todo el día." },
    { id: 11, fase: 1, titulo: "Planificación", desc: "Planea tu día mañana esta noche." },
    // FASE 2
    { id: 12, fase: 2, titulo: "Ayuno 16/8", desc: "Realiza un ayuno intermitente." },
    { id: 13, fase: 2, titulo: "Incomodidad", desc: "Haz algo que te incomode a propósito." },
    { id: 14, fase: 2, titulo: "Entreno Feroz", desc: "Entrena al 100% de tu capacidad." },
    { id: 15, fase: 2, titulo: "Cero Redes", desc: "24 horas fuera de redes sociales." },
    { id: 16, fase: 2, titulo: "Amor Fati", desc: "Acepta un error con una sonrisa." },
    { id: 17, fase: 2, titulo: "Memento Mori", desc: "Recuerda tu mortalidad 5 minutos." },
    { id: 18, fase: 2, titulo: "Silencio", desc: "Habla solo lo indispensable hoy." },
    { id: 19, fase: 2, titulo: "Orden Radical", desc: "Limpia profundamente tu cuarto." },
    { id: 20, fase: 2, titulo: "Rechazo", desc: "Dile 'no' a un placer inmediato." },
    { id: 21, fase: 2, titulo: "Escucha", desc: "Escucha a alguien sin interrumpir." },
    { id: 22, fase: 2, titulo: "Diario", desc: "Escribe una página sobre tus miedos." },
    // FASE 3
    { id: 23, fase: 3, titulo: "Dopamina Cero", desc: "24h sin tecnología ni estímulos." },
    { id: 24, fase: 3, titulo: "Acción Justa", desc: "Ayuda a alguien desinteresadamente." },
    { id: 25, fase: 3, titulo: "Calma Total", desc: "No te alteres ante un insulto." },
    { id: 26, fase: 3, titulo: "Enseñanza", desc: "Comparte sabiduría con alguien." },
    { id: 27, fase: 3, titulo: "Desapego", desc: "Regala algo que valores mucho." },
    { id: 28, fase: 3, titulo: "El Sabio", desc: "Actúa como si fueras un maestro." },
    { id: 29, fase: 3, titulo: "Persistencia", desc: "Termina esa tarea que pospones." },
    { id: 30, fase: 3, titulo: "Vista Cósmica", desc: "Mira tus problemas desde las estrellas." },
    { id: 31, fase: 3, titulo: "Verdad", desc: "No mientas bajo ninguna circunstancia." },
    { id: 32, fase: 3, titulo: "Resiliencia", desc: "Haz 100 flexiones en el día." },
    { id: 33, fase: 3, titulo: "Eunomia", desc: "Vive en armonía con tu propósito." }
];

function renderMissions() {
    const completed = JSON.parse(localStorage.getItem('completedMissions')) || [];
    
    // Limpiar grids
    [1, 2, 3].forEach(f => {
        const grid = document.getElementById(`grid-fase-${f}`);
        if(grid) grid.innerHTML = "";
    });

    MISIONES_DB.forEach(m => {
        const isDone = completed.includes(m.id);
        const card = `
            <div class="mission-card ${isDone ? 'done' : ''}" style="background:#1a1a1a; padding:15px; border-radius:8px; margin:10px; border-left: 4px solid ${isDone ? '#ffd700' : '#333'};">
                <h4>${m.titulo}</h4>
                <p style="font-size:0.85rem; color:#aaa;">${m.desc}</p>
                <button onclick="toggleMission(${m.id})" class="m-btn" style="width:100%; margin-top:10px; cursor:pointer; background:${isDone ? '#ffd700' : '#333'}; color:${isDone ? '#000' : '#fff'}; border:none; padding:5px; border-radius:4px;">
                    ${isDone ? '✅ Hecho' : 'Marcar'}
                </button>
            </div>
        `;
        const target = document.getElementById(`grid-fase-${m.fase}`);
        if(target) target.innerHTML += card;
    });
    updateRankUI();
}

function toggleMission(id) {
    let completed = JSON.parse(localStorage.getItem('completedMissions')) || [];
    if (completed.includes(id)) {
        completed = completed.filter(mId => mId !== id);
    } else {
        completed.push(id);
        const audio = document.getElementById('paper-audio');
        if(audio) audio.play();
    }
    localStorage.setItem('completedMissions', JSON.stringify(completed));
    renderMissions();
}

function updateRankUI() {
    const completed = JSON.parse(localStorage.getItem('completedMissions')) || [];
    const count = completed.length;
    
    let rango;
    let progresoFase = 0;

    // Lógica corregida de rangos por fase
    if (count < 11) {
        rango = RANGOS[0]; // Efebo
        progresoFase = count;
    } else if (count >= 11 && count < 22) {
        rango = RANGOS[1]; // Hoplita
        progresoFase = count - 11;
    } else if (count >= 22 && count < 33) {
        rango = RANGOS[2]; // Centurión
        progresoFase = count - 22;
    } else {
        rango = RANGOS[3]; // Filósofo
        progresoFase = 11;
    }

    const porcentaje = (progresoFase / 11) * 100;

    // Actualización segura de elementos HTML
    const countEl = document.getElementById('mission-count');
    const titleEl = document.getElementById('rank-title');
    const iconEl = document.getElementById('rank-icon-big');
    const progressEl = document.getElementById('rank-progress');
    const sidebarRank = document.getElementById('rank-label');

    if(countEl) countEl.innerText = count;
    if(titleEl) titleEl.innerText = rango.titulo;
    if(iconEl) iconEl.innerText = rango.icono;
    if(sidebarRank) sidebarRank.innerText = rango.titulo;
    if(progressEl) progressEl.style.width = porcentaje + "%";
}