// --- PARTICULES (Fond animé) ---
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    for (let i = 0; i < 400; i++) {
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
    generateProjects();
    generateCompetences();
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

        const imagesHtml = (exp.images && exp.images.length > 0)
            ? `<div style="margin: 1rem 0; display: flex; gap: 10px; flex-wrap: wrap;">
                 ${exp.images.map(img => `<img src="${img}" alt="Image ${exp.title}" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1);">`).join('')}
               </div>`
            : '';

        let actionsHtml = '';
        const hasDocs = exp.documents && exp.documents.length > 0;
        const hasLink = exp.liens && exp.liens.length > 0;

        if (hasDocs || hasLink) {
            actionsHtml += `<div style="margin: 1rem 0; display: flex; gap: 10px; flex-wrap: wrap;">`;
            
            if (hasDocs) {
                actionsHtml += exp.documents.map(doc => 
                    `<a href="${doc.url}" target="_blank" class="btn-action" style="display: inline-flex; align-items: center; padding: 8px 16px; background-color: rgba(255,255,255,0.1); color: white; text-decoration: none; border-radius: 4px; font-size: 0.9rem; border: 1px solid rgba(255,255,255,0.2); transition: background 0.3s;">
                        ${doc.titre}
                    </a>`
                ).join('');
            }

            if (hasLink) {
                let linkHref = exp.liens.startsWith('http') ? exp.liens : `https://${exp.liens}`;
                actionsHtml += `
                    <a href="${linkHref}" target="_blank" class="btn-action" style="display: inline-flex; align-items: center; padding: 8px 16px; background-color: var(--primary, #3b82f6); color: white; text-decoration: none; border-radius: 4px; font-size: 0.9rem; font-weight: bold;">
                        🔗 Voir le projet
                    </a>`;
            }
            actionsHtml += `</div>`;
        }

        card.innerHTML = `
            <div class="project-header">
                <div class="project-header-content">
                    <h3 id="${exp.title}">${exp.title}</h3>
                    <span style="font-size: 0.9rem; color: #94a3b8; display:block; margin-top:0.3rem;">${exp.date}</span>
                </div>
                <div class="project-toggle-icon">▼</div>
            </div>
            <div class="project-body">
                <div style="margin-bottom: 1rem;">
                    <strong style="color: var(--primary);">Contexte :</strong>
                    <span style="font-style: italic; color: #cbd5e1; display:block; margin-top:0.2rem;">${exp.contexte}</span>
                </div>
                
                <p style="margin-bottom: 1rem;">${exp.description}</p>
                
                <strong style="color: var(--primary);">Missions :</strong>
                ${missionsList}

                ${imagesHtml}

                ${actionsHtml}

                <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.8rem;">
                        ${exp.technologies.map(t => `<span class="tag" style="background:rgba(255,255,255,0.1); padding:3px 8px; border-radius:4px; font-size:0.85rem;">${t}</span>`).join('')}
                    </div>
                    <div>
                        <small style="color: #94a3b8;">Compétences :</small>
                        ${exp.competences.map(c => `<a href="#${c}"><span style="color: var(--accent); margin-left: 6px; font-weight:bold;">- ${c}</span></a>`).join('')}
                    </div>
                </div>
            </div>
        `;
        
        // Ajouter l'événement de clic sur le header pour déplier/replier
        const header = card.querySelector('.project-header');
        header.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
        
        grid.appendChild(card);
    });
}


// --- PAGE COMPÉTENCES (AVEC SYSTÈME DE DÉPLIAGE) ---
function generateCompetences() {
    const grid = document.getElementById('competencesGrid');
    if(!grid || typeof competences === 'undefined') return;

    grid.innerHTML = '';
    
    competences.forEach(comp => {
        const card = document.createElement('div');
        card.className = 'competence-card';
        card.id = comp.nav;
        card.style.borderLeft = `5px solid ${comp.couleur || '#6366f1'}`;

        let niveauxHTML = '';
        if (comp.niveaux && comp.niveaux.length > 0) {
            niveauxHTML = comp.niveaux.map(niv => {
                const acHTML = niv.ac.map(ac => `
                    <div class="ac-item" style="margin-bottom: 0.5rem; color: #e2e8f0;">
                        <span style="color: ${comp.couleur}; font-weight:bold; margin-right:5px;">${ac.id} :</span> ${ac.text}
                    </div>
                `).join('');

                let preuvesHTML = '';
                if(niv.preuves && niv.preuves.length > 0) {
                    preuvesHTML = `<div class="preuves-container" style="margin-top: 1rem; display:grid; gap:1rem;">` + 
                    niv.preuves.map(preuve => `<a href="#${preuve.titre}">
                        <div class="preuve-card" style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
                             <h5 style="color: #fff; margin-bottom: 0.5rem; font-size: 1rem;" >📂 ${preuve.titre}</h5>
                            <p style="color: #94a3b8; font-size: 0.9rem; font-style: italic; margin-bottom: 0.8rem;">${preuve.contexte}</p>
                            
                            <ul style="padding-left: 1.2rem; color: #cbd5e1; font-size: 0.9rem; margin-bottom: 0.8rem;">
                                ${preuve.realisation.map(r => `<li>${r}</li>`).join('')}
                            </ul>

                            <div class="preuve-techs" style="display:flex; flex-wrap:wrap; gap:0.4rem;">
                                ${preuve.technos.map(t => `<span style="background: ${comp.couleur}33; color: ${comp.couleur}; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem;">${t}</span>`).join('')}
                            </div>
                            <div class="preuve-techs" style="display:flex; flex-wrap:wrap; gap:0.4rem;">
                                ${preuve.ac.map(t => `<span style="background: ${comp.couleur}33; color: ${comp.couleur};margin-top:0.5rem; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem;">${t}</span>`).join('')}
                            </div>
                        </div></a>
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

                        ${preuvesHTML ? `<strong style="display:block; margin:1rem 0 0.5rem; color:#94a3b8; font-size:0.9rem;">Preuve & Réalisation (cliquez pour plus de détails):</strong>` : ''}
                        ${preuvesHTML}
                    </div>
                `;
            }).join('');
        }

        card.innerHTML = `
            <div class="competence-header">
                <div class="competence-header-content" >
                    <h2 style="color: ${comp.couleur}; margin: 0 0 0.5rem 0;">${comp.titre}</h2>
                    <p style="color: #94a3b8; font-size: 0.95rem; line-height: 1.5;">${comp.description}</p>
                </div>
                <div class="toggle-icon">▼</div>
            </div>
            <div class="competence-body">
                ${niveauxHTML}
            </div>
        `;
        
        // Ajouter l'événement de clic sur le header pour déplier/replier
        const header = card.querySelector('.competence-header');
        header.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
        
        grid.appendChild(card);
    });
}