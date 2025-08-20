import { z } from "zod";

export const createInvestimentoSchema = z.object({
    nome_investimento: z.string().min(1, "Nome do investimento é obrigatório"),
    tipo_investimento: z.string().min(1, "Tipo do investimento é obrigatório"),
    valor: z.number().positive("Valor do investimento deve ser maior que 0"),
    data_investimento: z.coerce.date().max(new Date(), { message: "A data do investimento não pode estar no futuro" }).optional(),
});

// para validação de id no update
export const idValidoSchema = z.number().positive("ID inválido");

export const nomeInvestimentoSchema = z.string().min(1, "O nome do investimento é obrigatório");

// schema de verificação parcial para usar no update, verifica apenas os campos que colocarmos
export const partialSchemaInvestimento = createInvestimentoSchema.partial();

// solução para erro na hora de usar o partialSchema para verificar os tipos do update
export type UpdateInvestimentoInput = z.infer<typeof partialSchemaInvestimento>;
