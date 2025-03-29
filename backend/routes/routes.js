// routes
import express from "express";
import { postSuivi, getAllSuivi, deleteSuiviById, postModifySuivi, getSuivibyId, getSuivibyFollow } from "../controllers/controllers.js";

const router = express.Router()

router.post('/', postSuivi)
router.get('/', getAllSuivi)
router.get('/follow', getSuivibyFollow)
router.delete('/:id', deleteSuiviById)
router.put('/:id', postModifySuivi)
router.get('/:id', getSuivibyId)

export default router;