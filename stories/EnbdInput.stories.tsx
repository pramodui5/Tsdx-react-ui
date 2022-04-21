import React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnbdInput, Props } from '../src/EnbdInput';

const meta: Meta = {
  title: 'Standrad Input',
  component: EnbdInput,
  argTypes: {
    variant: {
        options: ['primary', 'secondary'],
        control: { type: 'radio' },
      },
  },
  parameters: {
    controls: { expanded: true },
  },

};

export default meta;

const Template: Story<Props> = args => <EnbdInput {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
    id: "filled-helperText",
    label: "Standard", 
    defaultValue: "Input field",
    helperText: "Helper text", 
    theme: {
        '&:focus': {
            color: 'red'
        }
    }
};
