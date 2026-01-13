const competences = [
    {
        id: 'C1',
        title: 'Compétence 1 : Réaliser un développement d\'application',
        description: 'Développer — c\'est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client.',
        niveaux: [
            {
                niveau: 'Niveau 1',
                titre: 'Développer des applications informatiques simples',
                ac: [
                    { id: 'AC1.1', text: 'Implémenter des conceptions simples', preuves: ['SAÉ 1.01', 'R1.01 - Initiation au dev', 'Projet Annuaire'] },
                    { id: 'AC1.2', text: 'Élaborer des conceptions simples', preuves: ['SAÉ 2.01', 'R2.01 - Dev objets', 'Diagrammes UML'] },
                    { id: 'AC1.3', text: 'Faire des essais et évaluer leurs résultats en regard des spécifications', preuves: ['SAÉ 1.01', 'R2.03 - Qualité de dev', 'Tests unitaires'] },
                    { id: 'AC1.4', text: 'Développer des interfaces utilisateurs', preuves: ['SAÉ 2.01', 'R1.02 - Dev interfaces web', 'R2.02 - IHM'] }
                ]
            },
            {
                niveau: 'Niveau 2',
                titre: 'Partir des exigences et aller jusqu\'à une application complète',
                ac: [
                    { id: 'AC2.1', text: 'Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences', preuves: ['SAÉ 3.A.01', 'R3.03 - Analyse', 'Cahier des charges'] },
                    { id: 'AC2.2', text: 'Appliquer des principes d\'accessibilité et d\'ergonomie', preuves: ['SAÉ 3.A.01', 'R4.A.10 - Complément web', 'Standards W3C/WAI'] },
                    { id: 'AC2.3', text: 'Adopter de bonnes pratiques de conception et de programmation', preuves: ['SAÉ 4.A.01', 'R3.04 - Qualité de dev', 'Design patterns'] },
                    { id: 'AC2.4', text: 'Vérifier et valider la qualité de l\'application par les tests', preuves: ['SAÉ 3.A.01', 'R4.02 - Qualité de dev', 'Tests d\'intégration'] }
                ]
            },
            {
                niveau: 'Niveau 3',
                titre: 'Adapter des applications sur un ensemble de supports',
                ac: [
                    { id: 'AC3.1', text: 'Choisir et implémenter les architectures adaptées', preuves: ['SAÉ 5.A.01', 'R5.A.05 - Programmation avancée', 'R5.A.09 - Virtualisation avancée'] },
                    { id: 'AC3.2', text: 'Faire évoluer une application existante', preuves: ['SAÉ 6.A.01', 'R6.A.06 - Maintenance applicative', 'Refactoring'] },
                    { id: 'AC3.3', text: 'Intégrer des solutions dans un environnement de production', preuves: ['SAÉ 5.A.01', 'R5.A.07 - Automatisation', 'CI/CD'] }
                ]
            }
        ]
    },
    {
        id: 'C2',
        title: 'Compétence 2 : Optimiser des applications',
        description: 'Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d\'exécution, précision, consommation de ressources…',
        niveaux: [
            {
                niveau: 'Niveau 1',
                titre: 'Appréhender et construire des algorithmes',
                ac: [
                    { id: 'AC1.1', text: 'Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données…)', preuves: ['SAÉ 1.02', 'R1.01 - Initiation dev', 'Analyse problèmes'] },
                    { id: 'AC1.2', text: 'Comparer des algorithmes pour des problèmes classiques (tris simples, recherche…)', preuves: ['SAÉ 1.02', 'R2.09 - Méthodes numériques', 'Comparaison algos'] },
                    { id: 'AC1.3', text: 'Formaliser et mettre en œuvre des outils mathématiques pour l\'informatique', preuves: ['SAÉ 2.02', 'R1.06 - Maths discrètes', 'R2.07 - Graphes'] }
                ]
            },
            {
                niveau: 'Niveau 2',
                titre: 'Sélectionner les algorithmes adéquats pour répondre à un problème donné',
                ac: [
                    { id: 'AC2.1', text: 'Choisir des structures de données complexes adaptées au problème', preuves: ['SAÉ 3.A.01', 'R3.02 - Dév. efficace', 'R4.A.12 - Automates'] },
                    { id: 'AC2.2', text: 'Utiliser des techniques algorithmiques adaptées pour des problèmes complexes', preuves: ['SAÉ 4.A.01', 'R4.04 - Méthodes d\'optimisation', 'Recherche opérationnelle'] },
                    { id: 'AC2.3', text: 'Comprendre les enjeux et moyens de sécurisation des données et du code', preuves: ['SAÉ 3.A.01', 'R3.09 - Cryptographie', 'Sécurité'] },
                    { id: 'AC2.4', text: 'Évaluer l\'impact environnemental et sociétal des solutions proposées', preuves: ['SAÉ 4.A.01', 'R5.A.13 - Éco durable', 'Green computing'] }
                ]
            },
            {
                niveau: 'Niveau 3',
                titre: 'Analyser et optimiser des applications',
                ac: [
                    { id: 'AC3.1', text: 'Anticiper les résultats de diverses métriques (temps d\'exécution, occupation mémoire…)', preuves: ['SAÉ 5.A.01', 'R5.A.04 - Qualité algorithmique', 'Profiling'] },
                    { id: 'AC3.2', text: 'Profiler, analyser et justifier le comportement d\'un code existant', preuves: ['SAÉ 6.A.01', 'R5.A.08 - Qualité de dev', 'Analyse performances'] },
                    { id: 'AC3.3', text: 'Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d\'application', preuves: ['SAÉ 5.A.01', 'R5.A.12 - Modélisations math', 'IA, imagerie, jeux'] }
                ]
            }
        ]
    },
    {
        id: 'C3',
        title: 'Compétence 3 : Administrer des systèmes informatiques communicants complexes',
        description: 'Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux.',
        niveaux: [
            {
                niveau: 'Niveau 1',
                titre: 'Installer et configurer un poste de travail',
                ac: [
                    { id: 'AC1.1', text: 'Identifier les différents composants (matériels et logiciels) d\'un système numérique', preuves: ['SAÉ 1.03', 'R1.03 - Intro archi', 'Architecture PC'] },
                    { id: 'AC1.2', text: 'Utiliser les fonctionnalités de base d\'un système multitâches / multiutilisateurs', preuves: ['SAÉ 1.03', 'R1.04 - Intro systèmes', 'Linux/Windows'] },
                    { id: 'AC1.3', text: 'Installer et configurer un système d\'exploitation et des outils de développement', preuves: ['SAÉ 1.03', 'R1.04 - Intro systèmes', 'Installation poste'] },
                    { id: 'AC1.4', text: 'Configurer un poste de travail dans un réseau d\'entreprise', preuves: ['SAÉ 2.03', 'R2.04 - Réseau bas niveau', 'Configuration réseau'] }
                ]
            },
            {
                niveau: 'Niveau 2',
                titre: 'Déployer des services dans une architecture réseau',
                ac: [
                    { id: 'AC2.1', text: 'Concevoir et développer des applications communicantes', preuves: ['SAÉ 3.A.01', 'R3.05 - Prog système', 'Client-serveur'] },
                    { id: 'AC2.2', text: 'Utiliser des serveurs et des services réseaux virtualisés', preuves: ['SAÉ 4.A.01', 'R4.A.08 - Virtualisation', 'Docker/Conteneurs'] },
                    { id: 'AC2.3', text: 'Sécuriser les services et données d\'un système', preuves: ['SAÉ 3.A.01', 'R3.09 - Cryptographie', 'Sécurité SI'] }
                ]
            }
        ]
    },
    {
        id: 'C4',
        title: 'Compétence 4 : Gérer des données de l\'information',
        description: 'Concevoir, gérer, administrer et exploiter les données de l\'entreprise et mettre à disposition toutes les informations pour un bon pilotage.',
        niveaux: [
            {
                niveau: 'Niveau 1',
                titre: 'Concevoir et mettre en place une base de données à partir d\'un cahier des charges client',
                ac: [
                    { id: 'AC1.1', text: 'Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)', preuves: ['SAÉ 1.04', 'R1.05 - Intro BD', 'SQL'] },
                    { id: 'AC1.2', text: 'Visualiser des données', preuves: ['SAÉ 2.04', 'R2.06 - Exploitation BD', 'R2.08 - Stats descriptives'] },
                    { id: 'AC1.3', text: 'Concevoir une base de données relationnelle à partir d\'un cahier des charges', preuves: ['SAÉ 1.04', 'R1.05 - Intro BD', 'Modèle conceptuel'] }
                ]
            },
            {
                niveau: 'Niveau 2',
                titre: 'Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité',
                ac: [
                    { id: 'AC2.1', text: 'Optimiser les modèles de données de l\'entreprise', preuves: ['SAÉ 4.A.01', 'R3.07 - SQL programmation', 'R4.03 - Qualité non-relationnel'] },
                    { id: 'AC2.2', text: 'Assurer la confidentialité des données (intégrité et sécurité)', preuves: ['SAÉ 3.A.01', 'R3.09 - Cryptographie', 'RGPD'] },
                    { id: 'AC2.3', text: 'Organiser la restitution de données à travers la programmation et la visualisation', preuves: ['SAÉ 3.A.01', 'R3.07 - SQL programmation', 'Visualisation'] },
                    { id: 'AC2.4', text: 'Manipuler des données hétérogènes', preuves: ['SAÉ 4.A.01', 'R4.03 - Qualité non-relationnel', 'NoSQL'] }
                ]
            }
        ]
    },
    {
        id: 'C5',
        title: 'Compétence 5 : Conduire un projet',
        description: 'Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.',
        niveaux: [
            {
                niveau: 'Niveau 1',
                titre: 'Identifier les besoins métiers des clients et des utilisateurs',
                ac: [
                    { id: 'AC1.1', text: 'Appréhender les besoins du client et de l\'utilisateur', preuves: ['SAÉ 1.05', 'R1.08 - Intro gestion orga', 'Recueil besoins'] },
                    { id: 'AC1.2', text: 'Mettre en place les outils de gestion de projet', preuves: ['SAÉ 2.05', 'R2.10 - Intro GSI', 'Gantt, Pert'] },
                    { id: 'AC1.3', text: 'Identifier les acteurs et les différentes phases d\'un cycle de développement', preuves: ['SAÉ 1.05', 'R2.10 - Intro GSI', 'Cycle en V, Agile'] }
                ]
            },
            {
                niveau: 'Niveau 2',
                titre: 'Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs',
                ac: [
                    { id: 'AC2.1', text: 'Identifier les processus présents dans une organisation en vue d\'améliorer les systèmes d\'information', preuves: ['SAÉ 3.A.01', 'R3.10 - Management SI', 'BPMN'] },
                    { id: 'AC2.2', text: 'Formaliser les besoins du client et de l\'utilisateur', preuves: ['SAÉ 3.A.01', 'R3.03 - Analyse', 'Cas d\'utilisation'] },
                    { id: 'AC2.3', text: 'Identifier les critères de faisabilité d\'un projet informatique', preuves: ['SAÉ 4.A.01', 'R4.02 - Qualité dev', 'R4.A.09 - Management avancé'] },
                    { id: 'AC2.4', text: 'Définir et mettre en œuvre une démarche de suivi de projet', preuves: ['SAÉ 3.A.01', 'R3.10 - Management SI', 'Méthodes Agiles'] }
                ]
            }
        ]
    },
    {
        id: 'C6',
        title: 'Compétence 6 : Collaborer au sein d\'une équipe informatique',
        description: 'Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.',
        niveaux: [
            {
                niveau: 'Niveau 1',
                titre: 'Identifier ses aptitudes pour travailler dans une équipe',
                ac: [
                    { id: 'AC1.1', text: 'Appréhender l\'écosystème numérique', preuves: ['SAÉ 1.06', 'R1.08 - Intro gestion orga', 'R1.09 - Intro économie'] },
                    { id: 'AC1.2', text: 'Découvrir les aptitudes requises selon les différents secteurs informatiques', preuves: ['SAÉ 2.06', 'R2.14 - PPP', 'Métiers informatique'] },
                    { id: 'AC1.3', text: 'Identifier les statuts, les fonctions et les rôles de chaque membre d\'une équipe pluridisciplinaire', preuves: ['SAÉ 2.06', 'R2.13 - Comm technique', 'Organisation équipe'] },
                    { id: 'AC1.4', text: 'Acquérir les compétences interpersonnelles pour travailler en équipe', preuves: ['SAÉ 1.06', 'R1.11 - Bases comm', 'Soft skills'] }
                ]
            },
            {
                niveau: 'Niveau 2',
                titre: 'Situer son rôle et ses missions au sein d\'une équipe informatique',
                ac: [
                    { id: 'AC2.1', text: 'Comprendre la diversité, la structure et la dimension de l\'informatique dans une organisation (ESN, DSI…)', preuves: ['SAÉ 3.A.01', 'R3.10 - Management SI', 'Stage S4'] },
                    { id: 'AC2.2', text: 'Appliquer une démarche pour intégrer une équipe informatique au sein d\'une organisation', preuves: ['SAÉ 4.A.01', 'R3.13 - Comm pro', 'Stage S4'] },
                    { id: 'AC2.3', text: 'Mobiliser les compétences interpersonnelles pour intégrer une équipe informatique', preuves: ['SAÉ 3.A.01', 'R4.06 - Comm interne', 'Travail équipe'] },
                    { id: 'AC2.4', text: 'Rendre compte de son activité professionnelle', preuves: ['SAÉ 4.A.01', 'R4.07 - PPP', 'Rapport stage'] }
                ]
            },
            {
                niveau: 'Niveau 3',
                titre: 'Manager une équipe informatique',
                ac: [
                    { id: 'AC3.1', text: 'Organiser et partager une veille numérique', preuves: ['SAÉ 5.A.01', 'R5.03 - Communication', 'Veille techno'] },
                    { id: 'AC3.2', text: 'Identifier les enjeux de l\'économie de l\'innovation numérique', preuves: ['SAÉ 6.A.01', 'R6.01 - Entrepreneuriat', 'R5.A.13 - Éco durable'] },
                    { id: 'AC3.3', text: 'Guider la conduite du changement informatique au sein d\'une organisation', preuves: ['SAÉ 6.A.01', 'R6.03 - Comm organisation', 'Conduite changement'] },
                    { id: 'AC3.4', text: 'Accompagner le management de projet informatique', preuves: ['SAÉ 5.A.01', 'R5.01 - Initiation management', 'Lead tech'] }
                ]
            }
        ]
    }
];

