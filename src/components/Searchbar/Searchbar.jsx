import { Component } from 'react';
import { toast } from 'react-toastify';
import { FormikForm, FormikInput, FormButton } from './Searchbar.styled';
import { Formik } from 'formik';

export default class Searchbar extends Component {
  state = {
    userSearch: '',
  };

  handelChangeName = e => {
    this.setState({ userSearch: e.currentTarget.value.toLowerCase() });
  };
  handelSubmit = e => {
    e.preventDefault();
    if (this.state.userSearch.trim() === '') {
      toast.error('Try more time ');
      return;
    }
    this.props.onSubmit(this.state.userSearch);
    this.setState({ userSearch: '' });
  };
  render() {
    return (
      <header>
        <Formik>
          <FormikForm onSubmit={this.handelSubmit} className="form">
            <FormButton type="submit"></FormButton>

            <FormikInput
              value={this.state.userSearch}
              onChange={this.handelChangeName}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </FormikForm>
        </Formik>
        {/* <FormStyle onSubmit={this.handelSubmit} className="form">
          <FormButton type="submit"></FormButton>

          <Input
            value={this.state.userSearch}
            onChange={this.handelChangeName}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </FormStyle> */}
      </header>
    );
  }
}
