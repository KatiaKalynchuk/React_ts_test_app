import * as React from 'react';
import * as style from './style.css';
import Article from '../Article';
import * as Actions from '../../actions/actions';
import { itemsFetchData } from '../../actions/actions';

export namespace ListArticles {
  export interface IProps {
    actions: typeof Actions;
    articles: object
  }
}

export class ListArticles extends React.Component<ListArticles.IProps, {}> {

  componentDidMount() {
    this.props.actions.itemsFetchData('http://5a6ae16d8bdfbe0012adc164.mockapi.io/articles');
  }

  render() {
    const { articles } = this.props;
    console.log(222, this.props);
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
