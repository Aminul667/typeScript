// infer -> implicit type
const userImplicit = {
  firstName: "Mr. X",
  middleName: "K",
  lastName: "Y",
};

// Explicit
const userExplicit: {
  company: "XYZ Bangladesh"; // type --> literal types
  location: string;
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "XYZ Bangladesh",
  location: 'Bangladesh',
  firstName: "Mr. X",
  lastName: "Y",
  isMarried: true,
};
