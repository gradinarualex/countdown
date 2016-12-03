
import {Component, Input, Output} from "@angular/core";

@Component({
    selector: 'cd-display',
    templateUrl: 'display.component.html',
    styleUrls: ['display.component.css']
})

export class DisplayComponent {

    @Output() jumbleWord: string[] = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
    @Input() answerWord: string[];

    jumbleIndex: number = 0;

    vowelClicked() {
        if (this.jumbleIndex < 9) {
            let vowels: string[] = ['A', 'E', 'I', 'O', 'U'];
            this.jumbleWord[this.jumbleIndex] = vowels[Math.floor(Math.random() * vowels.length)];
            this.jumbleIndex++;
        }
    };

    consonantClicked() {
        if(this.jumbleIndex < 9) {
            let consonants: string[] = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
            this.jumbleWord[this.jumbleIndex] = consonants[Math.floor(Math.random() * consonants.length)];
            this.jumbleIndex++;
        }
    };
}