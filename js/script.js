// Création des particules (Pas de changement ici, c'est ok)
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    for (let i = 0; i < 50; i++) { // Réduit à 50 pour la perf, 700 c'est beaucoup
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = particle.style.height = (Math.random() * 5 + 2) + 'px';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.background = 'rgba(99, 102, 241, 0.5)';
        container.appendChild(particle);
    }
}

// Initialisation globale
window.addEventListener('DOMContentLoaded', () => {
    createParticles();
    generateProjects();    // Appel pour experiences.html
    generateCompetences(); // Appel pour competences.html
});

// --- GESTION DE LA PAGE EXPÉRIENCES ---

function generateProjects() {
    // On cible la grille ou la liste des projets
    const grid = document.getElementById('projectsGrid');
    
    // Vérification que les données existent (experiences vient de data.js)
    if(!grid || typeof experiences === 'undefined') return;
    
    grid.innerHTML = '';
    
    experiences.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Génération de la liste des missions (HTML)
        const missionsHTML = exp.missions 
            ? `<ul style="margin: 0.5rem 0 0.5rem 1.2rem; color: #cbd5e1;">
                 ${exp.missions.map(m => `<li>${m}</li>`).join('')}
               </ul>` 
            : '';

        card.innerHTML = `
            <div class="project-header">
                <h3>${exp.title}</h3>
                <span class="project-date">${exp.date}</span>
            </div>
            
            <div class="project-body">
                <div style="margin-bottom: 1rem;">
                    <strong style="color: var(--primary);">Contexte :</strong>
                    <p style="font-style: italic; color: #94a3b8; margin-top: 0.2rem;">${exp.contexte}</p>
                </div>

                <p style="margin-bottom:1rem;">${exp.description}</p>
                
                <div style="margin-bottom: 1.5rem;">
                    <strong style="color: var(--primary);">Missions & Réalisations :</strong>
                    ${missionsHTML}
                </div>

                <div style="margin-bottom: 1rem;">
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${exp.technologies.map(t => `<span class="tag tech-tag">${t}</span>`).join('')}
                    </div>
                </div>

                <div class="competence-tags" style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1rem;">
                    <strong style="font-size:0.9rem; color: #94a3b8;">Compétences mobilisées :</strong>
                    <div style="margin-top:0.5rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${exp.competences.map(c => `
                        <span class="tag comp-tag">${c}</span>
                    `).join('')}
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- GESTION DE LA PAGE COMPÉTENCES ---

function generateCompetences() {
    const grid = document.getElementById('competencesGrid');
    if(!grid || typeof competences === 'undefined') return;

    grid.innerHTML = '';
    competences.forEach(comp => {
        const card = document.createElement('div');
        card.className = 'competence-card';
        
        // Génération HTML des niveaux et AC
        const niveauxHTML = comp.niveaux.map(niveau => `
            <div class="niveau-block">
                <h4 style="margin-top: 1.5rem; color: var(--primary); border-bottom: 1px solid var(--primary); padding-bottom: 0.5rem;">
                    ${niveau.niveau} : ${niveau.titre}
                </h4>
                <div class="ac-container">
                    ${niveau.ac.map(ac => {
                        // On prépare les données pour le onclick (échappement des quotes)
                        const acIdSafe = ac.id;
                        const acTextSafe = ac.text.replace(/'/g, "&apos;");
                        // On transforme le tableau de preuves en string
                        const preuvesSafe = ac.preuves.join('||'); 
                        
                        return `
                        <div class="ac-item" onclick="prepareAndShowModal('${comp.id}', '${acIdSafe}')">
                            <div class="ac-header">
                                <strong>${ac.id}</strong>
                                <span>${ac.text}</span>
                            </div>
                            <div class="ac-badges">
                                ${ac.preuves.map(p => `<span class="proof-badge">📄 ${p}</span>`).join('')}
                            </div>
                        </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `).join('');

        card.innerHTML = `
            <div class="competence-header" onclick="toggleCompetence('${comp.id}', this)">
                <h3 class="competence-title">${comp.title}</h3>
                <span class="toggle-icon">▼</span>
            </div>
            <div class="competence-content" id="content-${comp.id}">
                <p class="competence-desc">${comp.description}</p>
                ${niveauxHTML}
            </div>
        `;
        grid.appendChild(card);
    });
}

function toggleCompetence(id, headerElement) {
    const content = document.getElementById(`content-${id}`);
    const icon = headerElement.querySelector('.toggle-icon');
    
    // Toggle simple via classe CSS
    content.classList.toggle('active'); // Assurez-vous d'avoir du CSS pour .active { display: block; }
    icon.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
}

// Nouvelle fonction pour trouver les données et ouvrir la modale
function prepareAndShowModal(compId, acId) {
    // Retrouver les données dans le tableau data.js
    const comp = competences.find(c => c.id === compId);
    if (!comp) return;

    let targetAc = null;
    for (const niv of comp.niveaux) {
        const found = niv.ac.find(a => a.id === acId);
        if (found) {
            targetAc = found;
            break;
        }
    }

    if (targetAc) {
        // Appelle la fonction d'affichage avec les données brutes
        showACDetails(targetAc);
    }
}

function showACDetails(acData) {
    const modal = document.getElementById('acModal');
    const modalBody = document.getElementById('modalBody');
    if(!modal) return;

    // Construction du HTML pour les projets spécifiques à cet AC
    let projetsHTML = '';
    if (acData.projets && acData.projets.length > 0) {
        projetsHTML = `
            <h4 style="margin-top: 2rem; color: #a5b4fc; border-bottom: 1px solid #334155; padding-bottom: 0.5rem;">
                📂 Projets illustrant cet apprentissage
            </h4>
            <div class="modal-projects-list">
                ${acData.projets.map(projet => `
                    <div class="modal-project-item">
                        <h5 style="color: var(--primary); font-size: 1.1rem; margin-bottom: 0.5rem;">${projet.titre}</h5>
                        <p style="font-style: italic; font-size: 0.9rem; color: #94a3b8; margin-bottom: 1rem;">${projet.contexte}</p>
                        
                        <div style="margin-bottom: 1rem;">
                            <strong>Ce que j'ai réalisé :</strong>
                            <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                                ${projet.realisations.map(r => `<li>${r}</li>`).join('')}
                            </ul>
                        </div>

                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                            ${projet.technologies.map(t => `<span class="tag" style="font-size: 0.8rem;">${t}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        projetsHTML = `<p style="margin-top:1rem; color:#64748b;">Aucun projet spécifique détaillé pour cet AC.</p>`;
    }

    modalBody.innerHTML = `
        <h2 style="color: var(--primary);">${acData.id}</h2>
        <h3 style="margin-bottom: 1.5rem; color: white;">${acData.text}</h3>
        
        <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 8px;">
            <strong>Preuves globales :</strong>
            <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                ${acData.preuves.map(p => `<li>${p}</li>`).join('')}
            </ul>
        </div>
        
        ${projetsHTML}
    `;

    modal.classList.add('active');
}

// Fermeture modale
function closeModal() {
    const modal = document.getElementById('acModal');
    if (modal) modal.classList.remove('active');
}

// Fermeture au clic en dehors
window.onclick = function(event) {
    const modal = document.getElementById('acModal');
    if (event.target == modal) {
        modal.classList.remove('active');
    }
}