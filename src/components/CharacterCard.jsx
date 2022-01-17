import {
  CharacterCardContainer,
  CharacterCardInner,
  CharacterImage,
  Text,
} from './styles';

const CharacterCard = ({ character }) => {
  return (
    <CharacterCardContainer>
      <CharacterImage src={character.image} alt={character.name} />

      <CharacterCardInner>
        <div>
          <h2>{character.name}</h2>
          <span></span>
          <p>Alive - Human</p>
        </div>

        <div>
          <Text color="rgb(158, 158, 158)">Last known location:</Text>
          <Text>Last known location:</Text>
        </div>
        <div>
          <Text color="rgb(158, 158, 158)">First seen in:</Text>
          <Text>Last known location:</Text>
        </div>
      </CharacterCardInner>
    </CharacterCardContainer>
  );
};

export default CharacterCard;
