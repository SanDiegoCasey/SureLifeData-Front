import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPolicy } from '../actions/policyActions';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import uuid from 'uuid';

class PolicyModal extends Component {
  state = {
    modal: false,
    company: '',
    typeofins: '',
    policynum: '',
    contactnum: '',
    dollarvalue: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChangeCompany = (e) => {
    this.setState({[e.target.company]: e.target.value})
  }

  onChangeTypeOfIns = (e) => {
    this.setState({[e.target.typeofins]: e.target.value})
  }

  onChangePolicyNum = (e) => {
    this.setState({[e.target.policynum]: e.target.value})
  }

  onChangeContactNum = (e) => {
    this.setState({[e.target.contactnum]: e.target.value})
  }

  onChangeDollarValue = (e) => {
    this.setState({[e.target.dollarvalue]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newPolicy = {
      id: uuid(),
      company: this.state.company,
      typeofins: this.state.typeofins,
      policynum: this.state.policynum,
      contactnum: this.state.contactnum,
      dollarvalue: this.state.dollarvalue
    }
    // Add polciy via addPolciyAction
    this.props.addPolicy(newPolicy);

    // Close Modal
    this.toggle();
  }

  render(){
    return(
      <div>
        <Button
          onClick={this.toggle}
          >Add Policy</Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            >
            <ModalHeader toggle={this.toggle}>
              Add a policy
            </ModalHeader>
            <ModalBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="company">Company</Label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Add name of company"
                    onChange={this.onChange}
                    />
                </FormGroup>

                <FormGroup>
                  <Label for="typeofins">Type of Insurance</Label>
                  <input
                    type="text"
                    name="typeofins"
                    id="typeofins"
                    placeholder="Add type, Term, Whole, Dissability"
                    onChange={this.onChange}
                    />
                </FormGroup>

                <FormGroup>
                  <Label for="policynum">Policy Number</Label>
                  <input
                    type="text"
                    name="policynum"
                    id="policynum"
                    placeholder="Add Policy Number"
                    onChange={this.onChange}
                    />
                </FormGroup>

                <FormGroup>
                  <Label for="contactnum">Contact Number</Label>
                  <input
                    type="text"
                    name="contactnum"
                    id="contactnum"
                    placeholder="Add contact phone number"
                    onChange={this.onChange}
                    />
                </FormGroup>

                <FormGroup>
                  <Label for="dollarvalue">|Value of Policy</Label>
                  <input
                    type="text"
                    name="dollarvalue"
                    id="dollarvalue"
                    placeholder="Add Value of policy in $"
                    onChange={this.onChange}
                    />
                </FormGroup>

                <Button
                  block
                  >Add Policy
                </Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      )
  }

}

const mapStateToProps = state => ({
  policy: state.policy
})

export default connect(mapStateToProps, {addPolicy})(PolicyModal)