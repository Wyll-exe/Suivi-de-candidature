// routes
import express from "express";
import { postSuivi, getAllSuivi, deleteSuiviById, postModifySuivi, getSuivibyId } from "../controllers/controllers.js";

const router = express.Router()

router.post('/', postSuivi)
router.get('/', getAllSuivi)
router.delete('/:id', deleteSuiviById)
router.put('/:id', postModifySuivi)
router.get('/:id', getSuivibyId)

export default router;