import type { Request, Response } from "express";
import { createInvestimentoService, deleteInvestimentoService, findInvestimentoByNameService, getAllInvestimentosService, updateInvestimentoService } from "../services/investimentoService.js";

export const createInvestimentoController = async (req: Request, res: Response) => {
    try {
        const novoInvestimento = await createInvestimentoService(req.body);
        return res.status(201).json(novoInvestimento);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

// unico endpoint para get /investimentos
export const getInvestimentosController = async (req: Request, res: Response) => {
    try {
        // caso passemos um nome na requisição, sera buscado o investimento com o nome
        const { nome } = req.query;
        if (nome) {
            const investimentosFiltrado = await findInvestimentoByNameService(String(nome));

            return res.json(investimentosFiltrado);
        }

        // caso o nome não seja passado, todos os investimentos são listados
        const todosInvestimentos = await getAllInvestimentosService();
        res.json(todosInvestimentos);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const updateInvestimentoController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body;

        if (!id) {
            return res.status(400).json({ error: "ID do investimento é obrigatório" });
        }

        if (!data) {
            return res.status(400).json({ error: "Dados para atualização são obrigatórios" });
        }

        const investimentoAtualizado = await updateInvestimentoService(Number(id), data);
        res.json(investimentoAtualizado);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteInvestimentoController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const investimentoExcluido = await deleteInvestimentoService(Number(id));
        res.status(204).send();
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};
