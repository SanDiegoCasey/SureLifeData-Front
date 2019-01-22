import React, { Component } from 'react';
import uuid from 'uuid';
import { Link } from 'react-router-dom';

class ContactsResultContainer extends Component {

  state = {
    contacts: [
      {id: uuid(),
        img: './square-man1.jpg',
        name: 'John Smith'
      },
      {
        id: uuid(),
        img: './square-man2.jpg',
        name: 'Joe Smith'
      },
      {
        id: uuid(),
        img: './square-woman.jpg',
        name: 'Jane Smith'
      }
    ]

  }

  render(){
    const {contacts} = this.state;
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
                <div className="deletebutton"><Link to="/delete">DELETE</Link></div>
            </div>
          ))}
        </div>
      <hr/>
    </section>
    )
  }

}

export default ContactsResultContainer
