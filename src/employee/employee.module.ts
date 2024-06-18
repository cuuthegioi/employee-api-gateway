// src/employee/employee.module.ts
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EMPLOYEE_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url:
            process.env.EMPLOYEE_BE ||
            'https://employee-be-e7c2e621fdbe.herokuapp.com/',
          package: 'employee',
          protoPath: join(__dirname, '../employee.proto'),
        },
      },
    ]),
  ],
  providers: [EmployeeService, EmployeeResolver],
})
export class EmployeeModule {}
