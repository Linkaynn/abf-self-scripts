export type Script = {
  name: string;
  script: string;
  icon: string;
  permissions: 'gm' | 'player' | 'all';
};

export const Scripts: Record<string, Script> = {
  WhisperGM: {
    name: 'Whisper to GM',
    script: 'WhisperGM.script.ts',
    icon: 'icons/svg/light.svg',
    permissions: 'all',
  },
  NoticeRoll: {
    name: 'Notice roll',
    script: 'NoticeRoll.script.ts',
    icon: 'icons/svg/hazard.svg',
    permissions: 'all',
  },
  CalculateCritics: {
    name: 'Calculate critics',
    script: 'CalculateCritics.script.ts',
    icon: 'icons/svg/skull.svg',
    permissions: 'gm',
  },
};
