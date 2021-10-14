import KnightItemSheet from "./sheet/knighitemsheet.js";
import KnightActorSheet from "./sheet/knightactorsheet.js";

Hooks.once("init", () => {
    console.log("Knight | Initialisation du système Knight");

    import { preloadHandlebarsTemplates } from "knightactorsheet.js";

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("knight", KnightItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("knight", KnightActorSheet, { makeDefault: true });



    return preloadHandlebarsTemplates();
})
