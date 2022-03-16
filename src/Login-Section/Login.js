import React from "react";
import "../styles.css";

const Login = () => {
  return (
    <>
      <div>
        <form class="main">
          <img src="https://blogs.tees.ac.uk/lteonline/files/2019/02/teamssocial-noresize.png" />
          <h2>Welcome to Saturn</h2>
          <p id="appear">How would you like to appear</p>
          <input type="text" placeholder="Name" />
          <input type="password" placeholder="Password" />
          <div class="checkbox">
            <label>
              <input type="checkbox" id="checkbox-main" />
              <span class="checkmark"></span>
            </label>
            <p id="sync">
              Sync outlook.com and Skype contacts to find people I know on
              Saturn. <a href="">Learn more</a>
            </p>
          </div>
          <button>Let's go</button>
          <p id="another-acc">
            <a href="">Use another account</a>
          </p>
        </form>
      </div>
    </>
  );
};
export default Login;
