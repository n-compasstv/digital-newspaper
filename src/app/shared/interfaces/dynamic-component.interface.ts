import { ComponentTypes } from '@shared/types';

export interface DynamicComponent {
    // Required
    componentId: ComponentTypes;
    x: number;
    y: number;
    zIndex: number;
    // Optionals
    background?: string;
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    height?: number;
    imageUrl?: string;
    text?: string;
    width?: number;
}
