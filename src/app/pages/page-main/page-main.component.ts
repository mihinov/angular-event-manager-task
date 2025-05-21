import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-main',
  imports: [RouterOutlet],
  templateUrl: './page-main.component.html',
  styleUrl: './page-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageMainComponent {

}
