import { Router } from "express";
import { createInvestimentoController, deleteInvestimentoController, getInvestimentosController, updateInvestimentoController } from "../controllers/investimentoController.js";

const investimentoRouter = Router();

investimentoRouter.post("/investimentos", createInvestimentoController);
investimentoRouter.get("/investimentos", getInvestimentosController);
investimentoRouter.put("/investimentos/:id", updateInvestimentoController);
investimentoRouter.delete("/investimentos/:id", deleteInvestimentoController);

export default investimentoRouter;
