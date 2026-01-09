const RANGOS = [
    { min: 0,  max: 10, titulo: "Efebo", icono: "🛡️" },
    { min: 11, max: 21, titulo: "Hoplita", icono: "⚔️" },
    { min: 22, max: 32, titulo: "Centurión", icono: "🦅" },
    { min: 33, max: 99, titulo: "Filósofo Rey", icono: "👑" }
];

const MISIONES_DB = [
    // --- FASE 1: EL RECLUTA (Disciplina Física) ---
    { id: 1, fase: 1, puntos: 10, titulo: "Cama Militar", desc: "Haz tu cama perfectamente al despertar. La primera victoria." },
    { id: 2, fase: 1, puntos: 10, titulo: "Ducha Fría", desc: "30 segundos de agua helada. Domina el impulso de huir." },
    { id: 3, fase: 1, puntos: 10, titulo: "Ayuno Digital", desc: "No toques el móvil en la primera hora de la mañana." },
    { id: 4, fase: 1, puntos: 10, titulo: "Hidratación", desc: "Bebe 500ml de agua nada más despertar." },
    { id: 5, fase: 1, puntos: 15, titulo: "Lectura Aúrea", desc: "Lee 10 páginas de algo que nutra tu mente." },
    { id: 6, fase: 1, puntos: 15, titulo: "Diario de Gratitud", desc: "Escribe 3 cosas simples por las que das gracias hoy." },
    { id: 7, fase: 1, puntos: 15, titulo: "Caminata Estoica", desc: "20 minutos caminando sin música ni distracciones." },
    { id: 8, fase: 1, puntos: 20, titulo: "Sin Quejas", desc: "Pasa 24h sin quejarte verbalmente de nada." },
    { id: 9, fase: 1, puntos: 20, titulo: "Cero Azúcar", desc: "Un día entero sin dulces ni bebidas azucaradas." },
    { id: 10, fase: 1, puntos: 20, titulo: "Orden Exterior", desc: "Ordena tu escritorio o habitación. Orden fuera, orden dentro." },
    { id: 11, fase: 1, puntos: 50, titulo: "El Espejo", desc: "Mírate al espejo y pregúntate: ¿Respeto a quien veo?" },

    // --- FASE 2: EL GUERRERO (Fortaleza Mental) ---
    { id: 12, fase: 2, puntos: 30, titulo: "Ayuno 16h", desc: "Solo agua y café negro durante 16 horas." },
    { id: 13, fase: 2, puntos: 30, titulo: "Silencio Total", desc: "1 hora de silencio absoluto (sin hablar ni escuchar)." },
    { id: 14, fase: 2, puntos: 30, titulo: "Entreno Pesado", desc: "Lleva tu cuerpo al fallo muscular en un ejercicio." },
    { id: 15, fase: 2, puntos: 35, titulo: "Dormir en el Suelo", desc: "Una noche sin almohada o en superficie dura (Incomodidad voluntaria)." },
    { id: 16, fase: 2, puntos: 35, titulo: "Verdad Radical", desc: "No digas ni una sola mentira blanca en todo el día." },
    { id: 17, fase: 2, puntos: 35, titulo: "Sin Redes", desc: "24 horas completas desconectado de Instagram/TikTok." },
    { id: 18, fase: 2, puntos: 40, titulo: "Meditación de la Muerte", desc: "Visualiza que hoy es tu último día. (Memento Mori)." },
    { id: 19, fase: 2, puntos: 40, titulo: "Contacto Visual", desc: "Mantén la mirada a todos con los que hables hoy." },
    { id: 20, fase: 2, puntos: 40, titulo: "El No", desc: "Di 'No' a una petición que no quieras hacer. Pon límites." },
    { id: 21, fase: 2, puntos: 45, titulo: "Madrugar", desc: "Levántate a las 5:00 AM y trabaja en tu propósito." },
    { id: 22, fase: 2, puntos: 100, titulo: "Carta al Pasado", desc: "Escribe una carta perdonándote por tus errores pasados." },

    // --- FASE 3: EL SABIO (Espiritualidad y Legado) ---
    { id: 23, fase: 3, puntos: 50, titulo: "Ayudar al Prójimo", desc: "Realiza un acto de servicio anónimo." },
    { id: 24, fase: 3, puntos: 50, titulo: "Vista de Pájaro", desc: "Imagina tus problemas desde el espacio. ¿Son tan grandes?" },
    { id: 25, fase: 3, puntos: 50, titulo: "Amor Fati", desc: "Cuando algo salga mal hoy, di 'Qué bien' y busca la ventaja." },
    { id: 26, fase: 3, puntos: 60, titulo: "Enseñar", desc: "Comparte una lección estoica con un amigo o en redes." },
    { id: 27, fase: 3, puntos: 60, titulo: "Reflexión Nocturna", desc: "Analiza tu día: ¿Qué hice bien? ¿Qué hice mal?" },
    { id: 28, fase: 3, puntos: 60, titulo: "Sin Juicios", desc: "Observa a la gente sin etiquetarla de 'buena' o 'mala'." },
    { id: 29, fase: 3, puntos: 70, titulo: "Premeditatio Malorum", desc: "Imagina el peor escenario posible de tu proyecto y acéptalo." },
    { id: 30, fase: 3, puntos: 70, titulo: "Conexión Natural", desc: "Pasa 1 hora en la naturaleza sin tecnología." },
    { id: 31, fase: 3, puntos: 80, titulo: "Carta al Futuro", desc: "Escribe a tu 'yo' de dentro de 10 años. ¿Qué le prometes?" },
    { id: 32, fase: 3, puntos: 90, titulo: "Soltar el Control", desc: "Identifica qué te preocupa y si no depende de ti, suéltalo." },
    { id: 33, fase: 3, puntos: 200, titulo: "EL JURAMENTO", desc: "Jura fidelidad eterna a tus principios, pase lo que pase." }
];

