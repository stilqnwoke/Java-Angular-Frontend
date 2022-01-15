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
    this.service.executeHelloWorldBeanService();
    // console.log("get welcome message");
  }
}

export class Class1 {}
