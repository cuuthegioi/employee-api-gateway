import { Injectable, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  Employee,
  EmployeeById,
  Employees,
} from './interfaces/employee.interface';
import { EmployeeInput } from './inputs/employee.input';

interface EmployeeServiceGrpc {
  createEmployee(data: EmployeeInput): Observable<Employee>;
  getEmployee(data: EmployeeById): Observable<Employee>;
  getAllEmployees(data: object): Observable<Employees>;
  updateEmployee(data: EmployeeInput): Observable<Employee>;
  deleteEmployee(data: EmployeeById): Observable<void>;
}

@Injectable()
export class EmployeeService {
  private employeeServiceGrpc: EmployeeServiceGrpc;

  constructor(@Inject('EMPLOYEE_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.employeeServiceGrpc =
      this.client.getService<EmployeeServiceGrpc>('EmployeeService');
  }

  createEmployee(data: EmployeeInput): Observable<Employee> {
    return this.employeeServiceGrpc.createEmployee(data);
  }

  getEmployee(data: EmployeeById): Observable<Employee> {
    return this.employeeServiceGrpc.getEmployee(data);
  }

  getAllEmployees(): Observable<Employees> {
    return this.employeeServiceGrpc.getAllEmployees({});
  }

  updateEmployee(data: EmployeeInput): Observable<Employee> {
    return this.employeeServiceGrpc.updateEmployee(data);
  }

  deleteEmployee(data: EmployeeById): Observable<void> {
    return this.employeeServiceGrpc.deleteEmployee(data);
  }
}
