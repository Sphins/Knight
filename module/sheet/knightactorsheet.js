export default class KnightActorSheet extends ActorSheet {
    get template() {
        console.log(`Knight | Récupération du fichier html ${this.actor.data.type}-sheet.`);

        return `systems/knight/template/sheets/${this.actor.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        console.log(data);

        const character = data.data

        character.arme = data.items.filter(item => item.type === "arme");
        character.module = data.items.filter(item => item.type === "module");
        character.overdrive = data.items.filter(item => item.type === "overdrive");
        character.metaarmure = data.items.filter(item => item.type === "meta-armure");
        character.vehicule = data.items.filter(item => item.type === "vehicule");

        return data;
    }

    activateListeners(html) {
        super.activateListeners(html);

        html.find('.jetde').click(this._onRollNorm.bind(this));

    }

    _onRollNorm(event) {
        console.log(event);
        const jetdede = event.currentTarget.dataset["liste1"];

    }

    _selected(html) {
        var liste1 = html.getElementById("liste1");
        liste1.options[liste1.options.selectedIndex].selected = true;
    }

}