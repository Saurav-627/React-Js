export const Practices = () => {
  const students = [];
  return (
    <>
      {/* <p>{students.length && "No students found"}</p> */}
      {/* 1st tarika  */}
      {/* <p>{students.length === 0 && "No students found"}</p> */}

      {/* 2nd tarika  */}
      {/* <p>{!students.length && "No students found"}</p>  */}

      {/* 3rd tarika  */}
      
      <p>{Boolean(!students.length) && "No students found"}</p>
      <p>Number of students : {students.length}</p>
    </>
  );
};
