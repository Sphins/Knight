export default class KnightActorSheet extends ActorSheet {
    get template() {
        console.log(`Knight | Récupération du fichier html ${this.actor.data.type}-sheet.`);

        return `systems/knight/template/sheets/${this.actor.data.type}-sheet.html`;
    }

    getData() {
        const dataf = super.getData();


        console.log(dataf);

        const character = dataf.data.data
        var deplacement = Number(character.attributs.Chair.competence.Deplacement.valeur)
        var deplacementOD = Number(character.attributs.Chair.competence.Deplacement.od)
        var force = Number(character.attributs.Chair.competence.Force.valeur)
        var forceOD = Number(character.attributs.Chair.competence.Force.od)
        var endurance = Number(character.attributs.Chair.competence.Endurance.valeur)
        var enduranceOD = Number(character.attributs.Chair.competence.Endurance.od)
        var hargne = Number(character.attributs.Bete.competence.Hargne.valeur)
        var hargneOD = Number(character.attributs.Bete.competence.Hargne.od)
        var combat = Number(character.attributs.Bete.competence.Combat.valeur)
        var combatOD = Number(character.attributs.Bete.competence.Combat.od)
        var instinct = Number(character.attributs.Bete.competence.Instinct.valeur)
        var instinctOD = Number(character.attributs.Bete.competence.Instinct.od)
        var tir = Number(character.attributs.Machine.competence.Tir.valeur)
        var tirOD = Number(character.attributs.Machine.competence.Tir.od)
        var savoir = Number(character.attributs.Machine.competence.Savoir.valeur)
        var savoirOD = Number(character.attributs.Machine.competence.Savoir.od)
        var technique = Number(character.attributs.Machine.competence.Technique.valeur)
        var techniqueOD = Number(character.attributs.Machine.competence.Technique.od)
        var aura = Number(character.attributs.Dame.competence.Aura.valeur)
        var auraOD = Number(character.attributs.Dame.competence.Aura.od)
        var parole = Number(character.attributs.Dame.competence.Parole.valeur)
        var paroleOD = Number(character.attributs.Dame.competence.Parole.od)
        var sangfroid = Number(character.attributs.Dame.competence.Sangfroid.valeur)
        var sangfroidOD = Number(character.attributs.Dame.competence.Sangfroid.od)
        var discretion = Number(character.attributs.Masque.competence.Discretion.valeur)
        var discretionOD = Number(character.attributs.Masque.competence.Discretion.od)
        var dexterite= Number(character.attributs.Masque.competence.Dexterite.valeur)
        var dexteriteOD = Number(character.attributs.Masque.competence.Dexterite.od)
        var perception = Number(character.attributs.Masque.competence.Perception.valeur)
        var perceptionOD = Number(character.attributs.Masque.competence.Perception.od)

        //calcule santé max
        var chairmax = Math.max(deplacement, force,endurance)
        character.santemax = 10+6*Number(chairmax);


        //calcule defense
        var betehagmax = hargne + hargneOD
        var betecommax = combat + combatOD
        var beteinsmax = instinct + instinctOD
        var betemax = Math.max(betehagmax, betecommax,beteinsmax)
        character.defense = Number(betemax);


        //calcule reaction
        var mactirmax = tir + tirOD
        var macsavmax = savoir + savoirOD
        var mactecmax = technique + techniqueOD
        var macmax = Math.max(mactirmax, macsavmax,mactecmax)
        character.reaction = Number(macmax);


        //initiative max
        var masdismax = discretion + discretionOD
        var masdexmax = dexterite + dexteriteOD
        var masparmax = perception + perceptionOD
        var masquemax = Math.max(masdismax, masdexmax,masparmax)
        character.initiative = masquemax;

        //contact max
        character.contact = Math.max(aura, parole, sangfroid);

        //espoire max
        var modiesp = character.espoirmod
        var espmax = 50 + Number(modiesp)
        character.espoiremax = espmax


        character.arme = dataf.items.filter(item => item.type === "arme"); //tri arme
        character.module = dataf.items.filter(item => item.type === "module"); // tri module
        character.overdrive = dataf.items.filter(item => item.type === "overdrive"); // tri overdrive
        character.metaarmure = dataf.items.filter(item => item.type === "meta-armure"); //tri meta armure
        character.vehicule = dataf.items.filter(item => item.type === "vehicule"); // tri vehicule

        return dataf;
    }



    activateListeners(html) {               //capteur d evenement
        super.activateListeners(html);

        html.find('.jetde').click(this._onRollNorm.bind(this));     //detection jet de dée hors combat
        html.find('.jetdinit').click(this._onRollInit.bind(this));     //detection jet d init
    }

    _onRollInit(event) {                                    // jet d init
        console.log(event)
        const dataf = super.getData();
        console.log(dataf);
        const character = dataf.data.data
        var masdismax = Number(character.attributs.Masque.competence.Discretion.valeur)+Number(character.attributs.Masque.competence.Discretion.od)
        var masdexmax = Number(character.attributs.Masque.competence.Dexterite.valeur)+Number(character.attributs.Masque.competence.Dexterite.od)
        var masparmax = Number(character.attributs.Masque.competence.Perception.valeur)+Number(character.attributs.Masque.competence.Perception.od)
        var masquemax = Math.max(masdismax, masdexmax,masparmax)
        character.initiative = masquemax;
        var forminit = "3D6+"+Number(masquemax);
        var texte = "Initiative";
        let roll = new Roll(forminit);
        roll.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor }),
            flavor: texte
        });
    }

    _onRollNorm(event) {                                            // jet de dée hors combat
        console.log(event)
        var capliste1 = event.currentTarget.dataset["liste1"];
        var capliste2 = event.currentTarget.dataset["liste2"];
        var capliste3 = event.currentTarget.dataset["liste3"];
        var capliste4 = event.currentTarget.dataset["liste4"];
        var capbm = event.currentTarget.dataset["bm"];

        const dataf = super.getData();
        const character = dataf.data.data
        var deplacement = Number(character.attributs.Chair.competence.Deplacement.valeur)
        var deplacementOD = Number(character.attributs.Chair.competence.Deplacement.od)
        var force = Number(character.attributs.Chair.competence.Force.valeur)
        var forceOD = Number(character.attributs.Chair.competence.Force.od)
        var endurance = Number(character.attributs.Chair.competence.Endurance.valeur)
        var enduranceOD = Number(character.attributs.Chair.competence.Endurance.od)
        var hargne = Number(character.attributs.Bete.competence.Hargne.valeur)
        var hargneOD = Number(character.attributs.Bete.competence.Hargne.od)
        var combat = Number(character.attributs.Bete.competence.Combat.valeur)
        var combatOD = Number(character.attributs.Bete.competence.Combat.od)
        var instinct = Number(character.attributs.Bete.competence.Instinct.valeur)
        var instinctOD = Number(character.attributs.Bete.competence.Instinct.od)
        var tir = Number(character.attributs.Machine.competence.Tir.valeur)
        var tirOD = Number(character.attributs.Machine.competence.Tir.od)
        var savoir = Number(character.attributs.Machine.competence.Savoir.valeur)
        var savoirOD = Number(character.attributs.Machine.competence.Savoir.od)
        var technique = Number(character.attributs.Machine.competence.Technique.valeur)
        var techniqueOD = Number(character.attributs.Machine.competence.Technique.od)
        var aura = Number(character.attributs.Dame.competence.Aura.valeur)
        var auraOD = Number(character.attributs.Dame.competence.Aura.od)
        var parole = Number(character.attributs.Dame.competence.Parole.valeur)
        var paroleOD = Number(character.attributs.Dame.competence.Parole.od)
        var sangfroid = Number(character.attributs.Dame.competence.Sangfroid.valeur)
        var sangfroidOD = Number(character.attributs.Dame.competence.Sangfroid.od)
        var discretion = Number(character.attributs.Masque.competence.Discretion.valeur)
        var discretionOD = Number(character.attributs.Masque.competence.Discretion.od)
        var dexterite= Number(character.attributs.Masque.competence.Dexterite.valeur)
        var dexteriteOD = Number(character.attributs.Masque.competence.Dexterite.od)
        var perception = Number(character.attributs.Masque.competence.Perception.valeur)
        var perceptionOD = Number(character.attributs.Masque.competence.Perception.od)

        if (capliste1=="Deplacement"){
            var capa1 = deplacement;
            var capa1od = deplacementOD;
            var name1=capliste1;
        }
        else if (capliste1=="Force"){
            var capa1=force;
            var capa1od=forceOD;
            var name1=capliste1;
        }
        else if (capliste1=="Endurance"){
            var capa1=endurance;
            var capa1od=enduranceOD;
            var name1=capliste1;
        }
        else if (capliste1=="Hargne"){
            var capa1=hargne;
            var capa1od=hargneOD;
            var name1=capliste1;
        }
        else if (capliste1=="Combat"){
            var capa1=combat;
            var capa1od=combatOD;
            var name1=capliste1;
        }
        else if (capliste1=="Instinct"){
            var capa1=instinct;
            var capa1od=instinctOD;
            var name1=capliste1;
        }
        else if (capliste1=="Tir"){
            var capa1=tir;
            var capa1od=tirOD;
            var name1=capliste1;
        }
        else if (capliste1=="Savoir"){
            var capa1= savoir;
            var capa1od=savoirOD;
            var name1=capliste1;
        }
        else if (capliste1=="Technique"){
            var capa1=technique;
            var capa1od=techniqueOD;
            var name1=capliste1;
        }
        else if (capliste1=="Aura"){
            var capa1=aura;
            var capa1od=auraOD;
            var name1=capliste1;
        }
        else if (capliste1=="Parole"){
            var capa1=parole;
            var capa1od=paroleOD;
            var name1=capliste1;
        }
        else if (capliste1=="Sangfroid"){
            var capa1=sangfroid;
            var capa1od=sangfroidOD;
            var name1=capliste1;
        }
        else if (capliste1=="Discretion"){
            var capa1=discretion;
            var capa1od=discretionOD;
            var name1=capliste1;
        }
        else if (capliste1=="Dexterite"){
            var capa1=dexterite;
            var capa1od=dexteriteOD;
            var name1=capliste1;
        }
        else if (capliste1=="Perception"){
            var capa1=perception;
            var capa1od=perceptionOD;
            var name1=capliste1;
        }
        else {
            var capa1="0";
            var capa1od="0";
            var name1="";
        }        

        if (capliste2=="Deplacement"){
            var capa2=deplacement;
            var capa2od=deplacementOD;
            var name2=capliste2;
        }
        else if (capliste2=="Force"){
            var capa2=force;
            var capa2od=forceOD;
            var name2=capliste2;
        }
        else if (capliste2=="Endurance"){
            var capa2=endurance;
            var capa2od=enduranceOD;
            var name2=capliste2;
        }
        else if (capliste2=="Hargne"){
            var capa2=hargne;
            var capa2od=hargneOD;
            var name2=capliste2;
        }
        else if (capliste2=="Combat"){
            var capa2=combat;
            var capa2od=combatOD;
            var name2=capliste2;
        }
        else if (capliste2=="Instinct"){
            var capa2=instinct;
            var capa2od=instinctOD;
            var name2=capliste2;
        }
        else if (capliste2=="Tir"){
            var capa2=tir;
            var capa2od=tirOD;
            var name2=capliste2;
        }
        else if (capliste2=="Savoir"){
            var capa2= savoir;
            var capa2od=savoirOD;
            var name2=capliste2;
        }
        else if (capliste2=="Technique"){
            var capa2=technique;
            var capa2od=techniqueOD;
            var name2=capliste2;
        }
        else if (capliste2=="Aura"){
            var capa2=aura;
            var capa2od=auraOD;
            var name2=capliste2;
        }
        else if (capliste2=="Parole"){
            var capa2=parole;
            var capa2od=paroleOD;
            var name2=capliste2;
        }
        else if (capliste2=="Sangfroid"){
            var capa2=sangfroid;
            var capa2od=sangfroidOD;
            var name2=capliste2;
        }
        else if (capliste2=="Discretion"){
            var capa2=discretion;
            var capa2od=discretionOD;
            var name2=capliste2;
        }
        else if (capliste2=="Dexterite"){
            var capa2=dexterite;
            var capa2od=dexteriteOD;
            var name2=capliste2;
        }
        else if (capliste2=="Perception"){
            var capa2=perception;
            var capa2od=perceptionOD;
            var name2=capliste2;
        }
        else {
            var capa2="0";
            var capa2od="0";
            var name2="";
        }


        if (capliste3=="Deplacement"){
            var capa3=deplacement;
            var capa3od=deplacementOD;
            var name3=capliste3;
        }
        else if (capliste3=="Force"){
            var capa3=force;
            var capa3od=forceOD;
            var name3=capliste3;
        }
        else if (capliste3=="Endurance"){
            var capa3=endurance;
            var capa3od=enduranceOD;
            var name3=capliste3;
        }
        else if (capliste3=="Hargne"){
            var capa3=hargne;
            var capa3od=hargneOD;
            var name3=capliste3;
        }
        else if (capliste3=="Combat"){
            var capa3=combat;
            var capa3od=combatOD;
            var name3=capliste3;
        }
        else if (capliste3=="Instinct"){
            var capa3=instinct;
            var capa3od=instinctOD;
            var name3=capliste3;
        }
        else if (capliste3=="Tir"){
            var capa3=tir;
            var capa3od=tirOD;
            var name3=capliste3;
        }
        else if (capliste3=="Savoir"){
            var capa3= savoir;
            var capa3od=savoirOD;
            var name3=capliste3;
        }
        else if (capliste3=="Technique"){
            var capa3=technique;
            var capa3od=techniqueOD;
            var name3=capliste3;
        }
        else if (capliste3=="Aura"){
            var capa3=aura;
            var capa3od=auraOD;
            var name3=capliste3;
        }
        else if (capliste3=="Parole"){
            var capa3=parole;
            var capa3od=paroleOD;
            var name3=capliste3;
        }
        else if (capliste3=="Sangfroid"){
            var capa3=sangfroid;
            var capa3od=sangfroidOD;
            var name3=capliste3;
        }
        else if (capliste3=="Discretion"){
            var capa3=discretion;
            var capa3od=discretionOD;
            var name3=capliste3;
        }
        else if (capliste3=="Dexterite"){
            var capa3=dexterite;
            var capa3od=dexteriteOD;
            var name3=capliste3;
        }
        else if (capliste3=="Perception"){
            var capa3=perception;
            var capa3od=perceptionOD;
            var name3=capliste3;
        }
        else {
            var capa3="0";
            var capa3od="0";
            var name3="";
        }

        if (capliste4=="Deplacement"){
            var capa4=deplacement;
            var capa4od=deplacementOD;
            var name4=capliste4;
        }
        else if (capliste4=="Force"){
            var capa4=force;
            var capa4od=forceOD;
            var name4=capliste4;
        }
        else if (capliste4=="Endurance"){
            var capa4=endurance;
            var capa4od=enduranceOD;
            var name4=capliste4;
        }
        else if (capliste4=="Hargne"){
            var capa4=hargne;
            var capa4od=hargneOD;
            var name4=capliste4;
        }
        else if (capliste4=="Combat"){
            var capa4=combat;
            var capa4od=combatOD;
            var name4=capliste4;
        }
        else if (capliste4=="Instinct"){
            var capa4=instinct;
            var capa4od=instinctOD;
            var name4=capliste4;
        }
        else if (capliste4=="Tir"){
            var capa4=tir;
            var capa4od=tirOD;
            var name4=capliste4;
        }
        else if (capliste4=="Savoir"){
            var capa4= savoir;
            var capa4od=savoirOD;
            var name4=capliste4;
        }
        else if (capliste4=="Technique"){
            var capa4=technique;
            var capa4od=techniqueOD;
            var name4=capliste4;
        }
        else if (capliste4=="Aura"){
            var capa4=aura;
            var capa4od=auraOD;
            var name4=capliste4;
        }
        else if (capliste4=="Parole"){
            var capa4=parole;
            var capa4od=paroleOD;
            var name4=capliste4;
        }
        else if (capliste4=="Sangfroid"){
            var capa4=sangfroid;
            var capa4od=sangfroidOD;
            var name4=capliste4;
        }
        else if (capliste4=="Discretion"){
            var capa4=discretion;
            var capa4od=discretionOD;
            var name4=capliste4;
        }
        else if (capliste4=="Dexterite"){
            var capa4=dexterite;
            var capa4od=dexteriteOD;
            var name4=capliste4;
        }
        else if (capliste4=="Perception"){
            var capa4=Perception;
            var capa4od=perceptionOD;
            var name4=capliste4;
        }
        else {
            var capa4="0";
            var capa4od="0";
            var name4="";
        }
        
        
        var nbdod= Number(capa1od) + Number(capa2od) + Number(capa3od) + Number(capa4od)+" OD";
        var nbdd = Number(capa1) + Number(capa2) + Number(capa3) + Number(capa4) + Number(capbm) + "d2cs2";
        var texte = "jet de : " + name1 + " - " + name2 + " - " + name3 + " - " + name4;
        let roll = new Roll(nbdd);
        roll.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor }),
            flavor: texte + nbdod
        });
    }
    
}
