class Account {
    name: string
    accountNumber: number

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = () => {
        console.log('Voce depositou')
    }

    withdraw = () => {
        console.log('Voce sacaou')
    }
}

const newAccount: Account = new Account('Leandro', 1)
console.log(newAccount)

const account: Account =  new Account('João', 28)
account.deposit()