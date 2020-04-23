import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inside-header",
  templateUrl: "./inside-header.component.html",
  styleUrls: ["./inside-header.component.scss"],
})
export class InsideHeaderComponent implements OnInit {
  public route1: String = "/photos";
  public route2: String = "/photos-search";
  public routes: any = [];

  constructor() {
    this.routes = [
      {
        label: "Lista de Fotos",
        link: "/photos",
      },
      {
        label: "Pesquisar Fotos",
        link: "/photos-search",
      },
      {
        label: "Contato",
        link: "/contato",
      },
      {
        label: "Tópicos",
        link: "/topics",
      },
    ];
  }

  ngOnInit() {}
}
