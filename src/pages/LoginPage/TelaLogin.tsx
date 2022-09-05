import "./loginstyles.css";

const AppLogin = () => {


  return (
    <div id="login-div">
      <h1>Login de Sistema</h1>
      <form className="form"> 

        <div  className="field">
          <label htmlFor="email">User</label>
          <input type="text" name="email" id="email"></input>
        </div>  
        
        <div className="field">
          <label htmlFor="password">Password</label>
          <input typy="password" name="password" id="password"></input>
        </div>

        <div className="actions">
          <button type="submit">Login</button>
        </div>
      </form>
      
    </div>
    
  );
};


export default AppLogin; 




