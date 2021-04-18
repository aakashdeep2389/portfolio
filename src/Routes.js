import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './view/home/home';
import Projects from './view/projects/Projects';
import Header from './components/template/header'
import Footer from './components/template/footer'
import HomeContent from './components/template/HomeContent'
const Routes = () => {




  return (
    <>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
      </Router>
    </>
  );
}

export default Routes;
