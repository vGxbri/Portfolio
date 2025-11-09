// Datos para la sección de formación académica
export const formacionAcademica = [
  {
    id: "educacion-secundaria",
    titulo: "Educación Secundaria",
    institucion: "IES Alpajés, Aranjuez",
    periodo: "2017 - 2021",
    descripcion: "Educación Secundaria Obligatoria con enfoque en tecnología y ciencias.",
    actual: false,
    icono: "📚"
  },
  {
    id: "grado-medio",
    titulo: "Grado Medio",
    institucion: "IES Calderón de la Barca, Getafe",
    periodo: "2021 - 2023",
    descripcion: "Técnico en Sistemas Microinformáticos y Redes, adquiriendo conocimientos en redes, sistemas operativos y hardware.",
    actual: false,
    icono: "💻"
  },
  {
    id: "doble-grado",
    titulo: "Doble Grado Superior",
    institucion: "IES Virgen de la Paloma, Madrid",
    periodo: "2023 - Actualidad",
    descripcion: "Desarrollo de Aplicaciones Multiplataforma y Desarrollo de Aplicaciones Web, especializándome en programación y desarrollo de software.",
    actual: true,
    icono: "🎓"
  }
];

// Datos para la sección de experiencia profesional
export const experienciaProfesional = [
  {
    id: "practicas-grado-superior",
    titulo: "Prácticas de Grado Superior",
    empresa: "CRC Information Technologies",
    periodo: "2025",
    descripcion: "Formación en Java, Javascript, Angular, AWS y otras tecnologías de desarrollo web y aplicaciones empresariales.",
    habilidades: ["Java", "JavaScript", "Angular", "AWS", "C#", "PLSQL", "Oracle SQL"]
  },
  {
    id: "practicas-grado-medio-2",
    titulo: "Prácticas de Grado Medio - 2ª Parte",
    empresa: "Colegio Jesús Nazareno, Getafe",
    periodo: "2023",
    descripcion: "Mantenimiento de equipos informáticos, soporte técnico y administración de sistemas para el personal docente y administrativo.",
    habilidades: ["Soporte", "Redes", "Hardware"]
  },
  {
    id: "practicas-grado-medio-1",
    titulo: "Prácticas de Grado Medio - 1ª Parte",
    empresa: "Erasmus en Francia",
    periodo: "2023",
    descripcion: "Colaboración en proyectos de desarrollo web y aplicaciones móviles en un entorno educativo internacional, mejorando habilidades técnicas y lingüísticas.",
    habilidades: ["Web", "Francés", "Erasmus+"]
  }
];

// Datos para la sección de habilidades (soft skills)
export interface Habilidad {
  id: string;
  titulo: string;
  descripcion: string;
  icono?: string;
}

export const habilidades: Habilidad[] = [
  {
    id: "puntualidad",
    titulo: "Puntualidad",
    descripcion: "Compromiso siempre en cumplir la puntualidad de los horarios."
  },
  {
    id: "independencia",
    titulo: "Independencia",
    descripcion: "Capacidad para trabajar de forma autónoma y resolver problemas por mi cuenta."
  },
  {
    id: "trabajo-equipo",
    titulo: "Trabajo en equipo",
    descripcion: "Habilidad para colaborar eficazmente en equipos multidisciplinarios."
  },
  {
    id: "comunicacion",
    titulo: "Comunicación",
    descripcion: "Capacidad para comunicar ideas de manera clara y efectiva."
  },
  {
    id: "resolucion-problemas",
    titulo: "Resolución de problemas",
    descripcion: "Enfoque analítico para identificar y resolver desafíos técnicos."
  },
  {
    id: "aprendizaje-continuo",
    titulo: "Aprendizaje continuo",
    descripcion: "Compromiso constante con el aprendizaje y la mejora profesional."
  }
];

// Datos para la sección de idiomas
export interface Idioma {
  id: string;
  idioma: string;
  nivel: string;
  porcentaje: number;
}

