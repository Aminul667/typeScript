{
  // generic constraints with key of operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle; // same as Owner

  const user = {
    name: "X",
    age: 27,
    address: "ctg",
  };

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const result1 = getPropertyValue(user, "name");
}
