import '../Auth/Auth.css' 
import bg from '../../assets/Timzee_(password_buddha)__archive/Bg1full.jpg'
import { TextField } from '@mui/material'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import RegisterSchema from '../../Validation/regesterSchema'
import { useAuth } from '../../Zustand/AuthSlice'
import { useNavigate } from 'react-router-dom'



export default function Rejester() {
    const RegisterHandle = useAuth( s => s.RegisterHandle )

    const { register , handleSubmit , formState : {errors , isDirty , isValid} } = useForm({
        resolver : zodResolver(RegisterSchema),
        mode : 'all'
    })
    const navigate = useNavigate()
    const FormSubmet = async(data)=>{
    const res = await RegisterHandle(data);
        if( res.success ){
             navigate('/')
        }else{
            
        }
        
    }


  return (
    <div className='Auth bg-[#030d1d] relative min-h-[95vh] flex items-center justify-center py-20 px-4'>
      <img src={bg} alt="" className='absolute inset-0 w-full h-full object-cover -z-10 opacity-40' />
      <div className="absolute inset-0 bg-[#030d1d]/85 -z-10"></div>
      
      <div className="w-full max-w-md mx-auto flex flex-col items-center gap-8">
         <p className='text-4xl font-black text-(--main-color) text-center'> REGISTER <span className='text-white'> NOW ... </span></p>
         <div className="reg bg-[#0e1d55]/50 backdrop-blur-md flex flex-col items-center justify-center gap-6 py-8 px-6 md:px-10 shadow-lg shadow-black rounded-xl w-full border border-gray-700">
                <p className=' text-lg text-white text-center font-bold px-2'> ENTER YOUR DATA </p>
            <form onSubmit={handleSubmit(FormSubmet)}
             className='py-2 flex flex-col items-center justify-center gap-4 w-full '>
                <TextField id="filled-basic" label="First Name" variant="filled"
                type='text' error= {!!errors.FirstName} { ...register('FirstName') } helperText = {errors.FirstName?.message}
                   sx={{
    width: "100%",
    maxWidth: "300px",
    "& .MuiFilledInput-input": {
      color: "#fff",
    },
    "& .MuiFilledInput-root": {
      color: "#fff",
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:hover:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#fff",
    },
                  }}/>
                <TextField id="filled-basic" label="Last Name" variant="filled"
                type='text' error= {!!errors.LastName} { ...register('LastName') } helperText = {errors.LastName?.message}
                   sx={{
    width: "100%",
    maxWidth: "300px",
    "& .MuiFilledInput-input": {
      color: "#fff",
    },
    "& .MuiFilledInput-root": {
      color: "#fff",
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:hover:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#fff",
    },
                  }}/>
                <TextField id="filled-basic" label="Phone Number" variant="filled"
                type='number' error= {!!errors.PhoneNumber} { ...register('PhoneNumber') } helperText = {errors.PhoneNumber?.message}
                   sx={{
    width: "100%",
    maxWidth: "300px",
    "& .MuiFilledInput-input": {
      color: "#fff",
    },
    "& .MuiFilledInput-root": {
      color: "#fff",
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:hover:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#fff",
    },
                  }}/>
                <TextField id="filled-basic" label="Email" variant="filled"
                type='email' error= {!!errors.Email} { ...register('Email') } helperText = {errors.Email?.message}
                   sx={{
    width: "100%",
    maxWidth: "300px",
    "& .MuiFilledInput-input": {
      color: "#fff",
    },
    "& .MuiFilledInput-root": {
      color: "#fff",
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:hover:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#fff",
    },
                  }}/>
                <TextField id="filled-basic" label="Password" variant="filled"
                type='password' error= {!!errors.Password} { ...register('Password') } helperText = {errors.Password?.message}
                
                   sx={{
    width: "100%",
    maxWidth: "300px",
    "& .MuiFilledInput-input": {
      color: "#fff",
    },
    "& .MuiFilledInput-root": {
      color: "#fff",
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:hover:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#fff",
    },
                  }}/>
                <TextField id="filled-basic" label="Confirm Password" variant="filled"
                type='password' error= {!!errors.ConfirmPassword} { ...register('ConfirmPassword') }
                helperText = {errors.ConfirmPassword?.message}
                   sx={{
    width: "100%",
    maxWidth: "300px",
    "& .MuiFilledInput-input": {
      color: "#fff",
    },
    "& .MuiFilledInput-root": {
      color: "#fff",
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:hover:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#fff",
    },
                  }}/>
                  <button disabled = {!isDirty || !isValid}
                   className=' py-2 w-[120px] text-xl mt-5 text-white border-2 border-white rounded-xl cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed  '> Confirm </button>
            </form>
         </div>
      </div>
    </div>
  )
}
