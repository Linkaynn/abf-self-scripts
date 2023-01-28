import {
  createCharacterControl,
  getSelectedTokenActorData,
} from '../../utils/FoundryScripts';

const data = getSelectedTokenActorData();

if (data) {
  createCharacterControl({
    title: 'Notice Roll Control',
    subtitle: 'Notice',
    name: 'Notice',
    value: data.secondaries.perception.notice.final.value,
  });
}
