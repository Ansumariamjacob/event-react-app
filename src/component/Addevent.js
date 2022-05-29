import React, { useState } from 'react'

const Addevent = () => {
    var [name,setName]=useState("")
    var [date,setDate]=useState("")
    var [venue,setVenue]=useState("")
    var [organ,setOrgan]=useState("")
    var [contactno,setContactno]=useState("")
    const subData=()=>{
        const data={"name":name,"date":date,"venue":venue,"organ":organ,"contactno":contactno}
        console.log(data)
    }
  return (
    <div>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Name</label>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <input type="text" onChange={(e)=>{setName(e.target.value)}} class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Date</label>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <input type="date" onChange={(e)=>{setDate(e.target.value)}} name="" id="" class="form-label"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Venue</label>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <input type="text" class="form-control" onChange={(e)=>{setVenue(e.target.value)}}/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Organiser</label>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <input type="text" class="form-control" onChange={(e)=>{setOrgan(e.target.value)}}/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Contact number</label>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <input type="text" class="form-control" onChange={(e)=>{setContactno(e.target.value)}}/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData} class="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addevent