export const idiomas: Idioma[] = [
  {
    id: "espanol",
    idioma: "Español",
    nivel: "Nativo",
    porcentaje: 100
  },
  {
    id: "ingles",
    idioma: "Inglés",
    nivel: "C1",
    porcentaje: 90
  },
  {
    id: "frances",
    idioma: "Francés",
    nivel: "B1",
    porcentaje: 40
  }
];

// Datos para la sección de objetivo profesional
export const objetivoProfesional = {
  titulo: "Objetivo Profesional",
  descripcion: "Busco oportunidades para aplicar y expandir mis conocimientos en desarrollo de software, con especial interés en tecnologías web modernas y desarrollo de aplicaciones. Mi objetivo es formar parte de un equipo dinámico donde pueda contribuir con mis habilidades técnicas y crecer profesionalmente."
};

// Datos para la sección de tecnologías
export interface Tecnologia {
  id: string;
  nombre: string;
  categoria: "lenguaje" | "framework" | "herramienta" | "base-datos" | "cloud";
  porcentaje: number;
  imagen: string; // URL o path de la imagen
}

export const tecnologias: Tecnologia[] = [
  // Ordenadas por porcentaje (de mayor a menor)
  {
    id: "html",
    nombre: "HTML",
    categoria: "lenguaje",
    porcentaje: 100,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    id: "java",
    nombre: "Java",
    categoria: "lenguaje",
    porcentaje: 90,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  {
    id: "css",
    nombre: "CSS",
    categoria: "lenguaje",
    porcentaje: 90,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    id: "tailwind",
    nombre: "Tailwind",
    categoria: "framework",
    porcentaje: 90,
    imagen: "https://img.jsdelivr.com/github.com/tailwindlabs.png"
  },
  {
    id: "aws",
    nombre: "AWS",
    categoria: "cloud",
    porcentaje: 90,
    imagen: "https://img.jsdelivr.com/github.com/aws.png"
  },
  {
    id: "linux",
    nombre: "Linux",
    categoria: "herramienta",
    porcentaje: 90,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
  },
  {
    id: "bash",
    nombre: "Bash",
    categoria: "herramienta",
    porcentaje: 90,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
  },
  {
    id: "dotnet",
    nombre: ".NET",
    categoria: "framework",
    porcentaje: 90,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
  },
  {
    id: "javascript",
    nombre: "Javascript",
    categoria: "lenguaje",
    porcentaje: 80,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    id: "typescript",
    nombre: "Typescript",
    categoria: "lenguaje",
    porcentaje: 80,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    id: "react",
    nombre: "React",
    categoria: "framework",
    porcentaje: 80,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    id: "nextjs",
    nombre: "Next.js",
    categoria: "framework",
    porcentaje: 70,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  },
  {
    id: "astro",
    nombre: "Astro",
    categoria: "framework",
    porcentaje: 70,
    imagen: "https://raw.githubusercontent.com/devicons/devicon/master/icons/astro/astro-original.svg"
  },
  {
    id: "git",
    nombre: "Git",
    categoria: "herramienta",
    porcentaje: 70,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    id: "mysql",
    nombre: "MySQL",
    categoria: "base-datos",
    porcentaje: 70,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    id: "plsql",
    nombre: "PLSQL",
    categoria: "base-datos",
    porcentaje: 70,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
  },
  {
    id: "docker",
    nombre: "Docker",
    categoria: "herramienta",
    porcentaje: 60,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  },
  {
    id: "csharp",
    nombre: "C#",
    categoria: "lenguaje",
    porcentaje: 60,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
  },
  {
    id: "angular",
    nombre: "Angular",
    categoria: "framework",
    porcentaje: 50,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
  },
  {
    id: "azure",
    nombre: "Microsoft Azure",
    categoria: "cloud",
    porcentaje: 40,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
  },
  {
    id: "spring",
    nombre: "Spring",
    categoria: "framework",
    porcentaje: 30,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
  },
  {
    id: "kotlin",
    nombre: "Kotlin",
    categoria: "lenguaje",
    porcentaje: 30,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
  },
  {
    id: "unity",
    nombre: "Unity",
    categoria: "herramienta",
    porcentaje: 30,
    imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
  }
];