export class CompElement implements CompElement {
  order_id: number;
  join_id: number;
  element_type: number;

  constructor(order_id: number, join_id: number, element_type: number) {
    this.order_id = order_id;
    this.join_id = join_id;
    this.element_type = element_type;
  }
}

export class CompModule implements CompModule {
  module_id: number;
  elements: CompElement[];

  constructor(module_id: number, elements: CompElement[]) {
    this.module_id = module_id;
    this.elements = elements;
  }
}

const module1 = new CompModule(1, [
  new CompElement(1, 1, 1),
  new CompElement(2, 2, 2),
  new CompElement(3, 3, 3),
]);

const module2 = new CompModule(2, [
  new CompElement(1, 1, 1),
  new CompElement(2, 2, 2),
]);

const modules: CompModule[] = [module1, module2];
