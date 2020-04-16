import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inside-header",
  templateUrl: "./inside-header.component.html",
  styleUrls: ["./inside-header.component.scss"],
})
export class InsideHeaderComponent implements OnInit {
  public route1: String = "/photos";
  public route2: String = "/photos-search";

  routes = [
    {
      text: "Lista de Fotos",
      route: "/photos",
    },
    {
      text: "Pesquisar Fotos",
      route: "/photos-search",
    },
    {
      text: "Contato",
      route: "/contato",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
