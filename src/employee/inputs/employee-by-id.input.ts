import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class EmployeeByIdInput {
  @Field(() => Int)
  id: number;
}
