export class LocalStorage {
    static getProjects() {
        const projects = localStorage.getItem('projects')
        const parsedProjects = JSON.parse(projects)
        return parsedProjects
    }

    static addProject(project) {
        const existingProjects = LocalStorage.getProjects()

        if (existingProjects) {
            existingProjects.push(project)
            localStorage.setItem('projects', JSON.stringify(existingProjects))
        } else {
            const projectArray = [project];
            localStorage.setItem('projects', JSON.stringify(projectArray));
        }
    }
}