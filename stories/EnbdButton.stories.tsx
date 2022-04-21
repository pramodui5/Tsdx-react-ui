import React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnbdButton, Props } from '../src/EnbdButton';

const meta: Meta = {
  title: 'Standrad button',
  component: EnbdButton,
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

const Template: Story<Props> = args => <EnbdButton {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
    label: "Standrad", theme: {
        '&:hover': {
            backgroundColor: 'red'
        }
    }
};
