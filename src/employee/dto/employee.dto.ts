import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class EmployeeType {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  position: string;

  @Field(() => Int)
  salary: number;
}
