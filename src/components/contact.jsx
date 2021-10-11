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
const notify = () => toast("Your message has been sent.", {position: "bottom-right"});

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
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <select
                        type='source'
                        id='source'
                        name='from_source'
                        className='form-control'
                        placeholder='How did you hear about us?'
                        required
                        onChange={handleChange}>
                      <option value="" disabled selected>How did you hear about us?</option>
                      <option value="yelp">Yelp</option>
                      <option value="google">Google</option>
                      <option value="instagram">Instagram</option>
                      <option value="snapchat">Snapchat</option>
                      <option value="referral">Referral</option>
                      <option value="other">Other</option>
                        </select>
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
                  <i className='fa fa-calendar'></i> Hours
                </span>{' '}
                <table id='hour-table'>
                  <tr>
                    <th class='hour-table-head'>Monday</th>
                    <th class='hour-table-head'>5 - 9 PM</th>
                  </tr>
                  <tr>
                    <th class='hour-table-head'>Tuesday</th>
                    <th class='hour-table-head'>5 - 9 PM</th>
                  </tr>
                  <tr>
                    <th class='hour-table-head'>Wednesday</th>
                    <th class='hour-table-head'>5 - 9 PM</th>
                  </tr>
                  <tr>
                    <th class='hour-table-head'>Thursday</th>
                    <th class='hour-table-head'>5 - 9 PM</th>
                  </tr>
                  <tr>
                    <th class='hour-table-head'>Friday</th>
                    <th class='hour-table-head'>5 - 9 PM</th>
                  </tr>
                  <tr>
                    <th class='hour-table-head'>Saturday</th>
                    <th class='hour-table-head'>12 - 8 PM</th>
                  </tr>
                  <tr>
                    <th class='hour-table-head'>Sunday</th>
                    <th class='hour-table-head'>12 - 8 PM</th>
                  </tr>
                </table>
              </p>
            </div>
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
                  <li>
                    <a href={props.data ? props.data.yelp : '/'}
                        target="_new">
                      <i className='fa fa-yelp'></i>
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
