import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class HelloWorldBean {
  constructor(public message: string) {}
}

export class HelloWorldPathVariable {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: "root",
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(
      "http://localhost:8080/hello-world-bean"
    );
    // console.log("Test");
  }

  executeHelloWorldPathVariableService(name) {
    let basicAuthHeaderString = this.createBasiAuthenticationHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });

    return this.http.get<HelloWorldPathVariable>(
      `http://localhost:8080/hello-world/path-variable/${name}`,
      { headers }
    );
    // console.log("Test");
  }

  createBasiAuthenticationHeader() {
    let username = "stkwe";
    let password = "dummy";
    let basicAuthHeaderString =
      "Basic" + window.btoa(username + ":" + password);

    return basicAuthHeaderString;
  }
}
