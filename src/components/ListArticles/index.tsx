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
    // this.props.fetchData('http://pictures.org.ua:8000/api/articles');
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

//   render() {
//     if (this.props.hasErrored) {
//       return <p>Sorry! There was an error loading the items</p>;
//     }
//
//     if (this.props.isLoading) {
//       return <p>Loading…</p>;
//     }
//
//     return (
//       <ul>
//         {this.props.items.map((item) => (
//           <li key={item.id}>
//             {item.label}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     items: state.items,
//     hasErrored: state.itemsHasErrored,
//     isLoading: state.itemsIsLoading
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchData: (url) => dispatch(itemsFetchData(url))
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ListArticles);
