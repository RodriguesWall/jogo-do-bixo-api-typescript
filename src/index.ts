import express from "express";
import router from "./router/index.js";

const app = express();

app.use("/", router)
app.listen(3330, () => {
    console.log("Server starter...")
});