import { ComponentTypes } from '@shared/types';

export interface DynamicComponent {
    // Required
    componentId: ComponentTypes;
    x: number;
    y: number;
    zIndex: number;
    // Optionals
    background?: string;
    backgroundFade?:
        | 'to top'
        | 'to bottom'
        | 'to left'
        | 'to right'
        | 'to top left'
        | 'to top right'
        | 'to bottom left'
        | 'to bottom right'
        | 'none';
    color?: string;
    fit: 'cover' | 'contain';
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: number;
    height?: number;
    imageUrl?: string;
    text?: string;
    width?: number;
}
