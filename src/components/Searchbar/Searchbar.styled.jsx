import styled from 'styled-components';
import { Form, Field } from 'formik';

// export const FormStyle = styled.form`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   padding: 10px 0px 10px 0px;
//   position: sticky;
//   top: 0px;

//   background-color: rgb(94, 83, 180);
// `;

export const FormikForm = styled(Form)`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0px 10px 0px;
  position: sticky;
  top: 0px;

  background-color: rgb(94, 83, 180);
`;

export const FormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://images.freeimages.com/fic/images/icons/989/ivista_2/256/search.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;

// export const Input = styled.input`
//   display: inline-block;
//   width: 50%;
//   font: inherit;
//   font-size: 20px;
//   border: none;
//   outline: none;
//   padding-left: 4px;
//   padding-right: 4px;
// `;

export const FormikInput = styled(Field)`
  display: inline-block;
  width: 50%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;
