import { BaseComponent } from './BaseComponent';

export class DynamicText extends BaseComponent {
    color: string;
    fontFamily: string;
    fontSize: number;
    text: string;

    constructor(prop: {
        color: string;
        componentId: string;
        fontFamily: string;
        fontSize: number;
        text: string;
        x: number;
        y: number;
        zIndex: number;
    }) {
        super({ componentId: prop.componentId, x: prop.x, y: prop.y, zIndex: prop.zIndex });
        this.color = prop.color;
        this.fontFamily = prop.fontFamily;
        this.fontSize = prop.fontSize;
        this.text = prop.text;
    }
}
