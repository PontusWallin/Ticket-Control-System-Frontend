import {RouterModule, Routes} from "@angular/router";
import {DisplayComponent} from "./display/display.component";
import {NgModule} from "@angular/core";
import {ValidateComponent} from "./validate/validate.component";
import {LoadComponent} from "./load/load.component";

const routes: Routes = [
  {path: 'display', component: DisplayComponent},
  {path: 'validate', component: ValidateComponent},
  {path: 'load', component: LoadComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
