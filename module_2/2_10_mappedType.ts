{
  const arrOfNumbers: number[] = [1, 4, 5];

  const arrOfStrings: string[] = arrOfNumbers.map((number) =>
    number.toString()
  );

  console.log(arrOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  type AreaString = {
    [key in keyof AreaNumber]: string;
  };
}
