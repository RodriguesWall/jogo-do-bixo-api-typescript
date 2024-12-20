import fs from "fs";
import path from "path"
import { IUser, IBet } from '../model';

const dbPath = path.resolve(__dirname, "db")
const jsonFileBet = path.join(dbPath, "bet_db.json")
const jsonFileResult = path.join(dbPath, "result.json")

class BetRepository {
   
    async saveBet(listBet: IBet[]): Promise<string> {
        if (!fs.existsSync(dbPath)) {
            fs.mkdirSync(dbPath, { recursive: true });
        }
    
        fs.writeFileSync(jsonFileBet, JSON.stringify(listBet, null, 2), "utf-8");
        return `Arquivo salvo em: ${jsonFileBet}`;   
    }

    async saveResult(result: number): Promise<string> {
        if (!fs.existsSync(dbPath)) {
            fs.mkdirSync(dbPath, { recursive: true });
        }
    
        fs.writeFileSync(jsonFileResult, JSON.stringify({result}, null, 2), "utf-8");
        return `Resultado salvo em: ${jsonFileResult}`;   
    }

    async getResult(): Promise<any> {
        if (fs.existsSync(jsonFileResult)) {
            const data = fs.readFileSync(jsonFileResult, "utf-8");
            return JSON.parse(data);
        }
        return {}
    }

    async getBet(): Promise<[]> {
        if (fs.existsSync(jsonFileBet)) {
            const data = fs.readFileSync(jsonFileBet, "utf-8");
            return JSON.parse(data);
        }
        return []
    }
}

const betRepository = new BetRepository()

export { BetRepository }
export default betRepository