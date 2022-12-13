import { Categorie } from "./Categorie";
import { Marque } from "./Marque";

export class Produit {

    id_prd!:number;
    description_prd!:String;
    lib_prd!:String;
    dateAjout_prd!:Date;
    prix_prd!:number;
    prix_livr!:number;
    categorie!:Categorie;
    laboratoire!:Marque;

}

