export const tagTypes = ['News'] as const;

export type TTagType = (typeof tagTypes)[number];
