import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicContainerComponent, DynamicTextComponent, DynamicImageComponent } from '@components';
import { DynamicContainer } from '@shared/classes/DynamicContainer';
import { DynamicImage } from '@shared/classes/DynamicImage';
import { DynamicText } from '@shared/classes/DynamicText';
import { COMPONENT_TYPE_OPTIONS } from '@shared/constants';
import { DynamicComponent } from '@shared/interfaces';

const ngComponents = [DynamicContainerComponent, DynamicTextComponent, DynamicImageComponent];
const DUMMY: any[] = [
    {
        componentId: 'dynamic-container',
        background: '#1c2731',
        height: 125,
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
        zIndex: 3,
    },
    {
        componentId: 'dynamic-container',
        background: '#1c2731',
        height: 400,
        width: 1920,
        x: 0,
        y: 680,
        zIndex: 2,
    },
    {
        componentId: 'dynamic-text',
        color: '#FFFFFF',
        fontSize: 60,
        fontFamily: 'Arial Black',
        text: 'NCompassTV News',
        x: 20,
        y: 15,
        zIndex: 2,
    },
    {
        componentId: 'dynamic-text',
        color: '#FFFFFF',
        fontSize: 60,
        fontFamily: 'Arial Black',
        text: 'Headline',
        x: 40,
        y: 760,
        zIndex: 2,
    },
    {
        componentId: 'dynamic-text',
        color: '#FFFFFF',
        fontSize: 40,
        fontFamily: 'Arial Black',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium eum et \n inventore aspernatur vero dolorem.',
        x: 40,
        y: 860,
        zIndex: 2,
    },
    {
        componentId: 'dynamic-text',
        color: '#FFEE44',
        fontSize: 40,
        fontFamily: 'Arial Black',
        text: 'Latest News',
        x: 1620,
        y: 30,
        zIndex: 2,
    },
    {
        componentId: 'dynamic-image',
        imageUrl:
            'https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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

    ngOnInit() {
        this.initializeDynamicComponents();
    }

    private initializeDynamicComponents() {
        for (let component of DUMMY) this.checkComponentProperties(component);
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
            text: component.text || '',
            x: component.x,
            y: component.y,
            zIndex: component.zIndex,
        });
    }
}
