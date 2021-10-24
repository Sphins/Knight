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
                "systems/knight/template/sheets/pj-composant/pj-generale-sheet.html",
                "systems/knight/template/sheets/pj-composant/pj-armure-sheet.html",
                "systems/knight/template/sheets/pj-composant/pj-ia-sheet.html",
                "systems/knight/template/sheets/pj-composant/pj-iai-sheet.html",
                "systems/knight/template/sheets/pj-composant/pj-historique-sheet.html",
            ];
        
            // Load the template parts
            return loadTemplates(templatePaths);
        };