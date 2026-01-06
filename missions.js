/**
 * ⚔️ ACADEMIA DE LA VIRTUD - LÓGICA DE MISIONES
 * "La dificultad es lo que despierta al genio." - Ovidio
 */

// --- 1. SISTEMA DE RANGOS (JERARQUÍA GRIEGA) ---
const RANGOS = [
    { min: 0,  max: 5,  titulo: "Efebo (Aprendiz)",      icono: "🛡️", msg: "El viaje de mil millas comienza con un paso." },
    { min: 6,  max: 15, titulo: "Hoplita (Guerrero)",    icono: "⚔️", msg: "Tu voluntad se está forjando en el fuego de la acción." },
    { min: 16, max: 30, titulo: "Polemarca (Estratega)", icono: "🦅", msg: "Dominas tus impulsos; lideras tu destino." },
    { min: 31, max: 999, titulo: "Filósofo de la Stoa",   icono: "👑", msg: "Has alcanzado la cima. Eres invencible ante la fortuna." }
];

// --- 2. EL ARSENAL DE RETOS (33 PRUEBAS) ---
const MISIONES_DB = [
    // --- FASE 1: EL DESPERTAR (Conciencia y Orden) ---
    { id: 1, fase: "Fase I", titulo: "El Lecho del Soldado", desc: "Haz tu cama con perfección militar apenas te levantes." },
    { id: 2, fase: "Fase I", titulo: "Hidratación Consciente", desc: "Bebe un vaso de agua antes de mirar tu celular por la mañana." },
    { id: 3, fase: "Fase I", titulo: "La Mirada al Cielo", desc: "Sal y mira el cielo o el horizonte durante 5 minutos sin hacer nada más." },
    { id: 4, fase: "Fase I", titulo: "Postura de Rey", desc: "Corrige tu postura cada vez que lo recuerdes durante el día." },
    { id: 5, fase: "Fase I", titulo: "Diario de Gratitud", desc: "Escribe 3 cosas simples (café, techo, salud) por las que das gracias." },
    { id: 6, fase: "Fase I", titulo: "Lectura Antigua", desc: "Lee al menos 5 páginas de un libro (preferiblemente filosofía o historia)." },
    { id: 7, fase: "Fase I", titulo: "Caminata sin Rumbo", desc: "Camina 15 minutos sin audífonos, sin música, solo observando." },
    { id: 8, fase: "Fase I", titulo: "Orden del Entorno", desc: "Ordena tu escritorio o habitación antes de empezar a trabajar/estudiar." },

    // --- FASE 2: LA FRAGUA (Resistencia e Incomodidad) ---
    { id: 9,  fase: "Fase II", titulo: "El Bautismo de Hielo", desc: "Termina tu ducha con 30 segundos de agua totalmente fría." },
    { id: 10, fase: "Fase II", titulo: "Ayuno de Quejas", desc: "Pasa 12 horas sin articular una sola queja en voz alta." },
    { id: 11, fase: "Fase II", titulo: "Ayuno Digital", desc: "Deja el celular en otra habitación durante 2 horas continuas." },
    { id: 12, fase: "Fase II", titulo: "La Cena Pobre", desc: "Come algo extremadamente simple (arroz, pan) y reflexiona sobre el hambre." },
    { id: 13, fase: "Fase II", titulo: "Escucha Activa", desc: "En una conversación, no interrumpas ni una sola vez. Solo escucha." },
    { id: 14, fase: "Fase II", titulo: "Sin Azúcar", desc: "Pasa 24 horas sin consumir dulces ni bebidas azucaradas." },
    { id: 15, fase: "Fase II", titulo: "El Rechazo al Sofá", desc: "Siéntate en el suelo o en una silla dura para leer o descansar." },
    { id: 16, fase: "Fase II", titulo: "Despertar Temprano", desc: "Levántate 30 minutos antes de lo habitual y úsalos para pensar." },

    // --- FASE 3: LA GUERRA (Voluntad y Coraje) ---
    { id: 17, fase: "Fase III", titulo: "Ducha Espartana", desc: "Ducha completa con agua fría desde el primer segundo hasta el final." },
    { id: 18, fase: "Fase III", titulo: "Silencio Monástico", desc: "Pasa 1 hora en completo silencio, sin leer ni ver pantallas." },
    { id: 19, fase: "Fase III", titulo: "El No Voluntario", desc: "Niégate un placer que desees mucho hoy (postre, videojuego, serie)." },
    { id: 20, fase: "Fase III", titulo: "Ejercicio de Fatiga", desc: "Haz flexiones o sentadillas hasta que tus músculos fallen." },
    { id: 21, fase: "Fase III", titulo: "Dormir en el Suelo", desc: "Duerme una noche en el suelo (con una manta) para valorar tu cama." },
    { id: 22, fase: "Fase III", titulo: "Ayuno 16H", desc: "No comas nada sólido durante 16 horas (solo agua y café negro)." },
    { id: 23, fase: "Fase III", titulo: "Soledad Absoluta", desc: "Ve al cine o a comer a un restaurante completamente solo." },
    { id: 24, fase: "Fase III", titulo: "Desconexión Total", desc: "24 horas sin redes sociales (Instagram, TikTok, Twitter, etc)." },

    // --- FASE 4: EL TEMPLO (Sabiduría y Muerte) ---
    { id: 25, fase: "Fase IV", titulo: "Memento Mori", desc: "Visita un cementerio o reflexiona 20 min sobre tu propia muerte." },
    { id: 26, fase: "Fase IV", titulo: "Carta de Despedida", desc: "Escribe una carta a tus padres o pareja como si fueras a morir hoy." },
    { id: 27, fase: "Fase IV", titulo: "Prueba de Diógenes", desc: "Pide un descuento en una tienda (aunque no te lo den) para vencer la vergüenza." },
    { id: 28, fase: "Fase IV", titulo: "Altruismo Anónimo", desc: "Haz un favor o donación sin decírselo a absolutamente nadie." },
    { id: 29, fase: "Fase IV", titulo: "El Perdón Radical", desc: "Escribe en papel el nombre de quien te ofendió y quémalo perdonándolo." },
    { id: 30, fase: "Fase IV", titulo: "Vista de Pájaro", desc: "Imagina tus problemas desde el espacio. Mira lo pequeños que son." },
    { id: 31, fase: "Fase IV", titulo: "Amor Fati", desc: "Identifica tu mayor problema actual y di en voz alta: 'Amo que esto suceda'." },
    { id: 32, fase: "Fase IV", titulo: "El Testamento", desc: "Define en una hoja cuál quieres que sea tu legado en el mundo." },
    { id: 33, fase: "Fase IV", titulo: "La Última Cena", desc: "Come tu comida favorita disfrutando cada bocado como si fuera la última vez." }
];

