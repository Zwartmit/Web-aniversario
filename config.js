
// ============================================
// ⚙️ CONFIGURACIÓN DE LA PLANTILLA
// ============================================

const config = {
    // 1. Configuración General
    pageTitle: "Nuestro Aniversario ❤️",

    // 2. Música de Fondo
    music: {
        path: "assets/Between Us.mp3", // Coloca tu canción en la carpeta assets y actualiza el nombre aquí
        volume: 0.3,
        autoPlay: true
    },

    // 3. Pantalla de Carga
    loading: {
        message: "Tengo algo especial para ti...",
        buttonText: "Comenzar ✨",
        clickHint: "Haz clic para descubrirlo"
    },

    // 4. Sección Hero (Inicio)
    hero: {
        title: "Hola mi amor...",
        startDate: "2024-01-01", // FECHA IMPORTANTE (Año-Mes-Día)
        finalText: "¡Te amo!",
        scrollText: "Desliza para continuar",
        heartCharacter: "❤️" // Emoji del corazón
    },

    // 5. Línea de Tiempo (Historia)
    // Agrega tantos eventos como quieras copiando el bloque entre llaves {}
    timeline: [
        {
            title: "El comienzo...",
            content: `Aquí puedes escribir cómo empezó todo. La primera vez que se vieron, o ese momento especial.
                <br>Puedes usar etiquetas HTML como &lt;br&gt; para saltos de línea.`,
            images: [], // Agrega nombres de archivos en assets, ej: ["assets/foto1.jpg"]
            footer: "Fecha o nota al pie"
        },
        {
            title: "Nuestro primer viaje",
            content: `Describe otro momento importante...`,
            images: [],
            footer: "Un recuerdo inolvidable"
        },
        // Copia y pega más eventos aquí...
    ],

    // 6. Galería de Fotos
    gallery: {
        title: "Nuestros momentos",
        images: [
            // Agrega tus fotos aquí (asegúrate de ponerlas en la carpeta assets)
            // "assets/ejemplo.jpg",
            // "assets/otra_foto.jpg"
        ]
    },

    // 7. Mensaje Final
    finalMessage: {
        content: "Gracias por ser parte de mi vida.<br>Te amo."
    }
};
