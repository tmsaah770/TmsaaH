import '../Auth/Auth.css' 
import bg from '../../assets/Timzee_(password_buddha)__archive/Bg1full.jpg'
import { TextField } from '@mui/material'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../../Zustand/AuthSlice'
import { useNavigate } from 'react-router-dom'
import LoginSchema from '../../Validation/loginSchema'




export default function Login() {
    const LoginHandle = useAuth( s => s.LoginHandle )

    const { register , handleSubmit , formState : {errors , isDirty , isValid} } = useForm({
        resolver : zodResolver(LoginSchema),
        mode : 'all'
    })
    const navigate = useNavigate()
    const FormSubmet = async(data)=>{
    const res = await LoginHandle(data);
        if( res.success ){
             navigate('/')
            console.log('succsess');
            
        }else{
            
        }
        
    }


  return (
    <div className='Auth bg-[#030d1d] relative min-h-[90vh] flex items-center justify-center py-20 px-4'>
      <img src={bg} alt="" className='absolute inset-0 w-full h-full object-cover -z-10 opacity-40' />
      <div className="absolute inset-0 bg-[#030d1d]/85 -z-10"></div>
      
      <div className="w-full max-w-md mx-auto flex flex-col items-center gap-8">
         <p className='text-4xl font-black text-(--main-color) text-center'> LOGIN <span className='text-white'> NOW ... </span></p>
         <div className="reg bg-[#0e1d55]/50 backdrop-blur-md flex flex-col items-center justify-center gap-6 py-8 px-6 md:px-10 shadow-lg shadow-black rounded-xl w-full border border-gray-700">
                <p className=' text-lg text-white text-center font-bold px-2'>WELCOME ... ENTER YOUR DATA </p>
            <form onSubmit={handleSubmit(FormSubmet)}
             className='py-2 flex flex-col items-center justify-center gap-4 w-full '>
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
                  <button disabled = {!isDirty || !isValid}
                   className=' py-2 w-[120px] text-xl mt-5 text-white border-2 border-white rounded-xl cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed  '> Confirm </button>
            </form>
         </div>
      </div>
    </div>
  )
}
