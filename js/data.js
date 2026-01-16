
    const competences = [
        {
            id: "c1",
            titre: "Réaliser un développement d'application",
            niveau: "Niveau 2 - Partir des exigences et aller jusqu'à une application complète",
            description: "Développer — c'est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client.",
            apprentissagesCritiques: [
                "AC 1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
                "AC 2 : Appliquer des principes d'accessibilité et d'ergonomie",
                "AC 3 : Adopter de bonnes pratiques de conception et de programmation",
                "AC 4 : Vérifier et valider la qualité de l'application par les tests"
            ],
            preuves: [
                {
                    titre: "SAE S1.01-S1.02 : Gold Rush - Jeu vidéo en C#/WPF",
                    contexte: "Développement d'un jeu vidéo de plateforme en binôme dans le cadre de la SAE S1.01 et S1.02. L'objectif était de créer un jeu complet avec 5 niveaux, une interface graphique en 8-bit et un système de gestion des pièces et du temps.",
                    realisation: [
                        "Conception d'une architecture MVC pour séparer la logique métier de l'interface",
                        "Implémentation de 5 niveaux progressifs avec des mécaniques de jeu variées (saut, collecte de pièces, ennemis)",
                        "Développement d'un système de détection de collisions optimisé (250 tests/seconde pour les pièces, 200 tests/seconde pour les sols)",
                        "Création d'une interface graphique complète avec menu, paramétrage des touches, écrans de victoire/défaite",
                        "Mise en place de tests de performance : consommation mémoire stable entre 103Mo (menu) et 156Mo (niveau 5)",
                        "Gestion d'assets graphiques avec optimisation des sprites et animations"
                    ],
                    technos: ["C#", "WPF", "XAML", "Visual Studio"],
                    liensAC: {
                        "AC1": "Conception complète du jeu depuis le cahier des charges jusqu'à l'implémentation (diagramme de classes, cinématique des écrans)",
                        "AC2": "Interface utilisateur intuitive avec paramétrage personnalisable des touches de jeu",
                        "AC3": "Application de bonnes pratiques : séparation des responsabilités, nommage cohérent, modularisation du code",
                        "AC4": "Tests de validation fonctionnelle et tests de performance (consommation mémoire, nombre de tests/seconde)"
                    },
                    images: [
                        "images/goldrush/architecture.png",
                        "images/goldrush/gameplay.png",
                        "images/goldrush/performances.png"
                    ],
                    documents: ["11-3-SERVONNET-RANC.pdf"]
                },
                {
                    titre: "SAE S2.04 : Interface de gestion pour le SDIS 69",
                    contexte: "Développement d'une Interface Homme-Machine (IHM) en équipe de 3 pour le Service Départemental d'Incendie et de Secours. L'application permet la gestion des achats de matériel et de véhicules pour l'organisation.",
                    realisation: [
                        "Création de 8 classes métier correspondant aux principales tables du MCD",
                        "Implémentation de méthodes Read() pour l'affichage des données dans les DataGrid",
                        "Développement d'une méthode Create() pour la création de commandes",
                        "Conception d'une cinématique complète des écrans (connexion, menu, recherche, commande, visualisation)",
                        "Mise en place d'un système de recherche avec filtres multiples (habilitation, type, catégorie)",
                        "Gestion de la validation des commandes avec récapitulatif et informations de livraison"
                    ],
                    technos: ["C#", "WPF", "PostgreSQL", "XAML"],
                    liensAC: {
                        "AC1": "Élaboration de spécifications à partir des besoins du SDIS : diagrammes de séquence, use case et classe",
                        "AC2": "Interface ergonomique adaptée aux sapeurs-pompiers avec navigation intuitive et guidage utilisateur",
                        "AC3": "Architecture en couches avec séparation des responsabilités (classes métier, accès données, interface)",
                        "AC4": "Validation des données saisies et gestion des erreurs utilisateur"
                    },
                    images: [
                        "images/sdis/architecture.png",
                        "images/sdis/interface-recherche.png",
                        "images/sdis/interface-commande.png"
                    ],
                    documents: ["Rapport.pdf", "Cahier des charges.docx"]
                },
                {
                    titre: "SAE S3.A.01 / S4.A.01 : Application de gestion UBER (Projet majeur)",
                    contexte: "Développement d'une application complète de gestion pour UBER en équipe de 4-5 étudiants. Projet ambitieux incluant la gestion des courses VTC, commandes de repas (Uber Eats) et réservation de vélos électriques. Application développée avec une architecture .NET moderne et une interface Vue.js.",
                    realisation: [
                        "Conception et implémentation d'une API REST en .NET avec approche Code First",
                        "Création de plus de 46 modèles entités pour gérer la complexité métier",
                        "Développement de 80+ DTOs (Data Transfer Objects) pour optimiser les échanges client-serveur",
                        "Implémentation de 80+ User Stories couvrant tous les cas d'usage",
                        "Développement d'un client web en Vue.js avec plus de 20 pages/composants",
                        "Mise en place d'une base de données PostgreSQL avec relations complexes",
                        "Implémentation de la sécurité : cryptage des mots de passe, tokens JWT",
                        "Tests unitaires avec Moq et tests end-to-end avec Cypress",
                        "Mise en place d'un pipeline CI/CD sur Microsoft Azure",
                        "Application des design patterns : Repository, Dependency Injection, Factory",
                        "Gestion de trois flux métiers distincts : VTC, livraison de repas, location de vélos"
                    ],
                    technos: [".NET Core", "C#", "Entity Framework", "PostgreSQL", "Vue.js", "JWT", "Azure DevOps", "Cypress", "Moq"],
                    liensAC: {
                        "AC1": "Analyse complète des besoins UBER avec 80+ User Stories, conception d'une architecture à 46 modèles et 80 DTOs",
                        "AC2": "Interface Vue.js moderne et accessible, routing optimisé, gestion d'état avec Pinia",
                        "AC3": "Application rigoureuse des design patterns (Repository, DI, Factory), séparation des responsabilités, code documenté",
                        "AC4": "Suite complète de tests : unitaires (Moq), end-to-end (Cypress), couverture de code élevée"
                    },
                    images: [
                        "images/uber/architecture-globale.png",
                        "images/uber/modeles-donnees.png",
                        "images/uber/interface-client.png",
                        "images/uber/pipeline-cicd.png"
                    ],
                    documents: ["S4.A.01.docx", "2024SAE3.01_Sujet1_UBER_V1.pdf"],
                    noteImportante: "Projet d'envergure professionnelle démontrant une maîtrise complète du cycle de développement"
                }
            ],
            couleur: "#3498db"
        },
        {
            id: "c2",
            titre: "Optimiser des applications",
            niveau: "Niveau 2 - Sélectionner les algorithmes adéquats pour répondre à un problème donné",
            description: "Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'exécution, précision, consommation de ressources…",
            apprentissagesCritiques: [
                "AC 1 : Choisir des structures de données complexes adaptées au problème",
                "AC 2 : Utiliser des techniques algorithmiques adaptées pour des problèmes complexes",
                "AC 3 : Comprendre les enjeux et moyens de sécurisation des données et du code",
                "AC 4 : Évaluer l'impact environnemental et sociétal des solutions proposées"
            ],
            preuves: [
                {
                    titre: "SAE S1.02 : Optimisation algorithmique dans Gold Rush",
                    contexte: "Optimisation des systèmes de détection de collisions et de gestion des animations dans le jeu Gold Rush pour garantir des performances fluides.",
                    realisation: [
                        "Implémentation d'un système de détection de collisions optimisé : 250 tests/seconde pour les pièces",
                        "Optimisation de la détection sol-joueur : 200 tests/seconde sur 4 sols par niveau",
                        "Choix de structures de données adaptées : listes d'hitboxes pour les éléments du jeu",
                        "Gestion efficace de la mémoire : consommation stable de 103Mo à 156Mo malgré l'augmentation de la complexité",
                        "Analyse comparative de différentes approches algorithmiques pour la détection de collisions"
                    ],
                    technos: ["C#", "Algorithmes de collision", "Optimisation mémoire"],
                    liensAC: {
                        "AC1": "Utilisation de listes et de structures pour optimiser les tests de collision",
                        "AC2": "Algorithmes de détection rectangle-rectangle optimisés avec arrêt précoce",
                        "AC4": "Mesure et documentation de la consommation mémoire à chaque étape du jeu"
                    },
                    images: [
                        "images/goldrush/algorithme-collision.png",
                        "images/goldrush/performances-memoire.png"
                    ],
                    documents: ["11-3-SERVONNET-RANC.pdf"]
                },
                {
                    titre: "SAE S4.A.01 : Architecture et optimisation UBER",
                    contexte: "Optimisation d'une application complexe avec 46 modèles et 80 DTOs, nécessitant une attention particulière aux performances et à la scalabilité.",
                    realisation: [
                        "Implémentation du pattern Repository pour optimiser l'accès aux données",
                        "Utilisation de DTOs pour réduire la charge réseau (80+ DTOs spécialisés)",
                        "Mise en place de l'injection de dépendances pour améliorer la testabilité et la maintenabilité",
                        "Optimisation des requêtes SQL via Entity Framework",
                        "Analyse de l'impact environnemental : comparaison serveur Azure vs PHP OVH",
                        "Mise en cache des données fréquemment consultées",
                        "Tests de charge et optimisation des temps de réponse API"
                    ],
                    technos: [".NET", "Entity Framework", "Design Patterns", "Azure", "PostgreSQL"],
                    liensAC: {
                        "AC1": "Architecture avec 46 modèles organisés, DTOs pour optimiser les transferts",
                        "AC2": "Patterns Repository et Factory pour gérer la complexité",
                        "AC3": "Sécurisation : cryptage bcrypt, tokens JWT, validation des données",
                        "AC4": "Étude comparative de l'impact environnemental Azure vs OVH"
                    },
                    images: [
                        "images/uber/architecture-optimisation.png",
                        "images/uber/impact-environnemental.png"
                    ],
                    documents: ["S4.A.01.docx"]
                }
            ],
            couleur: "#e74c3c"
        },
        {
            id: "c3",
            titre: "Administrer des systèmes informatiques communicants",
            niveau: "Niveau 2 - Déployer des services dans une architecture réseau",
            description: "Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux.",
            apprentissagesCritiques: [
                "AC 1 : Concevoir et développer des applications communicantes",
                "AC 2 : Utiliser des serveurs et des services réseaux virtualisés",
                "AC 3 : Sécuriser les services et données d'un système"
            ],
            preuves: [
                {
                    titre: "SAE S2.03 : Installation serveur web sur Raspberry Pi",
                    contexte: "Installation et configuration complète d'un environnement de développement web sur Raspberry Pi 2 dans le cadre d'un projet de réduction des coûts d'hébergement.",
                    realisation: [
                        "Installation de Raspberry Pi OS Lite (système Linux minimal)",
                        "Configuration du réseau : adresse IP statique, passerelle, DNS",
                        "Installation et configuration d'Apache2 comme serveur web",
                        "Installation de PHP et PostgreSQL pour une stack complète",
                        "Configuration de services de partage de fichiers entre Windows et Linux",
                        "Mise en place d'un pare-feu (UFW) avec règles de sécurité",
                        "Tests de connectivité réseau et de fonctionnement des services",
                        "Documentation technique complète en anglais (Installation Guide)"
                    ],
                    technos: ["Raspberry Pi", "Linux", "Apache", "PHP", "PostgreSQL", "UFW"],
                    liensAC: {
                        "AC1": "Configuration réseau complète, services web communicants",
                        "AC2": "Mise en place d'une infrastructure serveur sur matériel embarqué",
                        "AC3": "Configuration pare-feu, sécurisation SSH, gestion des ports"
                    },
                    images: [
                        "images/raspberry/architecture-reseau.png",
                        "images/raspberry/config-apache.png",
                        "images/raspberry/tests-securite.png"
                    ],
                    documents: ["installationGuideRaspberry.docx"]
                },
                {
                    titre: "SAE S2.03 : Machine virtuelle Ubuntu 20.04",
                    contexte: "Installation et configuration d'une machine virtuelle Ubuntu pour environnement de développement, dans une optique de virtualisation et d'optimisation des ressources.",
                    realisation: [
                        "Création d'une VM Ubuntu 20.04 sur VirtualBox",
                        "Installation d'un environnement de développement complet : Visual Studio Code, C#, PHP",
                        "Configuration de MonoGame pour le développement de jeux",
                        "Installation et configuration d'Apache2 comme serveur web",
                        "Mise en place d'un système de partage de fichiers entre hôte Windows et VM Linux",
                        "Configuration réseau en mode pont pour accès externe",
                        "Installation de XFCE4 comme environnement de bureau léger",
                        "Documentation complète du processus d'installation en anglais"
                    ],
                    technos: ["Ubuntu", "VirtualBox", "Apache", "C#", "MonoGame", "XFCE"],
                    liensAC: {
                        "AC1": "Configuration réseau pour communication entre hôte et VM",
                        "AC2": "Maîtrise de la virtualisation : création, configuration, optimisation",
                        "AC3": "Mise en place des Guest Additions, partage sécurisé de fichiers"
                    },
                    images: [
                        "images/ubuntu/architecture-vm.png",
                        "images/ubuntu/environnement-dev.png",
                        "images/ubuntu/partage-fichiers.png"
                    ],
                    documents: ["installationGuideUbuntu.docx"]
                },
                {
                    titre: "SAE S4.A.01 : Déploiement CI/CD sur Azure",
                    contexte: "Mise en place d'une infrastructure de déploiement continu pour l'application UBER, avec intégration Azure DevOps et conteneurisation.",
                    realisation: [
                        "Configuration d'un pipeline CI/CD sur Microsoft Azure",
                        "Déploiement automatisé de l'API .NET",
                        "Configuration de la base de données PostgreSQL sur Azure",
                        "Mise en place de la virtualisation avec conteneurs",
                        "Configuration des services réseaux pour l'application web",
                        "Sécurisation : HTTPS, tokens JWT, CORS",
                        "Monitoring et logs des services déployés"
                    ],
                    technos: ["Azure", "CI/CD", "Docker", "PostgreSQL", ".NET"],
                    liensAC: {
                        "AC1": "API REST communicante avec client Vue.js via HTTPS",
                        "AC2": "Déploiement sur infrastructure cloud virtualisée",
                        "AC3": "Sécurisation complète : JWT, HTTPS, gestion CORS, cryptage"
                    },
                    images: [
                        "images/uber/pipeline-azure.png",
                        "images/uber/architecture-cloud.png"
                    ],
                    documents: ["S4.A.01.docx"]
                }
            ],
            couleur: "#2ecc71"
        },
        {
            id: "c4",
            titre: "Gérer des données de l'information",
            niveau: "Niveau 2 - Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
            description: "Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l'entreprise.",
            apprentissagesCritiques: [
                "AC 1 : Optimiser les modèles de données de l'entreprise",
                "AC 2 : Assurer la confidentialité des données (intégrité et sécurité)",
                "AC 3 : Organiser la restitution de données à travers la programmation et la visualisation",
                "AC 4 : Manipuler des données hétérogènes"
            ],
            preuves: [
                {
                    titre: "SAE S2.04 : Base de données pour SDIS 69",
                    contexte: "Conception et implémentation d'une base de données complète pour la gestion des achats du Service Départemental d'Incendie et de Secours.",
                    realisation: [
                        "Création d'un MCD/MLD complet avec PowerAMC",
                        "Implémentation sur PostgreSQL avec contraintes d'intégrité",
                        "Développement de 8 classes métier en C# pour l'accès aux données",
                        "Création de méthodes Read() pour la visualisation dans des DataGrid",
                        "Implémentation du CRUD complet pour les commandes",
                        "Gestion des relations complexes (client, matériel, commande, transport)",
                        "Mise en place de contraintes CHECK et UNIQUE",
                        "Requêtes SQL optimisées pour la recherche et le filtrage"
                    ],
                    technos: ["PostgreSQL", "PowerAMC", "C#", "SQL"],
                    liensAC: {
                        "AC1": "Modèle de données normalisé avec MCD/MLD optimisé",
                        "AC2": "Contraintes d'intégrité référentielle, validation des données",
                        "AC3": "Interface de visualisation avec DataGrid, requêtes complexes",
                        "AC4": "Gestion de données variées : matériel, commandes, transport, utilisateurs"
                    },
                    images: [
                        "images/sdis/mcd.png",
                        "images/sdis/mld.png",
                        "images/sdis/requetes.png"
                    ],
                    documents: ["Rapport.pdf", "Cahier des charges.docx"]
                },
                {
                    titre: "SAE S2.04 : Analyse de données pour Foxconn Industries",
                    contexte: "Création d'une base de données de gestion de production avec génération de données de test et exploitation via requêtes SQL complexes.",
                    realisation: [
                        "Conception MCD/MLD pour un système de gestion de production",
                        "Génération de données de test : 80 annonces restaurants, 30 chauffeurs, 50 utilisateurs, 100 réservations",
                        "Implémentation de 20 requêtes SQL complexes (agrégations, jointures, sous-requêtes)",
                        "Utilisation de fonctions d'agrégation (COUNT, SUM, AVG, MIN, MAX)",
                        "Requêtes avec GROUP BY, HAVING, ORDER BY",
                        "Optimisation avec index et analyse des plans d'exécution",
                        "Génération de rapports et statistiques (temps de production, coûts, nombre de produits)",
                        "Utilisation de CASE pour créer des catégories dynamiques"
                    ],
                    technos: ["PostgreSQL", "SQL avancé", "PowerAMC", "Génération de données"],
                    liensAC: {
                        "AC1": "Modèle relationnel optimisé avec clés étrangères et contraintes",
                        "AC2": "Gestion des droits, validation des données, intégrité référentielle",
                        "AC3": "20 requêtes d'analyse pour la prise de décision métier",
                        "AC4": "Manipulation de données variées : produits, opérations, clients, commandes"
                    },
                    images: [
                        "images/foxconn/mcd-mld.png",
                        "images/foxconn/requetes-complexes.png",
                        "images/foxconn/statistiques.png"
                    ],
                    documents: ["MCD-MLD (1).docx", "insertion.docx"]
                },
                {
                    titre: "SAE S3/S4 UBER : Base de données complexe PostgreSQL",
                    contexte: "Conception et optimisation d'une base de données PostgreSQL pour gérer 3 flux métiers (VTC, livraison, vélos) avec 46 modèles.",
                    realisation: [
                        "Architecture Code First avec Entity Framework",
                        "46 modèles entités avec relations complexes (1-N, N-N, héritage)",
                        "Migrations automatiques pour la gestion du schéma",
                        "Index sur les colonnes fréquemment requêtées",
                        "Cryptage des mots de passe avec bcrypt",
                        "Stockage sécurisé des informations de carte bancaire",
                        "Requêtes optimisées avec LINQ et projections (80+ DTOs)",
                        "Transactions pour garantir la cohérence des données",
                        "Génération de jeu de données de test conséquent"
                    ],
                    technos: ["PostgreSQL", "Entity Framework Core", ".NET", "LINQ", "Bcrypt"],
                    liensAC: {
                        "AC1": "Modèle avec 46 entités optimisé, migrations, index performants",
                        "AC2": "Cryptage bcrypt, sécurisation des données bancaires, transactions",
                        "AC3": "80+ DTOs pour la restitution optimale, requêtes LINQ complexes",
                        "AC4": "Gestion de 3 métiers distincts : courses VTC, livraisons, réservations vélos"
                    },
                    images: [
                        "images/uber/modele-donnees-complet.png",
                        "images/uber/migrations.png",
                        "images/uber/securite-donnees.png"
                    ],
                    documents: ["S4.A.01.docx", "2024SAE3.01_Sujet1_UBER_V1.pdf"]
                }
            ],
            couleur: "#9b59b6"
        },
        {
            id: "c5",
            titre: "Conduire un projet",
            niveau: "Niveau 2 - Appliquer une démarche de suivi de projet",
            description: "Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.",
            apprentissagesCritiques: [
                "AC 1 : Identifier les processus présents dans une organisation",
                "AC 2 : Formaliser les besoins du client et de l'utilisateur",
                "AC 3 : Identifier les critères de faisabilité d'un projet informatique",
                "AC 4 : Définir et mettre en œuvre une démarche de suivi de projet"
            ],
            preuves: [
                {
                    titre: "SAE S2.04 : Cahier des charges SDIS 69",
                    contexte: "Élaboration d'un cahier des charges complet pour un système de gestion d'achats, incluant l'analyse des processus métier et la formalisation des besoins.",
                    realisation: [
                        "Analyse des besoins fonctionnels et non fonctionnels",
                        "Création de 3 diagrammes de collaboration pour les processus métier",
                        "Élaboration de diagrammes de use case avec descriptions textuelles",
                        "Réalisation de diagrammes de séquence pour les scénarios principaux",
                        "Création d'un diagramme de classe métier complet",
                        "Modélisation des processus d'achat de matériel et de véhicules",
                        "Définition des acteurs et de leurs rôles (sapeur, responsable, chef)",
                        "Spécification des exigences de performance et sécurité"
                    ],
                    technos: ["UML", "Diagrammes de collaboration", "Use Case", "Séquence"],
                    liensAC: {
                        "AC1": "Analyse des processus SDIS : achat matériel, gestion véhicules",
                        "AC2": "Formalisation via use cases, diagrammes de séquence, classes métier",
                        "AC3": "Évaluation de la faisabilité technique et organisationnelle",
                        "AC4": "Documentation structurée pour le suivi du projet"
                    },
                    images: [
                        "images/sdis/use-case.png",
                        "images/sdis/diagramme-sequence.png",
                        "images/sdis/classe-metier.png"
                    ],
                    documents: ["Cahier des charges.docx"]
                },
                {
                    titre: "SAE S3/S4 UBER : Gestion de projet Scrum avec Azure DevOps",
                    contexte: "Pilotage d'un projet de grande envergure (80+ User Stories) avec méthodologie Scrum et suivi sur Azure DevOps.",
                    realisation: [
                        "Découpage du projet en 5 sprints avec planning détaillé",
                        "Création de 80+ User Stories avec critères d'acceptation",
                        "Configuration d'Azure DevOps : Board, Sprints, Backlogs",
                        "Suivi des tâches avec durée prévue/réelle et statut",
                        "Organisation de sprint reviews (dont une en anglais)",
                        "Rétrospectives d'équipe pour amélioration continue",
                        "Gestion de la vélocité de l'équipe (4-5 personnes)",
                        "Utilisation de Git pour la gestion de version",
                        "Documentation : dossier technique, dossier de recette",
                        "Évaluation de la répartition du travail dans l'équipe"
                    ],
                    technos: ["Azure DevOps", "Scrum", "Git", "Méthodologie Agile"],
                    liensAC: {
                        "AC1": "Analyse des processus UBER : VTC, livraison, location vélos",
                        "AC2": "80+ User Stories formalisées avec critères d'acceptation",
                        "AC3": "Évaluation de faisabilité par sprint, gestion des priorités",
                        "AC4": "Suivi rigoureux : Azure DevOps, durées prévues/réelles, sprints"
                    },
                    images: [
                        "images/uber/azure-board.png",
                        "images/uber/sprint-backlog.png",
                        "images/uber/burndown-chart.png"
                    ],
                    documents: ["S4.A.01.docx", "2024SAE3.01_Sujet1_UBER_V1.pdf"]
                }
            ],
            couleur: "#f39c12"
        },
    ]
