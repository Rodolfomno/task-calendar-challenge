import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import PropTypes from 'prop-types';
import ptBR from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerInput({ displayDate, handleChange, text }) {
  registerLocale('ptBR', ptBR);
  return (
    <div>
      <p>{ text }</p>
      <DatePicker
        selected={ displayDate || new Date() }
        onChange={ (date) => handleChange(date) }
        showTimeSelect
        locale="ptBR"
        timeIntervals={14}
        dateFormat="Pp"
        placeholderText="data e hora"
        required
      />
    </div>
  );
}

export default DatePickerInput;

DatePickerInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  displayDate: PropTypes.instanceOf(Date).isRequired,
};
