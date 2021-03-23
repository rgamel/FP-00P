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

const getEmployeeSalaries = (employeeList) => {
  // let total = 0
  // const family = employeeList.filter(employee => employee.isRelated)
  // for (let employee of family) {
  //     total += employee.salary
  // }
  // return total
  return employeeList.reduce((total, emp) => total += (emp.isRelated ? emp.salary : 0), 0)
}

const getTotalFamilySalaryAfterTax = (employees) => {
  const afterTaxSalary = getEmployeeSalaries(employees) * (1 - taxRate)

  return Intl.NumberFormat('en-us',
    {style: 'currency', currency: 'USD'}).format(afterTaxSalary)
}


// main
incomeStore.setNetIncome(getTotalFamilySalaryAfterTax(employees))
console.log(incomeStore.netIncome)

// what a hypothetical unit test might look like
// expect(getTotalFamilySalaryAfterTax(employees)).toEqual('$7,125,000.00')
