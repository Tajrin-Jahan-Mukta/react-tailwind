import './index.css';
import Doctor from './Component/Doctor';
import {useState} from 'react';
function App() {

  const[employee,setEmployee] = useState(
    [
      {
        name:'Selena',
        role:'Orthopedix',
        img:'https://images.pexels.com/photos/1382726/pexels-photo-1382726.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name:'Gigi',
        role:'Therapist',
        img:'https://images.pexels.com/photos/1382730/pexels-photo-1382730.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name:'Bella',
        role:'Heart Specialist',
        img:'https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name:'Mac',
        role:'Orthopedix',
        img:'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name:'Jack',
        role:'Therapist',
        img:'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        name:'Harry',
        role:'Heart Specialist',
        img:'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ]
  );
  return (
    <div>
      <>
      <input type="text"
      onChange={(e) => {
        console.log(e.target.value);
      }}
      />
      </>
      <div className="flex flex-wrap justify-center">
        {employee.map((employee) => {
          console.log(employee);
          return(
            <Doctor name={employee.name}
            role={employee.role}
            img={employee.img}
            />
          );
        })}
      </div>
      
    </div>
  );
}

export default App;
