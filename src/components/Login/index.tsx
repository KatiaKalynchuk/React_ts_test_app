import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user_actions';
import IState = LoginPage.IState;

export namespace LoginPage {
  export interface IProps {
    dispatch: any
  }

  export interface IState {
    email: string,
    password: string
  }
}

class Login extends React.Component<LoginPage.IProps, LoginPage.IState> {
  state: IState = {
    email: '',
    password: ''
  };

  handleOnChange = (event): void => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(target);
    this.setState({
      [name]: value
    })
  };

  signIn = (event): void => {
    const { email, password } = this.state;
    const { dispatch } = this.props;
    event.preventDefault();

    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  };

  render() {
    return (
      <div className={style.wrapForm}>
        <form className={style.form} onSubmit={this.signIn}>
          <h2>Login</h2>
          <div className={style.form_group}>
            <input
              value={this.state.email}
              className={style.inputField}
              type='text'
              name='email'
              placeholder='email'
              onChange={this.handleOnChange}
            />
            <input
              value={this.state.password}
              className={style.inputField}
              type='password'
              name='password'
              placeholder='password'
              onChange={this.handleOnChange}
            />
            <input className={style.btn} type='submit' value='Login' />
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication_reducer;
  return {
    loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login };
