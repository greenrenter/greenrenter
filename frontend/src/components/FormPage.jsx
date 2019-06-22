import React from "react";
import { Formik } from "formik";
import Rating from "react-rating";
import "./Form.css";

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

  next = () => {
    this.setState({
      ...this.state,
      formPage: this.state.formPage + 1
    });
  };

  getApplianceForm = formProps => (
    <div>
      <h1>Appliances</h1>
      {formProps.values.appliances.map(this.mapAppliance)}
      <button onClick={this.next}>Next</button>
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
        <h1>Household</h1>
      </div>
    );
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}
