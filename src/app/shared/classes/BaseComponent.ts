import { ComponentTypes } from '@shared/types';

export class BaseComponent {
    componentId: ComponentTypes;
    x: number;
    y: number;
    zIndex: number;

    constructor(prop: { componentId: string; x: number; y: number; zIndex: number }) {
        this.componentId = prop.componentId;
        this.x = prop.x;
        this.y = prop.y;
        this.zIndex = prop.zIndex;
    }
}
