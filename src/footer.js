import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
    return (
        <div className="footer mt-5 bg-body-tertiary">
        <Container>
             <p>All right reserved</p>
             <h3>Developed by Mohd Ismaeel</h3>
        </Container>
        <style>
            {
                `
                .footer{
                box-shadow: 2px 2px 2px 4px rgba(0, 0, 0, 0.1);
                text-align: center;
                padding: 20px 0;
                position: sticky;
                 
                width: 100%;
                }
                `
            }
        </style>
        </div>
    )
}

export default Footer