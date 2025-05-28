import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import PatientList from './components/PatientList';
import MedicationList from './components/MedicationList';
import HealthRecordList from './components/HealthRecordList';
import UserList from './components/UserList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <h1>Welcome to the Nurse App</h1>
        </Route>
        <Route path="/patients" component={PatientList} />
        <Route path="/medications" component={MedicationList} />
        <Route path="/health-records" component={HealthRecordList} />
        <Route path="/users" component={UserList} />
      </Switch>
    </Router>
  );
};

export default App;
