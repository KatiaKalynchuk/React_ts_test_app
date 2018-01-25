import * as React from 'react';
import * as style from './style.css';
import Article from '../Article';
import * as Actions from '../../actions/actions';
import { itemsFetchData } from '../../actions/actions';

export namespace ListArticles {
  export interface IProps {
    actions: typeof Actions;
  }
}

export class ListArticles extends React.Component<ListArticles.IProps, {}> {

  componentDidMount() {
    this.props.actions.itemsFetchData('https://myproject-608bf.firebaseio.com/articles');
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
