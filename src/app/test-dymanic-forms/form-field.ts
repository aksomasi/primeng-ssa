export class FormField<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  validator: string;
  order: number;
  uiText?: any;
  ruleType?: string;
  ruleText?: string;
  ruleErrorMessage?: string;
  data?: any;
  controlType: string;
  type: string;
  options: { key: string; value: string }[];

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      validator?: string;
      order?: number;
      uiText?: any;
      ruleType?: string;
      ruleText?: string;
      data?: any;
      ruleErrorMessage?: string;
      controlType?: string;
      type?: string;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || "";
    this.label = options.label || "";
    this.required = !!options.required;
    this.validator = options.validator || "";
    this.uiText = options.uiText;
    this.ruleType =  options.ruleType;
    this.ruleText=  options.ruleText;
    this.data= options;
    this.ruleErrorMessage =  options.ruleErrorMessage;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || "";
    this.type = options.type || "";
    this.options = options.options || [];
  }
}
