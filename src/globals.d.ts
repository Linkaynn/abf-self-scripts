import { TokenData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/data/data.mjs";

export {};

declare global {
  interface Window {
    createDialog: (title: string, content: string) => void;
    custom1d100: (params: {
      title: string;
      message?: string;
      additionalDiceValues?: string;
    }) => Promise<ABFFoundryRoll>;
    getSelectedToken: () => TokenDocument | undefined;
    getSelectedTokenActorData: () => TokenData | undefined;
    getDifficultyName: (value: number) => string;
    createCharacterControl: (params: {
      title: string;
      subtitle: string;
      value: string;
      name: string;
    }) => void;
    buildCustomMessageDiceFlavor: (params: {
      title: string;
      subtitle: string;
      message: string;
    }) => string;
    getGMUser: () => User;
    customScriptsInitialized: boolean;
  }

  class ABFFoundryRoll extends Roll {}

  const game: Game;
  const canvas: Canvas;
}
