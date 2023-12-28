import React, {  useState } from 'react'
import NameForm from './NameForm';
import DeleteForm from './DeleteForm';


const NameTab = (props) => {

  const [flag, setflag] = useState(false);
  const[flag1, setflag1] = useState(false);
  const addName = (name) => {
    props.addName(name);

  }

  const deleteName = (name)=>{

    props.deleteName(name);
  }

  const changeFlag1 = () => {
    setflag1(true);
  }

  return (
    <div>
      <table class="table" border="1" style={{ "width": "50%" }}>
        <thead>
          <tr><th>ID</th><th>Name</th></tr>
        </thead>
        <tbody>

          {
            props.namearr.map((ob, index) => <tr key={index}>
              <td>{index + 1}</td>
              <td>{ob}</td>
            </tr>)
          }

        </tbody>
      </table>

      <button type="button" class="btn btn-primary" onClick={() => {

        setflag(true);

      }} >Add Name</button>

      <button type='delete' class="btn btn-danger" onClick={changeFlag1}>Delete</button>

      {flag ? <NameForm addName={addName}></NameForm> : ""}
      
      {flag1 ? <DeleteForm deleteName = {deleteName}></DeleteForm> : ""}



    </div>
  )
}

export default NameTab;
