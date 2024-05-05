{
  // const rollNumbers : number[] = [1, 2, 3]
  const rollNumbers: Array<number> = [1, 2, 3];

  // const mentors: string[] = ['X', 'Y', 'Z']
  const mentors: Array<string> = ["X", "Y", "Z"];

  // const boolArray: boolean[] = [true, false, true]
  const boolArray: Array<boolean> = [true, false, true];

  // generic type
  const rollNumberGeneric: GenericArray<number> = [1, 2, 3];
  const mentorsGeneric: GenericArray<string> = ["X", "Y", "Z"];
  const boolArrayGeneric: GenericArray<boolean> = [true, false, true];

  type GenericArray<T> = Array<T>;

  interface User {
    name: string;
    age: number;
  }

  //   array of generic object
  const user: GenericArray<User> = [
    {
      name: "X",
      age: 30,
    },
    {
      name: "Y",
      age: 20,
    },
  ];

  //   generic tuple
  type GenericTuple<X, Y> = [X, Y];

  const value: GenericTuple<string, number> = ["X", 5];
}
