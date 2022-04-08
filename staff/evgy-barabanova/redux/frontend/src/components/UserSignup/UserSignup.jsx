import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userTyping, clearInputs, submitUser } from '../../redux/actions/userAC'

export default function UserSignup() {
  const inputs = useSelector((store) => store.signUpInputs);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
        dispatch(submitUser(inputs));
        dispatch(clearInputs())
        navigate('/')
  };

  return (
    <>
      <div>UserSignup</div>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={inputs.email ?? ""}
            onChange={(e) =>
              dispatch(userTyping(e))
            }
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            value={inputs.password ?? ""}
            onChange={(e) =>
              dispatch(userTyping(e))
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputname" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="exampleInputname"
            value={inputs.username ?? ""}
            onChange={(e) =>
              dispatch(userTyping(e))
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
