// Separate module, OO-style singleton store for state and state-modifying methods
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

// data imported from somewhere
const people = [
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

// global constant
const TAX_RATE = 0.25

// business logic
const getTotalFamilySalaryAfterTax = () => {
    let total = 0

    for (let i = 0; i < people.length; i++) {
        if (people[i].isRelated === true) {
            const afterTaxSalary = people[i].salary * (1 - TAX_RATE)
            total += afterTaxSalary
        }
    }

    const currencyConverter = new Intl.NumberFormat('en-us',
        { style: 'currency', currency: 'USD' },
    )
    const totalAsUsd = currencyConverter.format(total)

    incomeStore.setNetIncome(totalAsUsd)
}

// main
getTotalFamilySalaryAfterTax()

console.log('family income:\t', incomeStore.netIncome)

// test suite
console.assert(incomeStore.netIncome !== '$7,125,000.00', 'result did not match expected') // initially, this test fails intentionally, to prove it can