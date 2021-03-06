import { WelcomeDataService } from "./../service/data/welcome-data.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AppComponent } from "./../app.component";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  message = "Welcome message";
  welcomeMessageFromService: string;
  name = "";

  //ActivatedRouter
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  ngOnInit() {
    this.name = this.route.snapshot.params["name"];
  }

  getWelcomeMessage() {
    this.service
      .executeHelloWorldBeanService()
      //this subscribe is only declaring the message, does no execute it immediately
      .subscribe(
        (response) => this.handleSuccessfulResponse(response),
        (error) => this.handleErrorResponse(error)
      );

    console.log("last line of getWelcomeMessage");
    // console.log("get welcome message");
  }

  getWelcomeMessageVariable() {
    this.service
      .executeHelloWorldPathVariableService(this.name)
      //this subscribe is only declaring the message, does no execute it immediately
      .subscribe(
        (response) => this.handleSuccessfulResponse(response),
        (error) => this.handleErrorResponse(error)
      );

    console.log("last line of getWelcomeMessage");
    // console.log("get welcome message");
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;
  }

  // handleSuccessfulResponseVariable(response) {
  //   this.welcomeMessageFromService = response.message;
  // }

  // handleErrorResponseVariable(error) {
  //   this.welcomeMessageFromService = error.error.message;
  // }
}

export class Class1 {}
