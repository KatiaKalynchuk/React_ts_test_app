import * as React from 'react';
import * as Actions from '../../actions/actions';
import * as style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Route } from 'react-router-dom';

import { RootState } from '../../reducers';
import { Header, MainSection, ListArticles, ArticlePage, Login } from '../../components';

export namespace App {
  export interface IProps extends RouteComponentProps<void> {
    articles: IArticleItemData[];
    actions: typeof Actions;
    children: React.ReactNode;
  }
}

@connect(mapStateToProps, mapDispatchToProps, null, { pure: false })
export class App extends React.Component<any, any> {

  render() {
    const { articles, actions, children } = this.props;
    return (
      <div className={style.normal}>
        {<Header />}
        {/*<PrivateRoute exact path="/" component={MainSection} />*/}
        <Route path="/" exact render={(props) => (<MainSection  {...props}/>)} />
        <Route path="/Articles" render={(props) => (<ListArticles actions={actions} {...props}/>)} />
        <Route path="/ArticlePage" render={(props) => (<ArticlePage actions={actions} {...props}/>)} />
        <Route path="/Login" render={(props) => (<Login actions={actions} {...props}/>)} />
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
