import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineComponentComponent } from "./engine-component/engine-component.component";
import { ThreeDModelsComponent } from "./three-d-models/three-d-models.component";

const routes: Routes = [
  { path : 'engine', component: EngineComponentComponent},
  { path : 'vessel', component: ThreeDModelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
