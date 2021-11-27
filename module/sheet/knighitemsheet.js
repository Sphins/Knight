export default class KnightItemSheet extends ItemSheet{
    get template(){
        console.log(`Knight | Récupération du fichier html ${this.item.data.type}-sheet.`);

        return `systems/knight/template/sheets/${this.item.data.type}-sheet.html`;
    }

    getData(){
        const dataf = super.getData();
        
        console.log(dataf);

        return dataf;
    }

    activateListeners(html) {                                                               //capteur d evenement
        super.activateListeners(html);


          // effets armes

          let antana = document.getElementById("anti-anatheme");
          let antveh = document.getElementById("anti-vehicule");
          let artill = document.getElementById("artillerie");
          let assasi = document.getElementById("assassin");
          let assist = document.getElementById("Assistance");
          let barrag = document.getElementById("barrage");
          let cadenc = document.getElementById("cadence");
          let charge = document.getElementById("chargeur");
          let choc = document.getElementById("choc");
          let defens = document.getElementById("defense");
          let degcon = document.getElementById("degcont");
          let deuxma = document.getElementById("deuxma");
          let demora = document.getElementById("demoralisant");
          let design = document.getElementById("designation");
          let destru = document.getElementById("destructeur");
          let disper = document.getElementById("dispertion");
          let chaine = document.getElementById("en_chaine");
          let espera = document.getElementById("esperance");
          let fureur = document.getElementById("fureur");
          let ignarm = document.getElementById("ignarm");
          let igncdf = document.getElementById("igncdf");
          let jumaki = document.getElementById("jumaki");
          let jumamb = document.getElementById("jumambi");
          let leste = document.getElementById("leste");
          let lourd = document.getElementById("lourd");
          let lumier = document.getElementById("lumiere");
          let meurtr = document.getElementById("meurtrier");
          let oblite = document.getElementById("obliteration");
          let orfevr = document.getElementById("orfevrerie");
          let parasi = document.getElementById("parasitage");
          let penetr = document.getElementById("penetrant");
          let perarm = document.getElementById("perarm");
          let precis = document.getElementById("precision");
          let reacti = document.getElementById("reaction");
          let silenc = document.getElementById("silencieux");
          let soumis = document.getElementById("soumission");
          let tenebr = document.getElementById("tenebricide");
          let tirraf = document.getElementById("tirraf");
          let tirsec = document.getElementById("tirsec");
          let ultrav = document.getElementById("ultraviolence");
          
    }
}
