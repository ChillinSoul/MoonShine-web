export interface Affaires {
    id : string;
    name : string;
    creationDate : string;
    lastUpdate: string;
    items : Affaire[];
}
export interface Affaire {
    date : string;
    farde : string;
    declarant : string;
    instruction : string;
    marquage : string;
    lta: string;
    nAffaire: string;
    grp: string;
    colis: string;
    poids: string;
    client: string;
    comptoir: string;
    designation: string;
    taux: string;
    usdKg: string;
    fretEur: string;
    nFctBlx: string;
    extdUsd: string;
    extsaUsd: string;
    pKgfEur: string;
    baseKgEur: string;
    nFct:  string;
    valFct: string;
}