import { Request, Response, NextFunction } from 'express'
import { IUser, IBet } from '../model';
import BetRepository from '../repositorie';
import Util from '../util';

class Bet {
    async saveBet(req: Request, res: Response, next: NextFunction): Promise<any> {
        const bet: IBet[] = req.body.bet;

        const result = await BetRepository.saveBet(bet);

        return res.json({
            status: "Finalizado",
            data: result
        })
    }

    async saveResult(req: Request, res: Response, next: NextFunction): Promise<any> {
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        const result = await BetRepository.saveResult(randomNumber);

        return res.json({
            status: "Finalizado",
            data: result
        })
    }

    async winner(req: Request, res: Response, next: NextFunction): Promise<any> {

        const bets: IBet[] = await BetRepository.getBet();
        const results = await BetRepository.getResult();
        const n: number = results.result;
        const firstTwoDigits = parseInt(n.toString().slice(0, 2), 10);

        const animalWinner = Util.getAnimal(firstTwoDigits);
        const milharWinner = n;
        const dezenaWinner = n % 100;

        const animal: IBet[] = [];
        const milhar: IBet[] = [];
        const dezena: IBet[] = [];

        for(let bet of bets){
            if(bet.type === "animal" && bet.bet === animalWinner){
                animal.push(bet)
            }

            if(bet.type === "milhar" && Number(bet.bet) === milharWinner){
                milhar.push(bet)
            }

            if(bet.type === "dezena" && Number(bet.bet) === dezenaWinner){
                dezena.push(bet)
            }
        }

        return res.json({
            status: "Finalizado",
            data: {
                animal,
                milhar,
                dezena
            }
        })
    }
}

const bet = new Bet()

export { Bet }
export default bet