// --- 3. GESTIÓN DE ESTADO ---
let completedMissionsIDs = JSON.parse(localStorage.getItem('stoicMissions')) || [];

// Función auxiliar para obtener rango actual
function getCurrentRank(count) {
    return RANGOS.find(r => count >= r.min && count <= r.max) || RANGOS[RANGOS.length - 1];
}

// --- 4. ACTUALIZACIÓN DE INTERFAZ (UI) ---
function updateRankUI() {
    // Si no estamos en la vista de misiones, no intentamos actualizar elementos que no existen
    const rankTitle = document.getElementById('rank-title');
    if (!rankTitle) return;

    const count = completedMissionsIDs.length;
    const rango = getCurrentRank(count);
    
    // Actualizar Textos e Iconos
    document.getElementById('rank-visual').innerText = rango.icono;
    document.getElementById('rank-title').innerText = rango.titulo;
    document.getElementById('mission-count').innerText = count;

    // Actualizar Barra de Progreso
    let progress = 0;
    let nextMsg = "¡Gloria Máxima Alcanzada!";
    
    if (rango.max < 999) {
        // Cálculo matemático para llenar la barra proporcionalmente dentro del nivel
        const challengesInLevel = rango.max - rango.min + 1;
        const progressInLevel = count - rango.min;
        progress = Math.min((progressInLevel / challengesInLevel) * 100, 100);
        nextMsg = `Siguiente rango a los ${rango.max + 1} retos`;
    } else {
        progress = 100;
    }

    document.getElementById('rank-progress').style.width = `${progress}%`;
    document.getElementById('next-rank-msg').innerText = nextMsg;

    // Actualizar medalla en el Sidebar (si existe en index.html)
    const sidebarLabel = document.getElementById('rank-label');
    if (sidebarLabel) {
        sidebarLabel.innerText = rango.titulo;
        sidebarLabel.style.color = count > 30 ? '#ffd700' : '#e0e0e0'; // Dorado si es Filósofo
    }
}

