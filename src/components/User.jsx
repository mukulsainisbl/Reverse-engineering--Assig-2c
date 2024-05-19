function User({ avatar, email, first_name, last_name }) {
  return (

     <div id="user-box">
      <img src={avatar} alt={first_name} />
      Name : {first_name} {last_name}
      Email : {email}
      </div>
   
  );
}

export default User;
