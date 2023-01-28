import "../index.css";
export declare const createDialog: (title: string, content: string) => Dialog;
export declare const custom1d100: ({ title, message, additionalDiceValues, }: {
    title: string;
    message?: string | undefined;
    additionalDiceValues?: string | undefined;
}) => Promise<ABFFoundryRoll>;
export declare const getSelectedToken: () => TokenDocument | undefined;
export declare const getSelectedTokenActorData: () => TokenData | undefined;
export declare const getDifficultyName: (value: number) => "Rutinaria" | "Fácil" | "Media" | "Difícil" | "Muy difícil" | "Absurdo" | "Casi imposible" | "Imposible" | "Inhumano" | "Zen";
export declare const createCharacterControl: ({ title, subtitle, value, name, }: {
    title: string;
    subtitle: string;
    value: string;
    name: string;
}) => void;
export declare const buildCustomMessageDiceFlavor: ({ title, subtitle, message, }: {
    title: string;
    subtitle: string;
    message: string;
}) => string;
export declare const getGMUser: () => User;
