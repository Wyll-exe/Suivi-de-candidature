// controllers
import { suivi, suiviValidation } from "../model/model.js";

export async function postSuivi(req, res) {
    try {
        const { error, value } = suiviValidation.validate(req.body)
        if (error) {
            return res.status(400).json({ message: error.details[0].message})
        }

        const newSuivi = new suivi(
            req.body
        )
        const nouvSuivi = await newSuivi.save()
        res.status(201).json(nouvSuivi)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message : error.message})
    }
}

export async function getAllSuivi(req, res) {
    try {
        const contents = await suivi.find();
        res.status(200).json(contents);
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function deleteSuiviById(req, res) {
    try {
        const supp = await suivi.findByIdAndDelete(req.params.id);
        if (!supp) {
            return res.status(404).Json({ message: "Suivi non trouvé" })
        }
        res.json({message : "Le suivi a bien été supprimés"})
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
}

export async function postModifySuivi(req, res, next) {
    try {
        const modify = await suivi.findByIdAndUpdate({_id: req.params.id}, req.body);
        if (!modify) {
            return res.status(404).Json({ message: "Suivi non trouvé" })
        }
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
    next()
}