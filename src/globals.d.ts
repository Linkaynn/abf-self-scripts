import {
  MacroData as LFMacroData,
  TokenData as LFTokenData,
} from '@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/data/data.mjs';

export {};

declare global {
  class TokenData extends LFTokenData {
    [key: string]: any;
  }

  class MacroData extends LFMacroData {}

  class ABFFoundryRoll extends Roll {}

  const game: Game;
  const canvas: Canvas;
}
