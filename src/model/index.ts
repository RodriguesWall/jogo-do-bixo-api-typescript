export type IUser = {
    name: string,
    phone: string,
    email?: string
}

export type IBet = {
    user: IUser,
    type: string,
    bet: string
}

export type IAnimal = {
    name: string,
    init: number,
    finish: number
}

//sanitização
export const validBet = ["animal", "dezena", "milhar"];
export const validAnimal = [
    "Avestruz", "Águia", "Burro", "Cachorro", "Cabra", "Carneiro", "Camelo", "Cavalo",
    "Elefante", "Galo", "Gato", "Jacaré", "Leão", "Macaco", "Porco", "Pavão", "Peru",
    "Tigre", "Urso", "Veado", "Vaca", "Cobra", "Coruja", "Flamingo", "Iguana"
];
