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
        console.log(event)
        var capliste1 = event.currentTarget.dataset["liste1"];
        var capliste2 = event.currentTarget.dataset["liste2"];
        var capliste3 = event.currentTarget.dataset["liste3"];
        var capliste4 = event.currentTarget.dataset["liste4"];
        var capbm = event.currentTarget.dataset["bm"];


        var depl = event.currentTarget.dataset["deplacement"];
        var deplod = event.currentTarget.dataset["deplacementod"];
        var forc = event.currentTarget.dataset["force"];
        var forcod = event.currentTarget.dataset["forceod"];
        var endu = event.currentTarget.dataset["endurance"];
        var enduod = event.currentTarget.dataset["enduranceod"];
        var har = event.currentTarget.dataset["hargne"];
        var harod = event.currentTarget.dataset["hargneod"];
        var com = event.currentTarget.dataset["combat"];
        var comod = event.currentTarget.dataset["combatod"];
        var ins = event.currentTarget.dataset["instinct"];
        var insod = event.currentTarget.dataset["instinctod"];
        var tir = event.currentTarget.dataset["tir"];
        var tirod = event.currentTarget.dataset["tirod"];
        var sav = event.currentTarget.dataset["savoir"];
        var savod = event.currentTarget.dataset["savoirod"];
        var tec = event.currentTarget.dataset["technique"];
        var tecod = event.currentTarget.dataset["techniqueod"];
        var aur = event.currentTarget.dataset["aura"];
        var aurod = event.currentTarget.dataset["auraod"];
        var par = event.currentTarget.dataset["parole"];
        var parod = event.currentTarget.dataset["paroleod"];
        var san = event.currentTarget.dataset["sangfroid"];
        var sanod = event.currentTarget.dataset["sangfroidod"];
        var dis = event.currentTarget.dataset["discretion"];
        var disod = event.currentTarget.dataset["discretionod"];
        var dex = event.currentTarget.dataset["dexterite"];
        var dexod = event.currentTarget.dataset["dexteriteod"];
        var per = event.currentTarget.dataset["perception"];
        var perod = event.currentTarget.dataset["perceptionod"];

        if (capliste1=="Deplacement"){
            var capa1=depl;
            var capa1od=deplod;
            var name1=capliste1;
        }
        else if (capliste1=="Force"){
            var capa1=forc;
            var capa1od=forcod;
            var name1=capliste1;
        }
        else if (capliste1=="Endurance"){
            var capa1=endu;
            var capa1od=enduod;
            var name1=capliste1;
        }
        else if (capliste1=="Hargne"){
            var capa1=har;
            var capa1od=harod;
            var name1=capliste1;
        }
        else if (capliste1=="Combat"){
            var capa1=com;
            var capa1od=comod;
            var name1=capliste1;
        }
        else if (capliste1=="Instinct"){
            var capa1=ins;
            var capa1od=insod;
            var name1=capliste1;
        }
        else if (capliste1=="Tir"){
            var capa1=tir;
            var capa1od=tirod;
            var name1=capliste1;
        }
        else if (capliste1=="Savoir"){
            var capa1= sav;
            var capa1od=savod;
            var name1=capliste1;
        }
        else if (capliste1=="Technique"){
            var capa1=tec;
            var capa1od=tecod;
            var name1=capliste1;
        }
        else if (capliste1=="Aura"){
            var capa1=aur;
            var capa1od=aurod;
            var name1=capliste1;
        }
        else if (capliste1=="Parole"){
            var capa1=par;
            var capa1od=parod;
            var name1=capliste1;
        }
        else if (capliste1=="Sangfroid"){
            var capa1=san;
            var capa1od=sanod;
            var name1=capliste1;
        }
        else if (capliste1=="Discretion"){
            var capa1=dis;
            var capa1od=disod;
            var name1=capliste1;
        }
        else if (capliste1=="Dexterite"){
            var capa1=dex;
            var capa1od=dexod;
            var name1=capliste1;
        }
        else if (capliste1=="Perception"){
            var capa1=per;
            var capa1od=perod;
            var name1=capliste1;
        }
        

        if (capliste2=="Deplacement"){
            var capa2=depl;
            var capa2od=deplod;
            var name2=capliste2;
        }
        else if (capliste2=="Force"){
            var capa2=forc;
            var capa2od=forcod;
            var name2=capliste2;
        }
        else if (capliste2=="Endurance"){
            var capa2=endu;
            var capa2od=enduod;
            var name2=capliste2;
        }
        else if (capliste2=="Hargne"){
            var capa2=har;
            var capa2od=harod;
            var name2=capliste2;
        }
        else if (capliste2=="Combat"){
            var capa2=com;
            var capa2od=comod;
            var name2=capliste2;
        }
        else if (capliste2=="Instinct"){
            var capa2=ins;
            var capa2od=insod;
            var name2=capliste2;
        }
        else if (capliste2=="Tir"){
            var capa2=tir;
            var capa2od=tirod;
            var name2=capliste2;
        }
        else if (capliste2=="Savoir"){
            var capa2= sav;
            var capa2od=savod;
            var name2=capliste2;
        }
        else if (capliste2=="Technique"){
            var capa2=tec;
            var capa2od=tecod;
            var name2=capliste2;
        }
        else if (capliste2=="Aura"){
            var capa2=aur;
            var capa2od=aurod;
            var name2=capliste2;
        }
        else if (capliste2=="Parole"){
            var capa2=par;
            var capa2od=parod;
            var name2=capliste2;
        }
        else if (capliste2=="Sangfroid"){
            var capa2=san;
            var capa2od=sanod;
            var name2=capliste2;
        }
        else if (capliste2=="Discretion"){
            var capa2=dis;
            var capa2od=disod;
            var name2=capliste2;
        }
        else if (capliste2=="Dexterite"){
            var capa2=dex;
            var capa2od=dexod;
            var name2=capliste2;
        }
        else if (capliste2=="Perception"){
            var capa2=per;
            var capa2od=perod;
            var name2=capliste2;
        }


        if (capliste3=="Deplacement"){
            var capa3=depl;
            var capa3od=deplod;
            var name3=capliste3;
        }
        else if (capliste3=="Force"){
            var capa3=forc;
            var capa3od=forcod;
            var name3=capliste3;
        }
        else if (capliste3=="Endurance"){
            var capa3=endu;
            var capa3od=enduod;
            var name3=capliste3;
        }
        else if (capliste3=="Hargne"){
            var capa3=har;
            var capa3od=harod;
            var name3=capliste3;
        }
        else if (capliste3=="Combat"){
            var capa3=com;
            var capa3od=comod;
            var name3=capliste3;
        }
        else if (capliste3=="Instinct"){
            var capa3=ins;
            var capa3od=insod;
            var name3=capliste3;
        }
        else if (capliste3=="Tir"){
            var capa3=tir;
            var capa3od=tirod;
            var name3=capliste3;
        }
        else if (capliste3=="Savoir"){
            var capa3= sav;
            var capa3od=savod;
            var name3=capliste3;
        }
        else if (capliste3=="Technique"){
            var capa3=tec;
            var capa3od=tecod;
            var name3=capliste3;
        }
        else if (capliste3=="Aura"){
            var capa3=aur;
            var capa3od=aurod;
            var name3=capliste3;
        }
        else if (capliste3=="Parole"){
            var capa3=par;
            var capa3od=parod;
            var name3=capliste3;
        }
        else if (capliste3=="Sangfroid"){
            var capa3=san;
            var capa3od=sanod;
            var name3=capliste3;
        }
        else if (capliste3=="Discretion"){
            var capa3=dis;
            var capa3od=disod;
            var name3=capliste3;
        }
        else if (capliste3=="Dexterite"){
            var capa3=dex;
            var capa3od=dexod;
            var name3=capliste3;
        }
        else if (capliste3=="Perception"){
            var capa3=per;
            var capa3od=perod;
            var name3=capliste3;
        }


        if (capliste4=="Deplacement"){
            var capa4=depl;
            var capa4od=deplod;
            var name4=capliste4;
        }
        else if (capliste4=="Force"){
            var capa4=forc;
            var capa4od=forcod;
            var name4=capliste4;
        }
        else if (capliste4=="Endurance"){
            var capa4=endu;
            var capa4od=enduod;
            var name4=capliste4;
        }
        else if (capliste4=="Hargne"){
            var capa4=har;
            var capa4od=harod;
            var name4=capliste4;
        }
        else if (capliste4=="Combat"){
            var capa4=com;
            var capa4od=comod;
            var name4=capliste4;
        }
        else if (capliste4=="Instinct"){
            var capa4=ins;
            var capa4od=insod;
            var name4=capliste4;
        }
        else if (capliste4=="Tir"){
            var capa4=tir;
            var capa4od=tirod;
            var name4=capliste4;
        }
        else if (capliste4=="Savoir"){
            var capa4= sav;
            var capa4od=savod;
            var name4=capliste4;
        }
        else if (capliste4=="Technique"){
            var capa4=tec;
            var capa4od=tecod;
            var name4=capliste4;
        }
        else if (capliste4=="Aura"){
            var capa4=aur;
            var capa4od=aurod;
            var name4=capliste4;
        }
        else if (capliste4=="Parole"){
            var capa4=par;
            var capa4od=parod;
            var name4=capliste4;
        }
        else if (capliste4=="Sangfroid"){
            var capa4=san;
            var capa4od=sanod;
            var name4=capliste4;
        }
        else if (capliste4=="Discretion"){
            var capa4=dis;
            var capa4od=disod;
            var name4=capliste4;
        }
        else if (capliste4=="Dexterite"){
            var capa4=dex;
            var capa4od=dexod;
            var name4=capliste4;
        }
        else if (capliste4=="Perception"){
            var capa4=per;
            var capa4od=perod;
            var name4=capliste4;
        }
        
        var nbdd = capa1 + capa2 + capa3 + capa4 + capbm+"d2cs2";
        var nbdod= capa1od + capa2od + capa3od + capa4od+" OD";
        var texte = "jet de : " + name1 + " - " + name2 + " - " + name3 + " - " + name4;
        let roll = new Roll(nbdd);
        roll.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor }),
            flavor: texte + nbdod
        });
    }
}