        /**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */

         export const preloadHandlebarsTemplates = async function () {
            // Define template paths to load
            const templatePaths = [
                // ACTOR
                "systems/Knight/template/sheets/pj-sheet.html",
                "systems/Knight/template/sheets/pj-composant/pj-header-sheet.html",
                "systems/Knight/template/sheets/pj-composant/pj-generale-sheet.html",
                "systems/Knight/template/sheets/pj-composant/pj-armure-sheet.html",
                "systems/Knight/template/sheets/pj-composant/pj-ia-sheet.html",
                "systems/Knight/template/sheets/pj-composant/pj-iai-sheet.html",
                "systems/Knight/template/sheets/pj-composant/pj-historique-sheet.html",
                "systems/Knight/template/sheets/pj-composant/pj-combat-sheet.html",

                // Items
                "systems/Knight/template/sheets/arme_de_contact-sheet.html",
                "systems/Knight/template/sheets/arme_à_distance-sheet.html",
                "systems/Knight/template/sheets/meta-armure-sheet.html",
            ];
        
            // Load the template parts
            return loadTemplates(templatePaths);
        };