function getPointsForMission(id) {
    const mision = MISIONES_DB.find(m => m.id === id);
    return mision ? mision.puntos : 10;
}

function renderMissions() {
    const completed = JSON.parse(localStorage.getItem('completedMissions')) || [];
    
    [1, 2, 3].forEach(fase => {
        const grid = document.getElementById(`grid-fase-${fase}`);
        if (!grid) return;
        
        const misionesDeFase = MISIONES_DB.filter(m => m.fase === fase);
        
        grid.innerHTML = misionesDeFase.map(m => `
            <div class="mission-card ${completed.includes(m.id) ? 'completed' : ''}" onclick="toggleMission(${m.id})">
                <div class="mission-check">${completed.includes(m.id) ? '✅' : '⬜'}</div>
                <h4>${m.titulo}</h4>
                <p style="font-size: 0.7rem; color: #aaa;">${m.desc}</p>
                <span style="font-size: 0.65rem; color: var(--gold); font-weight:bold; margin-top:5px; display:block;">+${m.puntos} PH</span>
            </div>
        `).join('');
    });
    updateRankUI();
}

function toggleMission(id) {
    let completed = JSON.parse(localStorage.getItem('completedMissions')) || [];
    const audioCheck = document.getElementById('paper-audio');
    const audioLevel = document.getElementById('levelup-audio');

    if (completed.includes(id)) {
        completed = completed.filter(mId => mId !== id);
    } else {
        completed.push(id);
        if(audioCheck) { audioCheck.currentTime = 0; audioCheck.play(); }
        // Probabilidad de sonido épico al completar tareas difíciles
        const mision = MISIONES_DB.find(m => m.id === id);
        if(mision && mision.puntos >= 50 && audioLevel) { audioLevel.play(); }
    }
    
    localStorage.setItem('completedMissions', JSON.stringify(completed));
    
    // Recalcular Puntos Totales
    let totalPH = completed.reduce((sum, mId) => sum + getPointsForMission(mId), 0);
    localStorage.setItem('totalPH', totalPH);

    renderMissions();
    if(window.updateArenaScore) window.updateArenaScore(totalPH);
}

function updateRankUI() {
    const completed = JSON.parse(localStorage.getItem('completedMissions')) || [];
    const count = completed.length;
    const totalPH = localStorage.getItem('totalPH') || 0;

    let rango = RANGOS[0];
    if (count >= 11 && count < 22) rango = RANGOS[1];
    else if (count >= 22 && count < 33) rango = RANGOS[2];
    else if (count >= 33) rango = RANGOS[3];

    document.getElementById('mission-count').innerText = count;
    document.getElementById('rank-title').innerText = rango.titulo;
    document.getElementById('rank-icon-big').innerText = rango.icono;
    document.getElementById('rank-label').innerText = rango.titulo;
    document.getElementById('honor-points').innerText = totalPH + " PH";
    
    const progress = document.getElementById('rank-progress');
    if(progress) progress.style.width = (count / 33 * 100) + "%";
}