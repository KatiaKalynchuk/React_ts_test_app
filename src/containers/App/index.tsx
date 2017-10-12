import * as React from 'react';
import * as Actions from '../../actions/actions';
import * as style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Route } from 'react-router-dom';

import { RootState } from '../../reducers';
import { Header, MainSection, ListArticles } from '../../components';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    articles: ArticleItemData[];
    actions: typeof Actions;
    children: React.ReactNode;
  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps, null, { pure: false })
export class App extends React.Component<any, any> {

  render() {
    const { articles, actions, children } = this.props;
    return (
      <div className={style.normal}>
        {<Header />}
        <Route path="/" exact render={(props) => (<MainSection  {...props}/>)} />
        <Route path="/Articles" render={(props) => (<ListArticles actions={actions} {...props}/>)} />
        {children}
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    articles_reducer: state.articles_reducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions as any, dispatch)
  };
}
