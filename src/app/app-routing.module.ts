import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateTrainingComponent} from "./training/create-training/create-training.component";
import {TrainingOverviewComponent} from "./training/training-overview/training-overview.component";
import {TrainingDetailComponent} from "./training/training-detail/training-detail.component";
import {PersonalInformationComponent} from "./personal/personal-information/personal-information.component";

const routes: Routes = [
  { path: '', component: TrainingOverviewComponent},
  { path: 'create-training', component: CreateTrainingComponent},
  { path: 'training-detail/:id', component: TrainingDetailComponent},
  { path: 'personal', component: PersonalInformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
