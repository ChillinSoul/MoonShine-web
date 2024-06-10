import type { CaisseType } from "../../../types/Caisses";
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
import { deleteData } from "./CaisseData";

const columns: ColumnDef<CaisseType>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const caisse = row.original;
      if (!caisse) return null;
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
                navigator.clipboard.writeText(caisse.ID as string)
              }
            >
              copier le numéro d'affaire
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => deleteData(caisse.AFFAIRE as string)}
            >
              Supprimer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  { accessorKey: "DATE", header: "DATE" },
  { accessorKey: "N_PCE", header: "N° PCE" },
  { accessorKey: "TYPE_PCE", header: "TYPE PCE" },
  { accessorKey: "AFFAIRE", header: "AFFAIRE" },
  { accessorKey: "FARDE", header: "FARDE" },
  { accessorKey: "IDENTIFIANT", header: "IDENTIFIANT" },
  { accessorKey: "LIBELLE", header: "LIBELLE" },
  { accessorKey: "TX", header: "TX" },
  { accessorKey: "CAISSE_USD", header: "CAISSE USD" },
  { accessorKey: "CAISSE_EUR", header: "CAISSE EUR" },
  { accessorKey: "TOTAL_USD", header: "TOTAL USD" },
  { accessorKey: "CTRL", header: "CTRL" },
  { accessorKey: "N_FCT", header: "N° FCT" },
  { accessorKey: "CAISSE", header: "CAISSE" },
  { accessorKey: "REMARQUES", header: "REMARQUES" },
];

export default columns;
