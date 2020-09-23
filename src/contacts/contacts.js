import React, {Component} from "react";
import Contact from './contact.js'
import './styles.css';

const contacts = [
    {
      firstName: "Барней",
      lastName: "Стинсовський",
      phone: "+380956319521",
      gender: "male",
    },
    {
      firstName: "Робін",
      lastName: "Щербатська",
      phone: "+380931460123",
      gender: "female",
    },
    {
      firstName: "Анонімний",
      lastName: "Анонімус",
      phone: "+380666666666",
    },
    {
      firstName: "Лілія",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female",
    },
    {
      firstName: "Маршен",
      lastName: "Еріксонян",
      phone: "+380739432123",
      gender: "male",
    },
    {
      firstName: "Теодор",
      lastName: "Мотсбес",
      phone: "+380956319521",
      gender: "male",
    },
  ];
  
  
  
  class Contacts extends Component{
    state = {
      contacts: [...contacts],
      search: '',
    };
  
    handleSearchChange = (event) => {
      this.setState({
        search: event.currentTarget.value,
      });
    
    };
  
    getFilteredContacts() {
      const filterKeys = ['firstName','lastName','phone'];
  
      if (this.state.search.length) {
        return this.state.contacts.filter(contact => filterKeys.filter(key => contact[key].match(new RegExp(this.state.search.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'igm'))).length);
      } else {
        return this.state.contacts;
      }
    }
  
    render(){
      return(
        <>
          <div className="general-wrapper">
                <div className="input-wrapper">
                  <input 
                    className="input" 
                    type="text"
                    value={this.state.search}
                    placeholder="та в мене починає виходити!!!!"
                    onChange={this.handleSearchChange.bind(this)}
                  />
                </div>
                <div className="contacts-wrapper">
                 {this.getFilteredContacts().length ?
                 this.getFilteredContacts().map((contact, i) => {
                    return (          
                      <div key={i}>
                        <Contact 
                          firstName={contact.firstName}
                          lastName={contact.lastName} 
                          phone={contact.phone} 
                          gender={contact.gender}
                        />
                      </div>           
                    )
                  })
                : <div className="contacts-empty">not found</div>}
                </div>         
          </div>
        </>
      )
    }
  };
  
  export default Contacts;   