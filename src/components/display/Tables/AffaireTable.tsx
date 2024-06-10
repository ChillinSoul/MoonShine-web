import React, { useEffect, useState } from "react";
import columns from "./AffaireColumns";
import { getData } from "./AffaireData";
import type { AffaireType } from "../../../types/Affaires";
import DataTable from "./DataTable";

const AffaireTable: React.FC = () => {
  const [data, setData] = useState<AffaireType[]>();
  const categories = [
    "DECLARANT",
    "DATE",
    "FARDE",
    "LTA",
    "AFFAIRE",
    "GRP",
    "CLIENT",
    "COMPTOIR",
    "DESIGNATION",
    "INSTRUCTION",
    "MARQUAGE",
    "COLIS",
    "POIDS",
    "TAUX",
    "US_DKg",
    "EU_DKg",
    "DOUANE_USD",
    "DOUANE_EUR",
    "US_FKg",
    "EU_FKg",
    "FRET_USD",
    "FRET_EUR",
    "N_FCT_BLX",
    "EXTD_USD",
    "EXTD_EUR",
    "EXTSA_USD",
    "SERVAIR_USD",
    "SERVAIR_EUR",
    "PKGF_EUR",
  ];
  const [selectedCategories, setSelectedCategories] = useState<string[]>([""]);
  const [values, setValues] = useState<string[]>([""]);

  var currentPage = 1;
  const fetchData = async (categories: string[], values: string[]) => {
    const result = await getData(
      data?.length ?? 0,
      data?.length ?? 0 + 20,
      categories,
      values,
    );

    if (!data) {
      setData(result);
      return;
    }
    setData([...data, ...result]);
  };
  const eraseAndFetchData = async (categories: string[], values: string[]) => {
    console.log(categories, values);
    const result = await getData(0, 20, categories, values);
    setData([]);
    setData(result);
  };

  useEffect(() => {
    fetchData([""], [""]);
  }, []);

  const previousPage = (): number => {
    currentPage--;
    return currentPage;
  };
  const nextPage = (): number => {
    currentPage++;
    if (!data) {
      return 0;
    }
    if ((currentPage + 2) * 10 > data.length) {
      console.log("fetching data");
      fetchData(selectedCategories, values);
    }
    return currentPage;
  };

  return (
    <div>
      <div className="p-2 gap-2 flex">
        <select onChange={(e) => setSelectedCategories([e.target.value])}>
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
        <input
          type="text"
          value={values[0]}
          onChange={(e) => setValues([e.target.value])}
          placeholder="Recercher..."
        />
        <button onClick={() => eraseAndFetchData(selectedCategories, values)}>
          Rechercher
        </button>
        <button
          onClick={() => {
            setSelectedCategories([""]);
            setValues([""]);
            fetchData([""], [""]);
          }}
        >
          Reset
        </button>
      </div>

      {/* {data ? <Table columns={columns} data={data} /> : "Loading..."} */}
      {data ? (
        <DataTable
          columns={columns}
          data={data}
          previousPageHandler={previousPage}
          nextPageHandler={nextPage}
        />
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default AffaireTable;
