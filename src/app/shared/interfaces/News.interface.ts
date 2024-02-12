export interface NewsData {
    newsTemplate: any[];
    newsItems: News[];
}

export interface News {
    headline: string;
    teaser: string;
    images: string[];
}
