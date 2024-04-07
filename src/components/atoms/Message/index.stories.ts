import type {Meta, StoryObj} from '@storybook/react';
import Message from './index';

const meta: Meta<typeof Message> = {
  title: 'Atoms/Message',
  component: Message,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const SuccessMessage: StoryObj = {
  args: {
    children: 'Success message',
    styleName: 'success',
  },
};

export const ErrorMessage: StoryObj = {
  args: {
    children: 'Error message',
    styleName: 'error',
  },
};