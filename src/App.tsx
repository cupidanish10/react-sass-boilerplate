import React from 'react';
import './styles/css/main.css';
import { Link } from "react-router-dom";

function App() {
  return (

    <main className="outer-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="login">
              <div className="login__header">
                <h1> Create your Account </h1>
                <p>Create an account to have Campaign Brain guide you to a successful Election Day</p>
              </div>
              <div className="login__body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                  <input type="email" className="form-control" placeholder="Enter your email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text text-danger"> Email Not Found </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="create a password" id="exampleInputPassword1" />
                </div>
             
                <button type="submit" className="btn btn-primary w-100 rounded-pill"> Get Started </button>
                <div>
                  <p> Already have an account? <Link to="/"> Login </Link></p>

                </div>
                <div className="d-flex align-items-center py-3 mb-3">
                  <hr className="w-100" />
                  <div className="px-5">Or</div>
                  <hr className="w-100" />
                </div>
              </form>
              </div>

            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

export default App;
