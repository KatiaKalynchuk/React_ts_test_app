import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';
import { TodoTextInput } from '../TodoTextInput';

export namespace TodoItem {
  export interface IProps {
    todo: ITodoItemData;
    editTodo: (todo: ITodoItemData) => any;
    deleteTodo: (id: number) => any;
    completeTodo: (id: number) => any;
  }

  export interface IState {
    editing: boolean;
  }
}

export class TodoItem extends React.Component<TodoItem.IProps, TodoItem.IState> {

  state = {
      editing: false
    };

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = (id: number, text: string) => {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo({ id, text });
    }
    this.setState({ editing: false });
  };

  render() {
    const { todo, completeTodo, deleteTodo } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(todo.id, text)} />
      )
    } else {
      element = (
        <div className={style.view}>
          <input className={style.toggle}
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => completeTodo(todo.id)} />

          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>

          <button className={style.destroy} onClick={() => deleteTodo(todo.id)} />
        </div>
      )
    }

    const classes = classNames({
      [style.completed]: todo.completed,
      [style.editing]: this.state.editing,
      [style.normal]: !this.state.editing
    });

    return (
      <li className={classes}>
        {element}
      </li>
    );
  }
}
