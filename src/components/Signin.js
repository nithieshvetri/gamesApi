import React from "react";
class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      nationality: "",
      gender: "",
      mobileNumber: 0,
      emailid: "",
      password: "",
      error: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        mobileNumber: "",
        nationality: "",
      },
      toggle: true,
    };
  }

  handle(e) {
    e.preventDefault();
    e.target.reset();
    console.log(this.state);
  }

  formObject = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    let error = { ...this.state.error };

    switch (name) {
      case "firstname":
        this.setState({ toggle: false });
        error.firstname =
          value.length < 5
            ? "firstname should be 5 characaters long"
            : this.setState({ toggle: true });
        break;
      case "lastname":
        this.setState({ toggle: false });

        error.lastname =
          value.length < 5
            ? "lastname should be 5 characaters long"
            : this.setState({ toggle: true });
        break;
      case "nationality":
        this.setState({ toggle: false });

        error.nationality =
          value.length < 5
            ? "nationality should be 5 characaters long"
            : this.setState({ toggle: true });
        break;
      case "password":
        this.setState({ toggle: false });

        error.password =
          value.length < 5 && value.length > 10
            ? "Password should 5 characaters long"
            : this.setState({ toggle: true });
        break;
      case "mobileNumber":
        this.setState({ toggle: false });

        error.mobileNumber =
          value.length !== 10
            ? "enter a valid number"
            : this.setState({ toggle: true });
        break;
        default:
          break;
    }

    this.setState({
      error,
      [name]: value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form
          type="submit"
          onSubmit={(e) => this.handle(e)}
          // }}
          className="signup__form"
        >
          <div>
            <label htmlFor="firstname">FirstName</label>
            <br />
            <br />
            <input
              pattern="^[a-zA-Z]+$"
              className="signup__input"
              required
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={this.formObject}
              value={this.state["e.target.name"]}
            />
          </div>
          <p className="validate-input">
            {this.state.error.firstname ? this.state.error.firstname : null}
          </p>
          <div>
            <label htmlFor="lastname">LastName:</label>
            <br />
            <br />
            <input
              className="signup__input"
              type="text"
              pattern="[a-zA-Z]+$"
              required
              name="lastname"
              placeholder="Last Name"
              onChange={
                this.formObject
                // this.setState({ [e.target.name]: e.target.value })
              }
              value={this.state["e.target.name"]}
            />
          </div>
          <p className="validate-input">{this.state.error.lastname}</p>
          <div>
            <label htmlFor="nationality">Nationality:</label>
            <br />
            <br />
            <input
              className="signup__input"
              type="text"
              pattern="[a-zA-Z]+$"
              required
              placeholder="Nationality"
              name="nationality"
              onChange={this.formObject}
              value={this.state["e.target.name"]}
            />
          </div>
          <div>
            <p className="validate-input"> {this.state.error.nationality}</p>

            <label htmlFor="email">EMail: </label>
            <br />
            <br />
            <input
              className="signup__input"
              type="email"
              required
              placeholder="example@email.com"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              name="emailid"
              onChange={(e) =>
                this.setState({ [e.target.name]: e.target.value })
              }
              value={this.state["e.target.name"]}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <br />
            <br />
            <input
              className="signup__input"
              type="password"
              required
              placeholder="password"
              pattern="[A-Za-z0-9]+@[a-z0-9.-]+[0-9]$"
              name="password"
              onChange={(e) =>
                this.setState({ [e.target.name]: e.target.value })
              }
              value={this.state["e.target.name"]}
            />
          </div>
          <p className="validate-input">{this.state.error.password}</p>
          <div>
            <span>Gender: </span>
            <label htmlFor="male">Male</label>
            <input
              className="radio"
              type="radio"
              id="Male"
              name="gender"
              required
              onClick={(e) =>
                this.setState({ [e.target.name]: e.target.value })
              }
              value="Male"
            />

            <label htmlFor="female">Female</label>
            <input
              type="radio"
              id="Female"
              name="gender"
              onClick={(e) =>
                this.setState({ [e.target.name]: e.target.value })
              }
              value="female"
            />
          </div>
          <div>
            <label htmlFor="mobilenumber">Mobile Number:</label>
            <br />
            <br />
            <input
              className="signup__input"
              pattern="[0-9]+$"
              required
              placeholder="+91 XXXXX XXXXX"
              type="text"
              name="mobileNumber"
              onChange={this.formObject}
              value={this.state["e.target.name"]}
            />
          </div>
          <p className="validate-input">{this.state.error.mobileNumber}</p>
          {this.state.toggle ? (
            <input type="submit" className="submit-button" value="submit" />
          ) : null}{" "}
          <br />
          <input type="reset" className="submit-button" value="Reset" />
        </form>
      </div>
    );
  }
}
export default Signup;
