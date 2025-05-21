import { AbstractControl, FormControl } from "@angular/forms";

type ControlsMap = {
  [key: string]: AbstractControl<any, any>;
};

export interface BaseEventFormControls extends ControlsMap {
  title: FormControl<string | null>;
  description: FormControl<string | null>;
  location: FormControl<string | null>;
}
