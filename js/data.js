const competences = [
    {
        id: 'C1', title: 'Compétence 1 : Réaliser un développement', description: 'Développer une solution informatique pour un client',
        niveaux: [
            { niveau: 'Niveau 1', titre: 'Développer des applications simples',
                ac: [
                    { id: 'AC1', text: 'Implémenter des conceptions simples', preuves: ['SAÉ 1.01', 'Projet Annuaire'] },
                    { id: 'AC2', text: 'Élaborer des conceptions simples', preuves: ['SAÉ 2.01', 'Diagrammes UML'] },
                    { id: 'AC3', text: 'Faire des essais et évaluer', preuves: ['Tests unitaires', 'Jeux d\'essais'] },
                    { id: 'AC4', text: 'Développer des interfaces', preuves: ['IHM Web', 'App mobile'] }
                ]
            },
            { niveau: 'Niveau 2', titre: 'Partir des exigences',
                ac: [
                    { id: 'AC1', text: 'Élaborer et implémenter specs', preuves: ['SAÉ 3.A.01', 'Cahier des charges'] },
                    { id: 'AC2', text: 'Accessibilité et ergonomie', preuves: ['Standards W3C'] },
                    { id: 'AC3', text: 'Bonnes pratiques', preuves: ['Design patterns'] },
                    { id: 'AC4', text: 'Vérifier la qualité', preuves: ['Tests d\'intégration'] }
                ]
            }
        ]
    },
    {
        id: 'C2', title: 'Compétence 2 : Optimiser des applications', description: 'Proposer des applications optimisées',
        niveaux: [
            { niveau: 'Niveau 1', titre: 'Algorithmes', ac: [{ id: 'AC1', text: 'Analyser un problème', preuves: ['Tri', 'Structures'] }] }
        ]
    },
    {
        id: 'C3', title: 'Compétence 3 : Administrer des systèmes', description: 'Installer et configurer',
        niveaux: [
            { niveau: 'Niveau 1', titre: 'Poste de travail', ac: [{ id: 'AC1', text: 'Identifier les composants', preuves: ['Architecture'] }] }
        ]
    },
    {
        id: 'C4', title: 'Compétence 4 : Gérer des données', description: 'Concevoir et gérer les données',
        niveaux: [
            { niveau: 'Niveau 1', titre: 'Concevoir BDD', ac: [{ id: 'AC1', text: 'Interroger BDD', preuves: ['SQL'] }] }
        ]
    },
    {
        id: 'C5', title: 'Compétence 5 : Conduire un projet', description: 'Organiser et piloter',
        niveaux: [
            { niveau: 'Niveau 1', titre: 'Besoins métiers', ac: [{ id: 'AC1', text: 'Besoins client', preuves: ['Recueil'] }] }
        ]
    },
    {
        id: 'C6', title: 'Compétence 6 : Collaborer en équipe', description: 'Travailler efficacement',
        niveaux: [
            { niveau: 'Niveau 1', titre: 'Aptitudes', ac: [{ id: 'AC1', text: 'Écosystème numérique', preuves: ['Veille'] }] }
        ]
    }
];

const projects = [
    {
        title: 'Application de Gestion IUT', description: 'Développement d\'une application web pour gérer les étudiants',
        date: 'S2 - 2023', competences: ['C1', 'C4', 'C5', 'C6'], technologies: ['Java', 'SQL', 'HTML/CSS', 'Git']
    },
    {
        title: 'Site E-commerce Fromages', description: 'Création d\'un site de vente en ligne avec panier',
        date: 'S2 - 2023', competences: ['C1', 'C4', 'C5'], technologies: ['JavaScript', 'Node.js', 'MongoDB', 'React']
    },
    {
        title: 'Application Mobile Météo', description: 'Application mobile avec API météo',
        date: 'S4 - 2024', competences: ['C1', 'C2', 'C4'], technologies: ['React Native', 'API REST', 'JSON']
    },
    {
        title: 'Projet Graphes - Optimisation', description: 'Résolution de problèmes d\'optimisation',
        date: 'S3 - 2024', competences: ['C2'], technologies: ['Python', 'Algorithmes']
    },
    {
        title: 'Infrastructure Réseau Virtuelle', description: 'Mise en place d\'une architecture réseau',
        date: 'S4 - 2024', competences: ['C3', 'C5'], technologies: ['Docker', 'Linux']
    }
];