import { ViewComponent } from '../../core';

export class SvgView extends ViewComponent {
  getTemplate(): string {
    return `<svg
    xmlns="http://www.w3.org/2000/svg"
    style=" position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        margin: -1px !important;
        border: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
        clip: rect(0 0 0 0) !important;"
  ></svg>`.trim();
  }
}
