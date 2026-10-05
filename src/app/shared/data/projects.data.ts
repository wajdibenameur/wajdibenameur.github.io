import { ProjectModel } from "../../core/models/project.model";

export const PROJECTS: ProjectModel[] = [
  {
    id: "spring-ai-multi-module-platform",
    title: "Multimodal Generative AI and RAG Platform",
    description: {
      fr: "Assistant documentaire RAG PDF/CV avec reponses sourcees, chat IA, sorties JSON typees, analyse d'image et streaming.",
      en: "PDF/CV document RAG assistant with sourced answers, AI chat, typed JSON outputs, image analysis and streaming."
    },
    tags: ["business", "java", "ai"],
    meta: ["Java 21", "Spring Boot", "Spring AI", "Angular", "PostgreSQL", "PGVector", "OpenAI API", "Docker Compose"],
    github: "https://github.com/wajdibenameur/spring-ai-multi-module-platform",
    caseLink: "#cases"
  },
  {
    id: "digital-bank-app-microservice-avec-docker",
    title: "Digital Banking Microservices Platform",
    description: {
      fr: "Services clients/comptes, configuration centralisee, decouverte, API Gateway, communication Feign Client et resilience Circuit Breaker.",
      en: "Customer/account services, centralized configuration, discovery, API Gateway, Feign Client communication and Circuit Breaker resilience."
    },
    tags: ["java", "devops"],
    meta: ["Java 17", "Spring Boot", "Spring Cloud", "Feign Client", "Resilience4j", "Angular", "MySQL", "Docker Compose"],
    github: "https://github.com/wajdibenameur/digital-bank-app-microservice-avec-docker",
    caseLink: "#cases"
  },
  {
    id: "dev-test-ops-aymen-wajdi",
    title: "Quality-Oriented Full Stack and DevTestOps Platform",
    description: {
      fr: "Application Spring Boot/Angular avec tests unitaires, integration et BDD, pipeline GitHub Actions, Docker et Kubernetes.",
      en: "Spring Boot/Angular application with unit, integration and BDD tests, GitHub Actions pipeline, Docker and Kubernetes."
    },
    tags: ["java", "devops"],
    meta: ["Java", "Spring Boot", "Angular", "JUnit", "Mockito", "Cucumber", "GitHub Actions", "Docker", "Kubernetes", "SonarCloud"],
    github: "https://github.com/wajdibenameur/dev-test-ops-aymen-wajdi",
    caseLink: "#cases"
  },
  {
    id: "PredictionCifarCNN",
    title: "CIFAR-10 Image Classification Application",
    description: {
      fr: "Integration d'un modele CNN dans une application web avec upload d'image, API de prediction, resultat UI et securisation JWT.",
      en: "CNN model integrated into a web application with image upload, prediction API, UI result and JWT security."
    },
    tags: ["ai", "java"],
    meta: ["Java", "Spring Boot", "Angular", "PyTorch", "TorchScript", "DJL", "JWT", "REST API"],
    github: "https://github.com/wajdibenameur/PredictionCifarCNN",
    caseLink: "#cases"
  },
  {
    id: "jenkins_CICD_kubernetes",
    title: "Jenkins - Docker - Kubernetes CI/CD Pipeline",
    description: {
      fr: "Automatisation du build et du deploiement d'une application Angular via Jenkins, webhook GitHub, image Docker et manifests Kubernetes/Minikube.",
      en: "Automated build and deployment of an Angular application with Jenkins, GitHub webhook, Docker image and Kubernetes/Minikube manifests."
    },
    tags: ["devops"],
    meta: ["Jenkins", "GitHub Webhook", "Docker", "Kubernetes", "Minikube", "kubectl", "Angular", "Ubuntu", "Ngrok"],
    github: "https://github.com/wajdibenameur/jenkins_CICD_kubernetes",
    caseLink: "#cases"
  }
];
