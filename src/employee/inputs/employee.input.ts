import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class EmployeeInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field()
  name: string;

  @Field()
  position: string;

  @Field(() => Int)
  salary: number;
}
