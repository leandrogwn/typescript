
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Leandro', 2)
peopleAccount.deposit()

const companyAccount: CompanyAccount = new CompanyAccount('Dio', 20)
companyAccount.deposit()

console.log(peopleAccount)
console.log(companyAccount)