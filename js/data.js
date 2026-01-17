const competences = [
    {
        id: "c1",
        titre: "C1 - Réaliser",
        nav: "Réaliser",
        description: "Développer des applications informatiques complexes (conception, codage, tests, intégration).",
        couleur: "#3498db", // Bleu
        niveaux: [
            {
                niveau: "Niveau 1",
                titre: "Développer des applications informatiques simples",
                ac: [
                    { id: "AC1", text: "Implémenter des conceptions simples" },
                    { id: "AC2", text: "Élaborer des conceptions simples" },
                    { id: "AC3", text: "Faire des essais et évaluer leurs résultats" }
                ],
                preuves: [
                    {
                        titre: "Jeu Gold Rush",
                        contexte: "Développement d'un jeu de plateforme en C# et WPF en binôme.",
                        realisation: [
                            "Conception du diagramme de classes",
                            "Implémentation de la boucle de jeu et des déplacements",
                            "Gestion des collisions joueur/décor"
                        ],
                        technos: ["C#", "WPF", "Visual Studio"],
                        images: ["images/goldrush/gameplay.png"]
                    }
                ]
            },
            {
                niveau: "Niveau 2",
                titre: "Partir des exigences et aller jusqu'à une application complète",
                ac: [
                    { id: "AC1", text: "Élaborer et implémenter les spécifications" },
                    { id: "AC2", text: "Appliquer des principes d’accessibilité et d’ergonomie" },
                    { id: "AC3", text: "Adopter de bonnes pratiques de conception" },
                    { id: "AC4", text: "Vérifier et valider la qualité de l'application" }
                ],
                preuves: [
                    {
                        titre: "Application UBER",
                        contexte: "Développement complet d'une solution VTC/Livraison en équipe de 4.",
                        realisation: [
                            "Architecture N-Tiers avec API REST .NET 8",
                            "Interface client Vue.js responsive et ergonomique",
                            "Tests unitaires (Moq) et End-to-End (Cypress)",
                            "Pipeline CI/CD sur Azure DevOps"
                        ],
                        technos: [".NET 8", "Vue.js", "Azure", "Cypress"],
                        images: ["images/uber/architecture.png"]
                    }
                ]
            },
            {
                niveau: "Niveau 3",
                titre: "Adapter des applications sur un ensemble de supports",
                ac: [
                    { id: "AC1", text: "Choisir et implémenter les architectures adaptées" },
                    { id: "AC2", text: "Faire évoluer une application existante" },
                    { id: "AC3", text: "Intégrer des solutions dans un environnement de production" }
                ],
                preuves: [
                    {
                        titre: "Application de revente de voitures AutoPulse avec intégration d'IA et d'API externes",
                        contexte: "Dévellopement d'un site de revente a l'aide de C# eet blazor boosté avec nos propre IA intégré.",
                        realisation: [
                            "Developpement d'une API REST avec .NET et C# utilisant le pattern repository",
                            "Intégration de modèles d'IA pour l'évaluation des véhicules",
                            "Utilisation d'API externes pour la validation des adresses et l'authentification Google",
                            "Développement du frontend avec Blazor et le pattern MVVM",
                            "Déploiement conteneurisé sur Azure (Docker)"
                        ],
                        technos: ["Docker", "Azure Cloud", "Microservices","IA", "C#","Blazor", ".NET", "API Externes"],
                        images: []
                    }
                ]
            }
        ]
    },
    {
        id: "c2",
        titre: "C2 - Optimiser",
        nav: "Optimiser",
        description: "Proposer des applications optimisées (temps d'exécution, précision, consommation de ressources).",
        couleur: "#e74c3c", // Rouge
        niveaux: [
            {
                niveau: "Niveau 1",
                titre: "Appréhender et construire des algorithmes",
                ac: [
                    { id: "AC1", text: "Analyser un problème avec une méthode" },
                    { id: "AC2", text: "Comparer des algorithmes" }
                ],
                preuves: [
                    {
                        titre: "Jeu Gold Rush",
                        contexte: "Optimisation des mécaniques de jeu.",
                        realisation: [
                            "Algorithme de gravité et de saut",
                            "Optimisation de la détection de collision (Hitbox)"
                        ],
                        technos: ["Algorithmique", "C#"],
                        images: []
                    }
                ]
            },
            {
                niveau: "Niveau 2",
                titre: "Sélectionner les algorithmes adéquats",
                ac: [
                    { id: "AC1", text: "Choisir des structures de données complexes" },
                    { id: "AC2", text: "Utiliser des techniques algorithmiques adaptées" },
                    { id: "AC3", text: "Comprendre les enjeux de la sécurisation" },
                    { id: "AC4", text: "Évaluer l'impact environnemental" }
                ],
                preuves: [
                    {
                        titre: "Application UBER",
                        contexte: "Performance et sécurité de l'application.",
                        realisation: [
                            "Utilisation de DTOs pour réduire la charge réseau",
                            "Sécurisation des mots de passe (Bcrypt) et API (JWT)",
                            "Comparatif Green IT : Azure vs Serveur dédié",
                            "Tests unitaires et d'intégration avec moq pour garantir la robustesse",
                            "Afin d'optimiser les requetes HTTP entre le client et l'API, nous avons utilisé des DTOs (Data Transfer Objects) pour ne transférer que les données nécessaires, réduisant ainsi la charge réseau et améliorant les performances.",
                        ],
                        technos: ["Bcrypt", "JWT", "DTOs", "Azure", "Moq"],
                        images: []
                    }
                ]
            },
            {
                niveau: "Niveau 3",
                titre: "Analyser et optimiser des applications",
                ac: [
                    { id: "AC1", text: "Anticiper les résultats de diverses métriques" },
                    { id: "AC2", text: "Profiler, analyser et justifier le comportement d'un code" },
                    { id: "AC3", text: "Utiliser des méthodes dédiées (IA, parallélisme...)" }
                ],
                preuves: [
                    {
                        titre: "Application de revente de voitures AutoPulse avec intégration d'IA et d'API externes",
                        contexte: "Dévellopement d'un site de revente a l'aide de C# eet blazor boosté avec nos propre IA intégré.",
                        realisation: [
                            "Utilisation des outils de diagnostic Visual Studio",
                            "Programmation asynchrone (Async/Await) pour la scalabilité",
                            "Separation des couches avec le pattern repository et le MVVM",
                            "Tests unitaires et d'intégration pour garantir la robustesse",
                            "Afin d'optimiser les requetes HTTP entre le client et l'API, nous avons utilisé des DTOs (Data Transfer Objects) pour ne transférer que les données nécessaires, réduisant ainsi la charge réseau et améliorant les performances.",
                            "Tests de charge sur l'API"
                        ],
                        technos: ["Visual Studio Profiler", "Async/Await", "DTOs", "Moq"],
                        images: []
                    }
                ]
            }
        ]
    },
    {
        id: "c3",
        titre: "C3 - Administrer",
        nav: "Administrer",
        description: "Installer, configurer et maintenir des systèmes et réseaux.",
        couleur: "#2ecc71", // Vert
        niveaux: [
            {
                niveau: "Niveau 1",
                titre: "Installer et configurer un poste de travail",
                ac: [
                    { id: "AC1", text: "Identifier les différents composants matériels/logiciels" },
                    { id: "AC2", text: "Installer et configurer un système d'exploitation" }
                ],
                preuves: [
                    {
                        titre: "Installation VM Ubuntu",
                        contexte: "Mise en place d'un environnement de développement Linux.",
                        realisation: [
                            "Installation sur VirtualBox",
                            "Configuration des partitions et utilisateurs"
                        ],
                        technos: ["VirtualBox", "Ubuntu", "Bash"],
                        images: []
                    }
                ]
            },
            {
                niveau: "Niveau 2",
                titre: "Déployer des services dans une architecture réseau",
                ac: [
                    { id: "AC1", text: "Concevoir et développer des applications communicantes" },
                    { id: "AC2", text: "Utiliser des serveurs et services réseaux virtualisés" },
                    { id: "AC3", text: "Sécuriser les services et données d'un système" }
                ],
                preuves: [
                    {
                        titre: "Serveur Web Raspberry Pi",
                        contexte: "Déploiement d'un serveur web domestique.",
                        realisation: [
                            "Installation et configuration Apache/PHP/MySQL",
                            "Configuration du pare-feu (UFW) et SSH",
                            "Mise en réseau (IP statique, DNS)"
                        ],
                        technos: ["Raspberry Pi", "Apache", "SSH", "Linux"],
                        images: []
                    }
                ]
            }
        ]
    },
    {
        id: "c4",
        titre: "C4 - Gérer des données",
        nav: "Gérer des données",
        description: "Concevoir, gérer, administrer et exploiter des bases de données.",
        couleur: "#9b59b6", // Violet
        niveaux: [
            {
                niveau: "Niveau 1",
                titre: "Concevoir et mettre en place une base de données",
                ac: [
                    { id: "AC1", text: "Modéliser et créer une base de données relationnelle" },
                    { id: "AC2", text: "Requêter la base de données" }
                ],
                preuves: [
                    {
                        titre: "Base de données Foxconn",
                        contexte: "Création d'une BDD de production industrielle.",
                        realisation: [
                            "Conception MCD/MLD",
                            "Écriture de 20 requêtes SQL complexes (Jointures, Agrégats)"
                        ],
                        technos: ["SQL", "MCD", "PostgreSQL"],
                        images: []
                    }
                ]
            },
            {
                niveau: "Niveau 2",
                titre: "Optimiser une base de données et interagir avec une application",
                ac: [
                    { id: "AC1", text: "Optimiser les modèles de données" },
                    { id: "AC2", text: "Assurer la confidentialité et l'intégrité" },
                    { id: "AC3", text: "Organiser la restitution de données" }
                ],
                preuves: [
                    {
                        titre: "Application UBER",
                        contexte: "Gestion de données complexes pour applications métiers.",
                        realisation: [
                            "Normalisation des données (46 tables pour Uber)",
                            "Mise en place de contraintes d'intégrité et sécurité",
                            "Utilisation d'ORM (Entity Framework) pour l'interaction",
                            "Création de vues pour les rapports administratifs et analyses",
                            "Creation de procédures stockées pour automatiser les tâches récurrentes(création de panier vide au moment de la création d'un utilisateur, mise a jour du statut d'une course...)"
                        ],
                        technos: ["Entity Framework", "PostgreSQL", "ORM", "SQL"],
                        images: []
                    }
                ]
            }
        ]
    },
    {
        id: "c5",
        titre: "C5 - Conduire un projet",
        nav: "Conduire un projet",
        description: "Satisfaire les besoins des utilisateurs et piloter un projet informatique.",
        couleur: "#f39c12", // Orange
        niveaux: [
            {
                niveau: "Niveau 1",
                titre: "Identifier les besoins métiers",
                ac: [
                    { id: "AC1", text: "Identifier les processus métier" },
                    { id: "AC2", text: "Formaliser les besoins" }
                ],
                preuves: [
                    {
                        titre: "SDIS 69",
                        contexte: "Étude préalable pour le logiciel des pompiers.",
                        realisation: [
                            "Analyse des processus d'achat",
                            "Analyse des besoins utilisateurs, du métier et fonctionnels",
                            "Realisation de diagrammes UML et de maquettes fonctionnelles",
                            "Rédaction du Cahier des charges fonctionnel"
                        ],
                        technos: ["UML", "Word"],
                        images: []
                    }
                ]
            },
            {
                niveau: "Niveau 2",
                titre: "Appliquer une démarche de suivi de projet",
                ac: [
                    { id: "AC1", text: "Formaliser les besoins du client" },
                    { id: "AC2", text: "Définir et mettre en œuvre une démarche de suivi" }
                ],
                preuves: [
                    {
                        titre: "Application UBER",
                        contexte: "Pilotage d'un projet de 4 mois en équipe.",
                        realisation: [
                            "Rédaction du Backlog et des User Stories",
                            "Planification des sprints et rétrospectives en tant que ScrumMaster",
                            "Suivi des Sprints via Azure DevOps",
                            "Animation des cérémonies Scrum"
                        ],
                        technos: ["Scrum", "Azure DevOps", "Jira"],
                        images: []
                    }
                ]
            }
        ]
    },
    {
        id: "c6",
        titre: "C6 - Collaborer",
        nav: "Collaborer",
        description: "Travailler efficacement au sein d'une équipe informatique.",
        couleur: "#1abc9c", // Turquoise
        niveaux: [
            {
                niveau: "Niveau 1",
                titre: "Identifier ses aptitudes pour travailler en équipe",
                ac: [
                    { id: "AC1", text: "Identifier les rôles dans une équipe" },
                    { id: "AC2", text: "Communiquer au sein de l'équipe" }
                ],
                preuves: [
                    {
                        titre: "Jeu Gold Rush",
                        contexte: "Premier projet de développement en duo.",
                        realisation: [
                            "Répartition des tâches (Design / Code)",
                            "Communication quotidienne et entraide"
                        ],
                        technos: ["Communication", "Pair Programming"],
                        images: []
                    }
                ]
            },
            {
                niveau: "Niveau 2",
                titre: "Situer son rôle et ses missions",
                ac: [
                    { id: "AC1", text: "Appréhender l’écosystème numérique" },
                    { id: "AC2", text: "Identifier les statuts et rôles" },
                    { id: "AC3", text: "Acquérir les compétences interpersonnelles" }
                ],
                preuves: [
                    {
                        titre: "Application UBER",
                        contexte: "Équipe de 5 développeurs avec rôles définis.",
                        realisation: [
                            "Définition des rôles : ScrumMaster, Frontend, Backend",
                            "Mise en place du workflow Git (Gitflow)",
                            "Revues de code (Merge Requests) systématiques"
                        ],
                        technos: ["Git", "Code Review", "Teams"],
                        images: []
                    }
                ]
            },
            {
                niveau: "Niveau 3",
                titre: "Manager une équipe informatique",
                ac: [
                    { id: "AC1", text: "Organiser et partager une veille numérique" },
                    { id: "AC2", text: "Identifier les enjeux de l'économie de l'innovation" },
                    { id: "AC3", text: "Guider la conduite du changement" },
                    { id: "AC4", text: "Accompagner le management de projet" }
                ],
                preuves: [
                    {
                        titre: "Application UBER",
                        contexte: "Coordination technique de l'équipe.",
                        realisation: [
                            "Choix de la stack technique et formation des pairs",
                            "Gestion des conflits techniques",
                            "Scrummaster et facilitation des réunions",
                            "Assurance qualité et respect des normes de codage",
                            "Utlisation de patterns de gestion de projet agile",
                        ],
                        technos: ["Leadership", "Mentoring"],
                        images: []
                    }
                ]
            }
        ]
    }
];

