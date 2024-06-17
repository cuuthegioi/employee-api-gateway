export interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
}

export interface EmployeeById {
  id: number;
}

export interface Employees {
  employees: Employee[];
}
