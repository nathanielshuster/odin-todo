export class LocalStorage {
    static findProjects() {
        const projects = localStorage.getItem('projects')
        return projects
    }
}