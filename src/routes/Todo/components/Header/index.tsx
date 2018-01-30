import * as React from 'react';
import * as style from './style.css';
import { TodoTextInput } from '../TodoTextInput';

export namespace Header {
  export interface IProps {
    addTodo: (todo: ITodoItemData) => any;
  }
}

export class Header extends React.Component<Header.IProps, {}> {

  handleSave = (text: string): void => {
    if (text.length) {
      this.props.addTodo({ text });
    }
  };

  render() {
    return (
      <header>
        <h1 className={style.normalTitle}>TodoPage</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="New todo" />
      </header>
    );
  }
}
