import express from "express";
import cors from "cors";
import routes from "./routes/investimentosRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", routes);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});
