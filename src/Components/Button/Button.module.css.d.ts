declare namespace ButtonModuleCssNamespace {
  export interface IButtonModuleCss {
    ds_button: string;
    ds_button_disabled: string;
    ds_full_button: string;
    ds_primary_button: string;
    ds_secondary_button: string;
    ds_teritary_button: string;
  }
}

declare const ButtonModuleCssModule: ButtonModuleCssNamespace.IButtonModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ButtonModuleCssNamespace.IButtonModuleCss;
};

export = ButtonModuleCssModule;
