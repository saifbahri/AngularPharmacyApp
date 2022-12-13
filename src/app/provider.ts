import { Pharmacien } from "./pharmacien";

export class Provider {

    id_fournissuer!:number;
    nom_fournisseur!:String;
    adresse_fournisseur!:String;
    email_fournisseur!:String;
    tel_fournisseur!:String;
    pharmacien!: Pharmacien;
}