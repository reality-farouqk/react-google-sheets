import './App.css';
import React, { useState } from 'react'
import axios from "axios"
import { Button, Form, Container, Header } from 'semantic-ui-react'

const initialValue = {
  reg_no: '',
  name: '',
  state_town: '',
  school_name: '',
  contact_no: ''
}

function App() {
  const [values, setValues] = useState(initialValue);

  
  const handleChange = e => {
    const {name, value} = e.target;
    setValues({
        ...values,
        [name] : value
    })
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(values);

    axios.post('https://sheet.best/api/sheets/233d3f62-82ca-4a54-8f56-1ca789e71874', values)
    .then(response => {
      console.log(response);
    })
  }

  return (
    <div className="App">
      <Container fluid className="container">
        <Header as='h2'>Student details Form</Header>
        <Form className="form" onSubmit={submitHandler}>
          <Form.Field>
            <label>Registration Number</label>
            <input 
             placeholder='Enter your Reg no.'
             type="text" 
             name = "reg_no" 
             value={values.reg_no} 
             onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Names</label>
            <input 
             placeholder='Enter your Name'
             type="text" 
             name = "name" 
             value={values.name} 
             onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>State/Town</label>
            <input 
             placeholder='Enter your State/Town' 
             type="text" 
             name = "state_town" 
             value={values.state_town} 
             onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Name of School</label>
            <input 
             placeholder='Enter your the Name of School' 
             type="text" 
             name = "school_name" 
             value={values.school_name} 
             onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Contact Number</label>
            <input 
             placeholder='Enter your Contact No.' 
             type="number" 
             name="contact_no" 
             value={values.contact_no} 
             onChange={handleChange}/>
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
