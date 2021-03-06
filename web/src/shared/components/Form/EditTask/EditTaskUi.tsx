import React, { FormEventHandler } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Button from 'shared/components/Button';
import Form from 'shared/components/Form';
import TextInput from 'shared/components/Form/TextInput';
import StyledWrapper from 'shared/components/Wrappers/Styles';
import { Task } from 'shared/store/reducers/taskReducer';
import { colors } from 'shared/utils/Styles';
import TextArea from '../TextArea';

interface Props {
  task: Task;
  updateData: Function;
  handleSubmit: FormEventHandler;
  loading: boolean;
}

const EditTaskUi: React.FC<Props> = (props) => {
  const { task, updateData, handleSubmit, loading } = props;
  return (
    <Form
      style={{
        width: '437px',
        height: '380px',
        background: `${colors.backgroundMedium}`,
        borderRadius: '30px',
        display: 'flex',
        flexDirection: 'column',
        padding: '35px 25px',
      }}
      onSubmit={handleSubmit}>
      <StyledWrapper className="form-row" align="start">
        <TextInput
          placeholder="new task"
          name="title"
          value={task.title}
          onChange={updateData}
          type="text"
          error={null}>
          Title
        </TextInput>
      </StyledWrapper>
      <StyledWrapper align="start" className="form-row">
        <TextArea
          placeholder="my new task"
          name="description"
          value={task.description}
          onChange={updateData}
          error={null}>
          Description
        </TextArea>
      </StyledWrapper>
      <StyledWrapper
        direction="row"
        justify="space-between"
        align="start"
        className="form-row">
        <div
          style={{
            background: 'white',
          }}>
          <DateTimePicker
            onChange={(value) => updateData('date', value)}
            value={task.date}
          />
        </div>
      </StyledWrapper>
      <StyledWrapper
        style={{ marginTop: '20px', color: colors.success }}
        align="flex-end">
        Status: {task.status}
      </StyledWrapper>
      <StyledWrapper
        style={{ marginTop: '20px' }}
        align="flex-end"
        className="form-row">
        <Button
          bg={colors.backgroundDark}
          color="white"
          radius="20px"
          type="submit"
          loading={loading}>
          Save
        </Button>
      </StyledWrapper>
    </Form>
  );
};

export default EditTaskUi;
