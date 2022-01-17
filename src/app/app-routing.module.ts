import { TodoComponent } from "./todo/todo.component";
import { RouteGuardService } from "./service/route-guard.service";
import { LogoutComponent } from "./logout/logout.component";
import { ListtodoComponent } from "./listtodo/listtodo.component";
import { ErrorComponent } from "./error/error.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: LoginComponent }, //ROuteGuardService
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "welcome/:name",
    component: WelcomeComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "todos",
    component: ListtodoComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "logout",
    component: LogoutComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: "todos/:id",
    component: TodoComponent,
    canActivate: [RouteGuardService],
  },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
