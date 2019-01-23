import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getContacts, deleteContact } from '../actions/contactActions';
import PropTypes from 'prop-types';

class ContactsResultContainer extends Component {

  componentDidMount() {
    this.props.getContacts();
  }

  onDeleteClickContact = (id) => {
    this.props.deleteContact(id)
  }

  render(){
    const {contacts} = this.props.contact;
    return(
      <section>
        <div className="contacts-container">
            <div className="contactstitle">My Contacts</div>
            <div className="policyadd"><Link to="/addcontact">Add Contact+</Link></div>
        </div>
        <div className="contacts-container-photos">
          {contacts.map(({id, img, name}) => (
            <div className="contact" key={id}>
                <div className="photo" style={{backgroundImage: `url(${img})`}}></div>
                <div className="name">{name}</div>
                <input type="button"
                  value="DELETE"
                  onClick={this.onDeleteClickContact.bind(this,id)}
                  className="deletebutton"/>
            </div>
          ))}
        </div>
      <hr/>
    </section>
    )
  }

}

ContactsResultContainer.propTypes = {
  getContacts: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  contact: state.contact
})

export default connect(mapStateToProps, { getContacts, deleteContact })(ContactsResultContainer);
