import React , {useState,useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form , Button} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { addUser } from '../../Redux/actions/action';
import "./User.css"
import {Link,  useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';

const User = () => {
  // const dispatch = useDispatch();
  const [firstName,setFirstName] = useState(" ")
  const [lastName,setLastName] = useState("")
  const [address,setAddress] = useState("")
  const [phoneNumber,setPhoneNumber] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  // const [newUser,setNewUser] = useState("")
   const handleChange = (e) => {
     setFirstName(e.target.value);
      // console.log(setFirstName, "change");
   };
//    const handleFirstNameChange = (e) => {
//   setFirstName(e.target.value);
// };
const [credentials,setCredentials] = useState({
  userName: undefined,
  email: undefined,
  password:undefined,
})

const handleLastNameChange = (e) => {
  setLastName(e.target.value);
};

const handleAddressChange = (e) => {
  setAddress(e.target.value);
};

const handlePhoneNumberChange = (e) => {
  setPhoneNumber(e.target.value);
};

const handleEmailChange = (e) => {
  setEmail(e.target.value);
};

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
};

   const handleSubmit = async e =>{
    e.preventDefault();
    try{
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method:'post',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
      const result = await res.json()
      if(!res.ok) alert(result.message)

      dispatch({type: 'REGISTER_SUCCESS'})
      navigate('/login')
    }catch(err){
      alert(err.message)

    }
    // const newUser = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   address: address,
    //   fphoneNumber: phoneNumber,
    //   email: email,
    //   password: password,
    // };
        // dispatch(addUser(newUser))
        // setFirstName("");
        // setLastName("");
        // setAddress("");
        // setPhoneNumber("");
        // setEmail("");
        // setPassword("");
        // //  setNewUser("");
        //   console.log(newUser, "add") 

    }
  return (
    <div>
      {/* <div className="navbar">
        <div>Home</div>
        <div>About Us </div>
        <div>Contact</div>
      </div> */}
      <div class="overlay"></div>
      <h2>Register</h2>
      <Form className="form-container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="fname"
            placeholder="Enter your first name"
            onChange={handleChange}
            value={firstName}
          />

          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="lname"
            placeholder="Enter your last name"
            onChange={handleLastNameChange}
            value={lastName}
          />
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="address"
            placeholder="Enter your address"
            onChange={handleAddressChange}
            value={address}
          />
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your phone number"
            onChange={handlePhoneNumberChange}
            value={phoneNumber}
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
          />
          <Form.Check
            type="checkbox"
            label="I have read and agree to the privacy policy, terms of service and community guideliness"
          />
        </Form.Group>
        <Link to="/Booking">
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Login
          </Button>
        </Link>
      </Form>
      <p>Already have an account? <Link to='/login'>Create</Link></p>
    </div>
  );
}

export default User