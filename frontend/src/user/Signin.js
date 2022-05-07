import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated } from "../auth";
<<<<<<< HEAD
<<<<<<< HEAD
import "../styles.css";

=======
>>>>>>> fc0d1bccfae5e9e8bd0067f51041b7a35c5e0751
=======
import "../styles.css";

>>>>>>> 21371581842bb00eae0879914c8479c5482b61f0

const Signin = () => {
    const [values, setValues] = useState({
        email: "niraj@gmail.com",
        password: "niraj123",
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;
    const {user} = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
            }
        });
    };

    const signInForm = () => (
        <div className="auth-wrapper">
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="auth-inner signin_form">
                <form>
                    <h3 className = "signin">Sign In</h3>
=======
            <div className="auth-inner">
                <form>
                    <h3>Sign In</h3>
>>>>>>> fc0d1bccfae5e9e8bd0067f51041b7a35c5e0751
=======
            <div className="auth-inner signin_form">
                <form>
                    <h3 className = "signin">Sign In</h3>
>>>>>>> 21371581842bb00eae0879914c8479c5482b61f0
                    <div className="form-group">
                        <label >Email address</label>
                        <input
							onChange={handleChange("email")}
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
							value={email}
                        />
                    </div>

                    <div className="form-group">
                        <label >Password</label>
                        <input
							onChange={handleChange("password")}
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
							value={password}
                        />
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
                    <button onClick={clickSubmit} className="btn btn-info btn-lg btn-block">
=======
                    <button onClick={clickSubmit} className="btn btn-secondary btn-lg btn-block">
>>>>>>> fc0d1bccfae5e9e8bd0067f51041b7a35c5e0751
=======
                    <button onClick={clickSubmit} className="btn btn-info btn-lg btn-block">
>>>>>>> 21371581842bb00eae0879914c8479c5482b61f0
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-info">
                <h3>Loading...</h3>
            </div>
        );

    const redirectUser = () => {
        if (redirectToReferrer) {
            if(user && user.role ===1){
                return <Redirect to="/farmer/dashboard" />;
            }
            else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        if(isAuthenticated())
        {
            return <Redirect to="/" />;
        }
    };

    return (
        <Layout
            title=" "
            className="container col-md-4 offset-md-4" >
			{showLoading()}
            {showError()}
            {signInForm()}
            {redirectUser()}

        </Layout>
	);
};

export default Signin;
