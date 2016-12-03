/**
 * Created by Alexander Gardner on 12/2/2016.
 */
import {Component} from "@angular/core";

@Component({
    selector: 'cd-title',
    templateUrl: `
        <div class="row">
            <table class="centered">
                <tbody>
                    <tr>
                        <td *ngFor="let letter of title">{{letter}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    `,
    styles: [`
        .row {
            margin-bottom: 0;
        }

        table {
            background-color: #01579b;
            border-bottom: 2px solid #e0e0e0;
            height: 40px;
        }
    
        td {
            padding: 0;
            font-size: 150%;
            font-weight: bold;
            color: #FFFFFF;
            max-width: 30px;
            width: 28px;
            max-height: 40px;
            height: 40px;    
        }
    `]
})

export class TitleComponent {
    title: string[] = ['C','O','U','N','T','D','O','W','N'];
}