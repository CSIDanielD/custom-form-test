export default interface IFormField {
  fieldName: string;
  disabled: string;

  writeValueFn: (value: any) => void;
  setDisabledFn: (isDisabled: boolean) => void;
}
