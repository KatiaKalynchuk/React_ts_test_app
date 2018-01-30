import * as React from 'react';
import * as Actions from '../../actions/actions';
import * as style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Route } from 'react-router-dom';

import { RootState } from '../../reducers';
import { Header, MainSection, ListArticles, ArticlePage, Login, PrivateRoute } from '../../components';
import { Todo } from '../../routes/Todo/containers/TodoPage'

export namespace App {
  export interface IProps extends RouteComponentProps<void> {
    articles: IArticleItemData[];
    actions: typeof Actions;
    children: React.ReactNode;
    todos: ITodoItemData[]
  }
}

@connect(mapStateToProps, mapDispatchToProps, null, { pure: false })

export class App extends React.Component<any, any> {

  render() {
    const { todos, articles, actions, children } = this.props;

    return (
      <div className={style.normal}>
        {<Header />}
        <PrivateRoute exact path="/" component={MainSection} />
        <Route path="/Todo" render={(props) => (<Todo todos={todos} {...props}/>)} />
        <Route path="/Articles" render={(props) => (<ListArticles actions={actions} articles={articles}/>)} />
        <Route path="/ArticlePage" render={(props) => (<ArticlePage actions={actions} {...props}/>)} />
        <Route path="/Login" render={(props) => (<Login actions={actions} {...props}/>)} />
        {children}
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    articles: state.articles_reducer,
    todos: state.todos_reducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions as any, dispatch)
  };
}
