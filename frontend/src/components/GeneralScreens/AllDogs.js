import React, { useState } from 'react';
import styled from 'styled-components';
import dogsData from './DogsData'; // Import the correct DogsData file
import { FiHeart } from 'react-icons/fi';

export default function AllDogs() { // Renamed the component to 'AllDogs'
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDogs, setFilteredDogs] = useState(dogsData);

  const truncateDescription = (age) => {
    if (!age) return '';
    const words = age.split(' ');
    return words.slice(0, 5).join(' ') + (words.length > 5 ? '...' : '');
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    filterDogs(term);
  };

  const filterDogs = (term) => {
    const filtered = dogsData.filter(dog => {
      return (
        dog.name.toLowerCase().includes(term) ||
        dog.age.toLowerCase().includes(term) ||
        dog.color.toLowerCase().includes(term)
      );
    });
    setFilteredDogs(filtered);
  };

  const handleCardClick = (name) => {
    const email = "austinwinston675@gmail.com";
    const subject = `I want to purchase ${name}`;
    const body =
      `Hi, I am interested in purchasing ${name}. Please provide more details.` +
      `Thank you!\n\n` +
      `[Your Name]`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <AllDogsStyles>
      <h2>Available Dogs</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for dogs..."
          value={searchTerm}
          onChange={handleSearch}
          autoFocus={true}
          autoSave='true'
        />
      </div>

      <div className="cards-container">
        {filteredDogs.map((dog, index) => (
          <div className="card-wrapper" key={index} onClick={() => handleCardClick(dog.name)}>
            <div className="img-wrapper">
              <img src={dog.image} alt={dog.name} className="ad-img" />
            </div>
            <span className='name'>{dog.name}</span>
            <div className='info'>
              <div className='info-left'>
                <span className='text'>Sex</span> {dog.sex}<br />
                <span className='text'>Age</span> {dog.age}<br />
                <span className='text'>Color</span> {dog.color}<br />
              </div>
              <div className='info-right'>
                <span className='text'>Registry</span> {dog.registry}<br />
                <span className='text'>Price</span> £{dog.price}<br />
              </div>
            </div>
            <span className='description'>{truncateDescription(dog.age)}
              <hr />
            </span>
            <div className='bottom-wrapper'>
              <div className='Price' style={{ fontSize: '1.2rem', fontWeight: 700 }}>£{dog.price}</div>
              <div className='like'><FiHeart size={23} /></div>
            </div>
          </div>
        ))}
      </div>
    </AllDogsStyles>
  );
}

const AllDogsStyles = styled.div`
  margin: 2rem auto;
  max-width: 1200px;
  padding: 0 1rem;
  font-family: 'Arial', sans-serif;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    margin-top: 5rem;
    text-align: center;
    color: #333;
    font-weight: 700;
  }

  .search-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  .search-bar input {
    width: 100%;
    max-width: 600px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 3px;
    border: 1px solid #ccc;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease-in-out;

    &:focus {
      outline: none;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    }
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.25rem;
  }

  .card-wrapper {
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 12px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    }
  }

  .img-wrapper {
    width: 100%;
    text-align: center;
    margin-bottom: 0.55rem;
  }

  .ad-img {
    width: 100%;
    height: 240px; /* Increased the height */
    object-fit: cover;
    border-radius: 8px;
  }

  .name {
    font-size: 1.2rem;
    font-weight: 800;
    margin-left: 0.3rem;
  }

  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 0.8rem;
    font-weight: 400;
  }

  .text {
    font-size: 0.9rem;
    font-weight: 800;
    color: #ff9900;
  }

  .description {
    font-size: 0.8rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    line-height: 1.3;
    margin-top: 5px;
    font-weight: 500;
  }

  .bottom-wrapper {
    display: flex;
    justify-content: space-between;
    margin-left: 0.6rem;
    margin-right: 0.6rem;
    margin-bottom: 0.6rem;
  }
`;
