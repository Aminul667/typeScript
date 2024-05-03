{
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Z",
    age: 50,
    gender: "Male",
    contactNo: "01700000000",
    address: "Dhaka",
  };

  const student2: Student = {
    name: "A",
    age: 40,
    gender: "Female",
    address: "ctg",
  };

  //   function alias
  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
