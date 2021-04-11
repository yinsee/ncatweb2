export interface LinkItems {
    title?: string;
    fragment?: string;
    url?: string;
    icon?: string;
    content?: string;
}

export interface Links {
    title?: string;
    class?: string;
    fragment?: string;
    url?: string;
    groups?: Links[],
    items?: LinkItems[];
}

export interface Price {
    burn?: string,
    holders?: string,
    marketcap?: string,
    percentage?: string,
    price?: any,
    supply?: string,
    time?: number,
}