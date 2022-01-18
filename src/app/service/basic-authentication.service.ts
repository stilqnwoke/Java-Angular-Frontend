import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}

  authenticate(username, password) {
    if (username === "stkwe" && password === "dummy") {
      sessionStorage.setItem("authenticatedUser", username);
      return true;
    }
    return false;
  }

  executeAuthenticationService(username, password) {
    let basicAuthHeaderString =
      "Basic " + window.btoa(username + ":" + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });

    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,
      { headers }
    );
    // console.log("Test");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
