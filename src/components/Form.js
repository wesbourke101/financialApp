import React,{useState}from 'react'


function Form({postData}) {
    const[formData,SetFormData]=useState({
        date:"mm-dd-yyyy",
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
            <input onChange={handleChange} type="date" name ="date" placeholder="date" value={date}></input>
            <input onChange={handleChange} type="text" name ="username" placeholder="username" value={username}></input>
            <input onChange={handleChange} type="number" name ="income" placeholder="income" value={income}></input>
            <input onChange={handleChange} type="number" name ="rent" placeholder="Rent" value={rent}></input>
            <input onChange={handleChange} type="number" name ="expenses" placeholder="Expenses" value={expenses}></input>
            <input onChange={handleChange} type="number" name ="savings" placeholder="Savings" value={savings}></input>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Form