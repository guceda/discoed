import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text  from './Text';

export default {
  title: 'Example/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Default: ComponentStory<typeof Text> = (args) => <Text {...args} >Default</Text>;
Default.args = {
  color:'red',
	
};
export const H1: ComponentStory<typeof Text> = (args) => <Text.H1 {...args} >Default</Text.H1>;
export const H2: ComponentStory<typeof Text> = (args) => <Text.H2 {...args} >Default</Text.H2>;
export const H3: ComponentStory<typeof Text> = (args) => <Text.H3 {...args} >Default</Text.H3>;
export const H4: ComponentStory<typeof Text> = (args) => <Text.H4 {...args} >Default</Text.H4>;
export const H5: ComponentStory<typeof Text> = (args) => <Text.H5 {...args} >Default</Text.H5>;
export const H6: ComponentStory<typeof Text> = (args) => <Text.H6 {...args} >Default</Text.H6>;
export const Copy: ComponentStory<typeof Text> = (args) => <Text.Copy {...args} >Default</Text.Copy>;
export const CopySmall: ComponentStory<typeof Text> = (args) => <Text.CopySmall {...args} >Default</Text.CopySmall>;
export const Label: ComponentStory<typeof Text> = (args) => <Text.Label {...args} >Default</Text.Label>;
