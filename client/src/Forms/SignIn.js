import { useEffect } from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom"


function SignUpIn(){

    const [userData, setUserData] = useState({
        email: '',
        password: '',
      });   

      useEffect(()=>{
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (storedData) {
            setUserData(storedData)
        }
      }, [])

      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        localStorage.setItem('userData', JSON.stringify({...userData, [name]: value}))
      };

      const navigate = useNavigate()

      const handleSubmit = (e) => {
        e.preventDefault();
        // You can do something with the userData object, like sending it to a server or logging it
        console.log(userData);
        alert(`${userData.email} login`)
        
      };

      const signUp = ()=> {
        navigate('/signup')
      }

    return(
        <>
        <div className="container">
            <form onSubmit={handleSubmit}>
            
                <div className="form-title">
                    <h2>ALUMNI AVENUE</h2>
                </div>
                <div className="input-group">
                    <label>Enter your Email</label>
                    <input
                    required
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                     />
                </div>
                <div className="input-group">
                    <label>Enter your Password</label>
                    <input
                    required
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    pattern="^(?=.*[A-Z])(?=.*\D)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                    title="Password must be atleast 8 characters and include one uppercase letter, one digit and one special character"
                     />
                </div>
                <div className="input-group">
                    <button className="btn">Sign In</button>
                </div>
                <div className="prompt">
                  <p>Don't have an account? <button onClick={signUp}>Sign Up</button></p>
                  <p><a href="/">Forgot Password?</a></p>
                </div>
            </form>
            </div>
        </>
    )
}


export default SignUpIn