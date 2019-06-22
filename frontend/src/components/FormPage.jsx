import React from "react";
import { Formik } from "formik";
import Rating from "react-rating";

import { Wrapper, Content, Logo } from "../styles";

import logo from "../assets/images/Logo.svg";

// const HouseholdWrapper = styled.div`
//   html {
//     font-family: "Tahoma", Arial, sans-serif;
//   }

//   h1 {
//     text-align: center;
//   }

//   #center {
//     text-align: center;
//   }

//   #contents {
//     width: auto;
//     display: inline-block;
//   }

//   .Field-Container {
//     text-align: left;
//     margin-top: 8px;
//     display: block;
//   }

//   .field-lbl {
//     margin-right: 6px;
//     text-align: right;
//   }

//   input {
//     float: right;
//   }

//   select {
//     float: right;
//     width: 100px;
//   }

//   #optional {
//     color: gray;
//     margin-top: 16px;
//     text-align: Left;
//     display: block;
//   }
// `;

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
    <div>
      <h1>YOUR HOUSEHOLD</h1>
      {formProps.values.appliances.map(this.mapAppliance)}
      <button onClick={this.nextForm}>Next</button>
    </div>
  );
  mapAppliance = (appliance, index) => (
    <div key={index}>
      <h3>{appliance.name}</h3>
      <Rating
        placeholderRating={appliance.rating}
        start="0"
        stop="6"
        step="1"
        fractions="2"
        placeholderSymbol={<i className="fas fa-star" />}
        emptySymbol={<i className="far fa-star" />}
        fullSymbol={<i className="fas fa-star" />}
        onChange={value => {
          let newRating =
            parseFloat(value) > 6 ? parseInt(value) / 10 : parseFloat(value); // Workaround for some weird bug with this library :S
          let stateCopy = { ...this.state };
          stateCopy.formData.appliances[index].rating = newRating;
          this.setState(stateCopy);
        }}
      />
    </div>
  );

  getHouseHoldForm = formProps => {
    return (
      <div>
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
      </div>
    );
  };

  render() {
    return (
      <Wrapper className="wrapper">
        <Logo>
          <img id="logo-img" src={logo} alt="logo" />
          <h1 id="logo">GreenRenter</h1>
        </Logo>
        <Content>
          {/* Form status indicator */}
          <div>
            <div className="circle" />
            <hr className="line" />
            <div className="circle" />
          </div>
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
