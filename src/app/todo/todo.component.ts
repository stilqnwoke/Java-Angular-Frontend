import { ActivatedRoute } from "@angular/router";
import { TodoDataService } from "./../service/data/todo-data.service";
import { Component, OnInit } from "@angular/core";
import { Todo } from "../listtodo/listtodo.component";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.todo = new Todo(1, "", false, new Date());
    this.todoService
      .retrieveTodo("stkwe", this.id)
      .subscribe((data) => (this.todo = data));
  }
}
