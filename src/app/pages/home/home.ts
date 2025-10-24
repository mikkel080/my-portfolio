import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="page">
      <h1>{{ title() }}</h1>
      <p>Welcome to my custom homepage. Use the menu to explore.</p>
    </section>
  `,
  styles: [
    `
      .page {
        padding: 2rem 1rem;
        max-width: 960px;
        margin-inline: auto;
      }
      h1 { margin: 0 0 0.5rem; }
    `,
  ],
})
export class HomeComponent {
  protected readonly title = signal('Home');
}
