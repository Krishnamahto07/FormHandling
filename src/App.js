import { useState } from 'react';
import './App.css';

function App() {
  // const [fn,setFN] = useState('');
  // const [ln,setLN] = useState('');
  // function fnchangeHandler(event){
  //   console.log("first name : "+fn)
  //   setFN(event.target.value);
  // }
  // function lnchangeHandler(event){
  //   setLN(event.target.value);
  //   console.log(ln);
  // }

  let [formData,setFormData] = useState( {
    firstName:"",
    lastName : "",
    email : "", 
    comments :"" });
    const [finalData ,setFinalData]= useState({})
    console.log(formData);
    
    const [show,setShow] = useState(false)

    function formHandler(event){
    setFormData(prevData =>{
      return {
      ...prevData,
      [event.target.name] : event.target.value
    }
    })
  }
    function btnHandler(e){
      e.preventDefault()
      setFinalData(formData)
      setFormData(formData = {})
      setShow(true)
    }
  return (
    <div className="App bg-slate-600 h-[100vh] px-2 py-3">
      <h1 className='text-3xl mb-2 text-blue-200 font-bold'>Foam practice</h1>
      <div className='h-[2px] w-4/12 bg-sky-200 mx-auto mb-3 '></div>
      <form onSubmit={btnHandler} className='mb-4'> 
        <input className='p-2 rounded-md border border-blue-400' type='text' onChange={formHandler} value={formData.firstName} placeholder='firstName' name='firstName' required></input>
        <input className='p-2 rounded-md border border-blue-400' type='text' onChange={formHandler} value={formData.lastName} placeholder='lastName' name='lastName' required></input>
        <input className='p-2 rounded-md border border-blue-400' type='email'onChange={formHandler} value={formData.email} placeholder='Enter Email' name='email' required></input>
        <textarea  className='p-2 rounded-md border border-blue-400 h-[50px]' onChange={formHandler} name='comments' value={formData.comments} placeholder='enter your comments : '/>
        <button className='bg-sky-300 text-2xl font-bold  rounded-lg  ' >Submit</button>
      </form>
      {
        show === true ? <div className='bg-sky-600 border rounded w-7/12 m-auto p-2 '> 
        <h2>User Details .</h2>
        {/* <span>Name : <p className='text-bold text-white '>{finalData.firstName}</p></span> */}
        <p className='text-2xl '>First Name: <b className='text-white p-2'>{finalData.firstName}</b></p>
        <p className='text-2xl '>Last Name : <b className='text-white p-2'>{finalData.lastName}</b></p>
        <p className='text-2xl '>Email : <b className='text-white text-[20px] mr-4'>{finalData.email}</b></p>
        <p className='text-2xl '>Comment : <b className='text-white p-2'>{finalData.comments}</b></p>
        </div> : 
        <div className='text-white text-2xl '>nothing to show </div>
      }
      {/* <h2>Submited Data  </h2> */}
      
    </div>
  );
}

export default App;
