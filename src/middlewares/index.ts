import { Request, Response, NextFunction } from 'express'
import { validate as expValidate } from 'express-validation'
import { validBet } from '../model';
import Joi from 'joi';

class Validation {
    async validationSaveBet(req: Request, res: Response, next: NextFunction): Promise<any> {
        return expValidate({
            body: Joi.object({
                bet: Joi.array().items( 
                    Joi.object({
                        type: Joi.string().valid(...validBet).required(),
                        bet: Joi.string().required(),
                        user: Joi.object({
                            name: Joi.string().required(),
                            phone: Joi.string().required(),
                            email: Joi.string(),
                        }).required()
                    }).required(),
                ).required()
            })
        },
        {
            keyByField: true
        })(req, res, next)
    }
    async validationSaveResult(req: Request, res: Response, next: NextFunction): Promise<any> {
        const validationSchema = Joi.object({});

        return expValidate({ body: validationSchema })(req, res, next);
    }
    async validationWinner(req: Request, res: Response, next: NextFunction): Promise<any> {
        next();
    }
}

const validation = new Validation()

export { Validation }
export default validation