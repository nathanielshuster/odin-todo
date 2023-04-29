import { LocalStorage } from "./localStorage"

export class Project {
    static id = 0

    constructor(name) {
        this.id = Project.id
        this.name = name
        this.todos = []
        Project.id++
        LocalStorage.addProject(this)
    }
}