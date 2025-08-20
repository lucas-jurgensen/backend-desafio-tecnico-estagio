import type { Prisma } from "@prisma/client";
import {
    createInvestimentoRepository,
    deleteInvestimentoRepository,
    findInvestimentoByNameRepository,
    getAllInvestimentosRepository,
    updateInvestimentoRepository,
} from "../repositories/investimentoRepositories.js";
import { createInvestimentoSchema, idValidoSchema, nomeInvestimentoSchema, partialSchemaInvestimento, type UpdateInvestimentoInput } from "../schemas/investimentoSchema.js";

// interface com os tipos esperados para um novo investimento
interface InvestimentoInput {
    nome_investimento: string;
    tipo_investimento: string;
    valor: number;
}

export const createInvestimentoService = async (data: InvestimentoInput) => {
    const investimento = createInvestimentoSchema.parse(data);

    const novoInvestimento = await createInvestimentoRepository(investimento.nome_investimento, investimento.tipo_investimento, investimento.valor);

    return novoInvestimento;
};

export const getAllInvestimentosService = async () => {
    return await getAllInvestimentosRepository();
};

export const findInvestimentoByNameService = async (nome: string) => {
    const nomeValidado = nomeInvestimentoSchema.parse(nome);

    const investimentoEncontrado = await findInvestimentoByNameRepository(nomeValidado);

    if (investimentoEncontrado.length === 0) {
        throw new Error("Nenhum investimento encontrado com esse nome ");
    }

    return investimentoEncontrado;
};

export const updateInvestimentoService = async (id: number, data: Prisma.InvestimentoUpdateInput) => {
    const IdValido = idValidoSchema.parse(id);

    const dadosValido = partialSchemaInvestimento.parse(data);

    try {
        return await updateInvestimentoRepository(IdValido, data);
    } catch (err) {
        throw new Error("Erro ao atualizar o investimento com o ID: " + err);
    }
};

export const deleteInvestimentoService = async (id: number) => {
    const IdValido = idValidoSchema.parse(id);

    try {
        return await deleteInvestimentoRepository(IdValido);
    } catch (err) {
        throw new Error("Erro ao deletar o investimento com o ID: " + err);
    }
};