// --- 5. RENDERIZADO DE TARJETAS ---
function renderMissions() {
    const grid = document.getElementById('missions-grid');
    if (!grid) return;
    
    grid.innerHTML = ""; // Limpiar parrilla

    MISIONES_DB.forEach(mision => {
        const isCompleted = completedMissionsIDs.includes(mision.id);
        
        // Crear tarjeta HTML
        const card = document.createElement('div');
        card.className = `mission-card ${isCompleted ? 'completed' : ''}`;
        
        // Estilo condicional para el botón
        const btnText = isCompleted ? '✅ Completada' : '⚔️ Aceptar Reto';
        const btnClass = isCompleted ? 'btn-complete disabled' : 'btn-complete';

        card.innerHTML = `
            <small style="color:#666; font-weight:bold; letter-spacing:1px;">${mision.fase.toUpperCase()}</small>
            <h3>${mision.titulo}</h3>
            <p>${mision.desc}</p>
            <button class="${btnClass}" onclick="toggleMission(${mision.id})" ${isCompleted ? 'disabled' : ''}>
                ${btnText}
            </button>
        `;
        grid.appendChild(card);
    });
}

// --- 6. LÓGICA DE COMPLETAR MISIÓN ---
function toggleMission(id) {
    if (!completedMissionsIDs.includes(id)) {
        // Confirmación Estoica
        if(confirm("¿Confirmas por tu honor que has completado esta prueba?")) {
            
            // 1. Guardar
            completedMissionsIDs.push(id);
            localStorage.setItem('stoicMissions', JSON.stringify(completedMissionsIDs));
            
            // 2. Efecto de Sonido (Papel o Victoria)
            const audio = document.getElementById('paper-audio'); 
            if(audio) { 
                audio.currentTime = 0; 
                audio.play().catch(e => console.log("Audio play error")); 
            }

            // 3. Renderizar cambios
            renderMissions();
            updateRankUI();
            
            // 4. Verificar Ascenso de Rango (Level Up)
            checkLevelUp(completedMissionsIDs.length);
        }
    }
}

// --- 7. SISTEMA DE NOTIFICACIÓN DE ASCENSO ---
function checkLevelUp(count) {
    const rangoActual = getCurrentRank(count);
    
    // Si el número actual coincide EXACTAMENTE con el inicio de un nuevo rango
    if (count === 6 || count === 16 || count === 31) {
        // Reproducir sonido de trompetas si existe
        const sosAudio = document.getElementById('sos-audio');
        if(sosAudio) { sosAudio.play(); }

        setTimeout(() => {
            alert(`🎉 ¡GLORIA A TI!\n\nHas ascendido al rango de: ${rangoActual.titulo.toUpperCase()}\n\n"${rangoActual.msg}"`);
        }, 500);
    }
}

// --- 8. INICIALIZACIÓN ---
// Se ejecuta cuando el HTML ha cargado completamente
document.addEventListener('DOMContentLoaded', () => {
    // Intentar renderizar si la vista está activa
    updateRankUI();
    renderMissions();
});

// Exponer función globalmente para que el HTML pueda llamarla
window.toggleMission = toggleMission;