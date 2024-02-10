import { BaseComponent } from './BaseComponent';

export class DynamicContainer extends BaseComponent {
    background: string;
    backgroundFade:
        | 'to top'
        | 'to bottom'
        | 'to left'
        | 'to right'
        | 'to top left'
        | 'to top right'
        | 'to bottom left'
        | 'to bottom right'
        | 'none';
    height: number;
    width: number;

    constructor(prop: {
        background: string;
        backgroundFade:
            | 'to top'
            | 'to bottom'
            | 'to left'
            | 'to right'
            | 'to top left'
            | 'to top right'
            | 'to bottom left'
            | 'to bottom right'
            | 'none';
        componentId: string;
        height: number;
        width: number;
        x: number;
        y: number;
        zIndex: number;
    }) {
        super({ componentId: prop.componentId, x: prop.x, y: prop.y, zIndex: prop.zIndex });
        this.background = prop.backgroundFade !== 'none' ? this.hexToRgb(prop.background) : prop.background;
        this.backgroundFade = prop.backgroundFade;
        this.height = prop.height;
        this.width = prop.width;
    }

    private hexToRgb(hex: string) {
        // Remove the hash character if it exists
        hex = hex.replace('#', '');

        // Parse the hex values to get the individual RGB components
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        // Return the RGB values as a string
        return r + ',' + g + ',' + b;
    }
}
