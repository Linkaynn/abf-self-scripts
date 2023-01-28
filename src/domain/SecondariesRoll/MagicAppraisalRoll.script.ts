import {
  createCharacterControl,
  getSelectedTokenActorData,
} from '../../utils/FoundryScripts';

const data = getSelectedTokenActorData();

if (data) {
  createCharacterControl({
    title: 'Magic Appraisal Roll Control',
    subtitle: 'Magic Appraisal',
    name: 'Magic Appraisal',
    value: data.secondaries.intellectual.magicAppraisal.final.value,
  });
}
