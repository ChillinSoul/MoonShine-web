import type { CaisseType } from "../../../types/Caisses";
export async function getData(
  from: number,
  to: number,
  attrs: string[],
  values: string[],
): Promise<CaisseType[]> {
  const query = `
  query caisse($from: Int, $to: Int, $attrs: [String], $values: [String]) {
    caisseFromToBy(from: $from, to: $to, attrs: $attrs, values: $values) {
      DATE
      ID
      N_PCE
      TYPE_PCE
      AFFAIRE
      FARDE
      IDENTIFIANT
      LIBELLE
      TX
      CAISSE_USD
      CAISSE_EUR
      TOTAL_USD
      CTRL
      N_FCT
      CAISSE
      REMARQUES
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
  const caisses = json.data.caisseFromToBy as CaisseType[];
  return caisses;
}

export const deleteData = async (id: string): Promise<boolean> => {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
            mutation deleteCaisse($Id: ID) {
              deleteCaisse(id: $Id){
                AFFAIRE
              }
            }
            `,
      variables: { Id: id },
    }),
  });

  const data = await response.json();
  return data.data.deleteCaisse;
}
