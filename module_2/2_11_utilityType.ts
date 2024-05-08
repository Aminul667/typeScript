{
  // pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  //   omit
  type ContactInfo = Omit<Person, "name" | "age">;

  //   required
  type PersonRequired = Required<Person>;

  //   partial
  type PersonPartial = Partial<Person>;
  //   readonly
  type PersonReadonly = Readonly<Person>;

  
}
