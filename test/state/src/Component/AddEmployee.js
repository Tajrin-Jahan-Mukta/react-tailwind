import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} class="block mx-auto m-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
        Add Employee
      </button>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="w-full max-w-xs">
            <form 
            onSubmit={(e)=> {
              e.preventDefault();
              console.log('hello from edit Employee');
              console.log(props.id,name,role);
              props.updateEmployee(props.id,name,role);
            }}
            id="editModal" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                  Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="name" 
                type="text" 
                value={name}
                onChange={(e) => {setName(e.target.value);
                }}
                 />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="role">
                  Role
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="role" 
                type="text" 
                value={role} 
                onChange={(e) => {
                  setRole(e.target.value);
                }}/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="image">
                  Image
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="image" 
                type="text" 
                value={image} 
                onChange={(e) => {
                  setImage(e.target.value);
                }}/>
              </div>


            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            form="editModal">
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;