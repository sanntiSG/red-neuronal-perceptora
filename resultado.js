// Lista de carreras, sus imágenes y sus descripciones
const carreras = {
    "Ingeniería": {
        url: "/resultado.html?carrera=Ingenier%C3%ADa",
        imagen: "https://www.osta.es/wp-content/uploads/2023/03/ingenieria.jpeg",
        descripcion: "La ingeniería aplica principios científicos y matemáticos para diseñar, construir y mantener estructuras, máquinas, y procesos. Los ingenieros resuelven problemas en diversas áreas, como la construcción, tecnología, y energía.",
        areas: [
            "Ingeniería Civil",
            "Ingeniería Mecánica",
            "Ingeniería Eléctrica",
            "Ingeniería Informática",
            "Ingeniería Industrial",
            "Ingeniería Aeroespacial",
            "Ingeniería Química",
            "Ingeniería Naval"
        ]
    },
    "Medicina": {
        url: "/resultado.html?carrera=Medicina",
        imagen: "https://wallpapers.com/images/hd/hd-medical-health-icon-with-nurse-v1txjiifhv3bssoo.jpg",
        descripcion: "La medicina se enfoca en la prevención, diagnóstico y tratamiento de enfermedades. Los médicos trabajan para mejorar la salud y bienestar de las personas, realizando intervenciones y cuidados médicos.",
        areas: [
            "Medicina General",
            "Pediatría",
            "Cirugía",
            "Psiquiatría",
            "Ginecología y Obstetricia",
            "Cardiología",
            "Dermatología",
            "Oftalmología",
            "Neurología",
            "Oncología"
        ]
    },
    "Derecho/Negocios": {
        url: "/resultado.html?carrera=Derecho/Negocios",
        imagen: "https://certificacion.abogado.digital/wp-content/uploads/2020/06/digital_scale7-1024x726.jpg",
        descripcion: "El derecho está relacionado con las leyes y los sistemas jurídicos. Los abogados defienden derechos y aplican la ley. Los negocios se enfocan en la administración, marketing y gestión empresarial.",
        areas: [
            "Derecho Penal",
            "Derecho Civil",
            "Derecho Laboral",
            "Derecho Internacional",
            "Derecho Corporativo",
            "Derecho Tributario",
            "Derecho de Familia",
            "Derecho Ambiental",
            "Administración de Empresas",
            "Marketing",
            "Gestión de Proyectos",
            "Finanzas"
        ]
    },
    "Arte": {
        url: "/resultado.html?carrera=Arte",
        imagen: "https://www.comciencia.br/wp-content/uploads/2020/07/girl-2696947_1920-672x372.jpg",
        descripcion: "El arte involucra la creación de obras visuales, auditivas o performativas. Los artistas utilizan diversas técnicas y medios para expresar sus ideas, emociones y creatividad.",
        areas: [
            "Pintura",
            "Escultura",
            "Dibujo",
            "Fotografía",
            "Diseño Gráfico",
            "Arte Digital",
            "Cine y Video",
            "Teatro",
            "Danza",
            "Música",
            "Literatura",
            "Arte Textil",
            "Arte Cerámico",
            "Restauración de Arte"
        ]
    },
    "Ayuda Social": {
        url: "/resultado.html?carrera=Ayuda%20Social",
        imagen: "https://elements-resized.envatousercontent.com/elements-video-cover-images/86f935e8-5826-4861-882d-a9c53e37ef15/video_preview/video_preview_0001.jpg?w=500&h=281&cf_fit=cover&q=85&format=auto&s=cb6f3f55857db42f810645b506b259862ffbba75f3ca2f3b37151877a382a64b",
        descripcion: "Las carreras de ayuda social buscan mejorar la calidad de vida de las personas y comunidades. Incluyen el trabajo social, psicología y la asistencia a grupos vulnerables.",
        areas: [
            "Trabajo Social",
            "Psicología",
            "Asistencia Social",
            "Educación Social",
            "Counseling",
            "Terapia Familiar",
            "Intervención en Crisis",
            "Rehabilitación de Adicciones",
            "Desarrollo Comunitario",
            "Gestión de Proyectos Sociales",
            "Promoción de la Salud",
            "Ayuda Humanitaria",
            "Violencia de Género",
            "Derechos Humanos"
        ]
    },
    "Educación": {
        url: "resultado.html?carrera=Educaci%C3%B3n",
        imagen: "https://img.freepik.com/foto-gratis/libro-fondo-tablero-verde_1150-3837.jpg",
        descripcion: "La educación se centra en enseñar y aprender, promoviendo el desarrollo intelectual, social y moral. Los educadores ayudan a formar a futuras generaciones a través de diferentes niveles y áreas de enseñanza.",
        areas: [
            "Educación Infantil",
            "Educación Primaria",
            "Educación Secundaria",
            "Educación Especial",
            "Psicopedagogía",
            "Pedagogía Social",
            "Formación de Docentes",
            "Orientación Educativa",
            "Gestión Educativa",
            "Educación Física",
            "Educación Musical",
            "Tecnologías Educativas",
            "Didáctica de la Lengua",
            "Ciencias de la Educación",
            "Educación en Valores"
        ]
    },
    "Ciencias de la Computación": {
        url: "/resultado.html?carrera=Ciencias%20de%20la%20Computaci%C3%B3n",
        imagen: "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_780/dpr_2.0/element/19/192544_Untitleddesign1.jpg",
        descripcion: "Las ciencias de la computación estudian algoritmos, programación y desarrollo de software. Incluye áreas como la inteligencia artificial, seguridad informática y análisis de datos.",
        areas: [
            "Inteligencia Artificial",
            "Desarrollo de Software",
            "Ciberseguridad",
            "Análisis de Datos",
            "Redes de Computadoras",
            "Bases de Datos",
            "Sistemas Operativos",
            "Arquitectura de Computadores",
            "Desarrollo Web",
            "Computación en la Nube",
            "Blockchain",
            "Robótica",
            "Minería de Datos",
            "Algoritmos y Estructuras de Datos",
            "Programación de Videojuegos"
        ]
    }
};

// Lista de carreras, imágenes, y descripciones (tu objeto ya definido)


// Función para obtener el valor del parámetro 'carrera' de la URL
function obtenerCarreraDeURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('carrera');
}

// Función para verificar si la carrera existe y redirigir si es necesario
function verificarYRedirigir() {
    const carrera = obtenerCarreraDeURL(); // Obtiene el valor del parámetro 'carrera' de la URL
    let resultadoPrediccion = "";

    if (carrera) {
        // Itera sobre el objeto 'carreras' para encontrar una coincidencia
        for (let clave in carreras) {
            if (encodeURIComponent(clave) === carrera) {
                // Si coincide, redirige a la URL correspondiente
                window.location.href = carreras[clave];
                
                // Configura el enlace de WhatsApp con el texto dinámico
                resultadoPrediccion = clave; // Carrera seleccionada
                const whatsappButton = document.getElementById("whatsapp-button");
                whatsappButton.href = `https://wa.me/5491137796683?text=Hola,%20quiero%20saber%20qué%20área%20de%20${encodeURIComponent(resultadoPrediccion)}%20es%20para%20mí`;

                return;
            }
        }
    }

    // Si no hay coincidencia o el parámetro no existe, muestra un mensaje
    console.log("Carrera no encontrada o parámetro incorrecto.");
    document.getElementById("titulo-carrera").innerText = "No se pudo determinar la carrera.";
    document.getElementById('descripcion').innerText = "Verifica que el parámetro en la URL sea correcto.";
}

// Llama a la función para verificar y redirigir
verificarYRedirigir();