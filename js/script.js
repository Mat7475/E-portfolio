// Création des particules
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
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
});

// Fonctions pour la page Projets (Experiences)
function generateProjects() {
    const grid = document.getElementById('projectsGrid');
    if(!grid || typeof projects === 'undefined') return;
    
    grid.innerHTML = '';
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-header">
                <h3>${project.title}</h3>
                <p style="opacity: 0.9; font-size: 0.9rem; margin-bottom:1rem; color:#94a3b8;">${project.date}</p>
            </div>
            <div class="project-body">
                <p style="margin-bottom:1rem;">${project.description}</p>
                <div style="margin-bottom: 1rem;">
                    <div style="margin-top: 0.5rem;">
                        ${project.technologies.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                </div>
                <div class="competence-tags">
                    <strong style="font-size:0.9rem;">Compétences :</strong><br>
                    <div style="margin-top:0.5rem;">
                    ${project.competences.map(c => `
                        <a href="competences.html" class="tag" style="text-decoration:none;">${c}</a>
                    `).join('')}
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Fonctions pour la page Compétences
function generateCompetences() {
    const grid = document.getElementById('competencesGrid');
    if(!grid || typeof competences === 'undefined') return;

    grid.innerHTML = '';
    competences.forEach(comp => {
        const card = document.createElement('div');
        card.className = 'competence-card';
        card.innerHTML = `
            <div class="competence-header" onclick="toggleCompetence('${comp.id}', this)">
                <h3 class="competence-title">${comp.title}</h3>
                <span class="toggle-icon">▼</span>
            </div>
            <p style="padding: 1rem 2rem;">${comp.description}</p>
            <div class="ac-list" id="ac-${comp.id}">
                ${comp.niveaux.map(niveau => `
                    <h4 style="margin-top: 1rem; color: var(--primary);">${niveau.niveau} : ${niveau.titre}</h4>
                    ${niveau.ac.map(ac => `
                        <div class="ac-item" onclick="showACDetails('${comp.id}', '${ac.id}', '${ac.text}', '${ac.preuves.join(', ')}')">
                            <strong>${ac.id}</strong> : ${ac.text}
                            <div style="margin-top: 0.5rem;">
                                ${ac.preuves.map(p => `<span class="proof-tag">${p}</span>`).join('')}
                            </div>
                        </div>
                    `).join('')}
                `).join('')}
            </div>
        `;
        grid.appendChild(card);
    });
}

function toggleCompetence(id, headerElement) {
    const list = document.getElementById(`ac-${id}`);
    const icon = headerElement.querySelector('.toggle-icon');
    list.classList.toggle('show');
    icon.classList.toggle('open');
}

// Modal Logic
function showACDetails(compId, acId, text, preuves) {
    const modal = document.getElementById('acModal');
    const modalBody = document.getElementById('modalBody');
    if(!modal) return;
    
    modalBody.innerHTML = `
        <h2>Détails Apprentissage Critique</h2>
        <h3 style="color: var(--primary); margin: 1rem 0;">${acId} : ${text}</h3>
        <h4>Preuves d'acquisition :</h4>
        <ul style="margin: 1rem 0 1rem 2rem; line-height: 2;">
            ${preuves.split(', ').map(p => `<li>${p}</li>`).join('')}
        </ul>
        <p style="margin-top: 1.5rem; padding: 1rem; background: rgba(99, 102, 241, 0.1); border-radius: 8px;">
            💡 <strong>Note</strong> : Documents détaillés disponibles dans le dossier annexes.
        </p>
    `;
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('acModal').classList.remove('active');
}

window.onclick = function(event) {
    const modal = document.getElementById('acModal');
    if (event.target == modal) {
        modal.classList.remove('active');
    }
}