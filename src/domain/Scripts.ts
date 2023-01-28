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
  MagicAppraisalRoll: {
    name: 'Magic Appraisal roll',
    script: 'MagicAppraisalRoll.script.ts',
    icon: 'icons/svg/daze.svg',
    permissions: 'all',
  },
  PsychicPotentialRoll: {
    name: 'Psychic Potential roll',
    script: 'PsychicPotentialRoll.script.ts',
    icon: 'icons/svg/aura.svg',
    permissions: 'all',
  },
  CalculatePhysicalDistanceDifficulty: {
    name: 'Calculate physical distance difficulty',
    script: 'CalculatePhysicalDistanceDifficulty.script.ts',
    icon: 'icons/svg/direction.svg',
    permissions: 'all',
  },

  // GM scripts
  CalculateCritics: {
    name: 'Calculate critics',
    script: 'CalculateCritics.script.ts',
    icon: 'icons/svg/skull.svg',
    permissions: 'gm',
  },
  WithStandPainControl: {
    name: 'With Stand Pain Control',
    script: 'WithStandPainControl.script.ts',
    icon: 'icons/svg/bones.svg',
    permissions: 'gm',
  }
};
