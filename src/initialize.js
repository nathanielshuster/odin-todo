import { DisplayController } from "./displayController";
import { LocalStorage } from "./localStorage";

export class Initialize {
    static dashboard() {
        DisplayController.displayProjects()
        DisplayController.mountProjectListener()
    }
}