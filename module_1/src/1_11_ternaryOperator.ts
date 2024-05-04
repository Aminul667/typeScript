{
  const age: number = 15;

  if (age >= 15) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  //   ternary operator
  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  //   nullish coalescing: setting a default value based on null or undefined value
  const isAuthenticated = null;
  const result = isAuthenticated ?? "Guest";

  console.log({ result });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      permanentAddress: string;
      presentAddress?: string;
    };
  };
  const user: User = {
    name: "X",
    address: {
      city: "Dhaka",
      road: "Dhanmondi",
      permanentAddress: "Dhaka",
    },
  };

  const permanentAddress =
    user?.address?.presentAddress ?? "No Permanent address";
  console.log({ permanentAddress });
}
