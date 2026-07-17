import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/db";

// Załaduj zmienne z .env
dotenv.config();

// Połącz z bazą danych
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server działa na porcie ${PORT}`);
});
