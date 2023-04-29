import { LocalStorage } from "./localStorage"
import { Project } from "./project"

export class DisplayController {
    static displayProjects() {
        const projects = LocalStorage.getProjects()
        const cardContainer = document.querySelector('.card-container')
        const pageTitle = document.querySelector('.title')

        if (projects) {
            projects.forEach(project => {
                let projectDiv = document.createElement('div')
                let title = document.createElement('h3')
                title.textContent = project.name
                projectDiv.appendChild(title)
                cardContainer.appendChild(projectDiv)
            });
        } else {
            pageTitle.textContent = "No Projects Found"
        }
    }

    static mountProjectListener() {
        const projectForm = document.querySelector('.project-form')
        projectForm.addEventListener('submit', DisplayController.addProject)
    }

    static addProject(e) {
        e.preventDefault()
        const name = e.target.elements['name'].value
        new Project(name)
        this.displayProjects()
    }
}