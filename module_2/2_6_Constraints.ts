{
  const addCourseTOStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseTOStudent({
    id: 111,
    name: "X",
    email: "x@email.com",
    devType: "NLWD",
  });

  const student2 = addCourseTOStudent({
    id: 222,
    name: "Y",
    email: "y@email.com",
    hasWatch: "apple",
  });
}
