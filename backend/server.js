import app from "./app.js";
import connectDB from "./config/db.js";

import { configDotenv } from "dotenv";
configDotenv();

const PORT = process.env.PORT || 5001

app.listen(PORT,()=>{
    connectDB().then(()=>console.log(`Server is running on http://localhost:${PORT}`));
})

