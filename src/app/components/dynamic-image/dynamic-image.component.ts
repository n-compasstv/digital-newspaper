import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DynamicImage } from '@shared/classes/DynamicImage';

@Component({
    selector: 'app-dynamic-image',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dynamic-image.component.html',
    styleUrl: './dynamic-image.component.scss',
})
export class DynamicImageComponent {
    @Input() properties!: DynamicImage;
}
