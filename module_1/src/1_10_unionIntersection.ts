{
  // union type
  type User = {
    name: string;
    email: string;
    gender: "Male" | "Female";
    group: "A" | "B" | "C";
  };

  const user1: User = {
    name: "A",
    email: "a@email.com",
    gender: "Male",
    group: "C",
  };
}
