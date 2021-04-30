import './App.css';
import React, { useState } from 'react'
import axios from "axios"
import { Button, Form, Container, Header } from 'semantic-ui-react'

const initialValue = {
  name: '',
  age: '',
  salary: '',
  hobby: ''
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
        <Header as='h2'>React Google Sheets!</Header>
        <Form className="form" onSubmit={submitHandler}>
        <Form.Field>
            <label>Name</label>
            <input 
             placeholder='Enter your name'
             type="text" 
             name = "name" 
             value={values.name} 
             onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input 
             placeholder='Enter your age' 
             type="number" 
             name = "age" 
             value={values.age} 
             onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input 
             placeholder='Enter your salary' 
             type="number" 
             name = "salary" 
             value={values.salary} 
             onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input 
             placeholder='Enter your hobby' 
             type="text" 
             name="hobby" 
             value={values.hobby} 
             onChange={handleChange}/>
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
