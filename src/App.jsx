/* DAY 1
import ProfileCard from './ProfileCard';

function App(){
  return(
    <div>
      <ProfileCard />
   
      </div>
  );

  
}
export default App;

DAY 2:

import ProfileCard from './ProfileCard';
const people = [
  {id: 1 , name: "Berwin C R", role: "Frontend Engineer", isOnline: true},
  {id: 2 , name: "John Doe", role: "Backend Engineer", isOnline: false},
  {id: 3 , name: "Jane Smith", role: "Full Stack Engineer", isOnline: true},
];

function App(){
  return(
    <div>
      {people.map( (person) => (
        <ProfileCard 
        key ={person.id}
        name = {person.name}
        role={person.role}
        isOnline={person.isOnline}
        />
      ))}
    </div>
  );
}

export default App;
*/

import Counter from './Counter';

function App(){
  return(
    <div>
      <Counter />
      {people.map((person)=> (
        <ProfileCard key ={person.id} {...person} />
      ))}
    </div>
  );
}