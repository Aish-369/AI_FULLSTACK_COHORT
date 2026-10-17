
import React from "react";
import "./App.css";

// CHILD COMPONENT
// Receives data from the parent using props
class StudentDetails extends React.Component {
  render() {
    return (
      <div className="details">
        <h2>Student Details</h2>

        {/* Access props using this.props */}
        <p>Name: {this.props.name}</p>
        <p>Course: {this.props.course}</p>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}

// PARENT CLASS COMPONENT
class App extends React.Component {

  // Constructor runs when component is created
  constructor(props) {
    // Call parent class constructor
    super(props);

    // Initialize state
    this.state = {
      name: "Aishwarya",
      age: 21,
      course: "React JS",
      count: 0,
      showDetails: true
    };
  }

  // EVENT 1: Increase count
  increase = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  // EVENT 2: Decrease count
  decrease = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  // EVENT 3: Change course
  changeCourse = () => {
    this.setState({
      course: "Python"
    });
  };

  // EVENT 4: Show or hide student details
  toggleDetails = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails
    }));
  };

  // Render the UI
  render() {
    return (
      <div className="container">

        <h1>Student Dashboard</h1>
        <p>React Day 7 Practice Project</p>

        {/* Passing state as props */}
        {this.state.showDetails && (
          <StudentDetails
            name={this.state.name}
            age={this.state.age}
            course={this.state.course}
          />
        )}

        {/* Event handling */}
        <button onClick={this.changeCourse}>
          Change Course
        </button>

        <button onClick={this.toggleDetails}>
          {this.state.showDetails
            ? "Hide Details"
            : "Show Details"}
        </button>

        {/* Counter using state */}
        <div className="counter">
          <h2>Counter: {this.state.count}</h2>

          <button onClick={this.increase}>
            Increase +
          </button>

          <button onClick={this.decrease}>
            Decrease -
          </button>
        </div>

      </div>
    );
  }
}

export default App;
