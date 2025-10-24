import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Small page -> inline template and styles
  template: `
    <section class="page">
      <h1>About</h1>
      <p>Welcome to my portfolio. This is a sample page to show routing.</p>
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
export class AboutComponent {}
