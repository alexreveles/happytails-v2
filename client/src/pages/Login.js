import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { useIsAdmin } from '../utils/GlobalState';
import { useHistory } from 'react-router-dom';

function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);
  const { setIsAdmin } = useIsAdmin();

  // The useHistory hook gives access to the history instance that we may use to navigate.
  // Use this instead of window.location.assign('/'); in auth.js so we do not refresh
  // the page
  const history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      setIsAdmin(mutationResponse.data.login.user.isAdmin);
      const token = mutationResponse.data.login.token;
      Auth.login(token);

      // The useHistory hook gives access to the history instance that we may use to navigate.
      // Use this instead of window.location.assign('/'); in auth.js so we do not refresh
      // the page
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  console.log('Login.js inside Login function');

  return (
    <div className="container my-1">
      <Link className="login-signup-toggle" to="/signup">
        ← Go to Signup
      </Link>

      <h2>Login</h2>

      <div className="row">
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label className="email input-title-primary" htmlFor="email">
              Email address:
            </label>
            <input
              className="input"
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label className="password input-title-secondary" htmlFor="pwd">
              Password:
            </label>
            <input
              className="input"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
          <div className="flex-row flex-end">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
