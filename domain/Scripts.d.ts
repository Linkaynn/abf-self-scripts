export type Script = {
    name: string;
    script: string;
    icon: string;
    permissions: 'gm' | 'player' | 'all';
};
export declare const Scripts: Record<string, Script>;
