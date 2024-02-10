import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import {
    DynamicContainerComponent,
    DynamicTextComponent,
    DynamicImageComponent,
    HeadlineTeaserComponent,
} from '@components';
import { COMPONENT_TYPE_OPTIONS } from '@shared/constants';
import { DynamicComponent, LocalLabs } from '@shared/interfaces';
import { DynamicContainer, DynamicImage, DynamicText, HeadlineTeaser } from '@shared/classes/';
import { NewsService } from '@shared/services';

const ngComponents = [DynamicContainerComponent, DynamicTextComponent, DynamicImageComponent, HeadlineTeaserComponent];
const BASE_TEMPLATE: any[] = [
    {
        componentId: 'dynamic-container',
        background: '#1c2731',
        height: 125,
        width: 1920,
        x: 0,
        y: 0,
        zIndex: 3,
    },
    {
        componentId: 'dynamic-container',
        background: 'rgba(0,0,0, 0.2)',
        height: 1080,
        width: 1920,
        x: 0,
        y: 0,
        zIndex: 2,
    },
    {
        componentId: 'dynamic-container',
        background: '#1c2731',
        backgroundFade: 'top',
        height: 800,
        width: 1920,
        x: 0,
        y: 280,
        zIndex: 3,
    },
    {
        componentId: 'dynamic-text',
        color: '#FFFFFF',
        fontSize: 70,
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 600,
        text: 'N',
        x: 20,
        y: 10,
        zIndex: 3,
    },
    {
        componentId: 'dynamic-text',
        color: '#FFFFFF',
        fontSize: 40,
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 600,
        text: 'EWS',
        x: 70,
        y: 45,
        zIndex: 3,
    },
    {
        componentId: 'dynamic-text',
        color: 'yellow',
        fontSize: 20,
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 600,
        text: 'Mount Vernon',
        x: 72,
        y: 30,
        zIndex: 3,
    },
    {
        color: '#FFFFFF',
        componentId: 'dynamic-text',
        fontFamily: "'Nunito', sans-serif",
        fontSize: 60,
        fontWeight: 600,
        isHeadline: 1,
        text: '',
        x: 40,
        y: 760,
        zIndex: 3,
    },
    {
        componentId: 'headline-teaser',
        headlineText: '',
        teaserText: '',
        headlineColor: '#FFEE00',
        headlineFontFamily: "'Nunito', sans-serif",
        headlineFontWeight: 600,
        headlineMarginBottom: 10,
        headlineSize: 55,
        headlineBar: true,
        headlineBarColor: '#FFEE00',
        paddingX: 50,
        paddingY: 20,
        teaserColor: '#FFFFFF',
        teaserFontFamily: "'Nunito', sans-serif",
        teaserFontWeight: 500,
        teaserMarginBottom: 0,
        teaserSize: 40,
        verticalPosition: 'bottom',
        x: 0,
        y: 0,
        zIndex: 3,
    },
    {
        componentId: 'dynamic-text',
        color: '#FFFFFF',
        fontSize: 25,
        fontFamily: "'Nunito', sans-serif",
        text: 'Provided by',
        x: 1380,
        y: 47,
        zIndex: 3,
    },
    {
        componentId: 'dynamic-text',
        color: '#FFEE44',
        fontSize: 35,
        fontFamily: "'Nunito', sans-serif",
        text: 'MountVernonNews.com',
        x: 1520,
        y: 40,
        zIndex: 3,
    },
    {
        componentId: 'dynamic-image',
        fit: 'cover',
        height: 1080,
        imageUrl: '',
        isFeaturedImage: true,
        width: 1920,
        x: 0,
        y: 0,
        zIndex: 1,
    },
];
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, ngComponents],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'digital-newspaper';
    containers: DynamicContainer[] = [];
    images: DynamicImage[] = [];
    indexValue = 0;
    news: HeadlineTeaser[] = [];
    texts: DynamicText[] = [];
    localLabNews!: LocalLabs;
    componentTypes = COMPONENT_TYPE_OPTIONS;

    constructor(
        private _routeParam: ActivatedRoute,
        private _newService: NewsService,
    ) {}

    ngOnInit() {
        this._routeParam.queryParams.subscribe({
            next: (data: any) => {
                this.indexValue = data.index;
                if (this.indexValue) this.getNews();
            },
        });
    }

    private getNews() {
        this._newService.getLocalLabNews().subscribe({
            next: (data: LocalLabs[]) => {
                this.localLabNews = data[this.indexValue];
                this.initializeDynamicComponents();
            },
        });
    }

    private initializeDynamicComponents() {
        for (let component of BASE_TEMPLATE) this.checkComponentProperties(component);
    }

    private checkComponentProperties(component: DynamicComponent) {
        switch (component.componentId) {
            case COMPONENT_TYPE_OPTIONS.container:
                this.containers.push(this.createDynamicContainer(component));
                break;
            case COMPONENT_TYPE_OPTIONS.image:
                this.images.push(this.createDynamicImage(component));
                break;
            case COMPONENT_TYPE_OPTIONS.text:
                this.texts.push(this.createDynamicText(component));
                break;
            case COMPONENT_TYPE_OPTIONS.headline_teaser:
                this.news.push(this.createHeadlineTeaser(component));
                break;
            default:
                break;
        }
    }

    private createDynamicContainer(component: DynamicComponent) {
        return new DynamicContainer({
            componentId: component.componentId,
            background: component.background || '',
            backgroundFade: component.backgroundFade || 'none',
            height: component.height || 0,
            width: component.width || 0,
            x: component.x,
            y: component.y,
            zIndex: component.zIndex,
        });
    }

    private createDynamicImage(component: DynamicComponent) {
        return new DynamicImage({
            componentId: component.componentId,
            imageUrl: component.isFeaturedImage ? this.localLabNews.images[0] : component.imageUrl || '',
            fit: component.fit || 'contain',
            height: component.height || 0,
            width: component.width || 0,
            x: component.x,
            y: component.y,
            zIndex: component.zIndex,
        });
    }

    private createDynamicText(component: DynamicComponent) {
        return new DynamicText({
            componentId: component.componentId,
            color: component.color || '',
            fontFamily: component.fontFamily || '',
            fontSize: component.fontSize || 0,
            fontWeight: component.fontWeight || 400,
            text: component.text || '',
            x: component.x,
            y: component.y,
            zIndex: component.zIndex,
        });
    }

    private createHeadlineTeaser(component: DynamicComponent) {
        return new HeadlineTeaser({
            componentId: component.componentId,
            headlineColor: component.headlineColor || '#00000',
            headlineFontFamily: component.headlineFontFamily || '',
            headlineFontWeight: component.headlineFontWeight || 400,
            headlineMarginBottom: component.headlineMarginBottom || 20,
            headlineSize: component.headlineSize || 30,
            headlineText: this.localLabNews.headline ? this.localLabNews.headline : component.headlineText || '',
            headlineBar: component.headlineBar || false,
            headlineBarColor: component.headlineBarColor || '',
            paddingX: component.paddingX || 0,
            paddingY: component.paddingY || 0,
            teaserColor: component.teaserColor || '#000000',
            teaserFontFamily: component.teaserFontFamily || 'Arial',
            teaserFontWeight: component.teaserFontWeight || 400,
            teaserMarginBottom: component.teaserMarginBottom || 0,
            teaserSize: component.teaserSize || 30,
            teaserText: this.localLabNews.teaser ? this.localLabNews.teaser : component.teaserText || '',
            verticalPosition: component.verticalPosition || 'end',
            x: component.x,
            y: component.y,
            zIndex: component.zIndex,
        });
    }
}
