export abstract class DioAccount {
    private name: string
    accountNumber: number
    balance: number = 0
    status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name = name
        console.log('Nome alterado com sucesso')
    }

    getName = (): string => {
        return this.name
    }

    deposit = (): void => {
        if (this.validateStatus()) {
            console.log('Voce depositou')
        }
    }

    withdraw = (): void => {
        console.log('Voce sacaou')
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    private validateStatus = () => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta inválida');

    }
}

