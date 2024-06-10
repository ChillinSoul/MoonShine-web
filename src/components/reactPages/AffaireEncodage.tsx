import InputLabel from "../input/InputLabel";
import { useState } from "react";
import { defaultAffaire } from "../../types/Affaires";
import {
  requestByAffaire,
  requestDeclarants,
  requestClients,
  addAffaire,
  updateAffaire,
  deleteAffaire,
} from "./AffaireEncodageData";
import type { AffaireType } from "../../types/Affaires";
import Button from "../input/Button";

export function AffaireEncodage() {
  const [affaire, setAffaire] = useState("");
  const [searchResult, setsearchResult] = useState<AffaireType>(defaultAffaire);
  const [declarants, setDeclarants] = useState<string[]>();
  const [clients, setClients] = useState<string[]>();
  const [update, setUpdate] = useState(false);

  const handleChange = (e: any) => {
    setAffaire(e.target.value);
  };

  const handleSearch = async (affaireIn: string) => {
    const result = await requestByAffaire(affaireIn, defaultAffaire);
    setsearchResult(result);
    console.log(searchResult);
    if (result.AFFAIRE !== "") setUpdate(true);
  };

  return (
    <div>
      <div className="flex justify-between w-3/4 m-auto">
        <InputLabel
          id="searchAffaire"
          label="Rechercher Affaire"
          name="searchAffaire"
          type="text"
          value={affaire}
          onChange={handleChange}
        />
        <Button
          id="searchButton"
          text="Rechercher"
          type="button"
          color="green"
          callback={() => handleSearch(affaire)}
        />
      </div>

      <form action="/affaires" method="post" className=" w-3/4 mx-auto">
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <InputLabel
            id="DATE"
            label="DATE"
            name="date"
            type="text"
            color="indigo"
            value={searchResult?.DATE}
            onChange={(e: any) =>
              setsearchResult({ ...searchResult, DATE: e.target.value })
            }
          />
          <InputLabel
            id="FARD_N"
            label="FARDE"
            name="farde"
            type="text"
            color="indigo"
            value={searchResult?.FARD_N}
            onChange={(e: any) =>
              setsearchResult({ ...searchResult, FARD_N: e.target.value })
            }
          />
          <InputLabel
            id="DECLARANT"
            label="DECLARANT"
            name="declarant"
            type="autoComplete"
            color="indigo"
            options={declarants}
            value={searchResult?.DECLARANT}
            onChange={(e: any) =>
              setsearchResult({ ...searchResult, DECLARANT: e.target.value })
            }
          />
          <InputLabel
            id="INSTRUCTION"
            label="INSTRUCTION"
            name="instruction"
            type="text"
            color="indigo"
            value={searchResult?.INSTRUCTION}
            onChange={(e: any) =>
              setsearchResult({ ...searchResult, INSTRUCTION: e.target.value })
            }
          />
          <InputLabel
            id="MARQUAGE"
            label="MARQUAGE"
            name="marquage"
            type="text"
            color="indigo"
            value={searchResult?.MARQUAGE}
            onChange={(e: any) =>
              setsearchResult({ ...searchResult, MARQUAGE: e.target.value })
            }
          />
          <InputLabel
            id="LTA"
            label="LTA"
            name="lta"
            type="text"
            color="indigo"
            value={searchResult?.LTA}
            onChange={(e: any) =>
              setsearchResult({ ...searchResult, LTA: e.target.value })
            }
          />
          <InputLabel
            id="AFFAIRE"
            label="N AFFAIRE"
            name="nAffaire"
            type="text"
            color="indigo"
            value={searchResult?.AFFAIRE}
            onChange={(e: any) =>
              setsearchResult({ ...searchResult, AFFAIRE: e.target.value })
            }
          />
          <InputLabel
            id="GRP"
            label="GRP"
            name="grp"
            type="text"
            color="indigo"
            value={searchResult?.GRP}
            onChange={(e: any) =>
              setsearchResult({ ...searchResult, GRP: e.target.value })
            }
          />

          <InputLabel
            id="COLIS"
            label="COLIS"
            name="colis"
            type="number"
            color="indigo"
            value={searchResult?.COLIS}
            onChange={(e: any) =>
              setsearchResult({ ...searchResult, COLIS: e.target.value })
            }
          />
          <InputLabel
            id="POIDS"
            label="POIDS"
            name="poids"
            type="number"
            color="indigo"
            value={searchResult?.POIDS}
            onChange={(e: any) =>
              setsearchResult({ ...searchResult, POIDS: e.target.value })
            }
          />
          <InputLabel
            id="CLIENT"
            label="CLIENT"
            name="client"
            type="text"
            color="indigo"
            value={searchResult?.CLIENT}
            onChange={(e: any) =>
              setsearchResult({ ...searchResult, CLIENT: e.target.value })
            }
          />
          <InputLabel
            id="COMPTOIR"
            label="COMPTOIR"
            name="comptoir"
            type="text"
            color="indigo"
            value={searchResult?.COMPTOIR}
            onChange={(e: any) =>
              setsearchResult({ ...searchResult, COMPTOIR: e.target.value })
            }
          />

          <InputLabel
            id="DESIGNATION"
            label="DESIGNATION"
            name="designation"
            type="text"
            color="indigo"
            cls="col-span-2"
            value={searchResult?.DESIGNATION}
            onChange={(e: any) =>
              setsearchResult({ ...searchResult, DESIGNATION: e.target.value })
            }
          />

          <InputLabel
            id="TAUX"
            label="TAUX"
            name="taux"
            type="number"
            color="indigo"
            value={searchResult?.TAUX}
            onChange={(e: any) =>
              setsearchResult({ ...searchResult, TAUX: e.target.value })
            }
          />
        </div>
        {/* <div className={divider}></div> */}
        <div className="w-full grid 2xl:grid-cols-[60%,40%] xl:grid-cols-1">
          <div className="size-full grid lg:grid-cols-3 md:grid-cols-2">
            <InputLabel
              label="US-DKg"
              id="US_DKg"
              name="usdKg"
              type="number"
              color="lime"
              value={searchResult?.US_DKg}
              onChange={(e: any) =>
                setsearchResult({ ...searchResult, US_DKg: e.target.value })
              }
            />
            <InputLabel
              id="FRET_EUR"
              label="FRET EUR"
              name="fretEur"
              type="number"
              color="sky"
              value={searchResult?.FRET_EUR}
              onChange={(e: any) =>
                setsearchResult({ ...searchResult, FRET_EUR: e.target.value })
              }
            />
            <InputLabel
              id="N_FCT_BLX"
              label="N FCT BLX"
              name="nFctBlx"
              type="text"
              color="sky"
              value={searchResult?.N_FCT_BLX}
              onChange={(e: any) =>
                setsearchResult({ ...searchResult, N_FCT_BLX: e.target.value })
              }
            />
            <InputLabel
              id="EXTD_USD"
              label="EXTD-USD"
              name="extdUsd"
              type="text"
              color="amber"
              value={searchResult?.EXTD_USD}
              onChange={(e: any) =>
                setsearchResult({ ...searchResult, EXTD_USD: e.target.value })
              }
            />
            <InputLabel
              id="EXTSA_USD"
              label="EXTSA-USD"
              name="extsaUsd"
              type="text"
              color="amber"
              value={searchResult?.EXTSA_USD}
              onChange={(e: any) =>
                setsearchResult({ ...searchResult, EXTSA_USD: e.target.value })
              }
            />
            <InputLabel
              id="PKGF_EUR"
              label="PKGF-EUR"
              name="pKgfEur"
              type="text"
              color="amber"
              value={searchResult?.PKGF_EUR}
              onChange={(e: any) =>
                setsearchResult({ ...searchResult, PKGF_EUR: e.target.value })
              }
            />
            <InputLabel
              id="BASE_Kg_EUR"
              label="BASE Kg-EUR"
              name="baseKgEur"
              type="text"
              color="yellow"
              value={searchResult?.BASE_Kg_EUR}
              onChange={(e: any) =>
                setsearchResult({
                  ...searchResult,
                  BASE_Kg_EUR: e.target.value,
                })
              }
            />
            <InputLabel
              id="FCT_N"
              label="N FCT"
              name="nFct"
              type="text"
              color="yellow"
              value={searchResult?.FCT_N}
              onChange={(e: any) =>
                setsearchResult({ ...searchResult, FCT_N: e.target.value })
              }
            />
            <InputLabel
              id="FCT"
              label="VAL FCT"
              name="valFct"
              type="text"
              color="yellow"
              value={searchResult?.FCT}
              onChange={(e: any) =>
                setsearchResult({ ...searchResult, FCT: e.target.value })
              }
            />
          </div>
        </div>
        <div className="my-5 flex gap-4">
          {update ? (
            <Button
              id="updateButton"
              text="Mettre à jour"
              type="submit"
              color="green"
              callback={() => {
                console.log(searchResult);
                console.log("update");
                console.log(searchResult.AFFAIRE);
                updateAffaire(searchResult)}}
            />
          ) : (
            <Button
              id="saveButton"
              text="Sauvegarder"
              type="submit"
              color="blue"
              callback={() => addAffaire(searchResult)}
            />
          )}
          <Button
            id="deleteButton"
            text="Supprimer"
            type="submit"
            color="red"
            callback={() => deleteAffaire(searchResult.AFFAIRE??"")}
          />
        </div>
      </form>
    </div>
  );
}
