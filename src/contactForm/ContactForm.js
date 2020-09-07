import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import style from './ContactForm.module.css';
import Actions from '../redux/Actions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={style.contactForm} onSubmit={this.handleSubmit}>
        <label className={style.labelForm}>
          Name
          <br />
          <CSSTransition
            in={true}
            appear={true}
            classNames={style}
            timeout={700}
          >
            <input
              className={style.contactInput}
              name="name"
              type="text"
              autoComplete="off"
              value={name}
              onChange={this.changeHandler}
              placeholder="enter name"
            />
          </CSSTransition>
        </label>
        <label className={style.labelForm}>
          Number
          <br />
          <CSSTransition
            in={true}
            appear={true}
            classNames={style}
            timeout={700}
          >
            <input
              className={style.contactInput}
              name="number"
              type="tel"
              autoComplete="off"
              value={number}
              onChange={this.changeHandler}
              placeholder="enter number in format 00"
              pattern="[0-9]{1}[0-9]{1}"
            />
          </CSSTransition>
        </label>

        <button className={style.btnAdd} type="submit">
          Add {name}
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: Actions.addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
