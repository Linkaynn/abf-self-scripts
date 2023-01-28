import { TokenData as LFTokenData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/data/data.mjs";

export {};

declare global {
  interface TokenData extends LFTokenData {}

  class ABFFoundryRoll extends Roll {}

  const game: Game;
  const canvas: Canvas;
}
