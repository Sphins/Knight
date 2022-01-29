export default class KnightItemSheet extends ItemSheet{
    get template(){
        console.log(`Knight | Récupération du fichier html ${this.item.data.type}-sheet.`);

        return `systems/knight/template/sheets/${this.item.data.type}-sheet.html`;
    }

    getData(){
        const datai = super.getData();
        const item = datai.data.data


        return datai;
    }

    activateListeners(html) {                                                               //capteur d evenement
        const datai = super.getData();
        const item = datai.item.data.data;

        super.activateListeners(html);

        console.log(datai);

        var meta = item.choix
        
      if (meta=="personalisé"){
          meta1.style.display = "block";
      }
      if (meta=="barbarian"){

        var armt = Number(60) + Number(item.pointdarmureb);
        var enrt = Number(60) + Number(item.pointdenergieb);
        var cdft = Number(12) + Number(item.champdeforceb);
        
        
        item.slots.tete = 5;
        item.slots.brasgauche = 5;
        item.slots.brasdroit = 5;
        item.slots.torse = 8;
        item.slots.jambegauche = 5;
        item.slots.jambedroite = 5;

        item.overdrives.od1 = "Force";
        item.overdrives.od2 = "Endurance";
        item.overdrives.od3 = "Hargne";
        item.overdrives.od4 = "Combat";

        item.pointdarmure = armt;
        item.pointdenergie = enrt;
        item.champdeforce = cdft;

        meta2.style.display = "block";
      }
      if (meta=="bard"){

      var armt = Number(40) + Number(item.pointdarmureb);
      var enrt = Number(80) + Number(item.pointdenergieb);
      var cdft = Number(12) + Number(item.champdeforceb);
      
      
      item.slots.tete = 5;
      item.slots.brasgauche = 5;
      item.slots.brasdroit = 5;
      item.slots.torse = 8;
      item.slots.jambegauche = 5;
      item.slots.jambedroite = 5;

      item.overdrives.od1 = "Déplacement";
      item.overdrives.od2 = "Aura";
      item.overdrives.od3 = "Parole";
      item.overdrives.od4 = "Dexterité";

      item.pointdarmure = armt;
      item.pointdenergie = enrt;
      item.champdeforce = cdft;

      meta3.style.display = "block";
      }
      if (meta=="Berserk"){

        var armt = Number(60) + Number(item.pointdarmureb);
        var enrt = Number(0) + Number(item.pointdenergieb);
        var cdft = Number(8) + Number(item.champdeforceb);
        
        
        item.slots.tete = 6;
        item.slots.brasgauche = 6;
        item.slots.brasdroit = 6;
        item.slots.torse = 10;
        item.slots.jambegauche = 6;
        item.slots.jambedroite = 6;
  
        item.overdrives.od1 = "Hargne";
        item.overdrives.od2 = "Combat";
        item.overdrives.od3 = "Instinct";
        item.overdrives.od4 = "Aura";
  
        item.pointdarmure = armt;
        item.pointdenergie = enrt;
        item.champdeforce = cdft;
  
        meta4.style.display = "block";
      } 
      if (meta=="Druid"){

        var armt = Number(50) + Number(item.pointdarmureb);
        var enrt = Number(80) + Number(item.pointdenergieb);
        var cdft = Number(12) + Number(item.champdeforceb);
        
        
        item.slots.tete = 5;
        item.slots.brasgauche = 5;
        item.slots.brasdroit = 5;
        item.slots.torse = 8;
        item.slots.jambegauche = 5;
        item.slots.jambedroite = 5;
  
        item.overdrives.od1 = "Combat";
        item.overdrives.od2 = "Instinct";
        item.overdrives.od3 = "Tir";
        item.overdrives.od4 = "Technique";
  
        item.pointdarmure = armt;
        item.pointdenergie = enrt;
        item.champdeforce = cdft;
  
        meta5.style.display = "block";
      }
      if (meta=="Monk"){

        var armt = Number(60) + Number(item.pointdarmureb);
        var enrt = Number(50) + Number(item.pointdenergieb);
        var cdft = Number(14) + Number(item.champdeforceb);
        
        
        item.slots.tete = 7;
        item.slots.brasgauche = 8;
        item.slots.brasdroit = 8;
        item.slots.torse = 10;
        item.slots.jambegauche = 6;
        item.slots.jambedroite = 6;
  
        item.overdrives.od1 = "Hargne";
        item.overdrives.od2 = "Combat";
        item.overdrives.od3 = "Tir";
        item.overdrives.od4 = "Sang-froid";
  
        item.pointdarmure = armt;
        item.pointdenergie = enrt;
        item.champdeforce = cdft;
  
        meta6.style.display = "block";
      }      
      if (meta=="Necromancer"){

        var armt = Number(80) + Number(item.pointdarmureb);
        var enrt = Number(100) + Number(item.pointdenergieb);
        var cdft = Number(12) + Number(item.champdeforceb);
        
        
        item.slots.tete = 12;
        item.slots.brasgauche = 12;
        item.slots.brasdroit = 12;
        item.slots.torse = 12;
        item.slots.jambegauche = 12;
        item.slots.jambedroite = 12;
  
        item.overdrives.od1 = " ";
        item.overdrives.od2 = " ";
        item.overdrives.od3 = " ";
        item.overdrives.od4 = " ";
  
        item.pointdarmure = armt;
        item.pointdenergie = enrt;
        item.champdeforce = cdft;
  
        meta7.style.display = "block";
      } 
      if (meta=="Paladin"){

        var armt = Number(120) + Number(item.pointdarmureb);
        var enrt = Number(20) + Number(item.pointdenergieb);
        var cdft = Number(8) + Number(item.champdeforceb);
        
        
        item.slots.tete = 7;
        item.slots.brasgauche = 7;
        item.slots.brasdroit = 7;
        item.slots.torse = 10;
        item.slots.jambegauche = 7;
        item.slots.jambedroite = 7;
  
        item.overdrives.od1 = "Force";
        item.overdrives.od2 = "Endurance";
        item.overdrives.od3 = "Tir";
        item.overdrives.od4 = "Perception";
  
        item.pointdarmure = armt;
        item.pointdenergie = enrt;
        item.champdeforce = cdft;
  
        meta8.style.display = "block";
      } 
      if (meta=="Priest"){

        var armt = Number(70) + Number(item.pointdarmureb);
        var enrt = Number(60) + Number(item.pointdenergieb);
        var cdft = Number(10) + Number(item.champdeforceb);
        
        
        item.slots.tete = 5;
        item.slots.brasgauche = 5;
        item.slots.brasdroit = 5;
        item.slots.torse = 8;
        item.slots.jambegauche = 5;
        item.slots.jambedroite = 5;
  
        item.overdrives.od1 = "Force";
        item.overdrives.od2 = "Endurance";
        item.overdrives.od3 = "Savoir";
        item.overdrives.od4 = "Technique";
  
        item.pointdarmure = armt;
        item.pointdenergie = enrt;
        item.champdeforce = cdft;
  
        meta9.style.display = "block";
      } 
      if (meta=="Psion"){

        var armt = Number(50) + Number(item.pointdarmureb);
        var enrt = Number(60) + Number(item.pointdenergieb);
        var cdft = Number(14) + Number(item.champdeforceb);
        
        
        item.slots.tete = 7;
        item.slots.brasgauche = 10;
        item.slots.brasdroit = 10;
        item.slots.torse = 12;
        item.slots.jambegauche = 7;
        item.slots.jambedroite = 7;
  
        item.overdrives.od1 = "Instinct";
        item.overdrives.od2 = "Savoir";
        item.overdrives.od3 = "Sang-froid";
        item.overdrives.od4 = "Perception";
  
        item.pointdarmure = armt;
        item.pointdenergie = enrt;
        item.champdeforce = cdft;
  
        meta10.style.display = "block";
      }
      if (meta=="Ranger"){

        var armt = Number(50) + Number(item.pointdarmureb);
        var enrt = Number(70) + Number(item.pointdenergieb);
        var cdft = Number(12) + Number(item.champdeforceb);
        
        
        item.slots.tete = 4;
        item.slots.brasgauche = 4;
        item.slots.brasdroit = 4;
        item.slots.torse = 6;
        item.slots.jambegauche = 4;
        item.slots.jambedroite = 4;
  
        item.overdrives.od1 = "Déplacement";
        item.overdrives.od2 = "Tir";
        item.overdrives.od3 = "Discrétion";
        item.overdrives.od4 = "Dextérité";
  
        item.pointdarmure = armt;
        item.pointdenergie = enrt;
        item.champdeforce = cdft;
  
        meta11.style.display = "block";
      }        
      if (meta=="Rogue"){

        var armt = Number(50) + Number(item.pointdarmureb);
        var enrt = Number(70) + Number(item.pointdenergieb);
        var cdft = Number(12) + Number(item.champdeforceb);
        
        
        item.slots.tete = 5;
        item.slots.brasgauche = 5;
        item.slots.brasdroit = 5;
        item.slots.torse = 8;
        item.slots.jambegauche = 5;
        item.slots.jambedroite = 5;
  
        item.overdrives.od1 = "Déplacement";
        item.overdrives.od2 = "Combat";
        item.overdrives.od3 = "Discrétion";
        item.overdrives.od4 = "Dextérité";
  
        item.pointdarmure = armt;
        item.pointdenergie = enrt;
        item.champdeforce = cdft;
  
        meta12.style.display = "block";
      }
      if (meta=="Shaman"){

        var armt = Number(60) + Number(item.pointdarmureb);
        var enrt = Number(80) + Number(item.pointdenergieb);
        var cdft = Number(10) + Number(item.champdeforceb);
        
        
        item.slots.tete = 5;
        item.slots.brasgauche = 5;
        item.slots.brasdroit = 5;
        item.slots.torse = 8;
        item.slots.jambegauche = 5;
        item.slots.jambedroite = 5;
  
        item.overdrives.od1 = "Hargne";
        item.overdrives.od2 = "Savoir";
        item.overdrives.od3 = "Technique";
        item.overdrives.od4 = "Sang-froid";
  
        item.pointdarmure = armt;
        item.pointdenergie = enrt;
        item.champdeforce = cdft;
  
        meta13.style.display = "block";
      }
      if (meta=="Sorcerer"){

        var armt = Number(60) + Number(item.pointdarmureb);
        var enrt = Number(80) + Number(item.pointdenergieb);
        var cdft = Number(14) + Number(item.champdeforceb);
        
        
        item.slots.tete = 7;
        item.slots.brasgauche = 8;
        item.slots.brasdroit = 8;
        item.slots.torse = 10;
        item.slots.jambegauche = 6;
        item.slots.jambedroite = 6;
  
        item.overdrives.od1 = "Endurance";
        item.overdrives.od2 = "Instinct";
        item.overdrives.od3 = "Sang-froid";
        item.overdrives.od4 = "Dextérité";
  
        item.pointdarmure = armt;
        item.pointdenergie = enrt;
        item.champdeforce = cdft;
  
        meta14.style.display = "block";
      }
      if (meta=="Warlock"){

        var armt = Number(60) + Number(item.pointdarmureb);
        var enrt = Number(60) + Number(item.pointdenergieb);
        var cdft = Number(8) + Number(item.champdeforceb);
        
        
        item.slots.tete = 5;
        item.slots.brasgauche = 8;
        item.slots.brasdroit = 8;
        item.slots.torse = 8;
        item.slots.jambegauche = 5;
        item.slots.jambedroite = 5;
  
        item.overdrives.od1 = "Déplacement";
        item.overdrives.od2 = "Combat";
        item.overdrives.od3 = "Instinct";
        item.overdrives.od4 = "Dextérité";
  
        item.pointdarmure = armt;
        item.pointdenergie = enrt;
        item.champdeforce = cdft;
  
        meta15.style.display = "block";
      }      
      if (meta=="Warmaster"){

        var armt = Number(90) + Number(item.pointdarmureb);
        var enrt = Number(50) + Number(item.pointdenergieb);
        var cdft = Number(8) + Number(item.champdeforceb);
        
        
        item.slots.tete = 5;
        item.slots.brasgauche = 5;
        item.slots.brasdroit = 5;
        item.slots.torse = 8;
        item.slots.jambegauche = 5;
        item.slots.jambedroite = 5;
  
        item.overdrives.od1 = "Force";
        item.overdrives.od2 = "Endurance";
        item.overdrives.od3 = "Aura";
        item.overdrives.od4 = "Sang-froid";
  
        item.pointdarmure = armt;
        item.pointdenergie = enrt;
        item.champdeforce = cdft;
  
        meta16.style.display = "block";
      }
      if (meta=="Warrior"){

        var armt = Number(100) + Number(item.pointdarmureb);
        var enrt = Number(40) + Number(item.pointdenergieb);
        var cdft = Number(8) + Number(item.champdeforceb);
        
        
        item.slots.tete = 7;
        item.slots.brasgauche = 10;
        item.slots.brasdroit = 10;
        item.slots.torse = 12;
        item.slots.jambegauche = 7;
        item.slots.jambedroite = 7;
  
        item.overdrives.od1 = "Déplacement";
        item.overdrives.od2 = "Combat";
        item.overdrives.od3 = "Tir";
        item.overdrives.od4 = "Dextérité";
  
        item.pointdarmure = armt;
        item.pointdenergie = enrt;
        item.champdeforce = cdft;
  
        meta17.style.display = "block";
      }
      if (meta=="Wizard"){

        var armt = Number(40) + Number(item.pointdarmureb);
        var enrt = Number(80) + Number(item.pointdenergieb);
        var cdft = Number(14) + Number(item.champdeforceb);
        
        
        item.slots.tete = 5;
        item.slots.brasgauche = 5;
        item.slots.brasdroit = 5;
        item.slots.torse = 8;
        item.slots.jambegauche = 5;
        item.slots.jambedroite = 5;
  
        item.overdrives.od1 = "Combat";
        item.overdrives.od2 = "Instinct";
        item.overdrives.od3 = "Aura";
        item.overdrives.od4 = "Sang-froid";
  
        item.pointdarmure = armt;
        item.pointdenergie = enrt;
        item.champdeforce = cdft;
  
        meta18.style.display = "block";
      }   
      
        //effets d'arme


            html.find('#effet-a').click(event => {
              const checked = event.currentTarget.checked;
              ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
              // a toi de faire quelque chose
            });

            html.find('#effet-b').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
              });
            
            html.find('#effet-c').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
            });

            html.find('#effet-d').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
              });
  
            html.find('#effet-e').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
            });
              
            html.find('#effet-f').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
            });
            html.find('#effet-g').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
              });
  
              html.find('#effet-h').click(event => {
                  const checked = event.currentTarget.checked;
                  ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                  // a toi de faire quelque chose
                });
              
              html.find('#effet-i').click(event => {
                  const checked = event.currentTarget.checked;
                  ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                  // a toi de faire quelque chose
              });
  
              html.find('#effet-j').click(event => {
                  const checked = event.currentTarget.checked;
                  ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                  // a toi de faire quelque chose
                });
    
              html.find('#effet-k').click(event => {
                  const checked = event.currentTarget.checked;
                  ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                  // a toi de faire quelque chose
              });
                
              html.find('#effet-l').click(event => {
                  const checked = event.currentTarget.checked;
                  ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                  // a toi de faire quelque chose
              });

              html.find('#effet-m').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
              });
  
              html.find('#effet-n').click(event => {
                  const checked = event.currentTarget.checked;
                  ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                  // a toi de faire quelque chose
                });
              
              html.find('#effet-o').click(event => {
                  const checked = event.currentTarget.checked;
                  ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                  // a toi de faire quelque chose
              });
  
              html.find('#effet-p').click(event => {
                  const checked = event.currentTarget.checked;
                  ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                  // a toi de faire quelque chose
                });
    
              html.find('#effet-q').click(event => {
                  const checked = event.currentTarget.checked;
                  ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                  // a toi de faire quelque chose
              });
                
              html.find('#effet-r').click(event => {
                  const checked = event.currentTarget.checked;
                  ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                  // a toi de faire quelque chose
              });
              html.find('#effet-s').click(event => {
                  const checked = event.currentTarget.checked;
                  ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                  // a toi de faire quelque chose
                });
    
                html.find('#effet-t').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                  });
                
                html.find('#effet-u').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });
    
                html.find('#effet-v').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                  });
      
                html.find('#effet-w').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });
                  
                html.find('#effet-x').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });

                html.find('#effet-y').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                  });
                
                html.find('#effet-z').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });
    
                html.find('#effet-00').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                  });
      
                html.find('#effet-01').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });
                  
                html.find('#effet-02').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });

                html.find('#effet-03').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });
    
                html.find('#effet-04').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                  });
      
                html.find('#effet-05').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });
                  
                html.find('#effet-06').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });

                html.find('#effet-07').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });

    
                html.find('#effet-08').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                  });
      
                html.find('#effet-09').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });
                  
                html.find('#effet-10').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });

                html.find('#effet-11').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });
    
                html.find('#effet-12').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                  });
      
                html.find('#effet-13').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });

        //Ameliorations structurelles

        html.find('#amestr-a').click(event => {
            const checked = event.currentTarget.checked;
            ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
            // a toi de faire quelque chose
          });

          html.find('#amestr-b').click(event => {
              const checked = event.currentTarget.checked;
              ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
              // a toi de faire quelque chose
            });
          
          html.find('#amestr-c').click(event => {
              const checked = event.currentTarget.checked;
              ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
              // a toi de faire quelque chose
          });

          html.find('#amestr-d').click(event => {
              const checked = event.currentTarget.checked;
              ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
              // a toi de faire quelque chose
            });

          html.find('#amestr-e').click(event => {
              const checked = event.currentTarget.checked;
              ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
              // a toi de faire quelque chose
          });
            
          html.find('#amestr-f').click(event => {
              const checked = event.currentTarget.checked;
              ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
              // a toi de faire quelque chose
          });
          html.find('#amestr-g').click(event => {
              const checked = event.currentTarget.checked;
              ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
              // a toi de faire quelque chose
            });

            html.find('#amestr-h').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
              });
            
            html.find('#amestr-i').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
            });

            html.find('#amestr-j').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
              });
  
            html.find('#amestr-k').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
            });
              
            html.find('#amestr-l').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
            });

            html.find('#amestr-m').click(event => {
              const checked = event.currentTarget.checked;
              ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
              // a toi de faire quelque chose
            });

            html.find('#amestr-n').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
              });
            
        //Ameliorations d'ornement

        html.find('#ameorn-a').click(event => {
            const checked = event.currentTarget.checked;
            ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
            // a toi de faire quelque chose
          });

          html.find('#ameorn-b').click(event => {
              const checked = event.currentTarget.checked;
              ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
              // a toi de faire quelque chose
            });
          
          html.find('#ameorn-c').click(event => {
              const checked = event.currentTarget.checked;
              ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
              // a toi de faire quelque chose
          });

          html.find('#ameorn-d').click(event => {
              const checked = event.currentTarget.checked;
              ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
              // a toi de faire quelque chose
            });

          html.find('#ameorn-e').click(event => {
              const checked = event.currentTarget.checked;
              ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
              // a toi de faire quelque chose
          });
            
          html.find('#ameorn-f').click(event => {
              const checked = event.currentTarget.checked;
              ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
              // a toi de faire quelque chose
          });
          html.find('#ameorn-g').click(event => {
              const checked = event.currentTarget.checked;
              ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
              // a toi de faire quelque chose
            });

            html.find('#ameorn-h').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
              });
            
            html.find('#ameorn-i').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
            });

            html.find('#ameorn-j').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
              });
  
            html.find('#ameorn-k').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
            });
              
            html.find('#ameorn-l').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
            });

            html.find('#ameorn-m').click(event => {
              const checked = event.currentTarget.checked;
              ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
              // a toi de faire quelque chose
            });

            html.find('#ameorn-n').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
              });
                        
              html.find('#ameorn-o').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
            });

            html.find('#ameorn-p').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
              });
  
            html.find('#ameorn-q').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
            });


               //amelioration arme distance


               html.find('#amearm-a').click(event => {
                const checked = event.currentTarget.checked;
                ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                // a toi de faire quelque chose
              });
  
              html.find('#amearm-b').click(event => {
                  const checked = event.currentTarget.checked;
                  ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                  // a toi de faire quelque chose
                });
              
              html.find('#amearm-c').click(event => {
                  const checked = event.currentTarget.checked;
                  ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                  // a toi de faire quelque chose
              });
  
              html.find('#amearm-d').click(event => {
                  const checked = event.currentTarget.checked;
                  ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                  // a toi de faire quelque chose
                });
    
              html.find('#amearm-e').click(event => {
                  const checked = event.currentTarget.checked;
                  ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                  // a toi de faire quelque chose
              });
                
              html.find('#amearm-f').click(event => {
                  const checked = event.currentTarget.checked;
                  ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                  // a toi de faire quelque chose
              });
              html.find('#amearm-g').click(event => {
                  const checked = event.currentTarget.checked;
                  ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                  // a toi de faire quelque chose
                });
    
                html.find('#amearm-h').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                  });
                
                html.find('#amearm-i').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });
    
                html.find('#amearm-j').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                  });
      
                html.find('#amearm-k').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });
                  
                html.find('#amearm-l').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });
  
                html.find('#amearm-m').click(event => {
                  const checked = event.currentTarget.checked;
                  ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                  // a toi de faire quelque chose
                });
    
                html.find('#amearm-n').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                  });
                
                html.find('#amearm-o').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });
    
                html.find('#amearm-p').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                  });
      
                html.find('#amearm-q').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });
                  
                html.find('#amearm-r').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                });
                html.find('#amearm-s').click(event => {
                    const checked = event.currentTarget.checked;
                    ui.notifications.info("click sur une checkbox antana, maintenant " + checked? "checked" : "unchecked");
                    // a toi de faire quelque chose
                  });
            
    }
}
