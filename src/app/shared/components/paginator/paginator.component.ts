import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-paginator',
  template: `
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item">
          <a href="" rel="prev" class="page-link page-prev">Ant</a>
        </li>

        <li class="page-item active"><a href="" class="page-link">1</a></li>

        <li class="page-item"><a href="" class="page-link">2</a></li>

        <li class="page-item">
          <a href="" rel="next" class="page-link page-next">Próximo</a>
        </li>
      </ul>
    </nav>
  `,
  styles: [],
})
export class PaginatorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
