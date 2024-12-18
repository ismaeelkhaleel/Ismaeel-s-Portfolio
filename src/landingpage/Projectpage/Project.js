import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import projectData from "../../data/project.js"; // Import project data
import { motion } from "framer-motion"; // Import framer-motion for transitions

function Project() {
    const navigate = useNavigate();

    // Helper function to render cards by level
    const renderProjects = (level) => {
        return projectData
            .filter((project) => project.level === level)
            .map((project) => (
                <div key={project.id} className="col-lg-3 col-sm-6 mb-4">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1 }} 
                    >
                        <Card className="hover-card">
                            <Card.Img variant="top" src={project.img} alt={project.title} />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.technology}</Card.Text>
                                <Button
                                    variant="outline-primary"
                                    onClick={() => navigate(`/project/${project.id}`)}
                                >
                                    More Info
                                </Button>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </div>
            ));
    };

    return (
        <>
            {/* Inline Styles for Hover Effect */}
            <style>
                {`
                    .hover-card {
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                        cursor: pointer;
                    }

                    .hover-card:hover {
                        transform: translateY(-10px);
                        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                    }

                    .btn-outline-primary {
                        transition: background-color 0.3s ease, color 0.3s ease;
                    }

                    .btn-outline-primary:hover {
                        background-color: #007bff;
                        color: white;
                        border-color: #007bff;
                    }
                `}
            </style>

            <Container className="project mt-5">
                {/* Basic Projects */}
                <h2 className="mb-4">Basic Projects:</h2>
                <div className="row">{renderProjects("basic")}</div>

                {/* Medium Projects */}
                <h2 className="mb-4">Medium Projects:</h2>
                <div className="row">{renderProjects("medium")}</div>

                {/* Advance Projects */}
                <h2 className="mb-4">Advance Projects:</h2>
                <div className="row">{renderProjects("advance")}</div>
            </Container>
        </>
    );
}

export default Project;
