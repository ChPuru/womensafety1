/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EmergencyContactWhereUniqueInput } from "../../emergencyContact/base/EmergencyContactWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EmergencyContactUpdateManyWithoutUsersInput {
  @Field(() => [EmergencyContactWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmergencyContactWhereUniqueInput],
  })
  connect?: Array<EmergencyContactWhereUniqueInput>;

  @Field(() => [EmergencyContactWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmergencyContactWhereUniqueInput],
  })
  disconnect?: Array<EmergencyContactWhereUniqueInput>;

  @Field(() => [EmergencyContactWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmergencyContactWhereUniqueInput],
  })
  set?: Array<EmergencyContactWhereUniqueInput>;
}

export { EmergencyContactUpdateManyWithoutUsersInput as EmergencyContactUpdateManyWithoutUsersInput };