const experiences = [
    {
        id: "uber",
        title: "Application UBER",
        date: "2023 - 2024",
        contexte: "Projet majeur en équipe de 4. Simulation complète VTC et livraison.",
        description: "Développement d'une API .NET et d'un client en Laravel avec architecture complexe.",
        missions: [
            "Conception API REST (.NET 8) et BDD PostgreSQL a l'aide du code first ave plus de 46 tables en base de données.",
            "Développement de fonctionnalités avancées : géolocalisation, gestion des courses, paiements sécurisés (Stripe).",
            "Creation de procédures stockées pour automatiser les tâches récurrentes(création de panier vide au moment de la création d'un utilisateur, mise a jour du statut d'une course...)",
            "Script d'insertion de données pour simuler l'activité avec notamment des fonctions intégrée PostgreSQL pour définir les horaires d'activité des restaurants.",
            "Mise en place sécurité (JWT) pour sécuriser la connexion utilisateur et CI/CD Azure afin de déployer automatiquement l'API sur Azure a chaque mise a jour du code.",
            "Développement Frontend Laravel pour le client avec une interface utilisateur ergonomique et responsive. Afin aussi de faciliter la navigation et l'utilisation de l'application sur différents appareils, et de bien séparer le code métier et la présentation.",
            "Gestion de projet Agile et Code Review. Organisation du travail en sprints avec des réunions hebdomadaire pour suivre l'avancement. Utilisation de Git pour le contrôle de version et les revues de code afin d'assurer la qualité du code et le partage des connaissances au sein de l'équipe.",
            "Afin d'optimiser les requetes HTTP entre le client et l'API, nous avons utilisé des DTOs (Data Transfer Objects) pour ne transférer que les données nécessaires, réduisant ainsi la charge réseau et améliorant les performances.",
            "Tests unitaires et d'intégration a l'aide de moq pour garantir la robustesse de l'application.",
            "J'ai réalise le projet en tant que Scrummaster coordonnant les efforts de l'équipe, assurant la qualité technique du produit final, la conformité aux exigences du client et la bonne communication entre les membres de l'équipe."
        ],
        images: ["asset/img/uber.png", "asset/img/uber2.png"],
        documents: [],
        technologies: ["C#", ".NET", "Laravel", "PostgreSQL", "Azure", "Git"],
        competences: ["Réaliser", "Optimiser", "Collaborer","Conduire un projet", "Gérer des données"]
    },
        {
        id: "autopulse",
        title: "Application de revente de voitures AutoPulse avec intégration d'IA et d'API externes",
        date: "2025-2026",
        contexte: "Réalisation d'une application web pour la revente de voitures d'occasion, intégrant des fonctionnalités d'IA.",
        description: "Développement d'une API .NET a l'aide C# et du pattern repository. Avec un Front end en Blazor et le pattern MVVM.",
        missions: [
            "Conception et développement de l'API REST avec .NET et C#, avec le model repository. C'est a dire une séparation entre la logique métier et l'accès a la base de données.",
            "Intégration de modèles d'IA crée nous meme. Avec un pour detection de prix par rapport aux caractéristiques du véhicule, une autre pour l'analyse d'images des véhicules, et une derniere pour analyser la description des annonces et reajuster le prix en conséquence.",
            "Utilisation d'API externes pour la récupération de données sur les adesses et pour verifier quelles existent dans la réalité.",
            "Utilisation aussi de Google Auth pour se connecter à l'aide de Google.",
            "Utilisation de Immat France pour récupérer les informations des véhicules a partir de leur plaque d'immatriculation et facilliter la création des annonces.",
            "Gestion de la base de données avec Entity Framework et Postgres SQL.",
            "Afin d'optimiser les requetes HTTP entre le client et l'API, nous avons utilisé des DTOs (Data Transfer Objects) pour ne transférer que les données nécessaires, réduisant ainsi la charge réseau et améliorant les performances.",
            "Plus de 1250 tests unitaires et d'intégration a l'aide de moq pour garantir la robustesse de l'application.",
            "Développement du frontend avec Blazor et le pattern MVVM pour une meilleure organisation du code et une séparation claire entre la logique de présentation et la logique métier."
        ],
        images: ["asset/img/autopulse.png", "asset/img/autopulse1.png"],
        documents: [{titre: "Github du projet ", url: "asset/doc/Documentation_AutoPulse.pdf"},],
        liens: "https://blazor-autopulse-c2ehbpd0hzh9e8he.francecentral-01.azurewebsites.net/",
        technologies: ["C#", "Blazor", "Python", "SQL", "Entity Framework", "IA", "API Externes"],
        competences: ["Réaliser", "Optimiser", "Collaborer"]
    },
    {
        id: "bdd foxconn",
        title: "Base de données Foxconn",
        date: "2023",
        contexte: "Optimisation et restructuration d'une base de données existante pour une meilleure performance et intégrité des données.",
        description: "Analyse et refonte de la base de données relationnelle d'une entreprise industrielle en groupe de 3.",
        missions: [
            "Analyse de la structure actuelle de la base de données et identification des points faibles (redondances, anomalies, performances).",
            "Conception d'un nouveau modèle de données en utilisant les techniques de modélisation (MCD, MLD) pour améliorer l'organisation et la cohérence des données.",
            "Implémentation des modifications dans le système de gestion de base de données (SGBD) en utilisant SQL pour créer les nouvelles tables, relations et contraintes.",
            "Redaction de scripts SQL d'insertion de données dans la nouvelle base de données.",
            "Redaction de requetes SQL complexes pour extraire des informations pertinentes de la base de données.",
            "Rédaction d'une documentation technique détaillant les changements apportés et les raisons derrière ces choix en anglais."
        ],
        images: [],
        documents: [{titre: "Télécharger le rapport MCD/MLD", url: "asset/doc/Rapportbd.pdf"},
            {titre: "Télécharger le rapport d'insertion", url: "asset/doc/InsertBD.pdf"}
        ],
        technologies: ["Linux", "Bash", "Apache", "SSH", "VirtualBox"],
        competences: ["Administrer", "Collaborer"]
    },
    {
        id: "goldrush",
        title: "Jeu Gold Rush",
        date: "2022",
        contexte: "Premier projet de développement en binôme.",
        description: "Jeu de plateforme type Mario développé en C# avec une interface graphique WPF.",
        missions: [
            "Le principe du jeu est de contrôler un personnage qui doit collecter des pièces d'or tout en évitant des obstacles et ennemis tous ca avec une limite de temps. Le joueur peut sauter, courir et interagir avec l'environnement pour atteindre son objectif.",
            "Réalisation du diagramme de classes pour structurer le code et définir les interactions entre les objets du jeu.",
            "Gestion des niveaux et scores a l'aide de classes et méthodes pour mieux organiser le code.",
            "Travail en Pair Programming pour favoriser la collaboration et le partage des connaissances. Eviter les conflits de code en utilisant Git pour le contrôle de version."
        ],
        images: ["asset/img/GoldRush.png"],
        documents: [{titre: "Télécharger Le rapport", url: "asset/doc/jeu_piece.pdf"},],
        technologies: ["C#", "WPF", "Algorithmique"],
        competences: ["Réaliser", "Optimiser","Collaborer"]
    },
    {
        id: "sdis69",
        title: "SDIS 69",
        date: "2023",
        contexte: "Crée une nouvelle application pour faciliter la gestion de matériel et de commande du SDIS 69.",
        description: "Application de gestion du matériel des pompiers développée en C# avec WPF.",
        missions: [
            "Analyse des processus d'achat et de gestion du matériel pour identifier les besoins spécifiques du SDIS 69.",
            "Rédaction du cahier des charges fonctionnel pour définir les fonctionnalités et exigences de l'application contenant la nouvelle base de données, des maquettes d'écrans et des diagrammes UML.",
            "Développement de l'application en C# avec WPF, en mettant l'accent sur une interface utilisateur intuitive et ergonomique.",
            "Implémentation de fonctionnalités clés telles que la gestion des stocks, le suivi des commandes et la génération de rapports.",
            "Tests et validation de l'application pour garantir sa fiabilité et son efficacité dans un environnement opérationnel."
        ],
        images: ["asset/img/SDIS.png"],
        documents: [{titre: "Télécharger le cahier des charges", url: "asset/doc/Sdis.pdf"},],
        technologies: ["C#", "WPF", "Algorithmique"],
        competences: ["Réaliser", "Collaborer", "Conduire un projet"]
    },
    {
        id: "pi",
        title: "Serveur Web Raspberry Pi",
        date: "2023",
        contexte: "Mise en place d'infrastructure système sous des conditions spécifiques",
        description: "Installation et configuration d'un serveur Web Linux en groupe de 3",
        missions: [
            "Installation OS et configuration SSH afin de pouvoir administrer le serveur a distance.",
            "Mise en place stack LAMP (Linux Apache MySQL PHP) afin de poster un site web dynamique.",
            "Sécurisation du serveur avec pare-feu UFW et bonnes pratiques, afin d'éviter les intrusions et les requetes malveillantes et excessives.",
            "Rédaction documentation technique de l'installation en anglais"
        ],
        images: [],
        documents: [{titre: "Télécharger le rapport", url: "asset/doc/Raspberry.pdf"},],
        technologies: ["Linux", "Bash", "Apache", "SSH"],
        competences: ["Administrer", "Collaborer"]
    },
    {
        id: "vmubuntu",
        title: "Installation VM Ubuntu",
        date: "2023",
        contexte: "Mise en place d'un environnement de développement Linux suivant des conditions spécifiques",
        description: "Installation et configuration du système d'exploitation Ubuntu sur une machine virtuelle en binôme pour herber un environnement de développement.",
        missions: [
            "Installation d'Ubuntu sur VirtualBox en configurant les partitions et les utilisateurs selon les exigences données.",
            "Configuration réseau de la VM pour assurer une connectivité optimale avec l'hôte et Internet.",
            "Installation des outils de développement nécessaires (éditeurs de code, compilateurs, gestionnaires de paquets).",
            "Rédaction d'une documentation technique détaillant les étapes d'installation et de configuration en anglais."
        ],
        images: [],
        documents: [{titre: "Télécharger le rapport", url: "asset/doc/VM.pdf"},],
        technologies: ["Linux", "Bash", "Apache", "SSH", "VirtualBox"],
        competences: ["Administrer", "Collaborer"]
    },
];