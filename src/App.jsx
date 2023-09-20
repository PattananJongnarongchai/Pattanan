import { useState , useEffect } from 'react'
import './App.css'
import FormInput from './components/Forminput';
import FormTextarea from './components/FormTextarea';




function App() {
  const initialValues = { name: "", email: "", password: "", address: "", gender: "", tel: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "name is required!";
    }
    
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.tel) {
      errors.tel = "tel is required!";
    }
    if (!values.address) {
      errors.address = "address is required!";
    }
    if (!values.gender) {
      errors.gender = "gender is required!";
    }
    return errors;
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors , formValues , isSubmit]);
  };
  return (
    <div className="form-group">
      
      <form onSubmit={handleSubmit} >
        <FormInput
        class="Input"
          label="Name"
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          error={formErrors.name}
        />
        <FormInput
          label="Email"
          type="Email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          error={formErrors.email}/>
        <FormInput
        label="Password"
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
        error={formErrors.password}/>
        <FormInput
          label="Tel"
          type="tel"
          name="tel"
          value={formValues.tel}
          onChange={handleChange}
          error={formErrors.tel}/>
          
        <FormTextarea
          label="Address"
          type="address"
          name="address"
          value={formValues.address}
          onChange={handleChange}
          error={formErrors.address}/>
          <label>Gender</label>
       <select 
          
          name="gender"
          value={formValues.gender}
          onChange={handleChange}
          className={`form-control ${formErrors.gender ? 'is-invalid' : ''}`}
          
       >
          <option value="" disabled>-- Select Gender --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {formErrors.gender && <div className="invalid-feedback">{formErrors.gender}</div>}

        
            
            
        
        <br /><button type='submit' className='btn btn-primary' style={{border: '1px solid rgb(24, 127, 196)',
        width: '300px',
        height: '34px'}}>Submit</button>        
       </form>
           {Object.keys(formValues).length > 0 && isSubmit && (
        <div className="submitted-data">
          <pre>{JSON.stringify(formValues, null, 2)}</pre>
        </div>
      )}
        </div>
      
  )
          
  }
export default App
