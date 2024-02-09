import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicContainerComponent, DynamicTextComponent, DynamicImageComponent } from '@components';
import { DynamicContainer, DynamicImage, DynamicText } from '@shared/classes/';
import { COMPONENT_TYPE_OPTIONS } from '@shared/constants';
import { DynamicComponent } from '@shared/interfaces';
import { NewsService } from '@shared/services/news.service';

const ngComponents = [DynamicContainerComponent, DynamicTextComponent, DynamicImageComponent];
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
        background: '#FFEE44',
        height: 10,
        width: 80,
        x: 40,
        y: 750,
        zIndex: 4,
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
        componentId: 'dynamic-text',
        color: '#FFFFFF',
        fontSize: 60,
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 600,
        text: 'Headline',
        x: 40,
        y: 760,
        zIndex: 3,
    },
    {
        componentId: 'dynamic-text',
        color: '#FFFFFF',
        fontSize: 40,
        fontFamily: "'Nunito', sans-serif",
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium eum et \n inventore aspernatur vero dolorem.',
        x: 40,
        y: 860,
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
        imageUrl:
            'https://images.pexels.com/photos/439818/pexels-photo-439818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        fit: 'cover',
        height: 1080,
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
    texts: DynamicText[] = [];
    componentTypes = COMPONENT_TYPE_OPTIONS;

    constructor(private _newService: NewsService) {}

    ngOnInit() {
        this.getNews();
        this.initializeDynamicComponents();
    }

    private getNews() {
        this._newService.getLocalLabNews().subscribe({
            next: (data) => {
                console.log(data);
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
            imageUrl: component.imageUrl || '',
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
}
