import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import EmployeeForm from './components/EmployeeForm';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="/employee-details/:id" element={<EmployeeDetails />} />
        <Route path="/add-employee" element={<EmployeeForm />} />
        <Route path="/update-employee/:id" element={<EmployeeForm />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;