const projects = [
    {
        title: 'Application de Gestion IUT',
        description: 'Développement d\'une application web complète pour gérer les inscriptions, notes et contrôles des étudiants. Interface Master/Detail avec base de données relationnelle.',
        date: 'S2 - 2024',
        competences: ['C1', 'C4', 'C5', 'C6'],
        technologies: ['Java', 'SQL', 'JavaFX', 'JDBC', 'Git']
    },
    {
        title: 'Site E-commerce Fromages Auvergnats',
        description: 'Création d\'un site de vente en ligne avec gestion du catalogue, panier, processus de commande complet et paiement sécurisé.',
        date: 'S2 - 2024',
        competences: ['C1', 'C4', 'C5'],
        technologies: ['JavaScript', 'PHP', 'MySQL', 'HTML/CSS', 'MVC']
    },
    {
        title: 'Application Mobile Météo',
        description: 'Application mobile cross-platform consommant une API REST météo avec géolocalisation et prévisions sur 7 jours.',
        date: 'S4 - 2025',
        competences: ['C1', 'C2', 'C4'],
        technologies: ['React Native', 'API REST', 'JSON', 'Geolocation']
    },
    {
        title: 'Projet Graphes - Optimisation de Tournées',
        description: 'Résolution de problèmes d\'optimisation (voyageur de commerce, coloriage de graphes) avec comparaison d\'algorithmes heuristiques.',
        date: 'S3 - 2024',
        competences: ['C2'],
        technologies: ['Python', 'NetworkX', 'Matplotlib', 'Algorithmes génétiques']
    },
    {
        title: 'Infrastructure Réseau Virtualisée',
        description: 'Mise en place d\'une architecture réseau complète avec virtualisation, services (DNS, DHCP, web, mail) et sécurisation.',
        date: 'S4 - 2025',
        competences: ['C3', 'C5'],
        technologies: ['Docker', 'Linux', 'Apache', 'Nginx', 'SSL/TLS']
    },
    {
        title: 'Plateforme de Développement Collaboratif',
        description: 'Installation et configuration d\'un service GIT avec intégration continue, gestion de branches et déploiement automatisé.',
        date: 'S3 - 2024',
        competences: ['C3', 'C5', 'C6'],
        technologies: ['GitLab', 'CI/CD', 'Docker', 'Jenkins']
    },
    {
        title: 'Base de Données Décisionnelle',
        description: 'Conception et optimisation d\'une base de données avec index, procédures stockées, triggers et visualisation de données statistiques.',
        date: 'S3 - 2024',
        competences: ['C4', 'C2'],
        technologies: ['PostgreSQL', 'PL/SQL', 'Python', 'Pandas', 'Tableau']
    },
    {
        title: 'Application Full-Stack Framework Avancé',
        description: 'Développement d\'une application web moderne avec architecture microservices, authentification JWT et API REST.',
        date: 'S5 - 2025',
        competences: ['C1', 'C2', 'C4', 'C6'],
        technologies: ['Spring Boot', 'Angular', 'MongoDB', 'Docker', 'Kubernetes']
    },
    {
        title: 'Projet IA - Classification d\'Images',
        description: 'Implémentation d\'un système de classification d\'images utilisant des réseaux de neurones convolutifs avec TensorFlow.',
        date: 'S5 - 2025',
        competences: ['C2'],
        technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy']
    },
    {
        title: 'Refactoring et Maintenance Applicative',
        description: 'Analyse, documentation et refactoring d\'une application legacy avec mise en place de tests unitaires et d\'intégration.',
        date: 'S6 - 2026',
        competences: ['C1', 'C2', 'C6'],
        technologies: ['C#', '.NET', 'NUnit', 'SonarQube', 'Design Patterns']
    }
];