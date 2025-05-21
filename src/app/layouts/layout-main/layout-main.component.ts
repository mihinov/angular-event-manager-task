import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-main',
  imports: [RouterOutlet],
  templateUrl: './layout-main.component.html',
  styleUrl: './layout-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutMainComponent {

}
