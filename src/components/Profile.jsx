//! Passing jsx as props

function Profile() {
  return (
    <>
      <h1>Profile Card Challenge</h1>
      <ProfileCard
        name="BoB"
        age={25}
        greeting={
          <div>
            <strong>Hello, Bob</strong>
          </div>
        }
      >
        <p>Hobbies: Gaming, Hiking</p>
        <button>Contact</button>
      </ProfileCard>
    </>
  );
}

export default Profile;

// function ProfileCard(props) {
//     return(
//         <>
//         <h1>Name : {props.name}</h1>
//         <p>Age : {props.age}</p>
//         <p>{props.greeting}</p>
//         <div>
// {/* // .children is used to get the data from the component jsx passed as a props  */}
//         {props.children}
//         </div>
//         </>

//     )
// }
// //! props nalekhne destructuring

function ProfileCard(props) {
  const { name, age, greeting, children } = props;
  return (
    <>
      <h2>Name : {name}</h2>
      <p>Age : {age}</p>
      <p>{greeting}</p>
      <div>{children}</div>
    </>
  );
}
