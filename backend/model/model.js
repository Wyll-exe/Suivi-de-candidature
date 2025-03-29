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
    job_link : {
        type: String
    },
    send_date : {
        type: Number,
        required: true
    },
    status : {
        type: String,
        enum: ['En attente', 'Acceptée', 'Refusée'],
        required: true
    },
    follow : {
        type: Number,
        default: 0
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
    job_link: Joi.string()
    .optional()
    .messages({
        'string.empty': 'Le lien est mauvais'
    }),
    send_date: Joi.number()
    .required()
    .messages({
        'number.base': 'La date est obligatoire'
    }),
    status: Joi.string()
    .required()
    .messages({
        'string.empty': 'Le status n\'est pas bien définis'
    }),
    follow: Joi.number()
    .optional()
    .messages({
        'number.base': 'le nombre de jour de relance est mauvais'
    })
})

export { suivi, suiviValidation }