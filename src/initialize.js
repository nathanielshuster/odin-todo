import { DisplayController } from "./displayController";
import { LocalStorage } from "./localStorage";

export class Initialize {
    static dashboard() {
        if (LocalStorage.getProjects()) {
            DisplayController.displayProjects()
            DisplayController.mountProjectListener()
        }

        DisplayController.displayNoProjects()
        DisplayController.mountProjectListener()
    }
}