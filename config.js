
// ============================================
// ⚙️ CONFIGURACIÓN DE TU PÁGINA DE ANIVERSARIO
// ============================================

// ¡Hola! Este es el único archivo que necesitas editar.
// Solo cambia los textos, fechas y nombres de archivos que están entre comillas.
// ¡No necesitas saber programación! ✨

const config = {
    // -------------------------------------------------------------
    // 1. CONFIGURACIÓN GENERAL
    // -------------------------------------------------------------
    // El título que aparecerá en la pestaña del navegador
    pageTitle: "Nuestro Aniversario ❤️",

    // -------------------------------------------------------------
    // 2. MÚSICA DE FONDO 🎵
    // -------------------------------------------------------------
    music: {
        // Coloca tu canción en la carpeta 'assets' y escribe aquí su nombre exacto.
        // Ejemplo: "assets/mi_cancion.mp3"
        path: "assets/Between Us.mp3",
        volume: 0.3,    // Volumen de la música (0.1 es bajo, 1.0 es máximo)
        autoPlay: true  // ¿Quieres que suene automáticamente al entrar? (true = sí, false = no)
    },

    // -------------------------------------------------------------
    // 3. PANTALLA DE CARGA (Primera impresión)
    // -------------------------------------------------------------
    loading: {
        // Mensaje que aparece mientras carga la página
        message: "Tengo algo especial para ti...",
        // Texto del botón para entrar
        buttonText: "Comenzar ✨",
        // Pista sutil debajo del botón
        clickHint: "Haz clic para descubrirlo"
    },

    // -------------------------------------------------------------
    // 4. PORTADA (Sección Hero)
    // -------------------------------------------------------------
    hero: {
        // Título principal
        title: "Hola mi amor...",
        // El texto que aparece después de la animación del corazón
        finalText: "¡Te amo!",
        // Emoji que aparece en el corazón latiendo
        heartCharacter: "❤️",
        // Texto que invita a bajar
        scrollText: "Desliza para continuar",

        // 📅 ¡IMPORTANTE! Escribe aquí la fecha de inicio de su relación.
        // Formato: "AAAA-MM-DD" (Año-Mes-Día)
        startDate: "2024-01-01"
    },

    // -------------------------------------------------------------
    // 5. TU HISTORIA (Línea de tiempo)
    // -------------------------------------------------------------
    // Aquí puedes contar su historia paso a paso.
    // Copia y pega el bloque entre llaves { ... } para agregar más eventos.
    timeline: [
        {
            title: "El comienzo...",
            content: `Aquí puedes escribir cómo empezó todo. La primera vez que se vieron, o ese momento especial.
                <br>
                (Usa &lt;br&gt; si quieres dejar un espacio en blanco entre párrafos)`,
            // Si quieres poner fotos de este momento, pon sus nombres aquí.
            // Las fotos deben estar en la carpeta 'assets'.
            // Ejemplo: ["assets/foto1.jpg", "assets/foto2.jpg"]
            images: [],
            // Si tienes videos, ponlos aquí (ejemplo: ["assets/video.mp4"])
            videos: [],
            // Texto pequeño al pie de la tarjeta (opcional)
            footer: "Fecha o nota al pie"
        },
        {
            title: "Nuestro primer viaje",
            content: `Describe otro momento importante...`,
            images: [],
            videos: [],
            footer: "Un recuerdo inolvidable"
        },
        // ¡Copia este bloque y pégalo abajo para agregar otro evento!
        /*
        {
          title: "Nuevo evento",
          content: "Descripción...",
          images: [],
          footer: "Fecha"
        }, 
        */
    ],

    // -------------------------------------------------------------
    // 6. GALERÍA DE FOTOS 📸
    // -------------------------------------------------------------
    gallery: {
        title: "Nuestros mejores momentos",
        images: [
            // Escribe aquí los nombres de tus fotos (deben estar en la carpeta 'assets')
            // "assets/foto_viaje.jpg",
            // "assets/cumpleanos.jpg",
            // "assets/cena_romantica.jpg"
        ]
    },

    // -------------------------------------------------------------
    // 7. MENSAJE FINAL
    // -------------------------------------------------------------
    finalMessage: {
        // Puedes usar etiquetas HTML como <br> para saltos de línea
        content: "Gracias por ser parte de mi vida.<br>Te amo."
    }
};
