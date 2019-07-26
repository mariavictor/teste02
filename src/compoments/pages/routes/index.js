import React, { Component, Fragment } from 'react'
import { HashRouter as MainRouter, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'


import SocialView  from '../SocialView/MainSocial'

class Router extends Component {
    render() {
        return (
            <Fragment>
                    <MainRouter>
                               <Route render={({ location}) =>(
                                   <TransitionGroup>
                                     <CSSTransition timeout={1000} className="page" key={location.pathname}>
                                                             <Switch location={location}>
                                                                            <Route exact path="/" component={SocialView}/>

                                                             </Switch>

                                        </CSSTransition>
                                   </TransitionGroup>
                               )}/>
                    </MainRouter>
            </Fragment>

        )
    }
}

export default Router