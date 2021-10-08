import { Compte } from "./compte";

export interface Classe {
    id?: number,
    name: string,
    type: string,
    emplacement: string,
    userId: number,
    companyId: number,
    comptes?: Compte[],
    created_at?: string,
    updated_at?: string,
}
