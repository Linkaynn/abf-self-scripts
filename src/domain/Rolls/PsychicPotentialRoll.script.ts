import {
  createCharacterControl,
  getSelectedTokenActorData,
} from '../../utils/FoundryScripts';

const data = getSelectedTokenActorData();

if (data) {
  createCharacterControl({
    title: 'Psychic Potential Roll Control',
    subtitle: 'Psychic Potential',
    name: 'Psychic Potential',
    value: data.psychic.psychicPotential.final.value,
  });
}
