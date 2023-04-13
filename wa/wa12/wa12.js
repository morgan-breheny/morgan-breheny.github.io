// Problem 1
const sam = {
    firstName: 'Sam',
    department: 'Tech',
    designation: 'Manager',
    salary: 40000,
    raiseEligible: true
  };
  
  const mary = {
    firstName: 'Mary',
    department: 'Finance',
    designation: 'Trainee',
    salary: 18500,
    raiseEligible: true
  };
  
  const bill = {
    firstName: 'Bill',
    department: 'HR',
    designation: 'Executive',
    salary: 21200,
    raiseEligible: false
  };
  
  // Problem 2
  const techStars = {
    companyName: 'Tech Stars',
    website: 'www.techstars.site',
    employees: [sam, mary, bill]
  };
  
  // Problem 3
  const anna = {
    firstName: 'Anna',
    department: 'Tech',
    designation: 'Executive',
    salary: 25600,
    raiseEligible: false
  };
  
  techStars.employees.push(anna);
  
  // Problem 4
  let totalSalary = 0;
  techStars.employees.forEach(employee => {
    totalSalary += employee.salary;
  });
  console.log('Total salary for all company employees:', totalSalary);
  
  // Problem 5
  techStars.employees.forEach(employee => {
    if (employee.raiseEligible) {
      const raiseAmount = employee.salary * 0.1;
      employee.salary += raiseAmount;
      employee.raiseEligible = false;
    }
  });
  
  // Problem 6
  const workingFromHome = ['Anna', 'Sam'];
  techStars.employees.forEach(employee => {
    employee.wfh = workingFromHome.includes(employee.firstName);
  });
  
  console.log(techStars); 
  