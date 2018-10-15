
export class Likecomponent{
constructor(public likescount:number, public isSelected:boolean){
}
onclick(){
   this.likescount += (this.isSelected) ? -1 : 1;
    this.isSelected = !this.isSelected;
}
}