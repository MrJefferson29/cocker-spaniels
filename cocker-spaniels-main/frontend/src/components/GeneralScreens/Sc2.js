import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { FiMail } from "react-icons/fi";
import ma1 from "../../Assets/dalas.jpg";
import ma2 from "../../Assets/darling.jpg";
import TestimonialSlider from "./Testimonies";

export default function Sc2() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email.trim() === "") {
      alert("Please enter your email address.");
    } else {
      alert(`Thank you for subscribing to our newsletter, ${email}`);
      setEmail("");
    }
  };

  return (
    <StyledSection>
      <Container fluid className="main-container">
        <Row className="intro-row">
          <Col>
            <p className="intro-text">
              Choosing one of our Adorable Spaniel Puppies means bringing home
              a lifelong companion. Whether you seek a loving family pet or a
              dependable therapy and support dog, rest assured that our
              puppies are raised with love and attention every step of the
              way. Experience the joy of a well-bred, loving Adorable Spaniel
              Puppies from Kent’s premier family-run Adorable Spaniel Puppies.
            </p>
            <button className="cta-button">View All Puppies</button>
          </Col>
        </Row>

        {/* Responsive Image and Text Row */}
        <div className="image-text-row">
          <div className="image-container">
            <img src={ma1} alt="Labrador Puppy" />
          </div>
          <div className="text-container">
            <h3>Healthy and Active</h3>
            <p>
              Keeping your puppy active is crucial to their
              development. Cockers are known for being high-energy dogs, so regular
              exercise is a must.
            </p>
          </div>
        </div>

        <Row className="breed-info">
          <Col md={8}>
            <h3>About the Cocker Spaniel Breed</h3>
            <p className="breed-description">
              The Cocker Spaniel is the world’s most popular dog, beloved by families
              and royalty alike for years. As one of the most versatile breeds,
              seen in all fields from guide dogs to search and rescue, they
              really can do it all.
            </p>
            <p className="breed-description">
              Cocker Spaniel have been the faithful companions to some of history’s
              most notable figures, from presidents to musical icons.
              Originally, they came from cold and inhospitable places, but today
              they're beloved family members.
            </p>
          </Col>
          <Col md={4}>
            <img src={ma1} alt="Labrador" className="info-image" />
          </Col>
        </Row>

        <Row className="wellbeing-section">
          <Col md={4}>
            <img src={ma2} alt="Labrador puppies" className="info-image" />
          </Col>
          <Col md={8}>
            <h3>Wellbeing</h3>
            <p>
              Our Cockers enjoy free runs of our gardens and are raised in a family
              environment with children. They're fed premium Royal Canin dog
              food and leave us microchipped, ready to become a part of your
              family.
            </p>
            <p>Available colors – yellow, black, chocolate, and fox red.</p>
          </Col>
        </Row>

        <Row className="subscribe-row">
          <Col md={12} className="subscribe-container">
            <div className="icon-container">
              <FiMail size={60} />
            </div>
            <h3 className="subscribe-heading">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <div className="subscribe-form">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="submit-button" onClick={handleSubmit}>
                Submit
              </div>
            </div>

            <div className="checkbox-group">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Sign me up to the newsletter
              </label>
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Send me offers and promotions.
              </label>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="testimonial-section">
            <h3 className="testimonial-heading">What they say about us</h3>
            <TestimonialSlider />
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
}

const StyledSection = styled.div`
  .main-container {
    background-color: #f5f5f5;
    padding: 2rem;
  }

  .intro-row {
    text-align: center;
    margin-bottom: 3rem;
  }

  .intro-text {
    font-size: 1.25rem;
    color: #333;
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }

  .cta-button {
    padding: 0.75rem 2rem;
    background-color: #ff9900;
    color: white;
    font-size: 1.1rem;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  .cta-button:hover {
    background-color: #e67e22;
  }

  .image-text-row {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    margin-bottom: 3rem;
  }

  .image-container {
    flex: 1;
  }

  .image-container img {
    border-radius: 10px;
    width: 100%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .text-container {
    flex: 1;
    padding-left: 2rem;
  }

  .text-container h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1rem;
  }

  .text-container p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #555;
  }

  .breed-info {
    margin-bottom: 3rem;
  }

  .breed-description {
    font-size: 1.15rem;
    color: #666;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  .info-image {
    border-radius: 10px;
    width: 100%;
  }

  .wellbeing-section {
    margin-bottom: 3rem;
  }

  .subscribe-row {
    background-color: #212527;
    color: white;
    text-align: center;
    padding: 3rem 1.5rem;
    border-radius: 12px;
    margin-bottom: 3rem;
  }

  .icon-container {
    margin-bottom: 1rem;
  }

  .subscribe-heading {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .subscribe-form {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .subscribe-form input {
    width: 50%;
    padding: 0.75rem;
    border-radius: 30px;
    border: none;
    margin-right: 1rem;
    font-size: 1rem;
  }

  .submit-button {
    padding: 0.75rem 2rem;
    background-color: #ff9900;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    font-size: 1.1rem;
    transition: background-color 0.3s ease-in-out;
  }

  .submit-button:hover {
    background-color: #e67e22;
  }

  .checkbox-group {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .checkbox-container input {
    margin-right: 10px;
  }

  .testimonial-section {
    text-align: center;
    padding: 3rem 1.5rem;
  }

  .testimonial-heading {
    font-size: 1.7rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    .text-container {
      padding-left: 0;
      margin-top: 1.5rem;
    }

    .image-text-row {
      flex-direction: column;
    }

    .subscribe-form input {
      width: 100%;
    }
  }
`;
