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

const getTotalFamilySalaryAfterTax = () => {
  let total = 0
  
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].isRelated === true ) {
      const salary = employees[i].salary
      const afterTaxSalary = salary * (1 - taxRate)
      total = total + afterTaxSalary
    }
  }
  const currencyConverter = new Intl.NumberFormat('en-us', {style: 'currency', currency: 'USD'})
  const totalAsUsd = currencyConverter.format(total)
  console.log(totalAsUsd)
}

getTotalFamilySalaryAfterTax()
