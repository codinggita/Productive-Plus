import { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import './App.css'
function App() {
  const navigate = useNavigate();
  return (
    <>
    <Formik
          initialValues={{
          email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
        
      }}
    >
  <Form>
        <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[890px] h-[554px]">
        <div className="relative w-[500px] h-[554px] bg-white rounded-[2px] overflow-hidden border-r-2 [border-right-style:solid] border-[#f1f1f1]">
          <div className="absolute w-[77px] h-[27px] top-[109px] left-[50px] [font-family:'Georgia-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[30px] whitespace-nowrap">
            Sign in
          </div>
          <div className="top-[198px] bg-[#f8f8f8] rounded-[2px] border border-solid border-[#e4e4e4] absolute w-[398px] h-[44px] left-[50px]">
            <div className="relative w-[382px] h-[19px] top-[12px] left-[3px]">
            {/* <label htmlFor="email">Email</label> */}
            {/* <p className="absolute w-[248px] h-[19px] -top-px left-[10px] [font-family:'Georgia-Regular',Helvetica] font-normal text-[#aab2bb] text-[16px] tracking-[0.30px] leading-[normal] whitespace-nowrap">Email address</p> */}
              
              <Field className="absolute w-[248px] h-[19px] -top-px left-[10px] [font-family:'Georgia-Regular',Helvetica] font-normal text-[#aab2bb] text-[16px] tracking-[0.30px] leading-[normal] whitespace-nowrap"
                id="email"
                name="email"
                placeholder="Email address"
                type="email"
              />

            {/* <Loginform/> */}
            
            {/* <form onSubmit={handleSubmit(onSubmit)}>
            <input
        type="text" className="absolute w-[248px] h-[19px] -top-px left-[10px] [font-family:'Georgia-Regular',Helvetica] font-normal text-[#aab2bb] text-[16px] tracking-[0.30px] leading-[normal] whitespace-nowrap"
        placeholder="Email address"
        {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}  
              />
          {errors.email && <span>Invalid email</span>}
            </form > */}

            </div>
          </div>
          <button onClick={() => navigate('/home')} 
          className="all-[unset] box-border top-[272px] bg-[#159aff] rounded-[4px] shadow-[0px_2px_2px_#ffffff] absolute w-[398px] h-[44px] left-[50px]">
            <div className="absolute w-[34px] h-[16px] top-[13px] left-[182px] [font-family:'Georgia-Bold',Helvetica] font-bold text-white text-[13.3px] text-center tracking-[0.50px] leading-[normal] whitespace-nowrap">
              Next
            </div>
          </button>
          <div className="absolute w-[135px] h-[19px] top-[344px] left-[182px] [font-family:'Georgia-Regular',Helvetica] font-normal text-[#159aff] text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Forgot Password?
          </div>
          {/* <button type="submit">Submit</button> */}
          <div className="absolute w-[90px] h-[17px] top-[425px] left-[50px] [font-family:'Georgia-Regular',Helvetica] font-normal text-[#444444] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
            Sign in using
          </div>
          <img
            className="absolute w-[40px] h-[40px] top-[421px] left-[162px] object-cover"
            alt="Span fed div"
            src="https://c.animaapp.com/SD9YicwA/img/span-fed-div.svg"
          />
          <div className="absolute w-[398px] h-[2px] top-[395px] left-[50px] bg-[#f1f1f1] rounded-[1px]">
            <div className="relative w-[19px] h-[19px] top-[-9px] left-[190px] bg-white">
              <div className="absolute w-[19px] h-[19px] -top-px left-0 [font-family:'Georgia-Regular',Helvetica] font-normal text-[#707070] text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Or
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </Form>
    </Formik>
    </>
  )
}
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);
export default App
