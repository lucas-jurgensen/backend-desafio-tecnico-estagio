import express from "express";
import routes from "./routes/investimentosRoutes.js";

const app = express();
app.use(express.json());

app.use("/", routes);

app.listen(3000, () => {
    console.log("Servidor rodando em https://localhost:3000/");
});
