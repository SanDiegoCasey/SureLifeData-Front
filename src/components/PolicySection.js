import React, { Component } from 'react';
import uuid from 'uuid';
import PoliciesSectionTitle from './PoliciesSectionTitle';
import PolicyResultContainer from './PolicyResultContainer';


class PolicySection extends Component {
  state = {
    policies: [
      { id: uuid(), company: 'bobs life'},
      { id: uuid(), company: 'mollies policies'},
      { id: uuid(), company: 'at your doorstep'}
    ]
  }

  render(){
    const { policies } = this.state;
      return(
        <section className="policies-section">
          <PoliciesSectionTitle/>
          <PolicyResultContainer/>
        </section>
    )
  }


}
export default PolicySection
