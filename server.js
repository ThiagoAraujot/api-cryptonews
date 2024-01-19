import "dotenv/config";
import app from "./App.js";

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Servidor rodando na porta --${port}--`));
