export interface Metadata {
    top_nav?: Links[];
    bottom_nav?: Links[];
    fold_content?: string;
}
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

export interface Webpage {
    _id: string;
    slug: string;
    title?: string;
    content?: string;
    published_at?: string;
    author?: string;
    likes?: number;
    summary?: string;
}