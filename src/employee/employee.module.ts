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
          url: 'localhost:5000',
          package: 'employee',
          protoPath: join(__dirname, '../employee.proto'),
        },
      },
    ]),
  ],
  providers: [EmployeeService, EmployeeResolver],
})
export class EmployeeModule {}
