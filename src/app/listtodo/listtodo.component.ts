import { TodoDataService } from "./../service/data/todo-data.service";
import { Component, OnInit } from "@angular/core";

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: "app-listtodo",
  templateUrl: "./listtodo.component.html",
  styleUrls: ["./listtodo.component.css"],
})
export class ListtodoComponent implements OnInit {
  todos: Todo[];

  message: string;
  // todos = [
  //   new Todo(1, "Learn to dance", false, new Date()),
  //   new Todo(2, "Become an Expert", false, new Date()),
  //   new Todo(3, "Leran to code", false, new Date()),
  // ];

  constructor(private todoService: TodoDataService) {}

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos("stkwe").subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo("stkwe", id).subscribe((response) => {
      console.log(response);
      this.message = `Delete of Todo ${id} successful`;
      this.refreshTodos();
    });
  }
}
