/* DAY 1

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
*/

/* DAY 2
import Badge from './Badge';

function ProfileCard({name, role, isOnline}){
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{role}</p>
            {isOnline && <Badge>🟢 Online</Badge>}
        </div>
    );
}

export default ProfileCard;
*/

import {useState} from 'react';
import Badge from './Badge';

function ProfileCard({name,role,isOnline}){
    const [likes,setLikes]=useState(0);
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{role}</p>
            {isOnline && <Badge>🟢 Online</Badge>}
            <p>❤️ {likes} likes</p>
            <button onClick={ ()=> setLikes(l=>l+1)}>Like</button>
            
                    </div>
    );
}
export default ProfileCard;