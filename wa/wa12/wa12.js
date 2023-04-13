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
  console.log('Problem 1: ', sam, mary, bill);
  
  // Problem 2
  const techStars = {
    companyName: 'Tech Stars',
    website: 'www.techstars.site',
    employees: [sam, mary, bill]
  };
  console.log('Problem 2: ', techStars);
  
  // Problem 3
  const anna = {
    firstName: 'Anna',
    department: 'Tech',
    designation: 'Executive',
    salary: 25600,
    raiseEligible: false
  };
  
  techStars.employees.push(anna);
  console.log('Problem 3: ', techStars.employees);
  
  // Problem 4
  let totalSalary = 0;
  techStars.employees.forEach(employee => {
    totalSalary += employee.salary;
  });
  console.log('Problem 4: Total salary for all company employees is', totalSalary);
  
  // Problem 5
  techStars.employees.forEach(employee => {
    if (employee.raiseEligible) {
      const raiseAmount = employee.salary * 0.1;
      employee.salary += raiseAmount;
      employee.raiseEligible = false;
    }
  });
  console.log('Problem 5: ', techStars.employees);
  
  // Problem 6
  const workingFromHome = ['Anna', 'Sam'];
  techStars.employees.forEach(employee => {
    employee.wfh = workingFromHome.includes(employee.firstName);
  });
  console.log('Problem 6: ', techStars.employees);
  
  console.log(techStars); 
  