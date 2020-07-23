declare namespace TextModuleCssNamespace {
  export interface ITextModuleCss {
    ds_text: string;
    ds_text_align_right: string;
    ds_text_bold: string;
    ds_text_italic: string;
    ds_text_small: string;
    ds_text_subtitle: string;
  }
}

declare const TextModuleCssModule: TextModuleCssNamespace.ITextModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TextModuleCssNamespace.ITextModuleCss;
};

export = TextModuleCssModule;
