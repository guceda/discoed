import { ReactElement } from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import { Sizes } from '../../../theme/types';
import { TextFamily, TextualWeights, VariantsProps } from './types';

/**
 * Text component with all its variants
 */
const Text: TextFamily = ({
  children,
  weight = TextualWeights.regular,
  size = Sizes.xsmall,
  italic = false,
  color,
  ...rest
}) => {


  const theme = useTheme();
  const fontColor = (theme.palette as any)[color as any] ?? theme.palette.text;

  return (
    <p
      style={{
        fontFamily: theme.fonts.family,
        fontWeight: weight,
        fontSize: theme.fonts.sizes[size],
        fontStyle: italic ? 'italic' : 'normal',
        color: fontColor,
      }}
      {...rest}
    >
      {children}
    </p>
  );
};


Text.H1 = (props: VariantsProps): ReactElement => (
  <Text weight={TextualWeights.bold} {...props} size={Sizes.xxlarge} />
);
Text.H2 = (props: VariantsProps): ReactElement => (
  <Text weight={TextualWeights.bold} {...props} size={Sizes.xlarge} />
);
Text.H3 = (props: VariantsProps): ReactElement => (
  <Text  weight={TextualWeights.bold} {...props} size={Sizes.large} />
);
Text.H4 = (props: VariantsProps): ReactElement => (
  <Text  weight={TextualWeights.regular} {...props} size={Sizes.large} />
);
Text.H5 = (props: VariantsProps): ReactElement => (
  <Text weight={TextualWeights.regular} {...props} size={Sizes.medium} />
);
Text.H6 = (props: VariantsProps): ReactElement => (
  <Text weight={TextualWeights.regular} {...props} size={Sizes.small} />
);
Text.Copy = (props: VariantsProps): ReactElement => (
  <Text weight={TextualWeights.regular} {...props} size={Sizes.xsmall} />
);
Text.CopySmall = (props: VariantsProps): ReactElement => (
  <Text weight={TextualWeights.regular} {...props} size={Sizes.xxsmall} />
);
Text.Label = (props: Omit<VariantsProps, 'italic'>): ReactElement => (
  <Text
  
    weight={TextualWeights.light} {...props}
    size={Sizes.xxsmall}
    italic
  />
);



export default Text;
