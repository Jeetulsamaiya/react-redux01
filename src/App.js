import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount} from "./Store/features/CounterSlice";
import { emailhandler, passwordhandler} from "./Store/features/Emailfeacture";
import {apiAsync} from "./Store/features/ApiCall"
import loaderimg from './Assets/loader.gif'




const App = () => {

  const styles = {
    overflowY: "hidden",
    overflowX: "auto"
  }


 
  const count = useSelector((state) => state.counter.value)
  const email = useSelector((state) => state.counter2.value1)
  const password = useSelector((state) => state.counter2.value2)
  const images = useSelector((state) => state.counter3.value)


  const dispatch = useDispatch()

  const incrementHanadler = () => dispatch(increment())
  const decrementHanadler = () => dispatch(decrement())
  const incrementByAmountHanadler = () => dispatch(incrementByAmount(5))
  useEffect(() => {
    dispatch(apiAsync())
  }, []);
  const [data, setdata] = useState({
    email: "",
    password: "",
  })
  const emailhandler2 = (e) => {
    setdata({
      ...data,
      email: e.target.value
    })
    dispatch(emailhandler(e.target.value))
  }
  const passwordhandler2 = (e) => {
    setdata({
      ...data,
      password: e.target.value
    })
    dispatch(passwordhandler(e.target.value))
  }



let list = ""

if (images) {
   list =  images.map(img => (
    <div>
      <img className="mx-1" key={img.id} height="300" src={img.download_url} alt="" />
    </div>
  ))
}


    
  return (
      <div>

        {images.length === 0 ? <div className="loaderContainer" >
<img  className="loader" src={loaderimg} alt="" />
</div>: '' }

    <div className="container mt-5 "  >

      <button onClick={incrementHanadler} className="btn btn-primary">Increment</button>
      <h1>
        {count}
      </h1>
      <button onClick={decrementHanadler} className="btn btn-danger">Decrement</button>
      <br/>
      <button onClick={incrementByAmountHanadler} className="btn btn-primary mt-3">Increment By 5</button>


      <hr/>
      <form className="form-control" >
      <input
      onChange={emailhandler2}
      className=" mt-2"
      placeholder='email'
      type="email"
      />

      <br/>

      <input 
      onChange={passwordhandler2}
      className="mt-2"
      type="text" 
      placeholder='password'
      />
      <br/>
      </form>
      <hr/> 
<h1 className="w-100" >{email}</h1>
<h1 className="w-100">{password}</h1>
<hr/>
<div  className="d-flex webdisplaynone " style={styles} >
{list}
</div>
<hr/>
    </div>
      </div>
  )
}

export default App