import { LocalStorage } from "./localStorage"
import { Project } from "./project"

export class DisplayController {
    static displayProjects() {
        DisplayController.clearProjects()
        const projects = LocalStorage.getProjects()
        const cardContainer = document.querySelector('.card-container')
        const pageTitle = document.querySelector('.title')

        if (projects) {
            pageTitle.textContent = "Projects"

            projects.forEach(project => {
                let projectDiv = document.createElement('div')
                projectDiv.addEventListener('click', DisplayController.displayProject)
                projectDiv.id = project.id
                let title = document.createElement('h3')
                title.textContent = project.name
                projectDiv.appendChild(title)
                cardContainer.appendChild(projectDiv)
            });
        } else {
            pageTitle.textContent = "No Projects Found"
        }
    }

    static clearProjects() {
        const cardContainer = document.querySelector('.card-container')
        cardContainer.innerHTML = ''
    }

    static mountProjectListener() {
        const projectForm = document.querySelector('.project-form')
        projectForm.addEventListener('submit', DisplayController.addProject)
    }

    static addProject(e) {
        e.preventDefault()
        const name = e.target.elements['name'].value
        new Project(name)
        DisplayController.displayProjects()
    }

    static displayProject(e) {
        const id = parseInt(e.currentTarget.id, 10)
        const projects = LocalStorage.getProjects()
        const project = projects.find(project => project.id === id)

        const pageTitle = document.querySelector('.title')
        pageTitle.textContent = project.name

        DisplayController.clearProjects()
        const cardContainer = document.querySelector('.card-container')
        const todos = project.todos
        if (todos.length > 0) {
            todos.forEach(todo => {
                let todoDiv = document.createElement('div')
                todoDiv.id = todo.id
                let todoTitle = document.createElement('h3')
                todoTitle.textContent = todo.name
                todoDiv.appendChild(todoTitle)
                cardContainer.appendChild(todoDiv)
            });
        } else {
            console.log('no todos')
        }

        const formDiv = document.querySelector('.form-div')
        formDiv.innerHTML = `
            <form class="todo-form">
                <label for="name">name:</label>
                <input type="text" id="name">
                <label for="name">description:</label>
                <input type="text" id="description">
                <input type="submit" value="submit" class="add-todo">
            </form>`
    }

    static addTodo() {
        
    }
}