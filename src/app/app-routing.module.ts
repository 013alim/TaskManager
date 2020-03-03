import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDtlsComponent } from './personal-dtls/personal-dtls.component';
import { ContactDtlsComponent } from './contact-dtls/contact-dtls.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { FinishComponent } from './finish/finish.component';


const routes: Routes = [
  {path:"personal-dtls", component:PersonalDtlsComponent},
  {path:"contact-dtls", component:ContactDtlsComponent},
  {path:"skills", component:SkillsComponent},
  {path:"work-exp", component:WorkExpComponent},
  {path:"finish", component:FinishComponent},
  {path:"", redirectTo:"personal-dtls", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
