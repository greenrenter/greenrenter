import React from "react";
import { Formik } from "formik";
import Rating from "react-rating";

import { Logo } from "./Logo";
import {
  Wrapper,
  Content,
  StatusBar,
  TableHeader,
  Appliance,
  FormWrapper
} from "./FormPageStyledComponents";

import logo from "../assets/images/logo.png";
import starIdle from "../assets/images/star-idle.png";
import starFull from "../assets/images/star-full.png";
import validImage from "../assets/images/valid.png";
import buttonPlus from "../assets/images/plus-button.png";
import buttonMinus from "../assets/images/minus-button.png";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formPage: 0,
      // This defines the main form model which should be sent over to the server
      // TODO: Load appliances from server
      formData: {
        appliances: [
          {
            name: "Fridge",
            rating: 5,
            frequency: 100
          },
          {
            name: "Dishwasher",
            rating: 5,
            frequency: 100
          },
          {
            name: "Washer",
            rating: 5,
            frequency: 100
          }
        ]
      }
    };
  }

  componentDidUpdate() {
    console.info("State updated: ");
    console.info(this.state.formData);
  }

  // FORM STUFF
  getCurrentForm = formProps => {
    switch (this.state.formPage) {
      case 0:
        return this.getApplianceForm(formProps);
      case 1:
        return this.getHouseHoldForm(formProps);
      default:
        break;
    }
  };

  submitForm = (values, { setSubmitting }) => {
    console.log(`Form submitted with values: ${JSON.stringify(values)}`);
  };

  nextForm = () => {
    this.setState({
      ...this.state,
      formPage: this.state.formPage + 1
    });
  };

  getApplianceForm = formProps => (
    <FormWrapper>
      <h1>Step 1 - Appliances</h1>
      <p>Fill in the information below to find out how much energy you use.</p>
      <TableHeader>
        <span>Appliance</span> <span>Energy Rating</span> <span>Frequency</span>
      </TableHeader>
      {formProps.values.appliances.map(this.mapAppliance)}
      <button onClick={this.nextForm}>Next</button>
    </FormWrapper>
  );
  mapAppliance = (appliance, index) => {
    return (
      <Appliance key={index}>
        <img className="button-tool" src={buttonMinus} />
        <img className="button-tool" src={buttonPlus} />
        <h3 className="appliance-name">{appliance.name}</h3>
        <Rating
          placeholderRating={appliance.rating}
          start="0"
          stop="6"
          step="1"
          fractions="2"
          placeholderSymbol={<img className="star" src={starFull} />}
          emptySymbol={<img className="star" src={starIdle} />}
          fullSymbol={<img className="star" src={starFull} />}
          onChange={value => {
            let newRating =
              parseFloat(value) > 6 ? parseInt(value) / 10 : parseFloat(value); // Workaround for some weird bug with this library :S
            let stateCopy = { ...this.state };
            stateCopy.formData.appliances[index].rating = newRating;
            this.setState(stateCopy);
          }}
        />
        <input type="number" /> hrs/week
        <img src={validImage} width="15px" height="15px" />
      </Appliance>
    );
  };

  getHouseHoldForm = formProps => {
    return (
      <FormWrapper>
        <h1>ABOUT YOUR HOUSEHOLD</h1>

        <div id="center">
          <div id="contents">
            <div className="Field-Container">
              <label className="field-lbl" for="people">
                NUMBER OF PEOPLE
              </label>
              <input
                type="text"
                id="people"
                name="people"
                required
                minlength="4"
                maxlength="8"
                size="10"
              />
            </div>

            <div className="Field-Container">
              <label className="field-lbl" for="people">
                POSTCODE
              </label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                required
                minlength="4"
                maxlength="8"
                size="10"
              />
            </div>

            <div className="Field-Container">
              <label id="optional">
                <u>optional</u>
              </label>
              <label className="field-lbl" for="people">
                ENERGY SUPPLIER
              </label>
              <select id="Supplier" name="Supplier">
                <option value="#">Ausgrid</option>
                <option value="#">Exxon</option>
                <option value="#">Renter</option>
                <option value="#">Synergy</option>
              </select>
            </div>

            <div className="Field-Container">
              <label className="field-lbl" for="Bill">
                BILL
              </label>
              <input
                type="text"
                id="BILL"
                name="BILL"
                Placeholder="$"
                minlength="4"
                maxlength="8"
                size="10"
              />
            </div>
          </div>
        </div>
      </FormWrapper>
    );
  };

  getStatusBar = () => (
    <StatusBar>
      <div className="circle" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="circle" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="tick-wrapper">
        <label id="tick">&#x2713;</label>
      </div>
    </StatusBar>
  );

  render() {
    return (
      <Wrapper className="wrapper">
        <Logo>
          <img id="logo-img" src={logo} alt="logo" />
          <h1 id="logo">GreenRenter</h1>
        </Logo>
        <Content>
          {/* Form status indicator */}
          {this.getStatusBar()}
          {/* Form */}
          <Formik
            initialValues={this.state.formData}
            validate={values => {}}
            onSubmit={this.submitForm}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                {this.getCurrentForm({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
                  /* and other goodies */
                })}
              </form>
            )}
          </Formik>
        </Content>
      </Wrapper>
    );
  }
}
