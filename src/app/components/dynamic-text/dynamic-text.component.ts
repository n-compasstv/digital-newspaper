import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DynamicText } from '@shared/classes/DynamicText';

@Component({
    selector: 'app-dynamic-text',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dynamic-text.component.html',
    styleUrl: './dynamic-text.component.scss',
})
export class DynamicTextComponent {
    @Input() properties!: DynamicText;

    processText(text: string) {
        return text.replace(/\n/g, '<br>');
    }
}
