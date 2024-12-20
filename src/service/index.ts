import { Request, Response, NextFunction } from 'express'

class Bet {
    async saveBet(req: Request, res: Response, next: NextFunction): Promise<any> {
        return res.json()
    }

    async saveResult(req: Request, res: Response, next: NextFunction): Promise<any> {
        return res.json()
    }

    async winner(req: Request, res: Response, next: NextFunction): Promise<any> {
        return res.json()
    }
}

const bet = new Bet()

export { Bet }
export default bet