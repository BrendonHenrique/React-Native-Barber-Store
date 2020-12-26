export const alignCenter = () =>
  `
  align-items:  center;  
  `;

export const justifyCenter = () =>
  `
    justify-content: center;
  `;

export const fullSpace = () =>
  ` 
    flex: 1;
  `;

export const verticalPadding = (verticalPadding) =>
  ` 
 padding-top: ${verticalPadding}px;
 padding-bottom: ${verticalPadding}px;
 `;

export const horizontalPadding = (horizontalPadding) =>
  ` 
padding-left: ${horizontalPadding}px;
padding-right: ${horizontalPadding}px;
`;

export const verticalMargin = (verticalMargin) =>
  ` 
  margin-top: ${verticalMargin} px;
  margin-bottom: ${verticalMargin} px;
`;

export const marginTop = (marginTop) => `margin-top: ${marginTop}px `;
export const marginBottom = (marginBottom) =>
  `margin-bottom: ${marginBottom}px `;

export const horizontalMargin = (horizontalMargin) =>
  `
  margin-left: ${horizontalMargin}px;
  margin-right: ${horizontalMargin}px;
`;
