
import {Component, Input} from "@angular/core";


@Component({
    selector: 'cd-board',
    templateUrl: 'board.component.html',
    styleUrls: ['board.component.css']
})

export class BoardComponent {
    @Input() jumbleWord: string[];
    defaultAnswer: string[] = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
}