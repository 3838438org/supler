module Supler {
  export class FieldTypes {
    static STRING = 'string';
    static INTEGER = 'integer';
    static FLOAT = 'float';
    static BOOLEAN = 'boolean';
    static SELECT = 'select';
    static SUBFORM = 'subform';
    static MODAL = 'modal_button';
    static STATIC = 'static';
    static ACTION = 'action';
    static META = 'meta';
  }

  export class SuplerAttributes {
    static FIELD_TYPE = 'supler:fieldType';
    static MULTIPLE = 'supler:multiple';
    static FIELD_NAME = 'supler:fieldName';
    static VALIDATION_ID = 'supler:validationId';
    static PATH = 'supler:path';
  }

  export class FormSections {
    static META = 'supler_meta';
    static MODAL_PATH = 'supler_modals';
    static MODAL_HOLDER = 'supler:modal-holder';
  }
}
