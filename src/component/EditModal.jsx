import React, { useEffect, useState } from 'react'
import { FormControl, FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AppContext, useAppContext } from '../context/appContext';

const EditModal = ({show, handleClose, rowData}) => { 
  //console.log(rowData);
  const {name, edad} = rowData;

  const {updateStudent} = useAppContext(AppContext)

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    edad: ''
  });

  const handleChance = (key, value)=>{
    setFormData({
      ...formData,
      [key]: value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()    
    updateStudent(formData);
    handleClose()
  }
  useEffect(() => {
    setFormData(rowData);
  }, [rowData]);

  return (    
    <>  
      <form >
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className=' bg-info text-white text-uppercase'>
            <Modal.Title>Update Student</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <FormGroup className=' mb-3'>
              <FormControl 
                type='text' 
                defaultValue={name} 
                onChange={(e) => handleChance('name', e.target.value)} 
              />
            </FormGroup>

            <FormGroup className=' mb-3'>
              <FormControl 
                type='number' 
                defaultValue={edad} 
                onChange={(e) => handleChance('edad', e.target.value)} 
              />
            </FormGroup>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="success" onClick={handleSubmit} >
              Update
            </Button>

            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>            
          </Modal.Footer>
        </Modal>
      </form>
    </>
  )
}

export default EditModal
