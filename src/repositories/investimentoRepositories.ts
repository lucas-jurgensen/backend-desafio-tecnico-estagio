import prisma from "../lib/prisma.js";
import { Prisma } from "@prisma/client";
import type { UpdateInvestimentoInput } from "../schemas/investimentoSchema.js";

export const createInvestimentoRepository = async (name: string, type: string, value: number) => {
    return await prisma.investimento.create({
        data: {
            nome_investimento: name,
            tipo_investimento: type,
            valor: value,
        },
    });
};

export const getAllInvestimentosRepository = async () => {
    return await prisma.investimento.findMany();
};

export const findInvestimentoByNameRepository = async (nome: string) => {
    return await prisma.investimento.findMany({
        where: {
            nome_investimento: {
                startsWith: nome,
            },
        },
    });
};

/* POSSIVEL ADIÇÃO 

- filtrar por tipo de investimento

*/

export const updateInvestimentoRepository = async (id: number, data: Prisma.InvestimentoUpdateInput) => {
    return await prisma.investimento.update({
        where: { id },
        data,
    });
};

export const deleteInvestimentoRepository = async (id: number) => {
    return await prisma.investimento.delete({
        where: { id },
    });
};
