import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { colors } from 'shared/utils/Styles';
import Button from '../Button';
import TextInput from '../Form/TextInput';
import StyledWrapper from '../Wrappers/Styles';

interface PropsInterface {
  onCancel: Function;
  onAdd: Function;
}

const NewCardForm: React.FC<PropsInterface> = ({ onCancel, onAdd }) => {
  const [data, setData] = useState({
    title: '',
    description: '',
    date: new Date(),
  });

  const updateData = (field: string, value: any) => {
    setData((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleAdd = () => {
    onAdd(data);
  };

  return (
    <div
      className="card-form"
      style={{
        background: colors.backgroundMedium,
        borderRadius: '10px',
      }}>
      <StyledWrapper>
        <TextInput
          placeholer="new task"
          name="title"
          type="text"
          value={data.title}
          onChange={updateData}>
          Title
        </TextInput>
        <TextInput
          placeholer="my new task"
          name="description"
          type="text"
          value={data.description}
          onChange={updateData}>
          Description
        </TextInput>
        <div
          style={{
            background: 'white',
            marginTop: '10px',
          }}>
          <DateTimePicker
            onChange={(value) => updateData('date', value)}
            value={data.date}
          />
        </div>
      </StyledWrapper>
      <StyledWrapper direction="row" style={{ padding: '1em 0' }}>
        <Button bg={colors.success} color="white" onClick={handleAdd}>
          Add
        </Button>
        <Button
          style={{ marginLeft: '10px' }}
          color={colors.danger}
          onClick={() => onCancel()}>
          Cancel
        </Button>
      </StyledWrapper>
    </div>
  );
};

export default NewCardForm;