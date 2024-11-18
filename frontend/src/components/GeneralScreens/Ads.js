import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap'; // Import Row and Col from React Bootstrap
import gunsData from './gunsData';

export default function Ads() {
  const navigate = useNavigate();
  const guns = gunsData.slice(0, 6); // Display the first 5 guns

  const handleCardClick = (formattedName) => {
    navigate(`/gun/${formattedName}`);
  };

  return (
    <Styles>
      <h2>FEATURED<br /> ADS</h2>
      <Row className="cards-container">
        {guns.map((gun, index) => {
          const formattedName = gun.name.replace(/\s+/g, '-').toLowerCase();
          return (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <div
                className="card-wrapper"
                onClick={() => handleCardClick(formattedName)}
              >
                <div className="img-wrapper">
                  <img src={gun.images[0]} alt={gun.name} className="ad-img" />
                </div>
                <div className="content">
                  <p className="name">{gun.name}</p>
                  <p className="price">{gun.price}</p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <div className="view-all-container">
        <button
          onClick={() => navigate('/all-guns')}
          className="view-all-button"
        >
          View All Guns
        </button>
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  margin: 1rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    justify-content: center;
    padding: 0; /* Remove padding */
  }

  .card-wrapper {
    display: flex;
    align-items: stretch;
    border: 1.5px solid #ddd;
    background-color: #fff;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    height: 150px; /* Consistent height */
    margin-bottom: 1rem;
    overflow: hidden; /* Prevent overflow */
  }

  .img-wrapper {
    flex: 6;
    overflow: hidden;
  }

  .ad-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    flex: 3;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .name {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
  }

  .price {
    font-size: 1.3rem;
    color: #ff9900;
    font-weight: 900;
  }

  .view-all-container {
    margin-top: 1rem;
    text-align: center;
  }

  .view-all-button {
    padding: 0.75rem 1.5rem;
    background: none;
    color: black;
    border-radius: 8px;
    border: 1px solid black;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    text-align: center;
    width: 100%; /* Ensure button takes full width */
    max-width: 200px; /* Limit button width */
    margin: 0 auto; /* Center button */
  }

  .view-all-button:hover {
    background-color: black;
    color: white;
  }

  @media (min-width: 992px) {
    .cards-container {
      gap: 1rem;
    }

    .card-wrapper {
      height: 200px; /* Adjust height for larger screens */
    }

    .name {
      font-size: 1.2rem;
    }

    .price {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1200px) {
    h2 {
      font-size: 2.5rem;
    }

    .cards-container {
      gap: 1.5rem;
    }

    .card-wrapper {
      height: 250px; /* Adjust height for larger screens */
    }

    .name {
      font-size: 1.4rem;
    }

    .price {
      font-size: 1.7rem;
    }
  }
`;
