
function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype = {
  getSalary: function () {
    return this.salary;
  },

  setSalary: function (sal) {
    this.salary = sal;
  },

  accept: function (visitorFunction) {
    visitorFunction(this);
  }
}

const pratap = new Employee('Pratap', '10000');
console.log(pratap.getSalary());

function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 2);
}

pratap.accept(ExtraSalary);
console.log(pratap.getSalary());