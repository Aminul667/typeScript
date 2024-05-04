{
  // nullable type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("Nothing to search");
    }
  };

  searchName(null);

  //   never
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("This is an error...!");
}
