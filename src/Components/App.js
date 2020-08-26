import React from 'react';
import Todo from './todo/Todo';
import { NavLink, Switch, Route } from 'react-router-dom';
import css from './App.module.css';
import AuthForm from './auth/authForm/AuthForm';
import RegistrationForm from './auth/registrationForm/RegistrationForm';
import { signOutOperation } from '../redux/operations/authOperation';
import { connect } from 'react-redux';

const App = (props) => {
    return (
        <>
            <div className={css.navigation}>
                <ul className={css.navigationList}>
                    <li>
                        <NavLink
                            exact
                            className={css.navigationItem}
                            activeClassName={css.activeNavigationItem}
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={css.navigationItem}
                            activeClassName={css.activeNavigationItem}
                            to="/signin">
                            SignIn
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={css.navigationItem}
                            activeClassName={css.activeNavigationItem}
                            to="/signup">
                            SignUp
                        </NavLink>

                    </li>
                    <li>
                        <NavLink
                            className={css.navigationItem}
                            activeClassName={css.activeNavigationItem}
                            to="/todo">
                            Todo
                        </NavLink>
                    </li>
                </ul>
                <button type="button" onClick={props.signOutOperation} className="button">SignOut</button>
            </div>

            <div className={css.container}>
                <Switch>
                    <Route exact path="/" component={() => <h2>Home</h2>} />
                    <Route path="/signin" component={AuthForm} />
                    <Route path="/signup" component={RegistrationForm} />
                    <Route path="/todo" component={Todo} />
                </Switch>
            </div>
        </>
    );
}


export default connect(null, { signOutOperation })(App);