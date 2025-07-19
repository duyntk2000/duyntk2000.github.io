export interface Operation {
    name: string;
    action: (str: string) => string;
}
