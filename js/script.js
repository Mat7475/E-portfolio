// --- PARTICULES (Fond animé) ---
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    for (let i = 0; i < 40; i++) {
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

// --- INITIALISATION ---
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    generateProjects();    // Pour experiences.html
    generateCompetences(); // Pour competences.html
});

// --- PAGE EXPÉRIENCES ---
function generateProjects() {
    const grid = document.getElementById('projectsGrid');
    if(!grid || typeof experiences === 'undefined') return;
    
    grid.innerHTML = '';
    
    experiences.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        const missionsList = exp.missions 
            ? `<ul style="margin: 0.5rem 0 1rem 1.2rem; color: #cbd5e1;">${exp.missions.map(m => `<li style="margin-bottom:0.3rem;">${m}</li>`).join('')}</ul>` 
            : '';

        card.innerHTML = `
            <div class="project-header">
                <h3>${exp.title}</h3>
                <span style="font-size: 0.9rem; color: #94a3b8; display:block; margin-top:0.3rem;">${exp.date}</span>
            </div>
            <div class="project-body">
                <div style="margin-bottom: 1rem;">
                    <strong style="color: var(--primary);">Contexte :</strong>
                    <span style="font-style: italic; color: #cbd5e1; display:block; margin-top:0.2rem;">${exp.contexte}</span>
                </div>
                
                <p style="margin-bottom: 1rem;">${exp.description}</p>
                
                <strong style="color: var(--primary);">Missions :</strong>
                ${missionsList}

                <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.8rem;">
                        ${exp.technologies.map(t => `<span class="tag" style="background:rgba(255,255,255,0.1); padding:3px 8px; border-radius:4px; font-size:0.85rem;">${t}</span>`).join('')}
                    </div>
                    <div>
                        <small style="color: #94a3b8;">Compétences :</small>
                        ${exp.competences.map(c => `<span style="color: var(--accent); margin-left: 6px; font-weight:bold;">#${c}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- PAGE COMPÉTENCES (MISE À JOUR) ---
function generateCompetences() {
    const grid = document.getElementById('competencesGrid');
    if(!grid || typeof competences === 'undefined') return;

    grid.innerHTML = '';
    
    competences.forEach(comp => {
        const card = document.createElement('div');
        card.className = 'competence-card';
        card.style.borderLeft = `5px solid ${comp.couleur || '#6366f1'}`;

        // Construction du HTML pour les niveaux
        let niveauxHTML = '';
        if (comp.niveaux && comp.niveaux.length > 0) {
            niveauxHTML = comp.niveaux.map(niv => {
                
                // 1. Liste des AC
                const acHTML = niv.ac.map(ac => `
                    <div class="ac-item" style="margin-bottom: 0.5rem; color: #e2e8f0;">
                        <span style="color: ${comp.couleur}; font-weight:bold; margin-right:5px;">${ac.id} :</span> ${ac.text}
                    </div>
                `).join('');

                // 2. Liste des Preuves (Cartes détaillées)
                let preuvesHTML = '';
                if(niv.preuves && niv.preuves.length > 0) {
                    preuvesHTML = `<div class="preuves-container" style="margin-top: 1rem; display:grid; gap:1rem;">` + 
                    niv.preuves.map(preuve => `
                        <div class="preuve-card" style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
                            <h5 style="color: #fff; margin-bottom: 0.5rem; font-size: 1rem;">📂 ${preuve.titre}</h5>
                            <p style="color: #94a3b8; font-size: 0.9rem; font-style: italic; margin-bottom: 0.8rem;">${preuve.contexte}</p>
                            
                            <ul style="padding-left: 1.2rem; color: #cbd5e1; font-size: 0.9rem; margin-bottom: 0.8rem;">
                                ${preuve.realisation.map(r => `<li>${r}</li>`).join('')}
                            </ul>

                            <div class="preuve-techs" style="display:flex; flex-wrap:wrap; gap:0.4rem;">
                                ${preuve.technos.map(t => `<span style="background: ${comp.couleur}33; color: ${comp.couleur}; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem;">${t}</span>`).join('')}
                            </div>
                        </div>
                    `).join('') + `</div>`;
                }

                return `
                    <div class="niveau-block" style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                        <h4 style="color: ${comp.couleur}; margin-bottom: 1rem; font-size: 1.1rem;">
                            ${niv.niveau} : ${niv.titre}
                        </h4>
                        
                        <div class="ac-section" style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                            <strong style="display:block; margin-bottom:0.5rem; color:#94a3b8; font-size:0.9rem;">Apprentissages Critiques :</strong>
                            ${acHTML}
                        </div>

                        ${preuvesHTML ? `<strong style="display:block; margin:1rem 0 0.5rem; color:#94a3b8; font-size:0.9rem;">Preuves & Réalisations :</strong>` : ''}
                        ${preuvesHTML}
                    </div>
                `;
            }).join('');
        }

        card.innerHTML = `
            <div class="competence-header">
                <h2 style="color: ${comp.couleur}; margin: 0 0 0.5rem 0;">${comp.titre}</h2>
                <p style="color: #94a3b8; font-size: 0.95rem; line-height: 1.5;">${comp.description}</p>
            </div>
            <div class="competence-body">
                ${niveauxHTML}
            </div>
        `;
        grid.appendChild(card);
    });
}