{
  // object destructing
  const userInfo = {
    id: 123,
    name: {
      firstName: "X",
      lastName: "Y",
      middleName: "Z",
    },
  };

  const {
    id,
    name: { middleName },
  } = userInfo;

  //   array destructing
  const myFriends = ["X", "Y", "Z", "A", "B", "C"];
  const [, , bestFriend, ...rest] = myFriends;
}
