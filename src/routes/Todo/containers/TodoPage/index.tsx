import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as style from './style.css';
import { RootState } from '../../../../reducers';
import * as TodoActions from '../../actions/todos';
import { Header } from '../../components/Header';
import { MainSection } from '../../components/MainSection';

export namespace Todo {
  export interface IProps extends RouteComponentProps<void> {
    todos: ITodoItemData[];
    actions: typeof TodoActions;
  }
}

@connect(mapStateToProps, mapDispatchToProps)

export class Todo extends React.Component<Todo.IProps, {}> {
  render() {
    const { todos, actions } = this.props;

    return <div className={style.main}>
      <Header addTodo={actions.addTodo} />
      <MainSection todos={todos} actions={actions}/>
    </div>
  }
}

function mapStateToProps(state: RootState) {
  return {
    todos: state.todos_reducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions as any, dispatch)
  };
}
