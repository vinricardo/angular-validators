import { Component, OnInit, VERSION } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export interface Aluno {
  nome: string;
  age: number;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  clear(): void {
    this.form.reset();
  }

  createForm(aluno: Aluno) {
    this.form = this.formBuilder.group({
      nome: [aluno.nome, Validators.minLength(3)],
      age: [aluno.age, Validators.required]
    });
  }

  ngOnInit(): void {
    const aluno: Aluno = {
      nome: "",
      age: 0
    };
    this.createForm(aluno);
  }
}
