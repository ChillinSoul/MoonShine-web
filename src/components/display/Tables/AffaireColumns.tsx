// import type { ColumnDef } from "./Table";
import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "../../../../@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../@/components/ui/dropdown-menu";

import { deleteData } from "./AffaireData";
import type { AffaireType } from "../../../types/Affaires";

const columns: ColumnDef<AffaireType>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const affaire = row.original;
      if (!affaire) return null;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(affaire.AFFAIRE as string)
              }
            >
              copier le numéro d'affaire
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => deleteData(affaire.AFFAIRE as string)}
            >
              Supprimer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  { accessorKey: "DECLARANT", header: "DECLARANT" },
  { accessorKey: "DATE", header: "DATE" },
  { accessorKey: "FARDE", header: "FARDE" },
  { accessorKey: "LTA", header: "LTA" },
  { accessorKey: "AFFAIRE", header: "AFFAIRE" },
  { accessorKey: "GRP", header: "GRP" },
  { accessorKey: "CLIENT", header: "CLIENT" },
  { accessorKey: "COMPTOIR", header: "COMPTOIR" },
  { accessorKey: "DESIGNATION", header: "DESIGNATION" },
  { accessorKey: "INSTRUCTION", header: "INSTRUCTION" },
  { accessorKey: "MARQUAGE", header: "MARQUAGE" },
  { accessorKey: "COLIS", header: "COLIS" },
  {
    accessorKey: "POIDS",
    header: "POIDS",
    cell: ({ row }) => {
      const amount = row.getValue("POIDS");
      const formated = amount + "kg";
      return <div className="text-right font-medium">{formated}</div>;
    },
  },
  { accessorKey: "TAUX", header: "TAUX" },
  {
    accessorKey: "US_DKg",
    header: "US-DKg",
    cell: ({ row }) => {
      const amount = row.getValue("US_DKg");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "EU_DKg",
    header: "EU-DKg",
    cell: ({ row }) => {
      const amount = row.getValue("EU_DKg");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "DOUANE_USD",
    header: "DOUANE USD",
    cell: ({ row }) => {
      const amount = row.getValue("DOUANE_USD");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "DOUANE_EUR",
    header: "DOUANE EUR",
    cell: ({ row }) => {
      const amount = row.getValue("DOUANE_EUR");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "US_FKg",
    header: "US FKg",
    cell: ({ row }) => {
      const amount = row.getValue("US_FKg");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "EU_FKg",
    header: "EU FKg",
    cell: ({ row }) => {
      const amount = row.getValue("EU_FKg");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "FRET_USD",
    header: "FRET USD",
    cell: ({ row }) => {
      const amount = row.getValue("FRET_USD");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "FRET_EUR",
    header: "FRET EUR",
    cell: ({ row }) => {
      const amount = row.getValue("FRET_EUR");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  { accessorKey: "N_FCT_BLX", header: "N°FCT BLX" },
  {
    accessorKey: "EXTD_USD",
    header: "EXTD USD",
    cell: ({ row }) => {
      const amount = row.getValue("EXTD_USD");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "EXTD_EUR",
    header: "EXTD EUR",
    cell: ({ row }) => {
      const amount = row.getValue("EXTD_EUR");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "EXTSA_USD",
    header: "EXTSA USD",
    cell: ({ row }) => {
      const amount = row.getValue("EXTSA_USD");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "SERVAIR_USD",
    header: "SERVAIR USD",
    cell: ({ row }) => {
      const amount = row.getValue("SERVAIR_USD");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "SERVAIR_EUR",
    header: "SERVAIR EUR",
    cell: ({ row }) => {
      const amount = row.getValue("SERVAIR_EUR");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },

  {
    accessorKey: "PKGF_EUR",
    header: "PKGF EUR",
    cell: ({ row }) => {
      const amount = row.getValue("PKGF_EUR");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "EXTF_USD",
    header: "EXTF USD",
    cell: ({ row }) => {
      const amount = row.getValue("EXTF_USD");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "EXTF_EUR",
    header: "EXTF EUR",
    cell: ({ row }) => {
      const amount = row.getValue("EXTF_EUR");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "REV_USD",
    header: "REV USD",
    cell: ({ row }) => {
      const amount = row.getValue("REV_USD");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "REV_EUR",
    header: "REV EUR",
    cell: ({ row }) => {
      const amount = row.getValue("REV_EUR");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "GAIN_ESTIME",
    header: "GAIN ESTIME",
    cell: ({ row }) => {
      const amount = row.getValue("GAIN_ESTIME");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "BASE_Kg_EUR",
    header: "BASE Kg EUR",
    cell: ({ row }) => {
      const amount = row.getValue("BASE_Kg_EUR");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "US_FCTKg",
    header: "US-FCTKg",
    cell: ({ row }) => {
      const amount = row.getValue("US_FCTKg");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "EU_FCTKg",
    header: "EU-FCTKg",
    cell: ({ row }) => {
      const amount = row.getValue("EU_FCTKg");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "FCT_USD",
    header: "FCT USD",
    cell: ({ row }) => {
      const amount = row.getValue("FCT_USD");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "FCT_EUR",
    header: "FCT EUR",
    cell: ({ row }) => {
      const amount = row.getValue("FCT_EUR");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  { accessorKey: "FCT_N", header: "N° FCT" },
  {
    accessorKey: "DB_SUP_GAIN_SUP",
    header: "DB SUP GAIN SUP",
    cell: ({ row }) => {
      const amount = row.getValue("DB_SUP_GAIN_SUP");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "DB_REVIENT",
    header: "DB REVIENT",
    cell: ({ row }) => {
      const amount = row.getValue("DB_REVIENT");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "MARGE",
    header: "MARGE",
    cell: ({ row }) => {
      const amount = row.getValue("MARGE");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  { accessorKey: "PERCENTAGE", header: "%" },
  {
    accessorKey: "FRET",
    header: "FRET",
    cell: ({ row }) => {
      const amount = row.getValue("FRET");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "SERV",
    header: "SERV",
    cell: ({ row }) => {
      const amount = row.getValue("SERV");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount as number);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  { accessorKey: "FCT", header: "FCT" },
  { accessorKey: "CONTACT_FCT", header: "CONTACT FCT" },
  { accessorKey: "OCC_FCT", header: "OCC FCT" },
  { accessorKey: "REMARQUE", header: "REMARQUE" },
  { accessorKey: "BUDGET_CA_MOIS", header: "BUDGET CA MOIS" },
  { accessorKey: "BUDGET_MARGE_BRT", header: "BUDGET MARGE BRT" },
  { accessorKey: "MOIS_N", header: "MOIS N" },
  { accessorKey: "MOIS_LET", header: "MOIS LET" },
  { accessorKey: "ANNEE", header: "ANNEE" },
  { accessorKey: "FARD_N", header: "FARD N" },
];

export default columns;
