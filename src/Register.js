import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function Register() {
   //   let navigate = useNavigate();
   const [users, setUsers] = useState({
      first_name: "",
      last_name: "",
      email: "",
      password: ""
   });
   const { first_name, last_name, email, password } = users;

   const onInputChange = (e) => {
      setUsers({ ...users, [e.target.name]: e.target.value });
   };
   const SendToDb = async (e) => {
      e.preventDefault();
      await axios.post("http://127.0.0.1:8000/register/create", users);
      //  navigate("/");
   };
   const Goback = () => {
      //  navigate("/");
   };
   return (
      <div>
         <br />
         <center>
            {" "}
            <h5>Register User</h5>
         </center>
         <form
            className="container"
            onSubmit={(e) => {
               SendToDb(e);
            }}
         >
            <label>First Name</label>
            <input
               type="text"
               className="form-control"
               placeholder="Enter First Name"
               value={first_name}
               name="first_name"
               required
               onChange={(e) => {
                  onInputChange(e);
               }}
            />
            <br />
            <label>Last Name</label>
            <input
               type="text"
               className="form-control"
               placeholder="Enter Last Name"
               value={last_name}
               name="last_name"
               required
               onChange={(e) => {
                  onInputChange(e);
               }}
            />
            <br />
            <label>Email Address</label>
            <input
               type="email"
               className="form-control"
               placeholder="Enter Email Address"
               value={email}
               name="email"
               required
               onChange={(e) => {
                  onInputChange(e);
               }}
            />
            <br />
            <label>Password</label>

            <input
               type="password"
               className="form-control"
               placeholder="Enter Password"
               value={password}
               name="password"
               required
               onChange={(e) => {
                  onInputChange(e);
               }}
            />
            <br />
            <center>
               {" "}
               <button className="btn btn-outline-primary">Submit</button>
               <button
                  onClick={SendToDb}
                  className="btn btn-outline-secondary"
                  style={{ marginLeft: "20px" }}
               >
                  Refresh
               </button>
            </center>
         </form>
      </div>
   );
}