// spread
// destruction
// rest operator

{
  // array spread
  const friends1: string[] = ["A", "B", "C"];
  const friends2: string[] = ["D", "E", "F"];

  friends1.push(...friends2);

  //   objects
  const model1 = {
    car: "XYZ",
    price: 120,
  };

  const model2 = {
    color: "Red",
    body: "strong",
  };

  const carModel = {
    ...model1,
    ...model2,
  };

  //   rest operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => {
      console.log(`Hi, ${friend}`);
    });
  };

  greetFriends("A", "B", "C");
}
