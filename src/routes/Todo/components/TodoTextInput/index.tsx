import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';

export namespace TodoTextInput {
  export interface IProps {
    text?: string;
    placeholder?: string;
    newTodo?: boolean;
    editing?: boolean;
    onSave: (text: string) => any;
  }

  export interface IState {
    text: string;
  }
}

export class TodoTextInput extends React.Component<TodoTextInput.IProps, TodoTextInput.IState> {

  state = {
    text: this.props.text || ''
  };

  handleSubmit = (event): void => {
    const text = event.target.value.trim();
    if (event.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  };

  handleChange = (event) : void => {
    this.setState({ text: event.target.value });
  };

  handleBlur = (event): void => {
    const text = event.target.value.trim();
    if (!this.props.newTodo) {
      this.props.onSave(text);
    }
  };

  render() {
    const classes = classNames({
      [style.edit]: this.props.editing,
      [style.new]: this.props.newTodo
    }, style.normal);

    return (
      <input className={classes}
             type="text"
             autoFocus
             placeholder={this.props.placeholder}
             value={this.state.text}
             onBlur={this.handleBlur}
             onChange={this.handleChange}
             onKeyDown={this.handleSubmit} />
    );
  }
}
