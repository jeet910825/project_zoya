
import React , {useState} from "react";
import { Button, Form } from "react-bootstrap";
import api from "../../../api/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');

  const handleEmployeeIdChange = (event) => {
    setEmployeeId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try{
      const response = await api.post("api/login",{e_id:employeeId,e_password:password})
      
      if(response?.status === 200){
        navigate("/employee")
      }
    }catch (err){
      console.log(err)
    }
    // Your login logic here
  };

  // Disable the button if either field is empty
  const isDisabled = !employeeId || !password;

  return (
    <div className="form-container">
      <Form className="form" onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Employee id</Form.Label>
          <Form.Control
            placeholder="E_ID"
            value={employeeId}
            onChange={handleEmployeeIdChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <div className="submit-button">
          <Button className="primary" type="submit" disabled={isDisabled}>
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
