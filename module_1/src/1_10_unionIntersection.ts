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

  //   intersection type
  type FrontEnd = {
    skills: string[];
    designation1: "Front End";
  };

  type BackEnd = {
    skills: string[];
    designation2: "Back End";
  };

  type FullStack = FrontEnd & BackEnd;

  const fullStack: FullStack = {
    skills: ["HTML", "CSS", "JS"],
    designation1: "Front End",
    designation2: "Back End",
  };
}
