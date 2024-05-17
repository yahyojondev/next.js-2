import { Button, TextField } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="form contact__form">
            <h2>Contact Us</h2>
            <div className="from__top">
              <TextField
                className="form__inptu"
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
              <TextField
                className="form__inptu"
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
              <TextField
                className="form__inptu"
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <TextField
                className="form__inptu"
                id="outlined-basic"
                type="number"
                label="Tel:+9989"
                variant="outlined"
              />
              <TextField
                className="form__text"
                id="outlined-basic"
                type="text"
                label="advice"
                variant="outlined"
              />
              {/* <textarea placeholder="advice" name="" id=""></textarea> */}
            </div>
            <Button className="from__btn" variant="contained">
              Contained
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
