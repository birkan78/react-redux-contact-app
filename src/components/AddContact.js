import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && contact
    );

    const checkNumber = contacts.find(
      (contact) => contact.number === number && contact
    );

    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields");
    }

    if (checkEmail) {
      return toast.error("This email already exists!");
    }
    if (checkNumber) {
      return toast.error("This phone number already exists!");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };

    dispatch({type:"ADD_CONTACT",payload:data});
    toast.success("Student added succesfully");
    history.push("/");
    
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 my-5 text-center">Add Student</h1>
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Phone Number"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Add Student"
                className="btn btn-block btn-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
