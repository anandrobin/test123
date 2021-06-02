import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';


import { userService, alertService } from '@/_services';

function AddEdit({ history, match }) {
    const { id } = match.params;
    const isAddMode = !id;
    const { path } = match;
    
    // form validation rules 
    const validationSchema = Yup.object().shape({
       
        name: Yup.string()
            .required('Product Name is required'),
        conf: Yup.string()
            .required('Configuration is required'),
        
        quantity: Yup.number()
            .required('Quantity is required'),
       location: Yup.string()
        .required('Location is required')
       
        
    });

    // functions to build form returned by useForm() hook
    const { register, handleSubmit, reset, setValue, errors, formState } = useForm({
        resolver: yupResolver(validationSchema)
    });

    function onSubmit(data) {
        return isAddMode
            ? createUser(data)
            : updateUser(id, data);
    }

    function createUser(data) {
        return userService.create(data)
            .then(() => {
                alertService.success('Product added', { keepAfterRouteChange: true });
                history.push('.');
            })
            .catch(alertService.error);
    }

    function updateUser(id, data) {
        return userService.update(id, data)
            .then(() => {
                alertService.success('Product updated', { keepAfterRouteChange: true });
                history.push('..');
            })
            .catch(alertService.error);
    }

    const [user, setUser] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (!isAddMode) {
            // get user and set form fields
            userService.getById(id).then(user => {
                const fields = [ 'name', 'conf', 'quantity', 'location'];
                fields.forEach(field => setValue(field, user[field]));
                setUser(user);
            });
        }
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
            <h1>{isAddMode ? 'Add Order' : 'Edit Order'}</h1>
            
            <div className="form-row">
                {/* <div className="form-group col">
                    <label>Title</label>
                    <select name="title" ref={register} className={`form-control ${errors.title ? 'is-invalid' : ''}`}>
                        <option value=""></option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Ms">Ms</option>
                    </select>
                    <div className="invalid-feedback">{errors.title?.message}</div>
                </div> */}
                <div className="form-group col-5">
                    <label>Product-Name</label>
                    <input name="name" type="text" ref={register} className={`form-control ${errors.name? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.name?.message}</div>
                </div>
                {/* <div className="form-group col-5">
                    <label>Last Name</label>
                    <input name="lastName" type="text" ref={register} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.lastName?.message}</div>
                </div> */}
            </div>
            <div className="form-row">
                <div className="form-group col-7">
                    <label>Configuration</label>
                    <input name="conf" type="text" ref={register} className={`form-control ${errors.conf ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.conf?.message}</div>
                </div>

                
                {/* <div className="form-group col">
                    <label>Phone</label>
                    <input name="phone" type="text" ref={register} className={`form-control ${errors.phone ? 'is-invalid' : ''}`}/>
                   
                </div> */}


                {/* <div className="form-group col">
                    <label>Country</label>
                    <select name="role" ref={register} className={`form-control ${errors.role ? 'is-invalid' : ''}`}>
                        <option value=""></option>
                        <option value="Australia">Australia</option>
                        <option value="Belgium">Belgium</option>
                        <option value="China/HongKong">China/HongKong</option>
                        <option value="England">England</option>
                        <option value="Japan">Japan</option>
                        <option value="NewZealand">New Zealand</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="UnitedStates">United States</option>
                        <option value="Italy">Italy</option>
                    </select>
                    <div className="invalid-feedback">{errors.role?.message}</div>
                </div> */}
            </div>

            <div className="form-row">
                <div className="form-group col-7">
                    <label>Quantity</label>
                    <input name="quantity" type="text" ref={register} className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}/>
                </div>
            

               
                {/* <div className="form-group col">
                    <label>Address</label>
                    <input name="address" type="text" ref={register} className={`form-control ${errors.address ? 'is-invalid' : ''}`}/>
                 </div> */}
                 </div>  


            <div className="form-row">
                <div className="form-group col-7">
                    <label>Storage-Location</label>
                    <input name="location" type="text" ref={register} className={`form-control ${errors.location? 'is-invalid' : ''}`}/>
                </div>
            

               
                {/* <div className="form-group col">
                    <label>End-Date</label>
                    <input name="endDate" type="date" ref={register} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}/>
                 </div> */}
                 </div>  


                 <div className="form-row">
                 {/* <div className="form-group col">
                    <label>Type</label>
                    <select name="type" ref={register} className={`form-control ${errors.type ? 'is-invalid' : ''}`}>
                        <option value=""></option>
                        <option value="Delivery">Delivery</option>
                        <option value="Pickup">Pickup</option>
                        
                    </select>
                 </div> */}
                 
                 {/* <button type="button" onClick={products} className="btn btn-primary"> */}

                 {/* </button> */}
                 </div>  
            
            {/* {!isAddMode &&
            


            <Link to='users/add/product' className="btn btn-sm btn-success mb-2">Choose Product</Link>
                
            }

            {isAddMode &&
            
            <Link to={`${path}/product`} className="btn btn-sm btn-success mb-2"> Choose Product</Link>
                
            } */}

            <div className="form-group">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Save
                </button>
                <Link to={isAddMode ? '.' : '..'} className="btn btn-link">Cancel</Link>
            </div>
        </form>
    );
}

export { AddEdit };