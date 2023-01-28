import '../index.css';

class GCError extends Error {
  constructor(message: string) {
    super(`[GC::Scripts] ${message}`);
  }
}

export const createDialog = (title: string, content: string): Dialog =>
  new Dialog({
    title,
    content,
    buttons: {
      accept: {
        label: 'Aceptar',
      },
    },
    default: 'accept',
    close: () => {},
  }).render(true) as Dialog;

export const custom1d100 = ({
  title,
  message,
  additionalDiceValues,
}: {
  title: string;
  message?: string;
  additionalDiceValues?: string;
}): Promise<ABFFoundryRoll> =>
  new Promise((resolve) => {
    return new Dialog({
      title: title ?? '1 dado de 100 con modificador',
      content: `
    <form>
    ${message ?? ''}
    <input type="text" name="custom1d100input" placeholder="Modifier"> 
    </form>
    `,
      buttons: {
        no: {
          label: 'Cancel',
        },
        yes: {
          label: 'Lanzar',
          callback: (html) => {
            if (html instanceof HTMLElement) return;

            const stringInputValue = html.find('[name="custom1d100input"]')[0]
              .nodeValue;

            if (!stringInputValue) {
              throw new GCError('Invalid value');
            }

            let formula = `1d100xa`;

            if (stringInputValue.length > 0) {
              formula += `+${stringInputValue}[Modificador]`;
            }

            if (additionalDiceValues !== undefined) {
              formula += `+${additionalDiceValues}`;
            }

            const dice = new ABFFoundryRoll(formula);

            dice.roll();

            resolve(dice);
          },
        },
      },
      default: 'yes',
      close: () => {},
    }).render(true);
  });

export const getSelectedToken = (): TokenDocument | undefined =>
  game.canvas.scene === undefined
    ? undefined
    : Array.from(game.canvas.scene!.tokens.values())[0];

export const getSelectedTokenActorData = (): TokenData | undefined => {
  const token = getSelectedToken();

  if (token === undefined) {
    createDialog('Error', 'Tienes que seleccionar a un personaje primero');

    throw new GCError('No selected token');
  }

  const isMyToken =
    canvas.tokens?.ownedTokens.filter((tk) => tk.id === token.id).length === 1;

  if (!isMyToken && !game.user?.isGM) {
    createDialog('Error', `No tienes permisos sobre ${token.data.name}`);

    throw new GCError('No permission');
  }

  return token.data.document?.data;
};

export const getDifficultyName = (value: number) => {
  if (value < 40) return 'Rutinaria';
  if (value < 80) return 'Fácil';
  if (value < 120) return 'Media';
  if (value < 140) return 'Difícil';
  if (value < 180) return 'Muy difícil';
  if (value < 240) return 'Absurdo';
  if (value < 280) return 'Casi imposible';
  if (value < 320) return 'Imposible';
  if (value < 440) return 'Inhumano';

  return 'Zen';
};

export const createCharacterControl = ({
  title,
  subtitle,
  value,
  name,
}: {
  title: string;
  subtitle: string;
  value: string;
  name: string;
}) => {
  custom1d100({
    title: title,
    additionalDiceValues: `${value}[${name}]`,
  }).then((dice) => {
    if (dice.total === undefined) return;

    const message = getDifficultyName(dice.total);

    dice.toMessage({
      speaker: ChatMessage.getSpeaker({ token: getSelectedToken() }),
      flavor: buildCustomMessageDiceFlavor({
        title: subtitle,
        subtitle: 'Dificultad alcanzada',
        message,
      }),
    });
  });
};

export const buildCustomMessageDiceFlavor = ({
  title,
  subtitle,
  message,
}: {
  title: string;
  subtitle?: string;
  message: string;
}) => {
  return `
<p style="font-size: 15px;text-align: center">
    <b>${title}
    ${subtitle ? `</br><span style="font-size: 12px">${subtitle}</span>` : ''}
    </br>
    <span style="font-size: 18px; color: #6e2917">${message}</span>
</p>`;
};

export const getGMUser = (): User => game.users!.find((u) => u.isGM)!;
