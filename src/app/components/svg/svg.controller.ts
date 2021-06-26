import { SvgView } from './svg.view';
import { Controller, View } from '../../core';

export class SvgController extends Controller {
  // Чтобы крректно отработал controller.destroy
  views = [];
  controllers = [];
  //

  private svgView = new SvgView();

  constructor(private readonly $containerRef: HTMLElement) {
    super();
  }

  init(): void {
    View.render(this.$containerRef, this.svgView.getElement());

    this.setViews = [this.svgView];
  }
}
