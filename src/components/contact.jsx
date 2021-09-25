import { useState } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  name: '',
  email: '',
  source: '',
  message: '',
}
const notify = () => toast("Your message has been sent.");

export const Contact = (props) => {
  const [{ name, email, source, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, source, message)
    emailjs
      .sendForm(
        'service_p348xlr', 'template_tmm2d7g', e.target, 'user_tB2n0lgbiEtKvaaAAmgTA'
      )
      .then(
        (result) => {
          console.log(result.text)
          notify()
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send an email and I will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='from_name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='from_email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
                <ToastContainer />
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
            {/* <div className='contact-item'> */}
              {/* <p> */}
              {/* <span>
                  <i className='fa fa-calendar'></i> Booking
                </span> */}
                {/* <span> */}
                  {/* <div className='booking-button'>
                    <a href='https://www.styleseat.com/makeupbyrosie' 
                      target='_new' 
                      style={{ background: "no-repeat url(img/styleseat.png) 136px 7px white" }}>BOOK NOW WITH</a>
                  </div> */}
                  {/* <a target="_new" 
                    className='booking-button' 
                    href="https://squareup.com/appointments/book/84dedc22-88cd-4aeb-9229-0af7cfa6a037/LQB38EZC55798/start" 
                    rel="nofollow">Book Now</a> */}
                {/* </span> */}
              {/* </p> */}
            {/* </div> */}
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.instagram : '/'}
                        target="_new">
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}
                        target="_new">
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
