import { Request, Response, NextFunction } from 'express'

class Validation {
    async validationSaveBet(req: Request, res: Response, next: NextFunction): Promise<any> {
        next();
    }
    async validationSaveResult(req: Request, res: Response, next: NextFunction): Promise<any> {
        next();
    }
    async validationWinner(req: Request, res: Response, next: NextFunction): Promise<any> {
        next();
    }
}

const validation = new Validation()

export { Validation }
export default validation