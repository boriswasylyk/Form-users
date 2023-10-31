import { useEffect } from "react"
import { useForm } from "react-hook-form"

const FormUsers = ({createUser, infoUpdate, updateUser, setInfoUpdate }) => {

  const {handleSubmit, register, reset} = useForm()
 
  useEffect (() => {
    reset(infoUpdate)
  }, [infoUpdate])

    const submit = data => {
      if (infoUpdate) {
        updateUser('/user', infoUpdate.id, data )
        setInfoUpdate()
      }else{
         createUser('/user', data)   
      }
       createUser('/user', data)
       reset({
         first_name: "",
         last_name: "",
         email: "",
         password: "",
        birthday: ""
       })
    }

  return (
    <form class="form" onSubmit={handleSubmit(submit)}>
      <div class="div_form">
        <label class="label_form" htmlFor="first_name">First name</label>
        <input class="input_form"  {...register('first_name')}type="text" id="first_name" placeholder="First Name"/>
      </div>
      <div class="div_form">
        <label class="label_form" htmlFor="last_name">Last name</label>
        <input class="input_form"  {...register('last_name')}type="text" id="last_name" placeholder="Last Name"/>
      </div>
      <div class="div_form" >
        <label class="label_form" htmlFor="email">Email</label>
        <input class="input_form" {...register('email')}type="email" id="email" placeholder="Email" />
      </div>
      <div class="div_form">
        <label class="label_form" htmlFor="password">Password</label>
        <input class="input_form"  {...register('password')} type="password" id="password" placeholder="Password" />
      </div>
      <div class="div_form">
        <label class="label_form" htmlFor="birthday">Birthday</label>
        <input class="input_form"  {...register('birthday')}type="date" id="birthday" placeholder="Birthday" />
      </div>
      <button class="buttom_create">{ infoUpdate ? 'Update' :'Create'}</button>
    </form>
  )
}

export default FormUsers