import KnightItemSheet from "./sheet/knighitemsheet.js";
import KnightActorSheet from "./sheet/knightactorsheet.js";

import { preloadHandlebarsTemplates } from "./system/templates.js";

Hooks.once("init", () => {
    console.log("Knight | Initialisation du système Knight");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("knight", KnightItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("knight", KnightActorSheet, { makeDefault: true });


    
    preloadHandlebarsTemplates();

})
