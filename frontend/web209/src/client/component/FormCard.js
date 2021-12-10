import React from 'react'
import { useForm } from 'react-hook-form'
const FormCard = (props) => {
    const { handleSubmit, register, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        props.formCallBack(data)
    }
    return (
        <div>
            <div className="profile-user">
                <h2 className="text-title text-danger text-center">2. Thông tin khác hàng</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="input-group mb-3 row">
                        <div class="col input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping"><i class="fas fa-user-circle"></i></span>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"
                                {...register('name', { required: true })} />
                            {errors.name && <span>Không được để trống tên user</span>}
                        </div>
                        <div className="col input-group">
                            <span className="input-group-text" id="basic-addon1"><i class="far fa-envelope"></i></span>
                            <input type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"
                                {...register('email', { required: true })} />
                            {errors.email && <span>Không được để trống email</span>}
                        </div>
                        <div className="col input-group">
                            <span className="input-group-text" id="basic-addon1"><i class="fas fa-phone-alt"></i></span>
                            <input type="text" className="form-control" placeholder="Số điện thoại" aria-label="Username" aria-describedby="basic-addon1"
                                {...register('tel', { required: true })} />
                            {errors.tel && <span>Không được để trống số điện thoại</span>}
                        </div>
                    </div>
                    <div class="input-group mb-3 row">
                        <div class="col input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping"><i class="fas fa-map-marker-alt"></i></span>
                            <input type="text" class="form-control" placeholder="Địa chỉ nhận hàng" aria-label="Username" aria-describedby="addon-wrapping"
                                {...register('address', { required: true })} />
                            {errors.address && <span>Không được để trống số điện thoại</span>}
                        </div>
                    </div>
                    <div className="shipping">
                        <h2 className="text-title text-danger text-center">3. Phương thức thanh toán</h2>
                        <div className="row">
                            <div class="form-check col text-center">
                                <img src="https://aobongda.net/Themes/Theme01/Assets/css/images/payment-COD.png" /> <br />
                                <input class="form-check-input" value="Giả tiền khi nhận hàng" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                    {...register("shipping")} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Giao hàng tận nơi
                                </label>
                            </div>
                            <div class="form-check col text-center">
                                <img src="https://aobongda.net/Themes/Theme01/Assets/css/images/payment-ChuyenKhoan.png" /> <br />
                                <input class="form-check-input" value="Thanh toán bằng tài khoản ngân hàng" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                    {...register("shipping")} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Thanh toán qua thẻ ngân hàng
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-danger">Hoàn tất</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default FormCard