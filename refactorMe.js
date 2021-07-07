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
const taxRate = 0.25

const getEmployeeSalaries = (employeeList) =>
  employeeList.reduce((total, emp) =>
    total += (emp.isRelated ? emp.salary : 0), 0)

const getTotalFamilySalaryAfterTax = (employees) => 
  getEmployeeSalaries(employees) * (1 - taxRate) 

// main
incomeStore.setNetIncome(getTotalFamilySalaryAfterTax(employees))

// after class ended, it occurred to me that
// the conversion to USD was purely a presentational
// concern. Therefore, the best place to do it was at the 
// last possible second before it was pushed to the view
// (the console in this case), hence the further refactor.
const toUsd = (number) => Intl.NumberFormat('en-us',
{style: 'currency', currency: 'USD'}).format(number)

console.log(toUsd(incomeStore.netIncome))

// tests
console.assert(incomeStore.netIncome !== '$7,125,000.00', 'result did not match expected')
