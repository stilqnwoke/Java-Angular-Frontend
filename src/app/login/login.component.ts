import { BasicAuthenticationService } from "./../service/basic-authentication.service";
import { HardcodedAuthenticationService } from "./../service/hardcoded-authentication.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  username = "stkwe";
  password = "";
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  //Router
  //Dependency Injection
  constructor(
    private router: Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit() {}

  // handleLogin() {
  //   if (
  //     this.hardcodedAuthenticationService.authenticate(
  //       this.username,
  //       this.password
  //     )
  //   ) {
  //     //Redirect to welcome page
  //     this.router.navigate(["welcome", this.username]);
  //     this.invalidLogin = false;
  //   } else {
  //     this.invalidLogin = true;
  //   }
  // }

  handleBasicAuthLogin() {
    this.basicAuthenticationService
      .executeAuthenticationService(this.username, this.password)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(["welcome", this.username]);
          this.invalidLogin = false;
        },
        (error) => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }

  handleJWTAuthLogin() {
    this.basicAuthenticationService
      .executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(["welcome", this.username]);
          this.invalidLogin = false;
        },
        (error) => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }
}
