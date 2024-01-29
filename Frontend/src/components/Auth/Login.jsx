import { useState } from "react"
import "./Auth.css"
import { message } from "antd"
import { useNavigate } from "react-router-dom"
const Login = () => {

  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setFormData({...formdata, [name]: value})
  }


  const handleLogin = async (e)=>{
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/api/auth/login`,
      {method: "POST", headers:{"Content-type": "application/json"},
      body: JSON.stringify(formdata)});

      if(response.ok){
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));
        if(data.role === "admin"){
          window.location.href = "/admin";
        }else{
          navigate("/");
        }
        console.log(data);
        message.success("Giriş başarılı.")
        navigate("/")
      }else{
        message.error("Giriş Başarısız.")
      }

      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="account-column">
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <div>
        <label>
          <span>
            {" "}
            Username or email addresss{" "}
            <span className="required">*</span>
          </span>
          <input type="text" name="email"  onChange={handleInputChange}/>
        </label>
      </div>
      <div>
        <label>
          <span>
            {" "}
            Password <span className="required">*</span>
          </span>
          <input type="password" name = "password"  onChange={handleInputChange}/>
        </label>
      </div>
      <p className="remember">
        <label>
          <input type="checkbox" />
          <span>Remember me</span>
        </label>
        <button className="btn btn-sm">Login</button>
      </p>
      <a href="#" className="form-link">
        Lost your password ?
      </a>
    </form>
  </div>
  )
}

export default Login