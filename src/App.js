import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <container>
    <div className="container">
<h1>Create your account</h1>
<form>
<div className="form-group">
<label for="name">Username:  </label>
<br></br>
<input type="text" className="form-control" id="username"/>
</div> 
<br></br>
<div className="form-group">
<label for="email">Email address:  </label>
<br></br>
<input type="email" className="form-control" id="email" placeholder="name@example.com"/>
</div>
<br></br>
<div className="form-group">
<label for="email">Password: </label>
<br></br>
<input type="password" className="form-control" id="pwd" placeholder="********"/>
</div>
<br></br>
<button type="submit"class="btnbtn-default">Submit</button>
</form>
</div>
</container>
 
  );
}

export default App;
