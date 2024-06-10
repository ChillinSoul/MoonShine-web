import type { AffaireType } from "../../../types/Affaires";

export const deleteData = async (affaireNumber: string): Promise<boolean> => {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
            mutation deleteAffaire($Id: ID) {
              deleteAffaire(id: $Id)
            }
            `,
      variables: { Id: affaireNumber },
    }),
  });

  const data = await response.json();
  return data.data.deleteAffaire;
}
export async function getData(
  from: number,
  to: number,
  attrs: string[],
  values: string[],
): Promise<AffaireType[]> {
  const query = `
        query affaire($from: Int, $to: Int, $attrs: [String], $values: [String]) {
            affaireFromToBy(from: $from, to: $to, attrs: $attrs, values: $values) {
            DECLARANT
            DATE
            FARDE
            LTA
            AFFAIRE
            GRP
            CLIENT
            COMPTOIR
            DESIGNATION
            INSTRUCTION
            MARQUAGE
            COLIS
            POIDS
            TAUX
            US_DKg
            EU_DKg
            DOUANE_USD
            DOUANE_EUR
            US_FKg
            EU_FKg
            FRET_USD
            FRET_EUR
            N_FCT_BLX
            EXTD_USD
            EXTD_EUR
            EXTSA_USD
            SERVAIR_USD
            SERVAIR_EUR
            PKGF_EUR
            EXTF_USD
            EXTF_EUR
            REV_USD
            REV_EUR
            GAIN_ESTIME
            BASE_Kg_EUR
            US_FCTKg
            EU_FCTKg
            FCT_USD
            FCT_EUR
            FCT_N
            DB_SUP_GAIN_SUP
            DB_REVIENT
            MARGE
            POURCENTAGE
            FRET
            SERV
            FCT
            CONTACT_FCT
            OCC_FCT
            REMARQUE
            BUDGET_CA_MOIS
            BUDGET_MARGE_BRT
            MOIS_N
            MOIS_LET
            ANNEE
            FARD_N
            }
        }
  
    `;
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
      variables: {
        from: from,
        to: to,
        attrs: attrs,
        values: values,
      },
    }),
  });

  const json = await response.json();
  const Affaires = json.data.affaireFromToBy as AffaireType[];
  console.log(Affaires);
  return Affaires;
}
