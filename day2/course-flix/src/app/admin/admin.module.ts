import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompOneComponent } from '../comp-one/comp-one.component';
import { RouterModule } from '@angular/router';



// @NgModule({
//   declarations: [CompOneComponent],
//   imports: [
//     CommonModule
//   ],
//   exports : [
//     CompOneComponent
//   ]
// })

@NgModule({
  declarations: [CompOneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component:CompOneComponent
      }
    ])
  ],
  exports:[
    CompOneComponent
  ]
})
export class AdminModule { }
