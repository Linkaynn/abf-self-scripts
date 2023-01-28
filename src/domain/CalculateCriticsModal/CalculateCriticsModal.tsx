import { Button } from '../../design-system/components/Button';
import { useInput } from '../../design-system/hooks/useInput';
import { renderDialog } from '../../utils/renderDialog';
import { CriticResult } from './components/CriticResult';

const getLocationFromValue = (value: number) => {
  if (value <= 10) return 'Costillas';
  if (value <= 20) return 'Hombro';
  if (value <= 30) return 'Estómago';
  if (value <= 35) return 'Riñones';
  if (value <= 48) return 'Pecho';
  if (value <= 50) return 'Corazón';

  if (value <= 54) return 'Antebrazo derecho superior';
  if (value <= 58) return 'Antebrazo derecho inferior';
  if (value <= 60) return 'Mano derecha';

  if (value <= 64) return 'Antebrazo izquierdo superior';
  if (value <= 68) return 'Antebrazo izquierdo inferior';
  if (value <= 70) return 'Mano izquierda';

  if (value <= 74) return 'Muslo derecho superior';
  if (value <= 78) return 'Pantorrilla derecha inferior';
  if (value <= 80) return 'Pierna derecha';

  if (value <= 84) return 'Muslo izquierdo superior';
  if (value <= 88) return 'Pantorrilla izquierda inferior';
  if (value <= 90) return 'Pierna izquierda';

  return 'Cabeza';
};

export const CalculateCriticsModal = ({ dialog }: { dialog: Dialog }) => {
  const { getValue: getD100InputValue, Input: D100Input } = useInput();
  const { getValue: getDamageInputValue, Input: DamageInput } = useInput();
  const { getValue: getRFInputValue, Input: RFInput } = useInput();
  const { getValue: getLocationInputValue, Input: LocationInput } = useInput();

  const calculateLocation = () => {
    const location = getLocationInputValue();

    if (location.length === 0) {
      const diceResult = new ABFFoundryRoll('1d100').roll().total;

      return getLocationFromValue(diceResult);
    }

    return location;
  };

  const calculateCriticLevel = () => {
    const dice1d100String = getD100InputValue();
    const damageString = getDamageInputValue();
    const rfString = getRFInputValue();

    const damage = parseInt(damageString);

    let diceResult = parseInt(dice1d100String);

    if (dice1d100String.length === 0) {
      diceResult = new ABFFoundryRoll('1d100').roll().total;
    }

    let criticLevel = diceResult + damage;

    if (criticLevel > 200) {
      criticLevel = Math.floor(criticLevel / 2);
    }

    criticLevel -= parseInt(rfString);

    return criticLevel;
  };

  const calculatePainLevel = (criticLevel: number) => {
    if (criticLevel <= 50) return criticLevel;

    return criticLevel / 2;
  };

  const calculateActionPenaltyLevel = (criticLevel: number) => {
    if (criticLevel <= 50) return 0;

    return criticLevel - calculatePainLevel(criticLevel);
  };

  const handleCalculateCritics = () => {
    const criticLevel = Math.max(calculateCriticLevel(), 0);

    const painLevel = calculatePainLevel(criticLevel);
    const actionPenaltyLevel = calculateActionPenaltyLevel(criticLevel);

    const location = criticLevel <= 50 ? 'No aplica' : calculateLocation();

    let otherConsequences =
      'El penalizador se recupera a un ritmo de 5 puntos por asalto. ';

    if (criticLevel > 50) {
      otherConsequences +=
        'El miembro queda deteriorado gravemente o dislocado. ';

      if (location === 'Cabeza') {
        otherConsequences += 'Queda inconsciente. ';
      }
    } else if (criticLevel > 100) {
      otherConsequences += 'El miembro queda inservible/amputado.';
    } else if (criticLevel > 150) {
      otherConsequences +=
        'El miembro queda inservible/amputado. Queda automáticamente inconsciente. En caso de que no reciba atención médica en nivel Muy difícil, morirá en un número de minutos equivalente a la constitución';
    }

    renderDialog({
      name: 'Critic results',
      Element: () => (
        <CriticResult
          criticLevel={criticLevel}
          painLevel={painLevel}
          location={location}
          actionPenaltyLevel={actionPenaltyLevel}
          otherConsequences={otherConsequences}
        />
      ),
    });
  };

  return (
    <div>
      <D100Input />
      <DamageInput />
      <RFInput />
      <LocationInput />
      <div>
        <Button onClick={handleCalculateCritics}>Calculate</Button>
      </div>
    </div>
  );
};
