import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

form = new FormGroup({
  topics : new FormArray(
    [
    new FormControl('dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently '),
    new FormControl('here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator '),
    new FormControl('dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop of Lorem Ipsum')
  ])
});



img="https://placeimg.com/40/40/people";

onClickSubmit(topic : HTMLInputElement){
//console.log(topic.value);
if(topic.value != "" )
{
  (this.topics as FormArray).insert(0,new FormControl(topic.value));
  topic.value ='';
}

  }

  onClickRemove(topic:FormControl){
      let index = this.topics.controls.indexOf(topic);
      this.topics.removeAt(index);
  }
  constructor() {
    
   }

  ngOnInit() {
   
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

}
