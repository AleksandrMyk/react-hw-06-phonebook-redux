import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import style from './ContactFilter.module.css';
import Actions from '../redux/Actions';
const Filter = ({ value, onFilter }) => {
  return (
    <form className={style.filterForm}>
      <label className={style.filterLabel}>
        Find contacts by name
        <br />
        <CSSTransition in={true} appear={true} classNames={style} timeout={700}>
          <input
            className={style.filterInput}
            type="text"
            autoComplete="off"
            value={value}
            onChange={e => onFilter(e.target.value)}
          ></input>
        </CSSTransition>
      </label>
    </form>
  );
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = {
  onFilter: Actions.changeFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
