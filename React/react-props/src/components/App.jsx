import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact){
    return <Card  
    key = {contact.id}
    name = {contact.name}
    imgUrl = {contact.imgURL}
    phone = {contact.phone}
    email = {contact.email}
    />
}


function App() { 
 return (
    <div>
    <h1 className="heading">My Contacts</h1>
    {contacts.map(createCard)}

    {/* <Card 
    name= {contacts[0].name}
    imgUrl ={contacts[0].imgURL}
    phone = {contacts[0].phone}
    email = {contacts[0].email}
    />
    
    <Card 
    name= {contacts[1].name}
    imgUrl ={contacts[1].imgURL}
    phone = {contacts[1].phone}
    email = {contacts[1].email}
    />
    
    <Card 
    name= {contacts[2].name}
    imgUrl ={contacts[2].imgURL}
    phone = {contacts[2].phone}
    email = {contacts[2].email}
    /> */}
    
    </div>
 )
}       

export default App;
