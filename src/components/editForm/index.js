import React from "react";

class PersonForm extends React.Component {
  constructor(props) {
    super(props);
    const { first_name, last_name, email, gender, ip_address } = props;
    this.state = {
      first_name,
      last_name,
      email,
      gender,
      ip_address,
    };
    this.handleSubmit = props.handleSubmit;
  }

  handleChange = (event, input) => {
    const newState = {};
    newState[input] = event.target.value;
    this.setState(newState);
  };

  render() {
    const { first_name, last_name, email, gender, ip_address } = this.state;
    console.log({ first_name, last_name, email, gender, ip_address });
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={first_name}
            onChange={(e) => this.handleChange(e, "first_name")}
          />
        </label>
        <label>
          Lastname:
          <input
            type="text"
            value={last_name}
            onChange={(e) => this.handleChange(e, "last_name")}
          />
        </label>
        <label>
          email:
          <input
            type="text"
            value={email}
            onChange={(e) => this.handleChange(e, "email")}
          />
        </label>
        <label>
          gender:
          <input
            type="text"
            value={gender}
            onChange={(e) => this.handleChange(e, "gender")}
          />
        </label>
        <label>
          IP Address:
          <input
            type="text"
            value={ip_address}
            onChange={(e) => this.handleChange(e, "ip_address")}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default PersonForm;
