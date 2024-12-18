import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaHackerrank } from 'react-icons/fa'; // Import icons from react-icons
import { Link } from 'react-router-dom'; // Import Link component
function Social() {
  return (
    <StyledWrapper>
      <ul className="wrapper">
        <li className="icon github">
          <span className="tooltip">GitHub</span>
          <Link to="https://github.com/ismaeelkhaleel" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub size="2em" />
          </Link>
        </li>
        <li className="icon linkedin">
          <span className="tooltip">LinkedIn</span>
          <Link to="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B9G9mODcnSGueF4PMSkxbsg%3D%3D" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin size="2em" />
          </Link>
        </li>
        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <Link to="https://www.instagram.com/ismaeel_bin_khaleel?igsh=cHprbGg0dDVienE=" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram size="2em" />
          </Link>
        </li>
        <li className="icon leetcode">
          <span className="tooltip">LeetCode</span>
          <Link to="https://leetcode.com/u/Mohd_Ismaeel/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaCode size="2em" />
          </Link>
        </li>
        <li className="icon hackerrank">
          <span className="tooltip">HackerRank</span>
          <Link to="https://www.hackerrank.com/profile/pmohd367" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaHackerrank size="2em" />
          </Link>
        </li>
      </ul>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .wrapper {
    display: inline-flex;
    list-style: none;
    height: 120px;
    width: 100%;
    padding-top: 40px;
    font-family: "Poppins", sans-serif;
    justify-content: center;
  }

  .wrapper .icon {
    position: relative;
    background: #fff;
    border-radius: 50%;
    margin: 10px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .social-link {
    text-decoration: none; /* Remove default underline */
    color: inherit; /* Inherit the color from the parent element */
    display: inline-block; /* To keep the layout intact */
  }

  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #fff;
    color: #fff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .wrapper .github:hover,
  .wrapper .github:hover .tooltip,
  .wrapper .github:hover .tooltip::before {
    background: #333;
    color: #fff;
  }

  .wrapper .linkedin:hover,
  .wrapper .linkedin:hover .tooltip,
  .wrapper .linkedin:hover .tooltip::before {
    background: #0077b5;
    color: #fff;
  }

  .wrapper .instagram:hover,
  .wrapper .instagram:hover .tooltip,
  .wrapper .instagram:hover .tooltip::before {
    background: #e4405f;
    color: #fff;
  }

  .wrapper .leetcode:hover,
  .wrapper .leetcode:hover .tooltip,
  .wrapper .leetcode:hover .tooltip::before {
    background: #f3c03c;
    color: #333;
  }

  .wrapper .hackerrank:hover,
  .wrapper .hackerrank:hover .tooltip,
  .wrapper .hackerrank:hover .tooltip::before {
    background: #2fbe7e;
    color: #fff;
  }
`;

export default Social;
