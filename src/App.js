import './App.css';
import Home from './Home';
import ClassComponent from './ClassComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import RoutesComp from './Components/RoutesComp';



function App() {

  let studentMarks = [10,20,30,40];
  let studentsDetails = {
      name:'virat',
      age:40
  }

  return (
    <div className="App">
      <Header />
      <RoutesComp />
      


      {/* <h2 className="text-primary">Welcome to ReactJs</h2>
      <Home name="Tom" age="30" studentMarks={studentMarks}  studentDetails={studentsDetails} /> */}
      {/* <ClassComponent name="jerry" age="35" studentMarks={studentMarks} /> */}
    </div>
  );
}

export default App;
