import { ProjectModel } from "../../core/models/project.model";

export const PROJECTS: ProjectModel[] = [
  {
    id: "spring-ai-multi-module-platform",
    title: "Spring AI Multi-Module Platform",
    description: {
      fr: "Plateforme modulaire pour RAG documentaire, chat IA, sortie structuree, analyse d'image et streaming.",
      en: "Modular platform for document RAG, AI chat, structured output, image analysis and streaming."
    },
    tags: ["business", "java", "ai"],
    meta: ["Spring Boot", "Spring AI", "Angular", "PGVector"],
    github: "https://github.com/wajdibenameur/spring-ai-multi-module-platform",
    caseLink: "#cases"
  },
  {
    id: "PFEWorks",
    title: "Business Operations Platform",
    description: {
      fr: "Application metier pour centraliser les besoins, structurer les echanges et piloter la livraison.",
      en: "Business application to centralize needs, structure collaboration and guide delivery."
    },
    tags: ["business", "java"],
    meta: ["Business Analysis", "Java", "Architecture"],
    github: "https://github.com/wajdibenameur/PFEWorks",
    caseLink: "#cases"
  },
  {
    id: "digital-bank-app-microservice-avec-docker",
    title: "Digital Banking Platform",
    description: {
      fr: "Plateforme bancaire digitale en microservices avec Docker, communication interservices et interface Angular.",
      en: "Digital banking platform built with microservices, Docker, service communication and an Angular interface."
    },
    tags: ["java", "devops"],
    meta: ["Microservices", "Docker", "Angular", "Feign"],
    github: "https://github.com/wajdibenameur/digital-bank-app-microservice-avec-docker",
    caseLink: "#cases"
  },
  {
    id: "PredictionCifarCNN",
    title: "Image Classification Lab",
    description: {
      fr: "Modele CNN pour classifier CIFAR-10 et illustrer une preuve de concept machine learning.",
      en: "CNN model for CIFAR-10 classification and a machine learning proof of concept."
    },
    tags: ["ai"],
    meta: ["Python", "CNN", "TensorFlow"],
    github: "https://github.com/wajdibenameur/PredictionCifarCNN",
    caseLink: "#cases"
  },
  {
    id: "dev-test-ops-aymen-wajdi",
    title: "Software Quality and Automation",
    description: {
      fr: "Projet de qualite logicielle, tests, SonarCloud et GitHub Actions pour montrer la rigueur de delivery.",
      en: "Software quality project with tests, SonarCloud and GitHub Actions to demonstrate delivery rigor."
    },
    tags: ["devops"],
    meta: ["JUnit", "Mockito", "SonarCloud", "GitHub Actions"],
    github: "https://github.com/wajdibenameur/dev-test-ops-aymen-wajdi",
    caseLink: "#cases"
  },
  {
    id: "jenkins_CICD_kubernetes",
    title: "CI/CD Pipeline and Kubernetes",
    description: {
      fr: "Automatisation CI/CD et orchestration pour montrer une chaine de livraison claire et reproductible.",
      en: "CI/CD automation and orchestration to show a clear and reproducible delivery pipeline."
    },
    tags: ["devops"],
    meta: ["Jenkins", "Kubernetes", "Docker"],
    github: "https://github.com/wajdibenameur/jenkins_CICD_kubernetes",
    caseLink: "#cases"
  }
];
