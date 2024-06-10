type AffaireType = {
  ID?: string;
  String?: String;
  DECLARANT?: string;
  DATE?: string;
  FARDE?: string;
  LTA?: string;
  AFFAIRE?: string;
  GRP?: string;
  CLIENT?: string;
  COMPTOIR?: string;
  DESIGNATION?: string;
  INSTRUCTION?: string;
  MARQUAGE?: string;
  COLIS?: number;
  POIDS?: number;
  TAUX?: number;
  US_DKg?: number;
  EU_DKg?: number;
  DOUANE_USD?: number;
  DOUANE_EUR?: number;
  US_FKg?: number;
  EU_FKg?: number;
  FRET_USD?: number;
  FRET_EUR?: number;
  N_FCT_BLX?: string;
  EXTD_USD?: number;
  EXTD_EUR?: number;
  EXTSA_USD?: number;
  SERVAIR_USD?: number;
  SERVAIR_EUR?: number;
  PKGF_EUR?: number;
  EXTF_USD?: number;
  EXTF_EUR?: number;
  REV_USD?: number;
  REV_EUR?: number;
  GAIN_ESTIME?: number;
  BASE_Kg_EUR?: number;
  US_FCTKg?: number;
  EU_FCTKg?: number;
  FCT_USD?: number;
  FCT_EUR?: number;
  FCT_N?: string;
  DB_SUP_GAIN_SUP?: number;
  DB_REVIENT?: number;
  MARGE?: number;
  PERCENTAGE?: number;
  FRET?: number;
  SERV?: number;
  FCT?: number;
  CONTACT_FCT?: string;
  OCC_FCT?: string;
  REMARQUE?: string;
  BUDGET_CA_MOIS?: number;
  BUDGET_MARGE_BRT?: number;
  MOIS_N?: number;
  MOIS_LET?: string;
  ANNEE?: number;
  FARD_N?: string;
};

export type { AffaireType };

var nowDate = new Date();
var date =
  nowDate.getDate() +
  "/" +
  (nowDate.getMonth() + 1) +
  "/" +
  nowDate.getFullYear();

function getWeekNumber(d: Date) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1)) as any;
  var weekNo = Math.ceil((((d as any) - yearStart) / 86400000 + 1) / 7);
  return [d.getUTCFullYear(), weekNo];
}

var result = getWeekNumber(new Date());
const farde = "F" + result[0].toString().slice(-2) + "/" + result[1];
const nFct = "ML" + result[0].toString().slice(-2) + "-";
const nFctBlx = result[0].toString().slice(-2) + "," + result[1] + "-";

export const defaultAffaire: AffaireType = {
  DATE: date,
  AFFAIRE: "",
  FARD_N: farde,
  DECLARANT: "",
  INSTRUCTION: "",
  MARQUAGE: "",
  LTA: "",
  GRP: "",
  COLIS: 0,
  POIDS: 0,
  CLIENT: "",
  COMPTOIR: "",
  DESIGNATION: "",
  TAUX: 1.1,
  US_DKg: 0,
  FRET_EUR: 0,
  N_FCT_BLX: nFctBlx,
  EXTD_USD: 0,
  EXTSA_USD: 0,
  PKGF_EUR: 0,
  BASE_Kg_EUR: 0,
  FCT_N: nFct,
  FCT: 0,
};
