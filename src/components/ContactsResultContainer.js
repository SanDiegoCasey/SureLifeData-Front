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
    console.log(this);
    const { items } = this.props.contact;
    return(
      <section>
        <div className="contacts-container">
            <div className="contactstitle">My Contacts</div>
            <ContactModal/>
        </div>
        <div className="contacts-container-photos">
          {items.map(({_id, name, email, img}) => (
            <div className="contact" key={_id}>
                <div className="photo" style={{backgroundImage: `url(${img})`
              , backgroundSize: 'cover',
            overflow: 'hidden'}}></div>
                <div className="name">{name}</div>
                <div className="name">{email}</div>
                <input type="button"
                  value="DELETE"
                  onClick={this.onDeleteClickContact.bind(this,_id)}
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
