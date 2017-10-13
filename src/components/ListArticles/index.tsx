import * as React from 'react';
import * as style from './style.css';
import Article from '../Article';
import { connect } from 'react-redux';
import * as Actions from '../../actions/actions';
// import { itemsFetchData } from '../actions/actions';

export namespace ListArticles {
  export interface Props {
    actions: typeof Actions;
  }

  export interface State {
    /* empty */
  }
}

export class ListArticles extends React.Component<ListArticles.Props, ListArticles.State> {


  componentDidMount() {
    this.props.actions.itemsFetchData('http://pictures.org.ua/api/articles');
  }

  render() {
    return (
      <div className="list">
        <h1 className={style.title}>Articles</h1>
        <Article />
        <Article />
        <Article />
      </div>
    );
  }
}
