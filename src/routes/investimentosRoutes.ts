import { Router } from "express";
import { createInvestimentoController, deleteInvestimentoController, getInvestimentosController, updateInvestimentoController } from "../controllers/investimentoController.js";

const investimentoRouter = Router();

investimentoRouter.post("/", createInvestimentoController);
investimentoRouter.get("/", getInvestimentosController);
investimentoRouter.put("/:id", updateInvestimentoController);
investimentoRouter.delete("/:id", deleteInvestimentoController);

export default investimentoRouter;
