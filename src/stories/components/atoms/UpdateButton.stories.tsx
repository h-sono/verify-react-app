import { UpdateButton } from '../../../components/atoms/UpdateButton.tsx';
import { New, Modify, Delete } from '../../../components/const/RegistrationType.tsx';

export default {
  title: 'UpdateButton',
  component: UpdateButton,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {}
};

export const UpdateButtonNewUi = {
  args: {
    todo: '',
    todo_id: 0,
    date: '',
    pagePath: '',
    applType: New
  }
};

export const UpdateButtonModefyUi = {
  args: {
    todo: 'テストtodo1',
    todo_id: 1,
    date: '2024-02-01',
    pagePath: '',
    applType: Modify
  }
};

export const UpdateButtonDeleteUi = {
  args: {
    todo: 'テストtodo1',
    todo_id: 1,
    date: '2024-02-01',
    pagePath: '',
    applType: Delete
  }
};
