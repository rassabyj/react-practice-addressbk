import React, { useState } from 'react'



const AddressForm = () => {
    let [ addressList, setAddressList] = React.useState("")
    let [ firstName, setFirstName] = React.useState("")
    let [ lastName, setLastName] = React.useState("")
    let [ phone, setPhone] = React.useState("")


    let handleSubmit = (e) => {
        e.preventDefault()
       let newAddress = {
            firstName: firstName,
            lastName:  lastName,
            phone: phone
        }
        setAddressList = [...addressList, newAddress]
    }

    let handleFirstName = (e) => {
        setFirstName = e.target.value
    }
    let handleLastName = (e) => {
        setLastName = e.target.value
    }
    let handlePhone = (e) => {
        setPhone = e.target.value
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                
            <input 
                type="text" 
                name="firstName"
                onChange={handleFirstName}
                placeholder="First Name" ></input>
            <input 
                type="text" 
                name="lastName"
                onChange={handleLastName}
                placeholder="Last Name" ></input>
            <input 
                type="tel" 
                name="phone"
                onChange={handlePhone}
                placeholder="Phone number" ></input>
                <br />
            <button type="submit">Submit</button>
            </form>

            {addressList ? 
            (addressList.map(address => {
                <div>
                    <p>{address.firstName}</p>
                    <p>{address.lastName}</p>
                    <p>{address.phone}</p>
                    </div>)
                    :
                    null
            })}
        </div>
    )
}

export default AddressForm
