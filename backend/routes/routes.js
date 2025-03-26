// routes
import express from "express";
import { postSuivi, getAllSuivi, deleteSuiviById, postModifySuivi } from "../controllers/controllers.js";

const router = express.Router()

router.post('/', postSuivi)
router.get('/', getAllSuivi)
router.delete('/:id', deleteSuiviById)
router.post('/:id', postModifySuivi)

export default router;