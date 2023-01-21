import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [userData, setData] = useState({
    file: '',
    email: '',
    password: '',
    clientMail: '',
    createNewInvoice: '',
    clientMailCycle: '',
    body: '',
  });

  const onclickHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...userData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const {
      file,
      email,
      password,
      clientMail,
      createNewInvoice,
      clientMailCycle,
      startCycle,
      body,
    } = userData;
    const { data } = await axios.post('/api', {
      file,
      email,
      password,
      clientMail,
      createNewInvoice,
      clientMailCycle,
      startCycle,
      body,
    });
    console.log(data);
  };
  return (
    <>
      <div className="d-flex flex-column align-items-center my-5">
        <div className=" w-75">
          <div className="input-group mb-3">
            <label className="input-group-text" for="inputGroupFile02">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              onChange={onclickHandler}
              name="email"
              id="inputGroupFile02"
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" for="inputGroupFile03">
              password
            </label>
            <input
              type="text"
              className="form-control"
              onChange={onclickHandler}
              name="password"
              id="inputGroupFile03"
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" for="inputGroupFile04">
              Custom client Email
            </label>
            <input
              type="email"
              className="form-control"
              onChange={onclickHandler}
              name="clientMail"
              id="inputGroupFile04"
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" for="inputGroupFile004">
              Start Cycle
            </label>
            <input
              type="email"
              className="form-control"
              onChange={onclickHandler}
              name="startCycle"
              id="inputGroupFile004"
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" for="inputGroupFile05">
              Create New invoice After Cycle
            </label>
            <input
              type="text"
              className="form-control"
              onChange={onclickHandler}
              name="createNewInvoice"
              id="inputGroupFile05"
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" for="inputGroupFile06">
              Put Custom Client Mail after Cycle
            </label>
            <input
              type="text"
              className="form-control"
              onChange={onclickHandler}
              name="clientMailCycle"
              id="inputGroupFile06"
            />
          </div>
          <div className="form-floating my-2">
            <textarea
              className="form-control"
              onChange={onclickHandler}
              name="file"
              placeholder="Put all email"
              id="floatingTextarea2"
            ></textarea>
            <label for="floatingTextarea2"> Put all email </label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              onChange={onclickHandler}
              name="body"
              placeholder="Body"
              id="floatingTextarea2"
            ></textarea>
            <label for="floatingTextarea2"> Body </label>
          </div>
          <button
            className="btn btn-primary my-3"
            onClick={onSubmit}
            type="submit"
          >
            Start
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
