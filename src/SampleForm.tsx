import './SampleForm.css'; 
import {useState} from "react"; 
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";



//import {validateEmail} from "../src/utils";
 
const PasswordErrorMessage = () => { 
 return ( 
   <p className="FieldError">Password should have at least 8 characters</p> 
 ); 
}; 
 
function SampleForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const previousData = location.state;

    const [firstName, setFirstName] = useState(previousData?.firstName || "");
    const [lastName, setLastName] = useState(previousData?.lastName || "");
    const [email, setEmail] = useState(previousData?.email || "");
    const [password, setPassword] = useState({
        value: previousData?.password || "",
        isTouched: false,
    });
    const [role, setRole] = useState(previousData?.role || "role");

    const getIsFormValid = () => { 
    return ( 
        firstName && 
        //validateEmail(email) && 
        password.value.length >= 8 && 
        role !== "role" 
    ); 
    }; 
    
    const clearForm = () => { 
        setFirstName(""); 
        setLastName(""); 
        setEmail(""); 
        setPassword({ 
            value: "", 
            isTouched: false, 
        }); 
        setRole("role"); 
    }; 
    
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        //alert("Account created!"); 
        const formData = {
            firstName,
            lastName,
            email,
            password: password.value,
            role,
        };
        // Formデータを state に渡して遷移
        navigate("/generateai", { state: formData });
        clearForm(); 
    }; 
 
    return ( 
        <div className="App h-screen w-screen flex justify-center items-center"> 
            <form onSubmit={handleSubmit}> 
            <fieldset> 
                <h2>Sign Up</h2> 
                <div className="Field"> 
                <label> 
                    First name <sup>*</sup> 
                </label> 
                <input 
                    value={firstName} 
                    onChange={(e) => { 
                    setFirstName(e.target.value); 
                    }} 
                    placeholder="First name" 
                /> 
                </div> 
                <div className="Field"> 
                <label>Last name</label> 
                <input 
                    value={lastName} 
                    onChange={(e) => { 
                    setLastName(e.target.value); 
                    }} 
                    placeholder="Last name" 
                /> 
                </div> 
                <div className="Field"> 
                <label> 
                    Email address <sup>*</sup> 
                </label> 
                <input 
                    value={email} 
                    onChange={(e) => { 
                    setEmail(e.target.value); 
                    }} 
                    placeholder="Email address" 
                /> 
                </div> 
                <div className="Field"> 
                <label> 
                    Password <sup>*</sup> 
                </label> 
                <input 
                    value={password.value} 
                    type="password" 
                    onChange={(e) => { 
                    setPassword({ ...password, value: e.target.value }); 
                    }} 
                    onBlur={() => { 
                    setPassword({ ...password, isTouched: true }); 
                    }} 
                    placeholder="Password" 
                /> 
                {password.isTouched && password.value.length < 8 ? ( 
                    <PasswordErrorMessage /> 
                ) : null} 
                </div> 
                <div className="Field"> 
                <label> 
                    Role <sup>*</sup> 
                </label> 
                <select value={role} onChange={(e) => setRole(e.target.value)}> 
                    <option value="role">Role</option> 
                    <option value="individual">Individual</option> 
                    <option value="business">Business</option> 
                </select> 
                </div> 
                <button type="submit" disabled={!getIsFormValid()}> 
                Create account 
                </button> 
            </fieldset> 
            </form> 
        </div> 
    );
}

export default SampleForm; 