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
          <p>
            {character.status} - {character.species}
          </p>
        </div>

        <div>
          <Text color="rgb(158, 158, 158)">Last known location:</Text>
          <Text>{character.location.name}</Text>
        </div>
        <div>
          <Text color="rgb(158, 158, 158)">First seen in:</Text>
          <Text>{character.origin.name}</Text>
        </div>
      </CharacterCardInner>
    </CharacterCardContainer>
  );
};

export default CharacterCard;
