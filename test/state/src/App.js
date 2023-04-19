import './index.css';
import Doctor from './Component/Doctor';
import {useState} from 'react';
function App() {

  const[employee,setEmployee] = useState(
    [
      {
        id: 1,
        name:'Selena',
        role:'Orthopedix',
        img:'https://images.pexels.com/photos/1382726/pexels-photo-1382726.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 4,
        name:'Gigi',
        role:'Therapist',
        img:'https://images.pexels.com/photos/1382730/pexels-photo-1382730.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 3,
        name:'Bella',
        role:'Heart Specialist',
        img:'https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 2,
        name:'Mac',
        role:'Orthopedix',
        img:'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 7,
        name:'Jack',
        role:'Therapist',
        img:'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 8,
        name:'Harry',
        role:'Heart Specialist',
        img:'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ]
  );
  function updateEmployee(id,newName,newRole){
    const updatedEmployees= employee.map((employee) => {
      if(id==employee.id){
        return {...employee, name: newName, role: newRole}
      }
      return employee;

    })
  }
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
            <Doctor
            key={employee.id} 
            id={employee.id}
            name={employee.name}
            role={employee.role}
            img={employee.img}
            updateEmployee={updateEmployee}
            />
          );
        })}
      </div>
      
    </div>
  );
}

export default App;
