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
    password: string,
    errors: object,
    submitted: boolean
  }
}

class Login extends React.Component<LoginPage.IProps, LoginPage.IState> {
  state: IState = {
    email: '',
    password: '',
    errors: {},
    submitted: false
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
    event.preventDefault();
    console.log('this.state', this.state);
    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  };

  render() {
    const { submitted } = this.state;
    return (
      <form className={style.form} onSubmit={this.signIn}>
        <h2>Login</h2>
        <div className={style.form_group}>
          <input
            value={this.state.email}
            className={style.form_control}
            type='text'
            name='email'
            placeholder='email'
            onChange={this.handleOnChange}
          />
          <input
            value={this.state.password}
            className={style.form_control}
            type='password'
            name='password'
            placeholder='password'
            onChange={this.handleOnChange}
          />
          <input className={style.btn} type='submit' disabled={submitted} value='Login' />
        </div>
      </form>
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
