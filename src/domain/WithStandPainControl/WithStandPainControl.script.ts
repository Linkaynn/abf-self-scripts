import {
  buildCustomMessageDiceFlavor,
  custom1d100,
  getSelectedToken,
  getSelectedTokenActorData,
} from '../../utils/FoundryScripts';

const getWithStandPainReductionValue = (value: number) => {
  if (value < 80) return 0;
  if (value < 120) return -10;
  if (value < 140) return -20;
  if (value < 180) return -30;
  if (value < 240) return -40;
  if (value < 280) return -50;
  if (value < 320) return -60;
  if (value < 440) return -70;

  return -80;
};

const data = getSelectedTokenActorData();

if (data) {
  const withstandPain = data.secondaries.vigor.withstandPain.final.value;

  custom1d100({
    title: 'Control de resistencia al dolor',
    additionalDiceValues: `${withstandPain}[Resistencia al dolor]`,
  }).then((dice) => {
    if (dice.total === undefined) return;

    const message = getWithStandPainReductionValue(dice.total);

    dice.toMessage({
      speaker: ChatMessage.getSpeaker({ token: getSelectedToken() }),
      flavor: buildCustomMessageDiceFlavor({
        title: 'Reducción de negativos alcanzada',
        message: `${message} puntos`,
      }),
    });
  });
}
