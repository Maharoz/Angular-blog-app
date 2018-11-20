import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

form = new FormGroup({
  topics : new FormArray([])
});

img="https://placeimg.com/40/40/people";

onClickSubmit(topic : HTMLInputElement){
console.log(topic.value);
(this.form.get('topics') as FormArray).insert(0,new FormControl(topic.value));
topic.value ='';

  }
  constructor() { }

  ngOnInit() {
  }

}
