// model pour la bdd
import Joi from "joi";
import mongoose from "mongoose";

const suiviSchema = new mongoose.Schema({
    society : {
        type: String,
        required: true
    },
    job : {
        type: String,
        required: true
    },
    link : {
        type: String,
    },
    send_date : {
        type: Number,
        required: true
    },
    status : {
        type: String,
        enum: ['En attente', 'Acceptée', 'Refusée'],
        required: true
    }
})

const suivi = mongoose.model('suivi', suiviSchema)

const suiviValidation = Joi.object({
    society: Joi.string()
    .required()
    .messages({
        'string.empty': 'Le nom de société est obligatoire'
    }),
    job: Joi.string()
    .required()
    .messages({
        'string.empty': 'Le poste est obligatoire'
    }),
    send_date: Joi.string()
    .required()
    .messages({
        'string.empty': 'La date est obligatoire'
    }),
    status: Joi.string()
    .required()
    .messages({
        'string.empty': 'Le status n\'est pas bien définis'
    }),
})

export { suivi, suiviValidation }