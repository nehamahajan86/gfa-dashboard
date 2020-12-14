import { Component, Input, EventEmitter , Output} from '@angular/core';


@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent {
  @Input() icon: string;
  @Input() title: number;
  @Input() value: string;
  @Input() color: string;
  @Input() tpcolor: string;
  @Input() bpcolor: string;
  @Input() isIncrease: boolean;
  @Input() isCurrency: boolean;
  @Input() duration: string;
  @Input() percentValue: number;
  @Input() tppercentValue: number;

  constructor() { }

  @Output() changeDisplay= new EventEmitter();

  displayTile() {
    console.log("emit " + this.value);
    this.changeDisplay.emit(this.value);

  }
}

@Component({
  selector: 'ngbd-progressbar-showvalue',
  templateUrl: './mini-card.component.html',
  styles: [`
    ngb-progressbar {
      margin-top: 5rem;
    }
  `]
})
export class NgbdProgressbarShowvalue {
}

