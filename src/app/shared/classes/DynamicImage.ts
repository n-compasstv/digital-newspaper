import { BaseComponent } from './BaseComponent';

export class DynamicImage extends BaseComponent {
    imageUrl: string;
    fit: 'cover' | 'contain';
    height: number;
    width: number;
    isFeaturedImage?: boolean;

    constructor(prop: {
        componentId: string;
        height: number;
        fit: 'cover' | 'contain';
        imageUrl: string;
        width: number;
        x: number;
        y: number;
        zIndex: number;
        isFeaturedImage?: boolean;
    }) {
        super({ componentId: prop.componentId, x: prop.x, y: prop.y, zIndex: prop.zIndex });
        this.imageUrl = prop.imageUrl;
        this.fit = prop.fit;
        this.height = prop.height;
        this.width = prop.width;
        this.isFeaturedImage = prop.isFeaturedImage;
    }
}
