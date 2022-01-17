import { useQuery } from 'react-query';
import styled from 'styled-components';

// components
import CharacterCard from '../components/CharacterCard';

const Characters = () => {
  const fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data;
  };
  const { data, isLoading } = useQuery('characters', fetchCharacters);

  return (
    <Container>
      <Heading>
        The Rick and Morty API
        {isLoading ? ' ...' : null}
      </Heading>

      <CharacterGrid>
        {data?.results?.map((c) => (
          <CharacterCard key={c.id} character={c} />
        ))}
      </CharacterGrid>
    </Container>
  );
};

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const Heading = styled.h1`
  margin-bottom: 1rem;
  @media (max-width: 650px) {
    font-size: 1.5rem;
  }
`;

const Container = styled.div`
  width: 1250px;
  max-width: 100%;
  padding: 20px 20px;
  margin: 0 auto;
`;

export default Characters;
