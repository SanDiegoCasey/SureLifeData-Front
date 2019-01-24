import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContacts, deleteContact, addContact } from '../actions/contactActions';
import PropTypes from 'prop-types';
import ContactModal from '../components/ContactModal.js';

class ContactsResultContainer extends Component {

  componentDidMount() {
    this.props.getContacts();
  }

  onDeleteClickContact = (id) => {
    this.props.deleteContact(id)
  }

  render(){
    const { contacts } = this.props.contact;
    return(
      <section>
        <div className="contacts-container">
            <div className="contactstitle">My Contacts</div>
            <ContactModal/>
        </div>
        <div className="contacts-container-photos">
          {contacts.map(({id, name, img}) => (
            <div className="contact" key={id}>
                <div className="photo" style={{backgroundImage: `url(${img})`}}></div>
                <div className="name">{name}</div>
                <div className="name">{img}</div>
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

export default connect(mapStateToProps, { getContacts, deleteContact, addContact })(ContactsResultContainer);
