import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { EmployeeType } from './dto/employee.dto';
import { EmployeeInput } from './inputs/employee.input';
// import { EmployeeByIdInput } from './inputs/employee-by-id.input';

@Resolver()
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}

  @Query(() => [EmployeeType])
  async employees() {
    const employees = await this.employeeService.getAllEmployees();
    return employees;
  }

  @Query(() => EmployeeType)
  async employee(@Args('id') id: number) {
    return await this.employeeService.getEmployee({ id });
  }

  @Mutation(() => EmployeeType)
  async createEmployee(@Args('input') input: EmployeeInput) {
    return await this.employeeService.createEmployee(input);
  }

  @Mutation(() => EmployeeType)
  async updateEmployee(@Args('input') input: EmployeeInput) {
    return await this.employeeService.updateEmployee(input);
  }

  @Mutation(() => Boolean)
  async deleteEmployee(@Args('id') id: number) {
    await this.employeeService.deleteEmployee({ id });
    return true;
  }
}
