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
}