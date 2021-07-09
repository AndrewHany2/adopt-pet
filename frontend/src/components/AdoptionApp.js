import React from "react"
import { useDispatch } from 'react-redux';
import { useState,useRef } from 'react';
import { Form } from "react-bootstrap";
function AdoptionForm({history}){
    const [pet,setpet] = useState({name:"",age:0,vaccinated:"",gender:"",size:"",description:"",image:""})
    // const dispatch = useDispatch()
    const imageRef = useRef()
    const handleChange = (e)=>{
        const key = e.currentTarget.name;
        const state = {...pet}
        if(key != "image" ){
           state[key] = e.target.value
        }else{
            state[key] = e.target.files[0]
        }
        setpet(state)
    }
    let Post = ()=>{
        let formdata = new FormData()
        formdata.append("name", pet.name)
        formdata.append("age", pet.age)
        formdata.append("vaccinated",pet.vaccinated)
        formdata.append("gender",pet.gender)
        formdata.append("size",pet.size)
        formdata.append("description",pet.description)
        formdata.append("image", pet.image)

        // dispatch(creatNewUser(formdata)) 

       history.push("/") 
    
        
    }
    return(
        <section id="contactUs">
        <div className="container">
            <div className="row pb-5 m-2 mt-5">
                <div className="col-12 col-md-8 col-lg-6 m-auto contactForm">
                    <p className="h4">Send Pet!</p>
                    <form  encType="multipart/form-data">
                        <label for="name" className="d-block">Pet Name</label>
                        <input type="text" className="pb-1" name="name" required onChange={handleChange}/>
                         <div className="row">
                            <div className="col-6 col-md-7 pr-1 text-center">
                            <label for="age" className="mt-2">Age</label>
                            <input type="number" className="ml-1 mt-2" name="age" min="0" required onChange={handleChange}/>
                            </div>
                            <div className="col-6 col-md-5 pl-1 text-center">
                            <label for="vaccinat" className="mt-2">Vaccinated</label>
                            <select name="vaccinated" className="ml-1 mt-2" id="vaccinated" required onChange={handleChange}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            </div>
                         </div>
                    
                            <div className="row">
                                <div className="col-6 pr-1 text-center">
                                <label for="gender" className="ml-1 mt-2">Gender</label>
                                <select name="gender" className="ml-1 mt-2" id="gender" required onChange={handleChange}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                </div>
                                <div className="col-6  pr-1 text-center">
                                    <label for="size" className=" ml-1 mt-2">Size</label>
                                    <select name="size" className="ml-1 mt-2 " id="size" required onChange={handleChange}>
                                        <option value="small">Small</option>
                                        <option value="Medium">Medium</option>
                                        <option value="large">Large</option>
                                    </select>
                                </div>
                        </div>  

                        <label for="description" className="d-block">Description</label>
                        <textarea name="description" cols="40" rows="3" required onChange={handleChange}/>
                     
                        <Form.File id="custom-file-translate-scss"  label="Custom file input" ref={imageRef} lang="en" accept='image/*' onChange={handleChange} custom/>
                             
                        <input type="button" value="POST" onClick={Post} className="sendMessage d-block mt-3 ml-auto mr-auto px-3 py-2"/>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}
export default AdoptionForm 