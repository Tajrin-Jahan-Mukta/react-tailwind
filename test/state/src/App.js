import './index.css';
import Doctor from './Component/Doctor';
import AddEmployee from './Component/AddEmployee';
import Header from './Component/Header';
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
        id: 2,
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
        id: 4,
        name:'Mac',
        role:'Orthopedix',
        img:'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 5,
        name:'Jack',
        role:'Therapist',
        img:'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 6,
        name:'Harry',
        role:'Heart Specialist',
        img:'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ]
  );
  function updateEmployee(id,newName,newRole){
    const updatedEmployees= employee.map((employees) => {
      if(id === employees.id){
        return {...employees, name: newName, role: newRole}
      }
      return employee;

    });
    setEmployee(updatedEmployees);

  }

    function newEmployee(name,role,img){
      const newEmployee={
        
        name: name,
        role:role,
        img: img,
      }
     setEmployee([...employee,newEmployee])
    }
  return (
    <div classname="App">
      <Header/>
      <>
      <input type="text"
      onChange={(e) => {
        console.log(e.target.value);
      }}
      />
      </>
      <div className="flex flex-wrap justify-center">
        {
        employee.map((employee) => {
          
        
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
      <AddEmployee newEmployee={newEmployee}/>
      
    </div>
  );
}

export default App;
