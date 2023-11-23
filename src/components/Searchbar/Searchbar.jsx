import { Component } from 'react';
import { toast } from 'react-toastify';
import { FormStyle, FormButton, Input } from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    userSearch: '',
  };

  handelChangeName = e => {
    console.log(e.currentTarget.value);
    this.setState({ userSearch: e.currentTarget.value.toLowerCase() });
  };
  handelSubmit = e => {
    e.preventDefault();
    if (this.state.userSearch.trim() === '') {
      toast.error('Error ');
      return;
    }
    this.props.onSubmit(this.state.userSearch);
    this.setState({ userSearch: '' });
  };
  render() {
    return (
      <header>
        <FormStyle onSubmit={this.handelSubmit} className="form">
          <FormButton type="submit">
            <span className="button-label"></span>
          </FormButton>

          <Input
            value={this.state.userSearch}
            onChange={this.handelChangeName}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </FormStyle>
      </header>
    );
  }
}
