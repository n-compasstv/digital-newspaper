import { BaseComponent } from './BaseComponent';

export class DynamicContainer extends BaseComponent {
    background: string;
    height: number;
    width: number;

    constructor(prop: {
        background: string;
        componentId: string;
        height: number;
        width: number;
        x: number;
        y: number;
        zIndex: number;
    }) {
        super({ componentId: prop.componentId, x: prop.x, y: prop.y, zIndex: prop.zIndex });
        this.background = prop.background;
        this.height = prop.height;
        this.width = prop.width;
    }
}
