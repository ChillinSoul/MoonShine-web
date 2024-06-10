import type { useState } from "react";
import type { AffaireType } from "../../types/Affaires";

export const requestDeclarants = async (): Promise<string[]> => {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
            query searchResult {
                declarants {
                    NOM
                }
            }
            `,
    }),
  });

  const data = await response.json();
  const declarants = [];
  for (let i = 0; i < data.data.declarants.length; i++) {
    declarants.push(data.data.declarants[i].NOM);
  }
  return declarants;
};

export const requestByAffaire = async (
  affaireNumber: string,
  fallback: AffaireType,
): Promise<AffaireType> => {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query searchResultAffaire($Id: ID) {
            affaireById(id: $Id) {
                DATE
                AFFAIRE
                FARD_N
                DECLARANT
                INSTRUCTION
                MARQUAGE
                LTA
                GRP
                COLIS
                POIDS
                CLIENT
                COMPTOIR
                DESIGNATION
                TAUX
                US_DKg
                FRET_EUR
                N_FCT_BLX
                EXTD_USD
                EXTSA_USD
                PKGF_EUR
                BASE_Kg_EUR
                FCT_N
                FCT
            }
            }
        `,
      variables: { Id: affaireNumber },
    }),
  });

  const data = await response.json();
  if (data.errors || data.data.affaireById === null) {
    return fallback;
  }
  let affaireResult = data.data.affaireById;
  return affaireResult;
};

export const requestClients = async (): Promise<string[]> => {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
            query searchResult {
                clients {
                    nom
                }
            }
            `,
    }),
  });

  const data = await response.json();
  return data.data.clients;
};


export const addAffaire = async (affaire: AffaireType): Promise<boolean> => {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
            mutation addAffaire($affaire: AffaireInput) {
              addAffaire(affaire: $affaire)
            }
            `,
      variables: { affaire: affaire },
    }),
  });

  const data = await response.json();
  return data.data.addAffaire;
}
export const updateAffaire = async (affaire: AffaireType): Promise<boolean> => {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      mutation Mutation($editAffaireId: ID, $affaire: AffaireInput) {
        editAffaire(id: $editAffaireId, affaire: $affaire) {
          AFFAIRE
        }
      }
            `,
      variables: { affaire: affaire, editAffaireId: affaire.AFFAIRE},
    }),
  });

  const data = await response.json();
  return data.data.editAffaire;
}

export const deleteAffaire = async (affaireNumber: string): Promise<boolean> => {
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