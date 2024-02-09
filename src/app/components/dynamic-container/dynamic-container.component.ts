import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DynamicContainer } from '@shared/classes/DynamicContainer';

@Component({
    selector: 'app-dynamic-container',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dynamic-container.component.html',
    styleUrl: './dynamic-container.component.scss',
})
export class DynamicContainerComponent {
    @Input() properties!: DynamicContainer;
}
