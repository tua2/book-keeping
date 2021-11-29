import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { updateUser } from '../../redux/actions/users/usersAction';

const UpdateProfile = () => {
    //pre populate the existing user from store
const userLogin=useSelector(state=>state.userLogin);
const{userInfo}=userLogin;
console.log(userInfo);
const dispatch=useDispatch();
const[name, setName] = useState('');
const[email, setEmail] = useState('');
const[password, setPassword] = useState('');

const updatedUser=useSelector(state=>state.updatedUser);
const {user, loading, success, error}=updatedUser;

//Dispatch Action
const formSubmitHandler=e=>{
    e.preventDefault();
    //dispatch action here
    dispatch(updateUser(name, email, password));
};

    return (
        <div className='row container-height' >
            <div className='col-lg-6 col-md-6 m-auto'>
                <div className='container'>
                    {error&&<h1>{error}</h1>}

                    {loading&&<h1>Loading ...</h1>}
                    <h1 className='text-center'> Update </h1>
                    <form>
                        <fieldset>
                            <div className='form-group'>
                                <label htmlFor='exampleInputEmail1'> Name </label>
                                < input 
                                value={name}
                                onChange={e=>setName(e.target.value)}
                                type='text'
                                    className='form-control'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    placeholder='Enter Name'
                                />
                            </div >
                            <div className='form-group'>
                                <label htmlFor='exampleInputEmail1'> Email address </label>
                                < input
                                 value={email}
                                 onChange={e=>setEmail(e.target.value)}
                                  type='text'
                                    className='form-control'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    placeholder='Enter Name'
                                />
                            </div >
                            < div className='form-group'>
                                <label htmlFor='exampleInputPassword1'> Password </label>
                                <input
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                                    type='password'
                                    className='form-control'
                                    id='exampleInputPassword1'
                                    placeholder='Password' />
                            </div>
                            < button type='submit'
                                className='btn btn-primary m-auto'> Update your profile</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default UpdateProfile;