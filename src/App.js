
import './App.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "india",
    address: "",
    city: "",
    state: "",
    postalcode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushnotification: "",
  });

  console.log(formdata);

  function changehandler(event) {
    const { name, value, checked, type } = event.target;
    setFormdata((prevformdata) => ({
      ...prevformdata,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function submithandler(event) {
    event.preventDefault();
    console.log(formdata);
    toast("form submitted sucessfully")
  }

  return (
    <div className='flex flex-col items-center'>
      <div>
        <form onSubmit={submithandler} >
          <label htmlFor='firstname'>Firstname</label>
          <br />
          <input
            type='text'
            placeholder='name'
            name='firstname'
            id='firstname'
            value={formdata.firstname}
            onChange={changehandler}
            className='outline'
          />
          <br />

          <label htmlFor='lastname'>Lastname</label>
          <br />
          <input
            type='text'
            placeholder='lastname'
            name='lastname'
            id='lastname'
            value={formdata.lastname}
            onChange={changehandler}
            className='outline'
            required
          />
          <br />

          <label htmlFor='email'>Email</label>
          <br />
          <input
            type='email'
            placeholder='email'
            name='email'
            id='email'
            value={formdata.email}
            onChange={changehandler}
            className='outline'
            required
          />
          <br />

          <label htmlFor='country'>Country</label>
          <br />
          <select
            id='country'
            name='country'
            value={formdata.country}
            onChange={changehandler}
            className='outline'
            required
          >
            <option value='india'>India</option>
            <option value='united states'>United States</option>
            <option value='canada'>Canada</option>
            <option value='mexico'>Mexico</option>
          </select>
          <br />

          <label htmlFor='address'>Street Address</label>
          <br />
          <input
            type='input'
            placeholder='address'
            name='address'
            id='address'
            value={formdata.address}
            onChange={changehandler}
            className='outline'
            required
          />
          <br />

          <label htmlFor='city'>City</label>
          <br />
          <input
            type='input'
            placeholder='city'
            name='city'
            id='city'
            value={formdata.city}
            onChange={changehandler}
            className='outline'
            required
          />
          <br />

          <label htmlFor='state'>State</label>
          <br />
          <input
            type='input'
            placeholder='state'
            name='state'
            id='state'
            value={formdata.state}
            onChange={changehandler}
            className='outline'
            required
          />
          <br />

          <label htmlFor='postalcode'>Postal Code</label>
          <br />
          <input
            type='input'
            placeholder='postalcode'
            name='postalcode'
            id='postalcode'
            value={formdata.postalcode}
            onChange={changehandler}
            className='outline'
            required
          />
          <br />

          <fieldset>
            <legend>By Email</legend>
            <div className='flex'>
              <input
                id="comments"
                name="comments"
                type='checkbox'
                checked={formdata.comments}
                onChange={changehandler}
              />
              <div>
                <label htmlFor='comments'>Comments</label>
                <p>Get notified when someone posts a comment on a posting</p>
              </div>
            </div>

            <div className='flex'>
              <input
                id="candidates"
                name="candidates"
                type='checkbox'
                checked={formdata.candidates}
                onChange={changehandler}
              />
              <div>
                <label htmlFor='candidates'>Candidates</label>
                <p>Get notified when someone posts a comment on a posting</p>
              </div>
            </div>

            <div className='flex'>
              <input
                id="offers"
                name="offers"
                type='checkbox'
                checked={formdata.offers}
                onChange={changehandler}
              />
              <div>
                <label htmlFor='offers'>Offers</label>
                <p>Get notified when someone posts a comment on a posting</p>
              </div>
            </div>
          </fieldset>
          <br />

          <fieldset>
            <legend>Push Notifications</legend>
            <p>These are delivered via SMS</p>

            <input
              type='radio'
              id='pusheverything'
              name='pushnotification'
              value="everything"
              onChange={changehandler}
            />
            <label htmlFor='pusheverything'>Push Everything</label>
            <br />

            <input
              type='radio'
              id='pushemail'
              name='pushnotification'
              value="same as email"
              onChange={changehandler}
            />
            <label htmlFor='pushemail'>Same as Email</label>
            <br />

            <input
              type='radio'
              id='pushnothing'
              name='pushnotification'
              value="no push notification"
              onChange={changehandler}
            />
            <label htmlFor='pushnothing'>No Push Notifications</label>
          </fieldset>

          <button className='bg-blue-500 text-bold text-white'>Save Me</button>
        </form>
      </div>
    </div>
  );
}

export default App;
