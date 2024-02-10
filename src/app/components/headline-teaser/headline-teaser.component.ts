import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeadlineTeaser } from '@shared/classes';

@Component({
    selector: 'app-headline-teaser',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './headline-teaser.component.html',
    styleUrl: './headline-teaser.component.scss',
})
export class HeadlineTeaserComponent {
    @Input() properties!: HeadlineTeaser;

    public processText(text: string) {
        return text.replace(/\n/g, '<br>');
    }
}
