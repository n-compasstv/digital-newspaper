import { BaseComponent } from './BaseComponent';

export class HeadlineTeaser extends BaseComponent {
    headlineColor: string;
    headlineFontFamily: string;
    headlineFontWeight: number;
    headlineMarginBottom: number;
    headlineSize: number;
    headlineText: string;
    headlineBar: boolean;
    headlineBarColor: string;
    paddingX: number;
    paddingY: number;
    teaserColor: string;
    teaserFontFamily: string;
    teaserFontWeight: number;
    teaserMarginBottom: number;
    teaserSize: number;
    teaserText: string;
    verticalPosition: 'start' | 'center' | 'end';
    constructor(prop: {
        componentId: string;
        headlineColor: string;
        headlineFontFamily: string;
        headlineFontWeight: number;
        headlineMarginBottom: number;
        headlineSize: number;
        headlineText: string;
        headlineBar: boolean;
        headlineBarColor: string;
        paddingX: number;
        paddingY: number;
        teaserColor: string;
        teaserFontFamily: string;
        teaserFontWeight: number;
        teaserMarginBottom: number;
        teaserSize: number;
        teaserText: string;
        verticalPosition: 'start' | 'center' | 'end';
        x: number;
        y: number;
        zIndex: number;
    }) {
        super({ componentId: prop.componentId, x: prop.x, y: prop.y, zIndex: prop.zIndex });
        this.headlineColor = prop.headlineColor;
        this.headlineFontFamily = prop.headlineFontFamily;
        this.headlineFontWeight = prop.headlineFontWeight;
        this.headlineMarginBottom = prop.headlineMarginBottom;
        this.headlineSize = prop.headlineSize;
        this.headlineText = prop.headlineText;
        this.headlineBar = prop.headlineBar;
        this.headlineBarColor = prop.headlineBarColor;
        this.paddingX = prop.paddingX;
        this.paddingY = prop.paddingY;
        this.teaserColor = prop.teaserColor;
        this.teaserFontFamily = prop.teaserFontFamily;
        this.teaserFontWeight = prop.teaserFontWeight;
        this.teaserMarginBottom = prop.teaserMarginBottom;
        this.teaserSize = prop.teaserSize;
        this.teaserText = prop.teaserText;
        this.verticalPosition = prop.verticalPosition;
    }
}
