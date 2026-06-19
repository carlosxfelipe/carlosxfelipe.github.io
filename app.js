new Vue({
  el: "#app",
  data: {
    name: "CARLOS FELIPE ARAUJO",
    title: "SENIOR MOBILE DEVELOPER",
    email: "carlosxfelipe@gmail.com",
    github: "https://github.com/carlosxfelipe",
    githubDisplay: "github.com/carlosxfelipe",
    linkedin: "https://www.linkedin.com/in/carlosxfelipe/",
    linkedinDisplay: "linkedin.com/in/carlosxfelipe/",
    location: "Fortaleza, Ceará, Brasil",
    phone: "(85) 99950-2195",
    libsFrameworks: [
      {
        name: "React Native – desenvolvimento mobile",
      },
      {
        name: "Flutter – desenvolvimento mobile",
      },
      {
        name: "SwiftUI – desenvolvimento mobile (estudando)",
      },
      { name: "React – desenvolvimento web" },
      { name: "Astro – desenvolvimento web (SSG e SSR)" },
      {
        name: "Django Ninja – desenvolvimento backend",
      },
      { name: "FastAPI – desenvolvimento backend" },
      { name: "Nest – desenvolvimento backend (estudando)" },
    ],
    programmingLanguages: [
      "JavaScript (JS)",
      "TypeScript (TS)",
      "Dart",
      "Python",
      "Swift",
    ],
    experiences: [
      {
        role: "Senior Mobile Developer",
        company: "Solar Coca-Cola",
        period: "Jun 2024 - atualmente",
        tasks: [
          "Iniciei no desenvolvimento web com React (Vite), migrando posteriormente para o desenvolvimento mobile com React Native.",
        ],
      },
      {
        role: "Mobile developer",
        company: "SUNO (Status Invest)",
        period: "Set 2022 - Abr 2024",
        tasks: ["Iniciei no desenvolvimento mobile com React Native."],
      },
      {
        role: "Professor de espanhol",
        company: "SESC",
        period: "Ago 2011 - Jan 2020",
        tasks: [
          "Atuação em curso de idiomas nas unidades do Sesc e dentro das empresas parceiras.",
        ],
      },
    ],
    education: [
      {
        degree: "Análise e Desenvolvimento de Sistemas",
        institution: "UNIFOR",
        period: "2022.2-2025.1 (concluído)",
      },
      {
        degree: "Direito",
        institution: "UNI7",
        period: "2012-2017 (concluído)",
      },
      {
        degree: "Letras Português-Espanhol",
        institution: "UFC",
        period: "2006-2010 (concluído)",
      },
    ],
    languages: [
      { name: "Português", proficiency: "nativo" },
      { name: "Espanhol", proficiency: "fluente (C2)" },
      { name: "Inglês", proficiency: "intermediário (B1)" },
    ],
  },
  computed: {
    age() {
      const today = new Date();
      // O mês no JavaScript começa em 0 (0 = Janeiro, 9 = Outubro)
      const birthDate = new Date(1987, 9, 3);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      return age;
    },
    experienceDuration() {
      const today = new Date();
      // Mês 8 = Setembro (0-indexed)
      const startDate = new Date(2022, 8, 1);
      let years = today.getFullYear() - startDate.getFullYear();
      let months = today.getMonth() - startDate.getMonth();

      if (today.getDate() < startDate.getDate()) {
        months--;
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      let yearsStr = "";
      if (years === 1) {
        yearsStr = "1 ano";
      } else if (years > 1) {
        yearsStr = years + " anos";
      }

      let monthsStr = "";
      if (months === 1) {
        monthsStr = "1 mês";
      } else if (months > 1) {
        monthsStr = months + " meses";
      }

      if (years && months) {
        return yearsStr + " e " + monthsStr;
      } else if (years) {
        return yearsStr;
      } else if (months) {
        return monthsStr;
      } else {
        return "menos de 1 mês";
      }
    },
    computedProfileSummary() {
      return `Fui professor de espanhol por vários anos e nos últimos ${this.experienceDuration} me envolvi em projetos Front-End e Mobile. Sou PCD (Pessoa com Deficiência), diagnosticado com autismo, mas minha experiência como professor me permitiu desenvolver uma comunicação clara e eficiente, além de um forte espírito colaborativo. Atualmente tenho ${this.age} anos, sou casado e tenho um filho.`;
    },
  },
});
