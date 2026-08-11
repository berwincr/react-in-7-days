function ProfileCard(){
    const name ="Berwin C R";
    const bio = "Software engineer who is in awe of technologies";
    const avatarUrl = "https://img.freepik.com/premium-photo/vector-illustration-showing-female-software-engineer_1110958-62398.jpg";
     const skills =["React" , "JavaScript", "CSS"];
    return(
        <div className="card">
           <img src={avatarUrl} alt ={name}/>
           <h2>{name}</h2>
           <p>{bio}</p>
           <h3>Skills:</h3>
           <ul>
            {skills.map( (skill) => ( 
                  <li> {skill} </li> 
           ))}
            </ul>
        </div>
    );
}
export default ProfileCard;