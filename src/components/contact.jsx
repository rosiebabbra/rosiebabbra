import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  name: '',
  email: '',
  source: '',
  message: '',
};
const notify = () => toast("Your message has been sent.", { position: "bottom-right" });

export const Contact = (props) => {
  const [{ name, email, source, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, source, message);
    emailjs
      .sendForm(
        'service_p348xlr', 'template_tmm2d7g', e.target, 'user_tB2n0lgbiEtKvaaAAmgTA'
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id='contact'>
      <div className='container'>
        <div className='row'>
          <div>
            <form name='sentMessage' validate onSubmit={handleSubmit}>
              <div className='text-center mb-4'>
                <h2 class="section-title">Contact</h2>
                <p style={{ "margin": "15px" }}>
                  Please fill out the form below to send an email and I will
                  get back to you as soon as possible.
                </p>
              </div>
              <br />
              <div className='row'>
                <div className='col-md-6'>
                  <div className="form-text">Your name</div>
                  <div className='form-group'>
                    <input
                      type='text'
                      id='name'
                      name='from_name'
                      className='form-control'
                      required
                      onChange={handleChange}
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className="form-text">Your email</div>
                  <div className='form-group'>
                    <input
                      type='email'
                      id='email'
                      name='from_email'
                      className='form-control'
                      required
                      onChange={handleChange}
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className="form-text">How did you hear about us?</div>
                  <div className='form-group'>
                    <select
                      id='source'
                      name='from_source'
                      className='form-control'
                      required
                      onChange={handleChange}>
                      <option value="yelp">Yelp</option>
                      <option value="google">Google</option>
                      <option value="instagram" selected>Instagram</option>
                      <option value="snapchat">Snapchat</option>
                      <option value="referral">Referral</option>
                      <option value="other">Other</option>
                    </select>
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className="form-text">Your message</div>
                  <div className='form-group'>
                    <textarea
                      name='message'
                      id='message'
                      className='form-control'
                      rows='4'
                      required
                      onChange={handleChange}
                    ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
              </div>
              <div id='success'></div>
              <div className='text-center'>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};