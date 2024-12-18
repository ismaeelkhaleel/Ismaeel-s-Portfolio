import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faGraduationCap,faBriefcase, faMessage } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

function navbar() {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="brand" href="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="link" activeClassName="active" to={"/"}>
              <FontAwesomeIcon icon={faHouseUser} /> Home
            </NavLink>
            <NavLink className="link" activeClassName="active"  to={"/education"}>
            <FontAwesomeIcon icon={faGraduationCap} /> Education</NavLink>
            <NavLink className="link" activeClassName="active" to={"/projects"}>
            <FontAwesomeIcon icon={faBriefcase} /> Projects</NavLink>
            <NavLink className="link" activeClassName="active" to={"/contact"}>
            <FontAwesomeIcon icon={faMessage} /> Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <style>
        {`
        .bg-body-tertiary {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          z-index: 10;
          position: sticky;
          top: 0;
        }
          .brand {
            font-size: 1.8rem;
            font-weight: 600;
          }
          #basic-navbar-nav {
            flex-grow: 0;
          }
          .link {
            margin-left: 2rem;
            font-size: 1.2rem;
            font-weight: 600;
            position: relative;  
            padding-bottom: 5px;  
            display: inline-block;
            text-decoration: none;
            color: black;
          }

         
          .link::after {
            content: '';
            position: absolute;
            bottom: 0;  
            left: 50%;  
            width: 0;
            height: 3px;  
            background-color: #007bff; 
            transition: width 0.3s ease, left 0.3s ease;
            
          }

           
          .link:hover::after {
            width: 100%; 
            left: 0;  
          }
             .link.active {
            color: #007bff; /* Change text color for active link */
            font-weight: bold;
          }

          .link.active::after {
           
            background-color: #007bff; /* Change underline color for active link */
          }
        `}
      </style>
    </Navbar>
  );
}

export default navbar;
