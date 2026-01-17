const competences = [
    {
        id: "c1",
        titre: "C1 - Réaliser",
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
                        titre: "Jeu Gold Rush (SAE S1.01)",
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
                        titre: "Application UBER (SAE S3/S4)",
                        contexte: "Développement complet d'une solution VTC/Livraison en équipe de 4.",
                        realisation: [
                            "Architecture N-Tiers avec API REST .NET 8",
                            "Interface client Vue.js responsive et ergonomique",
                            "Tests unitaires (Moq) et End-to-End (Cypress)",
                            "Pipeline CI/CD sur Azure DevOps"
                        ],
                        technos: [".NET 8", "Vue.js", "Azure", "Cypress"],
                        images: ["images/uber/architecture.png"]
                    },
                    {
                        titre: "Gestion SDIS 69 (SAE S2.04)",
                        contexte: "Application WPF pour la gestion du matériel des pompiers.",
                        realisation: [
                            "Respect du cahier des charges fonctionnel",
                            "Interface utilisateur adaptée aux besoins des pompiers",
                            "Validation des formulaires de commande"
                        ],
                        technos: ["WPF", "C#", "SQL Server"],
                        images: ["images/sdis/interface.png"]
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
                        titre: "Évolution Architecture UBER",
                        contexte: "Passage à une architecture micro-services et déploiement cloud.",
                        realisation: [
                            "Refactoring du backend pour isoler les services",
                            "Déploiement conteneurisé sur Azure (Docker)",
                            "Ajout du module de location de vélos"
                        ],
                        technos: ["Docker", "Azure Cloud", "Microservices"],
                        images: []
                    }
                ]
            }
        ]
    },
    {
        id: "c2",
        titre: "C2 - Optimiser",
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
                        titre: "Algorithmes Gold Rush",
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
                        titre: "Optimisation UBER",
                        contexte: "Performance et sécurité de l'application.",
                        realisation: [
                            "Utilisation de DTOs pour réduire la charge réseau",
                            "Sécurisation des mots de passe (Bcrypt) et API (JWT)",
                            "Comparatif Green IT : Azure vs Serveur dédié"
                        ],
                        technos: ["Bcrypt", "JWT", "LINQ"],
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
                        titre: "Profiling Avancé",
                        contexte: "Analyse des performances de l'API.",
                        realisation: [
                            "Utilisation des outils de diagnostic Visual Studio",
                            "Programmation asynchrone (Async/Await) pour la scalabilité",
                            "Tests de charge sur l'API"
                        ],
                        technos: ["Visual Studio Profiler", "Async/Await"],
                        images: []
                    }
                ]
            }
        ]
    },
    {
        id: "c3",
        titre: "C3 - Administrer",
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
                        titre: "BDD Uber & SDIS",
                        contexte: "Gestion de données complexes pour applications métiers.",
                        realisation: [
                            "Normalisation des données (46 tables pour Uber)",
                            "Mise en place de contraintes d'intégrité et sécurité",
                            "Utilisation d'ORM (Entity Framework) pour l'interaction"
                        ],
                        technos: ["Entity Framework", "PostgreSQL", "SQL Server"],
                        images: []
                    }
                ]
            }
        ]
    },
    {
        id: "c5",
        titre: "C5 - Conduire un projet",
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
                        titre: "Analyse SDIS 69",
                        contexte: "Étude préalable pour le logiciel des pompiers.",
                        realisation: [
                            "Analyse des processus d'achat",
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
                        titre: "Gestion de projet Agile UBER",
                        contexte: "Pilotage d'un projet de 6 mois en équipe.",
                        realisation: [
                            "Rédaction du Backlog et des User Stories",
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
                        titre: "Binôme Gold Rush",
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
                        titre: "Travail d'équipe UBER",
                        contexte: "Équipe de 4 développeurs avec rôles définis.",
                        realisation: [
                            "Définition des rôles : Lead Tech, Frontend, Backend",
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
                        titre: "Lead Developer UBER",
                        contexte: "Coordination technique de l'équipe.",
                        realisation: [
                            "Choix de la stack technique et formation des pairs",
                            "Gestion des conflits techniques",
                            "Planification des livraisons"
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
        title: "Application UBER (S3/S4)",
        date: "2023 - 2024",
        contexte: "Projet majeur en équipe de 4. Simulation complète VTC et livraison.",
        description: "Développement d'une API .NET et d'un client Vue.js avec architecture complexe.",
        missions: [
            "Conception API REST (.NET 8) et BDD PostgreSQL",
            "Mise en place sécurité (JWT) et CI/CD Azure",
            "Développement Frontend Vue.js avec Pinia",
            "Gestion de projet Agile et Code Review"
        ],
        technologies: ["C#", ".NET", "Vue.js", "PostgreSQL", "Azure", "Git"],
        competences: ["Réaliser", "Optimiser", "Collaborer"]
    },
    {
        id: "sdis",
        title: "Gestion Matériel SDIS 69",
        date: "2023",
        contexte: "Application lourde pour la gestion des stocks des pompiers.",
        description: "Création d'une application WPF pour gérer commandes et affectations.",
        missions: [
            "Analyse des besoins (MCD/MLD)",
            "Développement interface WPF/XAML",
            "Implémentation logique métier C#"
        ],
        technologies: ["C#", "WPF", "SQL Server", "Merise"],
        competences: ["Réaliser", "Administrer"]
    },
    {
        id: "goldrush",
        title: "Jeu Gold Rush",
        date: "2022",
        contexte: "Premier projet de développement en binôme.",
        description: "Jeu de plateforme type Mario développé en C#.",
        missions: [
            "Moteur physique et collisions",
            "Gestion des niveaux et scores",
            "Travail en Pair Programming"
        ],
        technologies: ["C#", "WPF", "Algorithmique"],
        competences: ["Réaliser", "Collaborer"]
    },
    {
        id: "pi",
        title: "Serveur Raspberry Pi",
        date: "2023",
        contexte: "Mise en place d'infrastructure système.",
        description: "Installation et configuration d'un serveur Web Linux.",
        missions: [
            "Installation OS et configuration SSH",
            "Mise en place stack LAMP (Linux Apache MySQL PHP)",
            "Rédaction documentation technique anglais"
        ],
        technologies: ["Linux", "Bash", "Apache", "SSH"],
        competences: ["Administrer", "Collaborer"]
    }
];