import React, { Fragment } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import {itemTotal} from "./cartHelpers"
import "./nav.css";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
<<<<<<< HEAD
<<<<<<< HEAD
        return { color: "#7FFF00" };
=======
        return { color: "#ff9900" };
>>>>>>> fc0d1bccfae5e9e8bd0067f51041b7a35c5e0751
=======
        return { color: "#7FFF00" };
>>>>>>> 21371581842bb00eae0879914c8479c5482b61f0
    } else {
        return { color: "white" };
    }
};

const Menu = ({ history }) => (
    <div>
		<Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
			<Container>
				<Navbar.Toggle aria-controls='responseive-navbar-nav' />
				<Navbar.Collapse id='responsice-navbar-nav'>
<<<<<<< HEAD
<<<<<<< HEAD
					<Link className="navbar-brand" to={"/"}>Kisaan Portal</Link>
=======
					<Link className="navbar-brand" to={"/"}>KisaanPortal</Link>
>>>>>>> fc0d1bccfae5e9e8bd0067f51041b7a35c5e0751
=======
					<Link className="navbar-brand" to={"/"}>Kisaan Portal</Link>
>>>>>>> 21371581842bb00eae0879914c8479c5482b61f0
					<Nav className="mine">
						<Nav.Link style={isActive(history, "/")} href="/">Home</Nav.Link>

                        {isAuthenticated()&& isAuthenticated().user.role === 0 && (
						<Nav.Link style={isActive(history, "/buy")} href="/buy">BuyNow</Nav.Link>
			
						)}

						{isAuthenticated()&& isAuthenticated().user.role === 0 && (
						<Nav.Link style={isActive(history, "/user/dashboard")} href="/user/dashboard">Dashboard</Nav.Link>
			
						)}
	
						{isAuthenticated()&& isAuthenticated().user.role === 1 && (
						<Nav.Link style={isActive(history, "/farmer/dashboard")} href="/farmer/dashboard">Dashboard</Nav.Link>
						)}

                        {isAuthenticated()&& isAuthenticated().user.role === 0 && (
						<Nav.Link style={isActive(history, "/cart")} href="/cart">Cart{""}
                            <sup>
                                <small className="cart-badge">{itemTotal()}</small>
                            </sup>
                        </Nav.Link>
			
						)}

						{!isAuthenticated() && (
                    <Fragment>
                        <Nav.Link style={isActive(history, "/signin")} href="/signin">Signin</Nav.Link>
						<Nav.Link style={isActive(history, "/signup")} href="/signup">Signup</Nav.Link>
                    </Fragment>
                )}
				
					{isAuthenticated() && (
                    <Nav.Link>
                        <span
                            style={{ cursor: "pointer", color: "red" }}
                            onClick={() =>
                                signout(() => {
                                    history.push("/");
                                })
                            }
                        >
                        Signout
                        </span>
                    </Nav.Link>
                )}
						
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
    </div>
);

export default withRouter(Menu);
