import { useState } from "react";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../Constats/Constats";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const dispatch = useDispatch();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const navigate = useNavigate()

  const handleSetUser = async () => {

    setUsername('')
    setPassword('')

    const body = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post(`${BASE_URL}/admin/adminLogin`,body);

      
      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title:'completed!',
          text: "You logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
            dispatch({ type: "SET_USER", payload: { username: username } });
            navigate('/admin')
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "invalid username or password",
          text:"please enter valid username and password",
          showConfirmButton: true,
        });
      }
    } catch (error) {
        console.log(error);
        
        Swal.fire({
            icon: "error",
            title: "invalid username or password",
            text:"please enter valid username and password",
            showConfirmButton: true,
          });
    }
  };

  return (
    <section className="grid text-center h-screen items-center p-8">
      <div>
      <div className="w-full webkit-center">
      <img className="w-24 h-24 mb-4" src="/images/logo.png"></img>
      </div>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Sign In
        </Typography>
        <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
          Enter your username and password to sign in
        </Typography>
        <form action="#" className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Username
              </Typography>
            </label>
            <Input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="username"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Password
              </Typography>
            </label>
            <Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              size="lg"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
            />
          </div>
          <Button
            onClick={() => {
              handleSetUser();
            }}
            color="gray"
            size="lg"
            className="mt-6"
            fullWidth
          >
            sign in
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Login;
