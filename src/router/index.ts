import express from "express";
import ServiceBet from "../service"
import Validation from "../middlewares"

const router = express.Router();

router.post("/save-bet", Validation.validationSaveBet, ServiceBet.saveBet)
router.post("/save-result", Validation.validationSaveResult, ServiceBet.saveResult)
router.get("/winner", Validation.validationWinner, ServiceBet.winner)

export default router;