const submitButton = document.getElementById('add-project-btn')
const formElement = document.getElementById('form')
const projectName = document.getElementById('project-name')
const projectImage = document.getElementById('project-image')
const projectDescription = document.getElementById('project-description')

formElement.addEventListener('submit', (e) => {
    e.preventDefault()

    if(!projectName.value || !projectImage.value || !projectDescription.value) {
        alert('Fill all fields')
        return
    }

    const projectObject = {
        'projectName': projectName.value,
        'projectImage': projectImage.value,
        'projectDescription': projectDescription.value

    }
    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    projects.push(projectObject);

    localStorage.setItem('projects', JSON.stringify(projects))

    alert('Project added')
    renderProjects();

})



function renderProjects() {
    const projectContainer = document.getElementById('projects-list');
    const noProjectContainer = document.getElementById('no-project-container');
    const projects = JSON.parse(localStorage.getItem('projects')) || [];

    projectContainer.innerHTML = '';

    if (projects.length === 0) {
        noProjectContainer.innerHTML = '<p style="text-align:center; margin-top: 50px; color: rgba(255,255,255, 0.5);">No projects to show</p>';
        return;
    }

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-thumbnail">
                <img src="${project.projectImage}" alt="Project Image">
            </div>
            <div class="project-description">
                <p class="project-description-title">${project.projectName}</p>
                <p class="project-description-subtitle">${project.projectDescription}</p>
            </div>
        `;
        projectContainer.appendChild(projectCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});



