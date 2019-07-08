import React from "react";
import { Formik, Field, FieldArray } from "formik";
import Rating from "react-rating";
import { Link } from "react-router-dom";

import { Logo } from "./Logo";
import {
  Wrapper,
  Content,
  StatusBar,
  TableHeader,
  Appliance,
  FormWrapper,
  FormField
} from "./FormPageStyledComponents";

import logo from "../assets/images/logo.png";
import starIdle from "../assets/images/star-idle.png";
import starFull from "../assets/images/star-full.png";
import buttonPlus from "../assets/images/plus-button.png";
import buttonMinus from "../assets/images/minus-button.png";

// HaRdc0ded energy suppliers xD
const ENERGY_SUPPLIERS = ["Powershop", "AGL", "Energy Australia"];

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formPage: 0,
      errored: false, // XD
      // This defines the main form model which should be sent over to the server
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
          },
          {
            name: "Dryer",
            rating: 5,
            frequency: 100
          },
          {
            name: "Air Conditioning",
            rating: 5,
            frequency: 100
          },
          {
            name: "TV",
            rating: 5,
            frequency: 100
          }
        ],
        household: {
          number_of_people: 0,
          postcode: "",
          energy_supplier: "",
          bill: 0
        }
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
    if (this.state.errored) {
      document.location.href = "/summary";
    } else {
      fetch("/user_data", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(values)
      })
        .then(response => {
          if (response.status !== 200)
            this.setState({ ...this.state, errored: true });
        })
        .catch(err => {
          this.setState({ ...this.state, errored: true });
        });
    }
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
      <FieldArray
        name="appliances"
        render={arrayHelpers => (
          <div>
            {formProps.values.appliances.map((appliance, index) => {
              return (
                <Appliance key={index}>
                  <img
                    className="button-tool"
                    src={buttonMinus}
                    onClick={() => {
                      arrayHelpers.remove(index);
                      this.forceUpdate();
                    }}
                  />
                  <img
                    className="button-tool"
                    src={buttonPlus}
                    onClick={() => {
                      arrayHelpers.push({
                        ...appliance,
                        rating: 0,
                        frequency: 0
                      });
                      this.forceUpdate();
                    }}
                  />
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
                        parseFloat(value) > 6
                          ? parseInt(value) / 10
                          : parseFloat(value); // Workaround for some weird bug with this library :S
                      arrayHelpers.replace(index, {
                        ...appliance,
                        rating: newRating
                      });
                    }}
                  />
                  <Field
                    name={`appliances[${index}].frequency`}
                    type="number"
                  />
                  hrs/week
                </Appliance>
              );
            })}
          </div>
        )}
      />

      <button onClick={this.nextForm}>Next</button>
    </FormWrapper>
  );

  getHouseHoldForm = formProps => {
    return (
      <FormWrapper>
        <h1>Step 2 - Household</h1>
        <p>
          Fill in the information below to find out how much energy you use.
        </p>
        <FormField>
          <label>Number of People</label>
          <Field type="text" name="household.number_of_people" required />
          <br />
        </FormField>
        <FormField>
          <label>Postcode</label>
          <Field
            type="text"
            id="postcode"
            placeholder="..."
            name="household.postcode"
            required
          />
          <br />
        </FormField>
        <br />
        <FormField>
          *optional
          <br />
          <label>Energy Supplier</label>
          <select
            onChange={e => {
              let newState = this.state;
              newState.formData.household.energy_supplier = e.target.value;
              this.setState(newState);
            }}
          >
            {ENERGY_SUPPLIERS.map((e, index) => (
              <option key={index} value={e}>
                {e}
              </option>
            ))}
          </select>
        </FormField>
        <br />
        <FormField>
          <label>Bill</label>
          <Field
            type="text"
            name="household.bill"
            placeholder="$ Enter bill..."
          />
          <br />
        </FormField>
        {/* <button type="submit"> Calculate </button> */}
        <Link to="/summary">
          <button> Calculate </button>
        </Link>
      </FormWrapper>
    );
  };

  getStatusBar = () => (
    <StatusBar>
      <div className="circle active" />
      <div className={`dot ${this.state.formPage === 1 ? "active" : ""}`} />
      <div className={`dot ${this.state.formPage === 1 ? "active" : ""}`} />
      <div className={`dot ${this.state.formPage === 1 ? "active" : ""}`} />
      <div className={`dot ${this.state.formPage === 1 ? "active" : ""}`} />
      <div className={`dot ${this.state.formPage === 1 ? "active" : ""}`} />
      <div className={`dot ${this.state.formPage === 1 ? "active" : ""}`} />
      <div className={`dot ${this.state.formPage === 1 ? "active" : ""}`} />
      <div className={`dot ${this.state.formPage === 1 ? "active" : ""}`} />
      <div className={`dot ${this.state.formPage === 1 ? "active" : ""}`} />
      <div className={`dot ${this.state.formPage === 1 ? "active" : ""}`} />
      <div className={`dot ${this.state.formPage === 1 ? "active" : ""}`} />
      <div className={`circle ${this.state.formPage === 1 ? "active" : ""}`} />
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
