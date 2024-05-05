{
  // interface
  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  //   interface intersection
  interface UserWithRole extends User2 {
    role: string;
  }

  const user1: User1 = {
    name: "A",
    age: 26,
  };

  const user2: User2 = {
    name: "B",
    age: 30,
  };

  //   array interface
  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }

  const role2: Roll2 = [1, 2, 3];

  //   interface for function
  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add2 = (num1, num2) => num1 + num2;

  //   type alias is used for all primitive data type but interface can only be used in object
}
