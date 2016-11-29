
import {Component} from "@angular/core";

@Component({
    selector: 'cd-board',
    templateUrl: 'board.component.html',
    styleUrls: ['board.component.css']
})

export class BoardComponent {

    defWord: string[] = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
    index: number = 0;

    vowelClicked() {
        if(this.index < 9) {
            let vowels: string[] = ['A', 'E', 'I', 'O', 'U'];
            this.defWord[this.index] = vowels[Math.floor(Math.random() * vowels.length)];
            this.index++;
        }
    }

    consonantClicked() {
        if(this.index < 9) {
            let consonants: string[] = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
            this.defWord[this.index] = consonants[Math.floor(Math.random() * consonants.length)];
            this.index++;
        }
    }
}