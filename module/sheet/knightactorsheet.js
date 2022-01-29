export default class KnightActorSheet extends ActorSheet {
    get template() {
        console.log(`Knight | Récupération du fichier html ${this.actor.data.type}-sheet.html`);

        return `systems/knight/template/sheets/${this.actor.data.type}-sheet.html`;
    }

    getData() {                                                                             //gestion data
        const dataf = super.getData();

        console.log(dataf);

        const character = dataf.actor.data.data

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
        var expu = Number(character.expu)
        var expt = Number(character.expt)
        var pgu = Number(character.pgu)
        var pgt = Number(character.pgt)
        
        //impacte section Kraken

        var section = character.sectiondorigine
        if (section != "Kraken"){
            var modsant = 6;
            var modkra = 0;
        }
        else{
            var modsant = 8;
            var modkra = 1;
        }

        //impacte style de combat

        var tab = this._stylComb();

        var modstyD = tab[1];
        var modstyR = tab[2];
        
        //calcule santé max

        var chairmax = Math.max(deplacement, force, endurance)
        character.santemax = 10+(Number(modsant)*Number(chairmax));            

        //calcule defense

        var betehagmax = hargne + hargneOD                      
        var betecommax = combat + combatOD
        var beteinsmax = instinct + instinctOD
        var betemax = Math.max(betehagmax, betecommax,beteinsmax)
        character.defense = Number(betemax) + Number(modkra) + Number(modstyD);

        //calcule reaction

        var mactirmax = tir + tirOD                             
        var macsavmax = savoir + savoirOD
        var mactecmax = technique + techniqueOD
        var macmax = Math.max(mactirmax, macsavmax,mactecmax)
        character.reaction = Number(macmax) + Number(modkra) + Number(modstyR);

        //initiative max

        var masdismax = discretion + discretionOD               
        var masdexmax = dexterite + dexteriteOD
        var masparmax = perception + perceptionOD
        var masquemax = Math.max(masdismax, masdexmax,masparmax)
        character.initiative = masquemax;

        //contact max

        character.contact.valeur = Math.max(aura, parole, sangfroid);

        //espoire max

        var modiesp = character.espoirmod
        var espmax = 50 + Number(modiesp)
        character.espoiremax = espmax

        //calcule exp

        var expa = expt - expu
        character.expa = expa

        //calcule PG

        var pga = pgt - pgu
        character.pga = pga

        //tri

        character.arme_à_distance = dataf.items.filter(item => item.type === "arme_à_distance");    //tri arme a distance
        character.arme_de_contact = dataf.items.filter(item => item.type === "arme_de_contact");    //tri arme au cac
        character.module = dataf.items.filter(item => item.type === "module");                      // tri module
        character.overdrive = dataf.items.filter(item => item.type === "overdrive");                // tri overdrive
        character.metaarmure = dataf.items.filter(item => item.type === "meta-armure");             //tri meta armure
        character.vehicule = dataf.items.filter(item => item.type === "vehicule");                  // tri vehicule

        //


        return dataf;

    
    }
    _onRollNodsS(event){                                                                    // utilisation nods soins
        // const dataf = super.getData();
        // const character = dataf.actor.data.data;
        // var nods = Number(character.nods.soins.sact)
        // character.nods.soins.sact = nods-1;
        console.log(event);
        var roll = new Roll(3+"d6");
        
        roll.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}),
            flavor: "Nods de soins"
        });
    }
    _onRollNodsA(event){                                                                    // utilisation nods armure
        console.log(event)
        var roll = new Roll(3+"d6");
        roll.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}),
            flavor: "Nods d'armure"
        });
    }
    _onRollNodsE(event){                                                                    // utilisation nods energie
        console.log(event)
        var roll = new Roll(3+"d6");
        roll.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}),
            flavor: "Nods d'énergie"
        });
    }
    activateListeners(html) {                                                               //capteur d evenement
        super.activateListeners(html);

        html.find('.jetde').click(this._onRollNorm.bind(this));                             //detection jet de dée hors combat
        html.find('.jetdataccac').click(this._onRollAtaccac.bind(this));                    //detection jet de dée combat corps a corps
        html.find('.jetdatacdis').click(this._onRollAtacdis.bind(this));                    //detection jet de dée combat distance
        html.find('.jetdinit').click(this._onRollInit.bind(this));                          //detection jet d init
        html.find('.jetdatacimp1').click(this._onRollAtaImp1.bind(this));                   //detection jet attaque improvisé ligne 1
        html.find('.jetdatacimp2').click(this._onRollAtaImp2.bind(this));                   //detection jet attaque improvisé ligne 2
        html.find('.jetdatacimp3').click(this._onRollAtaImp3.bind(this));                   //detection jet attaque improvisé ligne 3
        html.find('.jetdatacimp4').click(this._onRollAtaImp4.bind(this));                   //detection jet attaque improvisé ligne 4
        html.find('.jetdatacimp5').click(this._onRollAtaImp5.bind(this));                   //detection jet attaque improvisé ligne 5
        html.find('.jetdatacimp6').click(this._onRollAtaImp6.bind(this));                   //detection jet attaque improvisé ligne 6
        html.find('.jetdatacimp7').click(this._onRollAtaImp7.bind(this));                   //detection jet attaque improvisé ligne 7
        html.find('.jetdatacimp8').click(this._onRollAtaImp8.bind(this));                   //detection jet attaque improvisé ligne 8
        html.find('.jetdatacimp9').click(this._onRollAtaImp9.bind(this));                   //detection jet attaque improvisé ligne 9
        html.find('.jetdatacimp10').click(this._onRollAtaImp10.bind(this));                 //detection jet attaque improvisé ligne 10
        html.find('.jetdatacimp11').click(this._onRollAtaImp11.bind(this));                 //detection jet attaque improvisé ligne 11
        html.find('.jetdatacimp12').click(this._onRollAtaImp12.bind(this));                 //detection jet attaque improvisé ligne 12
        html.find('.jetdatacimp13').click(this._onRollAtaImp13.bind(this));                 //detection jet attaque improvisé ligne 13

        html.find('.item-edit').click(this._onItemEdit.bind(this));                         //edition d objet
        html.find('.item-devare').click(this._onItemDelete.bind(this));                     //effacer objet

        html.find('.jetdenodss').click(this._onRollNodsS.bind(this));                       //nods de soins
        html.find('.jetdenodsa').click(this._onRollNodsA.bind(this));                       //nods d' armure
        html.find('.jetdenodse').click(this._onRollNodsE.bind(this));                       //nods d'énergie

        
        
        //navigation fiche pj

        var generale = document.getElementById("generale");
        var armure = document.getElementById("armure");
        var ia = document.getElementById("ia");
        var iai = document.getElementById("iai");
        var historique = document.getElementById("historique");
        var combat = document.getElementById("combat1");


        var tab1 = document.getElementById("tab1");
        var tab2 = document.getElementById("tab2");
        var tab3 = document.getElementById("tab3");
        var tab4 = document.getElementById("tab4");
        var tab5 = document.getElementById("tab5");
        var tab6 = document.getElementById("tab6");

        generale.addEventListener("click", () =>{
            if(getComputedStyle(tab1).display != "block"){
                tab1.style.display = "block";
                tab2.style.display = "none";
                tab3.style.display = "none";
                tab4.style.display = "none";
                tab5.style.display = "none";
                tab6.style.display = "none";
                
                generale.style.background = "#f89406";
                generale.style.color = "#3A3F44";
                armure.style.background = "#3A3F44";
                armure.style.color = "#f89406";
                ia.style.background = "#3A3F44";
                ia.style.color = "#f89406";
                iai.style.background = "#3A3F44";
                iai.style.color = "#f89406";
                historique.style.background = "#3A3F44";
                historique.style.color = "#f89406";
                combat.style.background = "#3A3F44";
                combat.style.color = "#f89406";
            }
        })

        armure.addEventListener("click", () =>{
            if(getComputedStyle(tab2).display != "block"){
                tab2.style.display = "block";
                tab1.style.display = "none";
                tab3.style.display = "none";
                tab4.style.display = "none";
                tab5.style.display = "none";
                tab6.style.display = "none";
                                
                generale.style.background = "#3A3F44";
                generale.style.color = "#f89406";
                armure.style.background = "#f89406";
                armure.style.color = "#3A3F44";
                ia.style.background = "#3A3F44";
                ia.style.color = "#f89406";
                iai.style.background = "#3A3F44";
                iai.style.color = "#f89406";
                historique.style.background = "#3A3F44";
                historique.style.color = "#f89406";
                combat.style.background = "#3A3F44";
                combat.style.color = "#f89406";
            }
        })

        ia.addEventListener("click", () =>{
            if(getComputedStyle(tab3).display != "block"){
                tab3.style.display = "block";
                tab1.style.display = "none";
                tab2.style.display = "none";
                tab4.style.display = "none";
                tab5.style.display = "none";
                tab6.style.display = "none";
                                
                generale.style.background = "#3A3F44";
                generale.style.color = "#f89406";
                armure.style.background = "#3A3F44";
                armure.style.color = "#f89406";
                ia.style.background = "#f89406";
                ia.style.color = "#3A3F44";
                iai.style.background = "#3A3F44";
                iai.style.color = "#f89406";
                historique.style.background = "#3A3F44";
                historique.style.color = "#f89406";
                combat.style.background = "#3A3F44";
                combat.style.color = "#f89406";
            }
        })

        iai.addEventListener("click", () =>{
            if(getComputedStyle(tab4).display != "block"){
                tab4.style.display = "block";
                tab1.style.display = "none";
                tab2.style.display = "none";
                tab3.style.display = "none";
                tab5.style.display = "none";
                tab6.style.display = "none";
                                
                generale.style.background = "#3A3F44";
                generale.style.color = "#f89406";
                armure.style.background = "#3A3F44";
                armure.style.color = "#f89406";
                ia.style.background = "#3A3F44";
                ia.style.color = "#f89406";
                iai.style.background = "#f89406";
                iai.style.color = "#3A3F44";
                historique.style.background = "#3A3F44";
                historique.style.color = "#f89406";
                combat.style.background = "#3A3F44";
                combat.style.color = "#f89406";
            }
        })

        historique.addEventListener("click", () =>{
            if(getComputedStyle(tab5).display != "block"){
                tab5.style.display = "block";
                tab1.style.display = "none";
                tab2.style.display = "none";
                tab3.style.display = "none";
                tab4.style.display = "none";
                tab6.style.display = "none";
                                
                generale.style.background = "#3A3F44";
                generale.style.color = "#f89406";
                armure.style.background = "#3A3F44";
                armure.style.color = "#f89406";
                ia.style.background = "#3A3F44";
                ia.style.color = "#f89406";
                iai.style.background = "#3A3F44";
                iai.style.color = "#f89406";
                historique.style.background = "#f89406";
                historique.style.color = "#3A3F44";
                combat.style.background = "#3A3F44";
                combat.style.color = "#f89406";
            }
        })

        combat.addEventListener("click", () =>{
            if(getComputedStyle(tab6).display != "block"){
                tab6.style.display = "block";
                tab1.style.display = "none";
                tab2.style.display = "none";
                tab3.style.display = "none";
                tab4.style.display = "none";
                tab5.style.display = "none";
                                
                generale.style.background = "#3A3F44";
                generale.style.color = "#f89406";
                armure.style.background = "#3A3F44";
                armure.style.color = "#f89406";
                ia.style.background = "#3A3F44";
                ia.style.color = "#f89406";
                iai.style.background = "#3A3F44";
                iai.style.color = "#f89406";
                historique.style.background = "#3A3F44";
                historique.style.color = "#f89406";
                combat.style.background = "#f89406";
                combat.style.color = "#3A3F44";
            }
        })
    }
    getItemFromEvent = (ev) => {                                                            //repere l id de l item      
        const parent = $(ev.currentTarget).parents(".item");
        return this.actor.items.get(parent.data("itemId"));
    }
    _onItemEdit(event) {                                                                    //edition d item
        const item = this.getItemFromEvent(event);
        console.log(item);
        item.sheet.render(true);
    }
    _onItemDelete(event) {                                                                  //supression d item
        const item = this.getItemFromEvent(event);
        var d = Dialog.confirm({
            title: "Suppression d'élément",
            content: "<p>Confirmer la suppression de '" + item.name + "'.</p>",
            yes: () => this.actor.deleteOwnedItem(item.id),
            no: () => {},
            defaultYes: false
        });
    }
    _onRollInit(event) {                                                                    // jet d init
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
        var roll = new Roll(forminit);
        roll.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor }),
            flavor: texte
        });
    }
    _stylComb() {                                                                           // selection style de combat
        const dataf = super.getData();
        const character = dataf.actor.data.data

        var stycom = character.stycom
        console.log(stycom)

        if (stycom=="Standard"){
            var modstyJ = 0;
            var modstyD = 0;
            var modstyR = 0;
            var texte="Pas de bonus, ni de malus.";
        }
        else if (stycom=="Agressif"){
            var modstyJ = 3;
            var modstyD = -2;
            var modstyR = -2;
            var texte="Le personnage privilégie la réussite de ses attaques à sa propre sécurité. Bonus : Le personnage reçoit un bonus de 3 dés à ses jets d’attaque, au combat comme au tir. Malus : Le personnage reçoit un malus de 2 à sa réaction et à sa défense (avec un minimum de 0 dans ces deux scores).";
        }
        else if (stycom=="Defensif"){
            var modstyJ = -3;
            var modstyD = 2;
            var modstyR = 0;
            var texte="Le personnage cherche à se défendre face aux attaques de contact. Bonus : Le personnage gagne un bonus de 2 points en défense. Malus : Le personnage lance 3 dés en moins à ses jets d’attaque effectués, au contact comme au tir.";
        }
        else if (stycom=="Couvert"){
            var modstyJ = -3;
            var modstyD = 0;
            var modstyR = 2;
            var texte="S’il en a les moyens, un personnage peut se mettre à couvert pour obtenir une meilleure réaction face aux tirs. Bonus : Si l’abri est dans la ligne de tir (c’est le MJ qui décide), le personnage qui se met derrière obtient un bonus de 2 points en réaction. Malus : Le personnage lance 3 dés en moins à ses jets d’attaque effectués, au contact comme au tir.";
        }
        else if (stycom=="precis"){
            var modstyJ = 0;
            var modstyD = 0;
            var modstyR = 0;
            var texte="Le personnage équipé d’une arme de contact avec l’effet deux mains sacrifie sa mobilité pour une frappe plus adroite. Bonus : Le personnage peut ajouter une troisième caractéristique à son combo pour toucher sa cible à choisir parmi Dextérité, Savoir, Instinct ou Sang-Froid (le choix s’effectue à chaque attaque). Les bonus normalement octroyés par l’OD de cette troisième caractéristique sont ignorés. Malus : Pour effectuer une attaque avec le style précis, le personnage doit utiliser une action de combat et une action de déplacement.";
        }
        else if (stycom=="Pilonnage"){
            var modstyJ = 0;
            var modstyD = 0;
            var modstyR = 0;
            var texte="Le personnage équipé d’une arme de tir avec l’effet deux mains pilonne sa cible pour la tuer plus rapidement. Bonus : Tant que le personnage effectue un tir sur la même cible (ou le même groupe de cibles dans le cas d’une arme avec l’effet dispersion X), il augmente ses dégâts ou sa violence de 1 dé par tour passé à tirer précédemment. Au 1er tour, il ajoute ainsi 0 dé, au 2e tour passé à tirer, il ajoute 1 dé, au 3e, il ajoute 2 dés et ainsi de suite, dans la limite de 6 dés ajoutés ainsi. Malus : À chacune de ses attaques, le personnage lance 2 dés en moins.";
        }
        else if (stycom=="Puissant"){
            var modstyJ = 0;
            var modstyD = -2;
            var modstyR = -2;
            var texte="Le personnage équipé d’une arme de contact avec l’effet lourd frappe en puissance pour massacrer sa cible. Bonus : Lorsque le personnage effectue son attaque, il peut décider de sacrifier 1 dé à son jet pour toucher pour recevoir en contrepartie 1 dé supplémentaire aux dégâts ou à la violence de l’arme. Le personnage peut sacrifier ainsi jusqu’à 6 dés par attaque pour ajouter jusqu’à 6 dés de dégâts ou de violence. Malus : Le personnage reçoit un malus de 2 à sa réaction et à sa défense (avec un minimum de 0 dans ces deux scores).";
        }
        else if (stycom=="Suppression"){
            var modstyJ = 0;
            var modstyD = 0;
            var modstyR = 0;
            var texte="Le personnage équipé d’une arme de tir avec l’effet lourd effectue un tir de suppression pour amoindrir la puissance des ennemis. Bonus : Cet effet fonctionne de deux manières distinctes. En premier lieu, le personnage peut, lorsqu’il attaque un hostile, un salopard ou un patron, sacrifier 2 dés à ses dégâts pour retirer 1 dé de dégâts à toutes les attaques du prochain tour de l’ennemi ciblé. Un maximim de 6 dés peuvent ainsi êtres sacrifiés pour retirer jusqu’à 3 dés de dégâts à l’ennemi (la cible conserve au moins toujours 1 dé de dégâts). Si l’arme possède l’effet dispersion X, les ennemis touchés grâce à la dispersion subissent aussi le malus du style suppression. En second lieu, le personnage peut, lorsqu’il attaque une bande, sacrifier 2 dés à sa violence pour retirer 1 au score de débordement de sa cible. Un maximim de 8 dés peuvent ainsi être sacrifiés pour retirer jusqu’à 4 points au débordement de la bande ennemie. Ces points de débordement sont retirés avant calcul des dégâts effectifs. Les dégâts effectifs de la bande à ce tour sont donc égaux à son débordement moins le malus de suppression multiplié par le nombre de tours écoulés. Le style suppression réduit le débordement pour le tour en cours, et uniquement le tour en cours.";
        }
        else if (stycom=="Ambidextere"){
            var modstyJ = 0;
            var modstyD = 0;
            var modstyR = 0;
            var texte="Avec ce style, le personnage utilise deux armes de contact, deux armes de tir ou une de chaque, dans chacune de ses mains. Un chevalier peut par exemple posséder un ceste de répulsion dans une main et un pistovar de service dans l’autre. Les armes utilisées dans ce style doivent être des armes à une main (c’està-dire que l’effet deux mains n’est pas précisé dans leur profil). Bonus : Le personnage peut effectuer une première attaque avec l’arme dans sa main directrice (à déterminer avec le MJ) puis une autre avec son autre main. Les deux attaques successives comptent comme une seule action de combat, mais le PJ doit effectuer un test pour chaque attaque et peut toucher de cette façon deux créatures différentes. Malus : À toutes ses attaques, le personnage lance 3 dés en moins lors du jet effectué, au contact comme au tir.";
        }
        else if (stycom=="Akimbo"){
            var modstyJ = 0;
            var modstyD = 0;
            var modstyR = 0;
            var texte="Le style akimbo consiste à avoir dans les mains les deux mêmes armes pour s’en servir en même temps, peu importe le type d’arme du moment que celle-ci se tient à une main. Ainsi, pour utiliser ce style, le personnage doit par exemple utiliser un pistovar de service – ou encore une épée bâtarde (en version à une main) – dans chaque main. Les armes doivent être identiques mais peuvent posséder des améliorations ou des munitions différentes. Si les options ou les munitions des armes varient, il faut choisir l’une des deux armes comme étant l’arme principale, tous les effets de cette arme s’appliquent. Tous les effets de l’autre arme sont ignorés et elle vient juste ajouter ses dés de dégâts aux dégâts de l’arme principale (ou la moitié, arrondie à l’inférieur, de ses dés de violence à ceux de l’arme principale). Bonus : Un chevalier peut frapper ou tirer de ses deux armes en même temps. Ainsi, lorsqu’il détermine les dégâts, il cumule puis utilise les dés de dégâts indiqués sur les armes utilisées. Pour les dés de violence, le MJ utilise tous ceux indiqués sur une des armes et y ajoute la moitié des dés de violence de l’autre arme (arrondie à l’entier supérieur). Les bonus fixes ne sont pas cumulés (on utilise une seule fois les bonus fixes). Malus : À chacune de ses attaques, le personnage lance 3 dés en moins, au contact comme au tir.";
        }


        character.stycomt = texte
        var tab = [modstyJ,modstyD,modstyR]
        return tab
    }
    _listeJet(){                                                                            // base des jets
        const dataf = super.getData();
        const character = dataf.actor.data.data
        var tab = this._stylComb();
        var modstyJ = tab[0];
        var capliste1 = character.valeurde1
        var capliste2 = character.valeurde2
        var capliste3 = character.valeurde3
        var capliste4 = character.valeurde4
        var capbm = character.bonusmalus


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
        var nbdd = Number(capa1) + Number(capa2) + Number(capa3) + Number(capa4) + Number(capbm) + Number(modstyJ) + "d2cs2";
        var texte = "jet de : " + name1 + " - " + name2 + " - " + name3 + " - " + name4;

        var tab = [nbdd, nbdod, texte];
        return tab
    }
    _onRollNorm(event) {                                                                    // jet de dé hors combat

        console.log(event);

        var tab = this._listeJet();

        var nbdd = tab[0];
        var nbdod = tab[1];
        var texte = tab[2];
        
        var roll = new Roll(nbdd);

        roll.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor }),
            flavor: texte + nbdod
        });
    } 
    _onRollAtaccac(event){                                                                  // jet de dé corps a corps

        console.log(event);
        const dataf = super.getData();
        const character = dataf.actor.data.data
        const item = this.getItemFromEvent(event);
        var tab = this._listeJet();

        var force = Number(character.attributs.Chair.competence.Force.valeur);
        var forceOD = Number(character.attributs.Chair.competence.Force.od);

        var nbdd = tab[0];
        var nbdod = tab[1];
        var texte = tab[2];

        var degf = force + forceOD;
        var dedeg = item.data.data.degats;
        var degpur = item.data.data.special.bondeg.degpur;
        var devio = item.data.data.violence;
        var viopur = item.data.data.special.bonvio.degpur;

        var roll1 = new Roll(nbdd);
        var roll2 = new Roll(dedeg+"d6+"+degpur+"+"+degf);
        var roll3 = new Roll(devio+"d6+"+viopur);
        roll1.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: texte + nbdod
        });
        roll2.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: "Degats"
        });
        roll3.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: "Violence"
        });
    }
    _onRollAtacdis(event){                                                                  // jet de dé distance

        console.log(event);

        const item = this.getItemFromEvent(event);
        var tab = this._listeJet();

        var nbdd = tab[0];
        var nbdod = tab[1];
        var texte = tab[2];
        
        var dedeg = item.data.data.degats;
        var degpur = item.data.data.special.bondeg.degpur;
        var devio = item.data.data.violence;
        var viopur = item.data.data.special.bonvio.degpur;

        var roll1 = new Roll(nbdd);
        var roll2 = new Roll(dedeg+"d6+"+degpur);
        var roll3 = new Roll(devio+"d6+"+viopur);
        roll1.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: texte + nbdod
        });
        roll2.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: "Degats"
        });
        roll3.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: "Violence"
        });
    }
    _onRollAtaImp1(event){                                                                  // arme impro 1
        console.log(event)

        const dataf = super.getData();
        const character = dataf.actor.data.data

        var tab = this._listeJet();

        var nbdd = tab[0];
        var nbdod = tab[1];
        var texte = tab[2];

        var force = Number(character.attributs.Chair.competence.Force.valeur)
        var forceOD = Number(character.attributs.Chair.competence.Force.od)

        var degf = force + forceOD

        var roll1 = new Roll(nbdd);
        var roll2 = new Roll(4+'D6+'+degf)
        var roll3 = new Roll(4+'D6')

        roll1.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: texte + nbdod
        });
        roll2.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Degats"
        });
        roll3.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Violence"
        });
    }
    _onRollAtaImp2(event){                                                                  // arme impro 2
        console.log(event)

        const dataf = super.getData();
        const character = dataf.actor.data.data

        var tab = this._listeJet();

        var nbdd = tab[0];
        var nbdod = tab[1];
        var texte = tab[2];

        var force = Number(character.attributs.Chair.competence.Force.valeur)
        var forceOD = Number(character.attributs.Chair.competence.Force.od)

        var degf = force + forceOD

        var roll2 = new Roll(2+'D6+'+degf)
        var roll3 = new Roll(5+'D6')

        roll1.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: texte + nbdod
        });
        roll2.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Degats"
        });
        roll3.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Violence"
        });
    }
    _onRollAtaImp3(event){                                                                  // arme impro 3
        console.log(event)

        const dataf = super.getData();
        const character = dataf.actor.data.data

        var tab = this._listeJet();

        var nbdd = tab[0];
        var nbdod = tab[1];
        var texte = tab[2];

        var force = Number(character.attributs.Chair.competence.Force.valeur)
        var forceOD = Number(character.attributs.Chair.competence.Force.od)

        var degf = force + forceOD
        var roll1 = new Roll(nbdd);
        var roll2 = new Roll(4+'D6+'+degf)
        var roll3 = new Roll(4+'D6')

        roll1.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: texte + nbdod
        });
        roll2.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Degats"
        });
        roll3.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Violence"
        });
    }
    _onRollAtaImp4(event){                                                                  // arme impro 4
        console.log(event)

        const dataf = super.getData();
        const character = dataf.actor.data.data

        var tab = this._listeJet();

        var nbdd = tab[0];
        var nbdod = tab[1];
        var texte = tab[2];

        var force = Number(character.attributs.Chair.competence.Force.valeur)
        var forceOD = Number(character.attributs.Chair.competence.Force.od)

        var degf = force + forceOD
        var roll1 = new Roll(nbdd);
        var roll2 = new Roll(6+'D6+'+degf)
        var roll3 = new Roll(4+'D6')

        roll1.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: texte + nbdod
        });
        roll2.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Degats"
        });
        roll3.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Violence"
        });
    }
    _onRollAtaImp5(event){                                                                  // arme impro 5
        console.log(event)

        const dataf = super.getData();
        const character = dataf.actor.data.data

        var tab = this._listeJet();

        var nbdd = tab[0];
        var nbdod = tab[1];
        var texte = tab[2];

        var force = Number(character.attributs.Chair.competence.Force.valeur)
        var forceOD = Number(character.attributs.Chair.competence.Force.od)

        var degf = force + forceOD
        var roll1 = new Roll(nbdd);
        var roll2 = new Roll(4+'D6+'+degf)
        var roll3 = new Roll(6+'D6')

        roll1.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: texte + nbdod
        });
        roll2.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Degats"
        });
        roll3.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Violence"
        });
    }
    _onRollAtaImp6(event){                                                                  // arme impro 6
        console.log(event)

        const dataf = super.getData();
        const character = dataf.actor.data.data

        var tab = this._listeJet();

        var nbdd = tab[0];
        var nbdod = tab[1];
        var texte = tab[2];

        var force = Number(character.attributs.Chair.competence.Force.valeur)
        var forceOD = Number(character.attributs.Chair.competence.Force.od)

        var degf = force + forceOD
        var roll1 = new Roll(nbdd);
        var roll2 = new Roll(5+'D6+'+degf)
        var roll3 = new Roll(5+'D6')

        roll1.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: texte + nbdod
        });
        roll2.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Degats"
        });
        roll3.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Violence"
        });
    }
    _onRollAtaImp7(event){                                                                  // arme impro 7
        console.log(event)

        const dataf = super.getData();
        const character = dataf.actor.data.data

        var tab = this._listeJet();

        var nbdd = tab[0];
        var nbdod = tab[1];
        var texte = tab[2];

        var force = Number(character.attributs.Chair.competence.Force.valeur)
        var forceOD = Number(character.attributs.Chair.competence.Force.od)

        var degf = force + forceOD
        var roll1 = new Roll(nbdd);
        var roll2 = new Roll(7+'D6+'+degf)
        var roll3 = new Roll(5+'D6')

        roll1.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: texte + nbdod
        });
        roll2.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Degats"
        });
        roll3.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Violence"
        });
    }
    _onRollAtaImp8(event){                                                                  // arme impro 8
        console.log(event)

        const dataf = super.getData();
        const character = dataf.actor.data.data

        var tab = this._listeJet();

        var nbdd = tab[0];
        var nbdod = tab[1];
        var texte = tab[2];

        var force = Number(character.attributs.Chair.competence.Force.valeur)
        var forceOD = Number(character.attributs.Chair.competence.Force.od)

        var degf = force + forceOD
        var roll1 = new Roll(nbdd);
        var roll2 = new Roll(5+'D6+'+degf)
        var roll3 = new Roll(7+'D6')

        roll1.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: texte + nbdod
        });
        roll2.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Degats"
        });
        roll3.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Violence"
        });
    }
    _onRollAtaImp9(event){                                                                  // arme impro 9
        console.log(event)

        const dataf = super.getData();
        const character = dataf.actor.data.data

        var tab = this._listeJet();

        var nbdd = tab[0];
        var nbdod = tab[1];
        var texte = tab[2];

        var force = Number(character.attributs.Chair.competence.Force.valeur)
        var forceOD = Number(character.attributs.Chair.competence.Force.od)

        var degf = force + forceOD
        var roll1 = new Roll(nbdd);
        var roll2 = new Roll(6+'D6+'+degf)
        var roll3 = new Roll(6+'D6')

        roll1.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: texte + nbdod
        });
        roll2.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Degats"
        });
        roll3.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Violence"
        });
    }
    _onRollAtaImp10(event){                                                                 // arme impro 10
        console.log(event)

        const dataf = super.getData();
        const character = dataf.actor.data.data

        var tab = this._listeJet();

        var nbdd = tab[0];
        var nbdod = tab[1];
        var texte = tab[2];

        var force = Number(character.attributs.Chair.competence.Force.valeur)
        var forceOD = Number(character.attributs.Chair.competence.Force.od)

        var degf = force + forceOD
        var roll1 = new Roll(nbdd);
        var roll2 = new Roll(7+'D6+'+degf)
        var roll3 = new Roll(9+'D6')

        roll1.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: texte + nbdod
        });
        roll2.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Degats"
        });
        roll3.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Violence"
        });
    }
    _onRollAtaImp11(event){                                                                 // arme impro 11
        console.log(event)

        const dataf = super.getData();
        const character = dataf.actor.data.data

        var tab = this._listeJet();

        var nbdd = tab[0];
        var nbdod = tab[1];
        var texte = tab[2];

        var force = Number(character.attributs.Chair.competence.Force.valeur)
        var forceOD = Number(character.attributs.Chair.competence.Force.od)

        var degf = force + forceOD
        var roll1 = new Roll(nbdd);
        var roll2 = new Roll(8+'D6+'+degf)
        var roll3 = new Roll(8+'D6')

        roll1.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: texte + nbdod
        });
        roll2.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Degats"
        });
        roll3.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Violence"
        });
    }
    _onRollAtaImp12(event){                                                                 // arme impro 12
        console.log(event)

        const dataf = super.getData();
        const character = dataf.actor.data.data

        var tab = this._listeJet();

        var nbdd = tab[0];
        var nbdod = tab[1];
        var texte = tab[2];

        var force = Number(character.attributs.Chair.competence.Force.valeur)
        var forceOD = Number(character.attributs.Chair.competence.Force.od)

        var degf = force + forceOD
        var roll1 = new Roll(nbdd);
        var roll2 = new Roll(10+'D6+'+degf)
        var roll3 = new Roll(12+'D6')

        roll1.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: texte + nbdod
        });
        roll2.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Degats"
        });
        roll3.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Violence"
        });
    }
    _onRollAtaImp13(event){                                                                 // arme impro 13
        console.log(event)

        const dataf = super.getData();
        const character = dataf.actor.data.data

        var tab = this._listeJet();

        var nbdd = tab[0];
        var nbdod = tab[1];
        var texte = tab[2];

        var force = Number(character.attributs.Chair.competence.Force.valeur)
        var forceOD = Number(character.attributs.Chair.competence.Force.od)

        var degf = force + forceOD
        var roll1 = new Roll(nbdd);
        var roll2 = new Roll(11+'D6+'+degf)
        var roll3 = new Roll(11+'D6')

        roll1.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor} ),
            flavor: texte + nbdod
        });
        roll2.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Degats"
        });
        roll3.roll().toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor}+"Arme improvisée"),
            flavor: "Violence"
        });
    }
}