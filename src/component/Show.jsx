import React, { useState } from "react";
import { AppContext, useAppContext } from "../context/appContext";
import EditModal from "./EditModal";

const Show = () => {
  const {students, deleteStudent} = useAppContext(AppContext);
  //console.log(students);
  const [rowData, setRowData] = useState({}); //el state que captura los datos y lo envia al modal

  //los state del Modal
  const [show, setShow] = useState(false);  

  const handleShow = (student) => {
    //console.log(student);
    setRowData(student);
    setShow(true)
  };

  const handleClose = () => setShow(false);  

  return (
    <>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map( (student) =>(
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.edad}</td>
              <td>
                <div className="btn-group">
                  <button onClick={ () => handleShow(student)} type="submit" className="btn btn-info">
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>

                  <button onClick={()=>{deleteStudent(student.id)}} type="submit" className="btn btn-danger">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>        
      </table>

      <EditModal show={show} handleClose={handleClose} rowData={rowData} />
    </>
  );
};

export default Show;
