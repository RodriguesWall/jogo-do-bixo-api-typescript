import { Request, Response, NextFunction } from 'express'
import { validAnimal } from '../model';
import BetRepository from '../repositorie';

class Util {
    getAnimal(n: number): string {
        return validAnimal[n % 25]
    }


}

const util = new Util()

export { Util }
export default util