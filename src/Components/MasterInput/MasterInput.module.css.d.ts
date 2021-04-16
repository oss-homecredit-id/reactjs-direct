declare namespace MasterInputModuleCssNamespace {
  export interface IMasterInputModuleCss {
    input_content: string;
    input_content_disabled: string;
    input_content_error: string;
    input_error_text: string;
    input_frame: string;
    input_helper_text: string;
    input_label: string;
    input_label_disabled: string;
  }
}

declare const MasterInputModuleCssModule: MasterInputModuleCssNamespace.IMasterInputModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MasterInputModuleCssNamespace.IMasterInputModuleCss;
};

export = MasterInputModuleCssModule;
