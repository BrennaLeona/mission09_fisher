import React from 'react';
import './App.css';
import collegeData from './CollegeBasketballTeams.json';

interface CollegeProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

const colleges: CollegeProps[] = collegeData.teams;

function Heading() {
  return (
    <div>
      <h1>March Madness</h1>
      <h2>Learn about different colleges in the NCAA!</h2>
      <br></br>
    </div>
  );
}

class Card extends React.Component<CollegeProps> {
  render() {
    const oneCollege = this.props;

    return (
      <div>
        <h3>College: {oneCollege.school}</h3>
        <h4>Mascot: {oneCollege.name}</h4>
        <h4>
          Location: {oneCollege.city}, {oneCollege.state}
        </h4>
        <br></br>
      </div>
    );
  }
}

function CollegeList() {
  return (
    <div>
      {colleges.map((collegeNum) => (
        <Card {...collegeNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Heading />
      <CollegeList />
    </div>
  );
}

export default App;
