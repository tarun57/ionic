import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  @Input('likescount') likescount: number;
  @Input('isSelected') isSelected: boolean;
  onclick(){
    this.likescount += (this.isSelected) ? -1: 1;
    this.isSelected=!this.isSelected;
  }
  

}
