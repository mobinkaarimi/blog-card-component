export interface cardItemType {
    id: number;
    title: string;
    description: string;
    category: string;
    author: string;
    createTime: string;
    picture: string;
    authorAvatar: string
}
export interface DescriptionShorterType {
    text: string;
    maxLetter: number;
}