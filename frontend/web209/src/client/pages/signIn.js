import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UserAPI } from '../../api/userAPI'

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate();
  const onSubmit = async (user) => {
    try {
      const {data}  = await UserAPI.signIn(user)
      toast.success("Đăng nhập thành công")
      navigate("/")
      console.log(data)
      localStorage.setItem("token", JSON.stringify(data))

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="bg-gradient-primary">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="user">
                      <div className="form-group">
                        <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."
                          {...register('email', { required: true })} />
                        {errors.email && <span>Không được để trống email</span>}
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password"
                          {...register("password", { required: true })} />
                        {errors.password && <span>Không được để trống password</span>}

                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input type="checkbox" className="custom-control-input" id="customCheck" />
                          <label className="custom-control-label" htmlFor="customCheck">Remember
                            Me</label>
                        </div>
                      </div>
                      <button className="btn btn-primary">Login</button>
                      <hr />
                      <a href="index.html" className="btn btn-google btn-user btn-block">
                        <i className="fab fa-google fa-fw" /> Login with Google
                      </a>

                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="forgot-password.html">Forgot Password?</a>
                    </div>
                    <div className="text-center">
                      <Link to="/signUp" className="text-decoration-none">Create an Account!</Link>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SignIn
