import { useState } from 'react';
import { useNavigate } from 'react-router-dom' ;  //To navigate the Next Page
import "../styles/RegistrationForm.css";
import RegPageImg from "../assets/RegPageImg.png";

export default function RegistrationForm(){


    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        checkbox: false,
      });
      
    const [errors , setErrors] = useState({
        name : null,
        username : null,
        email : null,
        mobile : null,
        checkbox : null,
      });

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      };
 
      const handleSignUp =() =>{

        let isErrors = false;
        if (formValues.name.trim().length === 0){
          setErrors((prev)=>({...prev , name:"name is required"}));
          isErrors = true;
        }
        else{
          setErrors((prev)=>({...prev , name:null}))
        }

        if(formValues.username.trim().length === 0){
          setErrors((prev)=>({...prev , username:"username is required"}));
          isErrors = true;
        }
        else{
          setErrors((prev)=> ({...prev , username:null}))
        }

        if(formValues.email.trim().length === 0){
          setErrors((prev)=>({...prev , email:"email is required"}));
          isErrors = true;
        }
        else{
          setErrors((prev)=>({...prev , email:null}))
        }

        if(formValues.mobile.trim().length === 0){
          setErrors((prev)=>({...prev , mobile:"mobile No. is required"}))
          isErrors = true;
        }
        else{
          setErrors((prev)=>({...prev , mobile:null}))
        }

        if(formValues.checkbox === false){
          setErrors((prev)=>({...prev , checkbox:"Please accept the Terms and Conditions"}))
          isErrors = true;
        }
        else{
          setErrors((prev)=>({...prev , checkbox:null}))
        }
        
        if( !isErrors ){
          alert("registerd succesfully")
          localStorage.setItem("userInfo",JSON.stringify(formValues));
          navigate("/Movies")
        }
      };

   

    return(

     
        <div className="registrationPage">

          
          <img src={RegPageImg} alt="Reg page image"  className="RegPageImg" />
          {/* <h2>Discover new things on Superapp</h2> */}
          
          <div className="fillUp">

         <h1>Super App</h1>
         <p className="subHead">Create your new account</p>

         <div className="toFill">

         <input type="text" value={formValues.name} onChange={handleChange} name="name" placeholder="Name"/>
        { errors.name ? <p className="errors" style={{color:"red"}}>{errors.name}</p> : <></> }

         <input type="text" placeholder="Username" value={formValues.username} onChange = {handleChange} name="username"/>
         { errors.username ? <p className="errors" style={{color:"red"}}>{errors.username}</p> : <></> }

         <input type="text" placeholder="Email" value={formValues.email} onChange = {handleChange} name="email"/>
         { errors.email ? <p className="errors" style={{color:"red"}}>{errors.email}</p> : <></> }

         <input type="text" placeholder="Mobile" value={formValues.mobile} onChange = {handleChange} name="mobile"/>
         </div>
         { errors.mobile ? <p className="errors" style={{color:"red"}}>{errors.mobile}</p> : <></> }
         <div className="checkBox">
         <input type="checkbox" id="checkbox" name="checkbox" value={formValues.checkbox} onChange={handleChange}/><label htmlFor="checkbox"> Share my registration data with Superapp </label>
         {errors.checkbox ? <p className="errors" style={{color:"red"}}>{errors.checkbox}</p> : <></>}
         </div>
         <button className="click" onClick={handleSignUp}>SIGN UP</button>
         <p className="condition">By clicking on Sign up. you agree to Superapp <p style={{color:"#72DB73"}}> Terms and Conditions of Use</p></p>
         <p className="condition">To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp<span style={{color:"#72DB73"}}>Privacy Policy</span></p>
         </div>
        </div>
    )
}