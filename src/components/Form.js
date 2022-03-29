import React,{useState}from 'react'

function Form({postData}) {
    const[formData,SetFormData]=useState({
        date:0,
        username:"",
        income:0,
        rent:0,
        expenses:0,
        savings:0,
    })

    const {date,username,income,rent,expenses,savings} = formData
  
    function handleChange(e){
        const name = e.target.name
        let value = e.target.value
        
        SetFormData({...formData,
            [name]:value
        
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        postData(formData)
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className="new-saving-form">
            <input onChange={handleChange} type="date" name ="date" placeholder="date" Value={date}></input>
            <input onChange={handleChange} type="text" name ="username" placeholder="username" Value={username}></input>
            <input onChange={handleChange} type="number" name ="income" placeholder="income" Value={income}></input>
            <input onChange={handleChange} type="number" name ="rent" placeholder="Rent" Value={rent}></input>
            <input onChange={handleChange} type="number" name ="Expenses" placeholder="Expenses" Value={expenses}></input>
            <input onChange={handleChange} type="number" name ="Savings" placeholder="Savings" Value={savings}></input>
            <input type="submit" value="New Form" />
        </form>
    </div>
  )
}

export default Form