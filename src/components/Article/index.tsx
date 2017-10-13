import * as React from 'react';
import * as style from './style.css';

export namespace Article {
  export interface Props {

  }

  export interface State {
    /* empty */
  }
}

export class Article extends React.Component<Article.Props, Article.State> {

  render() {
    return (
      <div className={style.article}>
        <h2><a href="" className={style.link}>Article</a></h2>
        <p>If you are hacking on something to see if it works in your application you can try using
          npm link. If you are needing to have a fork to deploy your application, then force commit
          the lib folder on your branch. I'd recommend you then tag it and bump the version as opposed
          to pointing at a branch tar download.</p>
      </div>
    );
  }
}
export default Article;
