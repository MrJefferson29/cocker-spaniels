import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import la1 from '../../Assets/la1.jpg';
import la2 from '../../Assets/la2.jpg';
import la3 from '../../Assets/la3.jpg';
import la4 from '../../Assets/la4.jpg';
import la5 from '../../Assets/la5.jpg';

// Styled Components
const StyledCarouselImage = styled.div`
  position: relative;
  height: 500px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay */
  }

  .carousel-content {
    position: relative;
    color: #fff; /* White text for contrast */
    text-align: center;
    z-index: 2;
    padding: 20px; /* Add padding for better text visibility */
    max-width: 800px; /* Restrict the width of text */
    margin: 0 auto; /* Center the content */
  }

  h3 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); /* Add text shadow for readability */
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 25px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); /* Add text shadow for readability */
  }

  @media (max-width: 768px) {
    .carousel-content {
      max-width: 90%; /* Adjust width for smaller screens */
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff; /* Primary color */
  color: white; /* White text */
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker shade on hover */
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Responsive font size for smaller screens */
  }
`;

function Slider() {
  return (
    <Carousel controls={false} indicators={false} fade>
      {[la1, la2, la3, la4, la5].map((image, index) => (
        <Carousel.Item key={index}>
          <StyledCarouselImage bg={image}>
            <div className="carousel-content">
              <h3>We will Help You Find the Home of Your Dreams.</h3>
              <p>
                Finding the right puppy can be dog gone hard work. We provide a
                convenient and efficient means of selecting and purchasing the
                perfect puppy (or puppies) from the comfort of your home.
              </p>
              <ButtonsContainer>
                <Link to='/available-puppies/shelter'>
                <StyledButton>Available Pups</StyledButton>
                </Link>
                <Link to='/purchase-process'>
                <StyledButton>Pet Advice</StyledButton>
                </Link>
              </ButtonsContainer>
            </div>
          </StyledCarouselImage>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
