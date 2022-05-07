import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import moment from "moment";
import ShowImage from "./ShowImage"
import { isAuthenticated } from "../auth";
import { removeVegetable } from "../farmer/apiFarmer"
import "./nav.css"

const FCard = ({ vegetable, showAddToCartButton = true, showRemoveVegetableButton = false, setRun = f => f,
    run = undefined }) => {

    const [redirect, setRedirect] = useState(false);
    
    const { user, token } = isAuthenticated();
    const remain = vegetable.quantity - vegetable.sold;

    const removeCall = () => {
        removeVegetable(vegetable._id, user._id, token, () => {
        setRedirect(true);
        });
    };

    const shouldRedirect = redirect => {
        if (redirect) {
            return <Redirect to="/remove" />;
        }
    };

    const showAddToCart = showAddToCartButton => {
        return (
            showAddToCartButton && (
                <button
                    className="btn btn-outline-warning mb-2"
                >
                    Add to cart
                </button>
            )
        );
    };

    const showStock = quantity => {
        return quantity > 0 ? (
          <span className="badge badge-primary badge-pill">In Stock </span>
        ) : (
          <span className="badge badge-primary badge-pill">Out of Stock </span>
        );
      };

    const showRemoveButton = showRemoveVegetableButton => {
        return (
            showRemoveVegetableButton && (
                <button
                    onClick={removeCall}
                    className="btn btn-outline-danger mt-2 mb-2"
                >
                    Remove Vegetable
                </button>
            )
        );
    };


  //  const remain = vegetable.quantity-vegetable.sold;
    return (
        <div className="col-4 mb-3">
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="card card_fcard">
=======
            <div className="card">
>>>>>>> fc0d1bccfae5e9e8bd0067f51041b7a35c5e0751
=======
            <div className="card card_fcard">
>>>>>>> 21371581842bb00eae0879914c8479c5482b61f0
                <div className="card-header">{vegetable.name}</div>
                <div className="card-body">
                    {shouldRedirect(redirect)}
                    <ShowImage item={vegetable} url="vegetables" />
<<<<<<< HEAD
<<<<<<< HEAD
                    <p className=""> Rs. {vegetable.price} per kg</p>
                    
                    <p className="">
                     Added on {moment(vegetable.createdAt).fromNow()}
                    </p>
                    <p className="">
                    {vegetable.sold} kgs sold
                    </p>
                    {showStock(vegetable.quantity)}
                    <hr/>
                    <p className="">
=======
                    <p className="black-10"> Rs. {vegetable.price} per kg</p>
=======
                    <p className=""> Rs. {vegetable.price} per kg</p>
>>>>>>> 21371581842bb00eae0879914c8479c5482b61f0
                    
                    <p className="">
                     Added on {moment(vegetable.createdAt).fromNow()}
                    </p>
                    <p className="">
                    {vegetable.sold} kgs sold
                    </p>
                    {showStock(vegetable.quantity)}
<<<<<<< HEAD
                    <p className="black-7">
>>>>>>> fc0d1bccfae5e9e8bd0067f51041b7a35c5e0751
=======
                    <hr/>
                    <p className="">
>>>>>>> 21371581842bb00eae0879914c8479c5482b61f0
                    {remain} kgs Left
                    </p>
                    <br />
                    {showAddToCart(showAddToCartButton)}

                    {showRemoveButton(showRemoveVegetableButton)}

                </div>
            </div>
        </div>
    );
};

export default FCard;
