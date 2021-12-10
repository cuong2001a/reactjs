import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { UserAPI } from '../../api/userAPI'
const SignUp = () => {
  const { handleSubmit, register, formState: { errors } } = useForm()
  const [user, setUser] = useState({})
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    try {
      await UserAPI.signUp(data)
      toast.success("đăng kí thành công")
      navigate("/")
    } catch (error) {
      console.log(error)
      toast.error("Đăng kí thất bại")
    }


  }
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image" />
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="user">
                    <div className="form-group ">
                      <label>Tên người dùng</label>
                      <input type="text" className="form-control form-control-user w-75" id="exampleLastName" placeholder="Full Name"
                        {...register('name', { required: true })} />
                      {errors.name && <span>Không được để trống tên đăng nhập</span>}
                    </div>

                    <div className="form-group">
                      <label>Email </label>
                      <input type="email" className="form-control form-control-user w-75 " id="exampleInputEmail" placeholder="Email "
                        {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                      {errors.email && <span>Không được để trống email</span>}
                    </div>
                    <div className="form-group ">
                      <label>Mật khẩu</label>
                      <input type="password" className="form-control form-control-user w-75 " id="exampleInputPassword" placeholder="Password"
                        {...register('password', { required: true })} />
                      {errors.password && <span className="">Không được để trống mật khẩu</span>}

                      {/* <div className="col-sm-6">
                        <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password" />
                      </div> */}
                    </div>
                    <div className="w-75 form-group">
                      <button className="btn btn-primary ">Đăng kí</button>
                      <a href="index.html" className="btn btn-google btn-user float-end">
                        <i className="fab fa-google fa-fw" /> Register with Google
                      </a>
                    </div>



                  </form>
                  <hr />
                  <div className="text-center">
                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                  </div>
                  <div className="text-center">
                    <span> Bạn đã có tài khoản ?  <a className="small text-decoration-none" href="login.html"> Đăng nhập tại đây!</a> </span>
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

export default SignUp
