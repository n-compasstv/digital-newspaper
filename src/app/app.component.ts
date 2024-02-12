import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
    DynamicContainerComponent,
    DynamicTextComponent,
    DynamicImageComponent,
    HeadlineTeaserComponent,
} from '@components';
import { COMPONENT_TYPE_OPTIONS } from '@shared/constants';
import { DynamicComponent, News, NewsData } from '@shared/interfaces';
import { DynamicContainer, DynamicImage, DynamicText, HeadlineTeaser } from '@shared/classes/';
import { NewsService } from '@shared/services';

const ngComponents = [DynamicContainerComponent, DynamicTextComponent, DynamicImageComponent, HeadlineTeaserComponent];

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, ngComponents],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'digital-newspaper';
    containers: DynamicContainer[] = [];
    images: DynamicImage[] = [];
    news: HeadlineTeaser[] = [];
    texts: DynamicText[] = [];
    newsData!: NewsData;
    newsItems: News[] = [];
    componentTypes = COMPONENT_TYPE_OPTIONS;

    constructor(private _newService: NewsService) {}

    ngOnInit() {
        this.getNews();
    }

    private getNews() {
        this._newService.getNewsData().subscribe({
            next: (data: NewsData) => {
                this.newsData = data;
                this.newsItems = data.newsItems;
                this.initializeDynamicComponents();
            },
        });
    }

    private initializeDynamicComponents() {
        for (let component of this.newsData.newsTemplate) this.checkComponentProperties(component);
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
            imageUrl: component.isFeaturedImage ? this.newsItems[0].images[0] : component.imageUrl || '',
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
            headlineText: this.newsItems[0].headline ? this.newsItems[0].headline : component.headlineText || '',
            headlineBar: component.headlineBar || false,
            headlineBarColor: component.headlineBarColor || '',
            paddingX: component.paddingX || 0,
            paddingY: component.paddingY || 0,
            teaserColor: component.teaserColor || '#000000',
            teaserFontFamily: component.teaserFontFamily || 'Arial',
            teaserFontWeight: component.teaserFontWeight || 400,
            teaserMarginBottom: component.teaserMarginBottom || 0,
            teaserSize: component.teaserSize || 30,
            teaserText: this.newsItems[0].teaser ? this.newsItems[0].teaser : component.teaserText || '',
            verticalPosition: component.verticalPosition || 'end',
            x: component.x,
            y: component.y,
            zIndex: component.zIndex,
        });
    }
}
