// frontend/src/components/SpotsCreationFormPage/index.js
import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom'
import * as SpotActions from '../../store/spots'

function SpotsCreationFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    const [images, setImages] = useState([])
    const [spotName, setSpotName] = useState('')
    const [spotDetails, setSpotDetails] = useState('')
    const [location, setLocation] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [errors, setErrors] = useState([])

    if(!sessionUser) return <Redirect to="/" />

    const handleSubmit = (e) => {
        e.preventDefault()
        return dispatch(SpotActions.createSpot({images, spotName, spotDetails, location, address, city, state}))
            .catch(async (res) =>{
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })
    }
    const updateFiles = e => {
        const files = e.target.files
        if(files) setImages(files)
    }
    return(
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}> {error}</li>)}
            </ul>
            <label>
                Spot Name
                <input
                    type="text"
                    value={spotName}
                    onChange={(e) => setSpotName(e.target.value)}
                    required
                    />
            </label>
            <label>
                Spot details
                <textarea
                value={spotDetails}
                onChange={(e) => setSpotDetails(e.target.value)}
                required
                ></textarea>
            </label>
            <label>
                Add images
                <input type="file" onChange={updateFiles} multiple />
            </label>
            <label>
                Address
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    />
            </label>
            <label>
                City
                <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                />
            </label>
            <label>
                State
                <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                >
                    <option value="AL">AL</option>
                    <option value="AK">AK</option>
                    <option value="AR">AR</option>
                    <option value="AZ">AZ</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="CT">CT</option>
                    <option value="DC">DC</option>
                    <option value="DE">DE</option>
                    <option value="FL">FL</option>
                    <option value="GA">GA</option>
                    <option value="HI">HI</option>
                    <option value="IA">IA</option>
                    <option value="ID">ID</option>
                    <option value="IL">IL</option>
                    <option value="IN">IN</option>
                    <option value="KS">KS</option>
                    <option value="KY">KY</option>
                    <option value="LA">LA</option>
                    <option value="MA">MA</option>
                    <option value="MD">MD</option>
                    <option value="ME">ME</option>
                    <option value="MI">MI</option>
                    <option value="MN">MN</option>
                    <option value="MO">MO</option>
                    <option value="MS">MS</option>
                    <option value="MT">MT</option>
                    <option value="NC">NC</option>
                    <option value="NE">NE</option>
                    <option value="NH">NH</option>
                    <option value="NJ">NJ</option>
                    <option value="NM">NM</option>
                    <option value="NV">NV</option>
                    <option value="NY">NY</option>
                    <option value="ND">ND</option>
                    <option value="OH">OH</option>
                    <option value="OK">OK</option>
                    <option value="OR">OR</option>
                    <option value="PA">PA</option>
                    <option value="RI">RI</option>
                    <option value="SC">SC</option>
                    <option value="SD">SD</option>
                    <option value="TN">TN</option>
                    <option value="TX">TX</option>
                    <option value="UT">UT</option>
                    <option value="VT">VT</option>
                    <option value="VA">VA</option>
                    <option value="WA">WA</option>
                    <option value="WI">WI</option>
                    <option value="WV">WV</option>
                    <option value="WY">WY</option>
                </select>
            </label>
        </form>
    )
}
export default SpotsCreationFormPage
