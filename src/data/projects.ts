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

