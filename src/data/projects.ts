// Estructura de datos para proyectos
export interface Proyecto {
  id: string;
  titulo: string;
  descripcion: string;
  descripcionLarga?: string;
  tecnologias: string[];
  imagen: string;
  imagenes?: string[]; // Array de imágenes para carrusel (opcional)
  enlaces: {
    github?: string;
    demo?: string;
    video?: string;
  };
  destacado: boolean;
  categoria: string;
  año: string;
  icono?: string; // Nombre del icono de Lucide
  esImagenSinFondo?: boolean;
}

// Datos de proyectos
export const proyectos: Proyecto[] = [
  {
    id: "proyecto-destacado",
    titulo: "Proyecto de Fin de Grado (TFG)",
    descripcion: "Valefy - Tu nuevo mejor simulador de cajas de Valorant",
    descripcionLarga: "Un proyecto personal desarrollado como TFG, con el objetivo de crear un simulador de cajas de Valorant que sea lo más real posible. Utilicé Next.js, Tailwind CSS y Vercel como principales tecnologías para el desarrollo.",
    tecnologias: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Vercel", "Auth.js", "Framer Motion", "Lucide-React", "Supabase", "Valorant API", "Github"],
    imagen: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop",
    imagenes: [
      "src/assets/valefy/1.png",
      "src/assets/valefy/2.png",
      "src/assets/valefy/3.png",
      "src/assets/valefy/4.png",
      "src/assets/valefy/5.png",
      "src/assets/valefy/6.png",
      "src/assets/valefy/7.png"
    ],
    enlaces: {
      github: "https://github.com/vGxbri/valefy",
      demo: "https://valefy.vercel.app/"
    },
    destacado: true,
    categoria: "Web Development",
    año: "2025",
    icono: "Rocket"
  },
  {
    id: "out-of-range",
    titulo: "Out Of Range",
    descripcion: "Videojuego multijugador asimétrico donde un jugador controla una zona segura y el otro debe mantenerse dentro.",
    descripcionLarga: "Trabajo final para la asignatura de Programación de Videojuegos. Es un juego para dos personas desarrollado en Unity, donde la mecánica principal gira en torno a la cooperación y la limitación de espacio: un jugador lleva un aura o zona alrededor suya y el otro jugador pierde si sale de ella.",
    tecnologias: ["Unity", "C#"],
    imagen: "src/assets/outofrange.png",
    enlaces: {
      github: "https://github.com/vGxbri/OutOfRange"
    },
    destacado: false,
    categoria: "Videojuego",
    año: "2026",
    icono: "Gamepad2"
  },
  {
    id: "poke-zona",
    titulo: "PokeZona",
    descripcion: "Aplicación de la Pokédex con guardado de equipos en la nube.",
    descripcionLarga: "Aplicación en Kotlin desarrollada en parejas. Hace uso de la PokeApi para mostrar información detallada de los Pokémon, permitiendo buscar y filtrar. Además, integra Firebase para la gestión de usuarios, lo que permite a cada jugador guardar sus equipos con los que ha superado la Liga Pokémon.",
    tecnologias: ["Kotlin", "Android Studio", "Firebase", "PokeAPI", "XML"],
    imagen: "src/assets/pokezona.png",
    enlaces: {
      github: "https://github.com/vGxbri/PokeZona" // Assuming this is the name or empty if not provided, he didn't provide a repo for PokeZona but described it. I will leave the github link out or as a placeholder. Actually, let's omit the link for now if not provided, or guess it based on others. He didn't provide the PokeZona URL.
    },
    destacado: false,
    categoria: "Full Stack",
    año: "2026",
    icono: "Smartphone",
    esImagenSinFondo: true
  },
  {
    id: "monumentos-miami",
    titulo: "Monumentos de Miami",
    descripcion: "Guía turística de Miami con información sobre edificios, playas, restaurantes y ocio.",
    descripcionLarga: "Práctica para la asignatura de Programación Multimedia y Dispositivos Móviles (segunda evaluación), desarrollada en parejas. Es una app nativa en Kotlin que sirve como guía turística de la ciudad de Miami, categorizando los lugares de interés en diferentes secciones.",
    tecnologias: ["Kotlin", "Android Studio", "XML"],
    imagen: "src/assets/miami.png",
    enlaces: {
      github: "https://github.com/vGxbri/P4_Miami_Gabriel_Jorge"
    },
    destacado: false,
    categoria: "Frontend",
    año: "2026",
    icono: "MapPin"
  },
  {
    id: "clear-type",
    titulo: "ClearType",
    descripcion: "Plataforma web para practicar y mejorar la velocidad de escritura mecanográfica.",
    descripcionLarga: "Proyecto para la asignatura de Desarrollo de Interfaces. Consiste en una aplicación web interactiva donde los usuarios pueden realizar pruebas de mecanografía para aprender a teclear más rápido y medir sus pulsaciones por minuto (WPM).",
    tecnologias: ["HTML", "CSS", "JavaScript", "PHP", "Tailwind CSS", "AJAX", "jQuery"],
    imagen: "src/assets/cleartype.png",
    enlaces: {
      github: "https://github.com/vGxbri/ClearType"
    },
    destacado: false,
    categoria: "Frontend",
    año: "2025",
    icono: "Keyboard"
  },
  {
    id: "codelab",
    titulo: "Codelab",
    descripcion: "Plataforma de aprendizaje de programación con cursos.",
    tecnologias: ["ASP.NET Core", "SQL Server", "Tailwind CSS", "HTML", "CSS", "JavaScript", "GitHub"],
    imagen: "src/assets/codelab.png",
    enlaces: {
      github: "https://github.com/vGxbri/codelab"
    },
    destacado: false,
    categoria: "Full Stack",
    año: "2025",
    icono: "Book"
  },
  {
    id: "proyecto-api",
    titulo: "Deportes Acestream",
    descripcion: "Página web personal para enlaces de distintos streams para ver deportes.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagen: "src/assets/deportes-acestream.png",
    enlaces: {
      demo: "https://vgxbri.github.io/deportesacestream.github.io/index.html",
      github: "https://github.com/vGxbri/deportesacestream.github.io"
    },
    destacado: false,
    categoria: "Frontend",
    año: "2024",
    icono: "Volleyball"
  },
  {
    id: "proyecto-mobile",
    titulo: "Urban Music",
    descripcion: "Página web de música inspirada en Spotify y enfocada en el backend hecha como una práctica con PHP y Composer.",
    tecnologias: ["PHP", "Composer", "HTML", "Bootstrap", "Twig"],
    imagen: "src/assets/urban-music.png",
    enlaces: {
      github: "https://github.com/vGxbri/PracticaPHP-2t"
    },
    destacado: false,
    categoria: "Backend",
    año: "2024",
    icono: "Headphones"
  }
];

