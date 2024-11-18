import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col md={4}>
            <FooterSection>
              <FooterLogo>Cocker Spaniel Puppies</FooterLogo>
              <FooterDescription>
                Cocker Spaniel Puppies home is a family-run business based in
                UK, we specialise in providing the most well-nurtured and
                highest-quality Cocker spaniel puppies to the general public as well
                as to some amazing charities across the country.
              </FooterDescription>
            </FooterSection>
          </Col>
          <Col md={4}>
            <FooterSection>
              <FooterTitle>Quick Links</FooterTitle>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/available-puppies/shelter">Available Puppies</FooterLink>
              <FooterLink to="/health-guarantee">Health Guarantee</FooterLink>
              <FooterLink to="/delivery-options">Delivery Options</FooterLink>
              <FooterLink to="/purchase-process">Purchase Process</FooterLink>
              <FooterLink to="/contact-us">Contact</FooterLink>
            </FooterSection>
          </Col>
          <Col md={4}>
            <FooterSection>
              <FooterTitle>Follow Us</FooterTitle>
              <SocialIcons>
                <SocialIcon href="#" aria-label="Facebook">
                  <Facebook size={24} />
                </SocialIcon>
                <SocialIcon href="#" aria-label="Twitter">
                  <Twitter size={24} />
                </SocialIcon>
                <SocialIcon href="#" aria-label="Instagram">
                  <Instagram size={24} />
                </SocialIcon>
              </SocialIcons>
              <br />
            </FooterSection>
          </Col>
        </Row>
      </Container>
      <FooterBottom>
        <p>&copy; 2024 Cocker Spaniel Puppies. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;

// Styled components
const FooterContainer = styled.footer`
  background-color: #343a40;
  color: #f8f9fa;
  padding: 2rem 0;
`;

const FooterSection = styled.div`
  margin-bottom: 1rem;
`;

const FooterLogo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FooterDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
`;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

// Use Link from react-router-dom
const FooterLink = styled(Link)`
  display: block;
  color: #f8f9fa;
  text-decoration: none;
  margin-bottom: 0.25rem;

  &:hover {
    text-decoration: none;
    color: #ff9900;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: #f8f9fa;
  transition: color 0.3s ease;

  &:hover {
    color: #ff9900;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: #212529;
`;
