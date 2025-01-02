import React, { useState } from "react";

const validateLogin = (email,password) => {
    if(!email == 0){
        const phonePattern =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        const emailPattern =/^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/;
        if(emailPattern.test(email) || phonePattern.test(email)){
            if(password.length < 8){
                return "Password should be at least 8 characters long";
            }
            return null;
        }
        else{
            return "Please enter a valid email or phone number";
        }
    }
    else{
        return "Please enter your email or phone number";
    }
};

const validateSignup = (email,password,name) => {
    if(name === ""){
     return "Please enter your name";
    }
    return validateLogin(email,password);
};

export { validateLogin, validateSignup };