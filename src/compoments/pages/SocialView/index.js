import React, { Component } from 'react'
import BoxeMain  from '../../BoxeMain'
import Header from './Header'
import PeopleRight from './PeopleRight'
import MainCenter from './MainCenter'
import NoticiasLeft from './NoticiasLeft'

class SocialView  extends Component {
    render() {
      return (
                    <BoxMain>
                              <Header />
                              <PeopleRight />
                              <MainCenter />
                              <NoticiasLeft />
      
                    </BoxMain>
      )
    }
  }
  
  export default SocialView
  