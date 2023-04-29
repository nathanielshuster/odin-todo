import { LocalStorage } from "./localStorage"
import { Project } from "./project"

export class DisplayController {
    static displayProjects() {
        const projects = LocalStorage.getProjects
        const contentDiv = document.querySelector('#content')
    }

    static displayNoProjects() {
        const contentDiv = document.querySelector('#content')
    }

    static mountProjectListener() {
        const projectForm = document.querySelector('.project-form')
        projectForm.addEventListener('submit', DisplayController.addProject)
    }

    static addProject(e) {
        e.preventDefault()
        const name = e.target.elements['name'].value
        new Project(name)
    }
}