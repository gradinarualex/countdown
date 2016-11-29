
import {Component, Input} from "@angular/core";

@Component({
    selector: 'cd-display',
    templateUrl: 'display.component.html',
    styleUrls: ['display.component.css']
})

export class DisplayComponent {

    @Input() word: string[];

}