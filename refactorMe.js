// Separate module, OO-style store for state and state-modifying methods
class IncomeStore {
  constructor(netIncome) {
    this.netIncome = netIncome
  }

  setNetIncome = (value) => {
    this.netIncome = value
  }
}

const incomeStore = new IncomeStore()

// some business logic in a separate file
const employees = [
  {
    name: 'Johnny Rose',
    role: 'manager',
    salary: 1_000_000,
    isRelated: true,
  },
  {
    name: 'Alexis Rose',
    role: 'public relations',
    salary: 2_000_000,
    isRelated: true,
  },
  {
    name: 'David Rose',
    role: 'rose apothecary',
    salary: 1_500_000,
    isRelated: true,
  },
  {
    name: 'Moira Rose',
    role: 'television\'s moira rose',
    salary: 5_000_000,
    isRelated: true,
  },
  {
    name: 'Roland Schitt',
    role: 'mayor',
    salary: 100_000,
    isRelated: false,
  },
  {
    name: 'Jocelyn Schitt',
    role: 'teacher',
    salary: 45_000,
    isRelated: false,
  }
]
const TAX_RATE = 0.25

const findFamilyMembers = (employees) => employees.filter(e => e.isRelated)
const getAfterTaxSalary = ({salary}) => salary * (1 - TAX_RATE)

const getTotalFamilySalaryAfterTax = (familyMembers) => {
    return familyMembers
        .map(getAfterTaxSalary)
        .reduce((acc, val) => acc += val, 0)
}

// main
const toUsd = (incomeTotal) => {
    const currencyConverter = new Intl.NumberFormat('en-us',
    {style: 'currency', currency: 'USD'})
    return currencyConverter.format(incomeTotal)
}

incomeStore.setNetIncome(
    getTotalFamilySalaryAfterTax(
        findFamilyMembers(employees),
        ))

console.log(toUsd(incomeStore.netIncome))

// tests
console.assert(incomeStore.netIncome === 7_125_000.00, 'result did not match expected')
