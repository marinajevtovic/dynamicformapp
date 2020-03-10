import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, Select,FormLabel,TextInput } from "@dossier/salvia-ui";

class NewModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fieldtype: "",
      description: "",
      placeholder: ""
    };
  }
  setValue(event) {
    this.setState({
      fieldtype: event.target.value
    });
  }
  handleChangePlaceholder(event) {
    this.setState({
      placeholder: event.target.value
    });
  }
  handleChangeDescription(event) {
    this.setState({
      description: event.target.value
    });
  }
  handleClick = () => {
    const { fieldtype, description, placeholder } = this.state;
    const { addField, formIndex, fieldgroupIndex, onHide } = this.props;
    addField(formIndex, fieldgroupIndex, fieldtype, description, placeholder);
    onHide();
  };

  hideModal = () => {
    const{onHide}=this.props
    onHide();
  };
  render() {
    const { show } = this.props;
    const{fieldtype}=this.state
    return (
      <>
        {show && (
          <Modal header={<>Fill Form </>} onCancel={this.hideModal.bind(this)}>
            <form>
              <br></br>
              <FormLabel>Chose type of field</FormLabel>
              <br/>
              <Select
                value={fieldtype}
                onChange={this.setValue.bind(this)}
              >
                <option value="input">Input</option>
                <option value="checkbox">Checkbox</option>
              </Select>
              <br />
              <TextInput
                placeholder="Desctiption"
                onChange={this.handleChangeDescription.bind(this)}
              ></TextInput>
              <br />
              <TextInput
                placeholder="Placeholder"
                onChange={this.handleChangePlaceholder.bind(this)}
              ></TextInput>
              <br />
              <Button
                variant="regular"
                intent="success"
                type="button"
                onClick={this.handleClick}
              >
                SAVE
              </Button>
            </form>
          </Modal>
        )
        
        }
      </>
    );
  }
}

export default connect(null, null)(NewModal);
