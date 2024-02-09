import { BaseComponent } from './BaseComponent';

export class DynamicImage extends BaseComponent {
    imageUrl: string;
    height: number;
    width: number;

    constructor(prop: {
        componentId: string;
        height: number;
        imageUrl: string;
        width: number;
        x: number;
        y: number;
        zIndex: number;
    }) {
        super({ componentId: prop.componentId, x: prop.x, y: prop.y, zIndex: prop.zIndex });
        this.imageUrl = prop.imageUrl;
        this.height = prop.height;
        this.width = prop.width;
    }
}
