interface Caisses {
    id : string;
    name : string;
    creationDate : string;
    lastUpdate: string;
    items : CaisseItem[];
}
interface CaisseItem {
    nPce : string;
    date : string;
    typePce : string;
    libelle: string;
    affaire: string;
    farde: string;
    tiers: string;
    nFct: string;
    devise: string;
    taux: string;
    valeur: string;
    x: string;

}
