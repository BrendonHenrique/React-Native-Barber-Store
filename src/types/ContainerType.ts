type ContainerType = {
  /**
   * @param isDark
   * use to set dark theme value #321e38
   */
  isDark?: boolean;
  /**
   * @param theme
   * use access theme provider values
   */
  theme?: Record<string, any>;
  /**
   * @param alignCenter
   * use to set vertical centered alignment
   */
  alignCenter?: boolean;
  /**
   * @param justifyCenter
   * use to set horizontal centered alignment
   */
  justifyCenter?: boolean;
  /**
   * @param fullSpace
   * use to set full width same as flex: 1
   */
  fullSpace?: boolean;
  /**
   * @param verticalPadding
   * use to set vertical padding , same as padding-top: x & padding-bottom: x
   */
  verticalPadding?: number | string;
  /**
   * @param horizontalPadding
   * use to set horizontal padding , same as padding-left: x & padding-right: x
   */
  horizontalPadding?: number | string;
  /**
   * @param verticalMargin
   * use to set vertical margin , same as margin-top: x & margin-bottom: x
   */
  verticalMargin?: number | string;
  /**
   * @param horizontalMargin
   * use to set horizontal margin , same as margin-left: x & margin-right: x
   */
  horizontalMargin?: number | string;
  /**
   * @param marginTop
   * use to set top margin
   */
  marginTop?: number | string;
  /**
   * @param marginBottom
   * use to set bottom margin
   */
  marginBottom?: number | string;
};

export default ContainerType;
