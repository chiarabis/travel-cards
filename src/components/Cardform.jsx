import { useState } from 'react'
import '../css/cardform.css'

function Cardform({ addCard }){
    const [formData, setFormData] = useState({
        id: Math.random(),
        location: '',
        country: '',
        description: '',
        src: '',
        isVisited: false
    })
    
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        const capitalizeFirstWord = (phrase) => {
            const words = phrase.split(' ');
            if (words.length > 0) {
              words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
            }
            return words.join(' ');
            };

        const formattedValue =
          name === 'description' ? capitalizeFirstWord(value) : value;
        
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : formattedValue,
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.location && formData.country && formData.description){
            addCard(formData);
        
        setFormData({
            id: Math.random(),
            location: '',
            country: '',
            description: '',
            src: '',
            isVisited: false
        })
        console.log(formData)

        } else {
            alert('Complete all fields')
        }
    }

    const handleReset = () => {
        setFormData({
            id: Math.random(),
            location: '',
            country: '',
            description: '',
            src: '',
            isVisited: false
        });
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-div'>
                <label>Location</label>
                <input type='text' name='location' value={formData.location} onChange={handleInputChange}></input>
            </div>
            <div className='form-div'>
                <label>Country</label>
                <input type='text' name='country' value={formData.country} onChange={handleInputChange}></input>
            </div>
            <div className='form-div'>
                <label>Description</label>
                <textarea name='description' value={formData.description} onChange={handleInputChange}></textarea>
            </div>
            <div className='form-div'>
                <label>Image</label>
                {/*<input type='file' name='src' accept='image/*' value={formData.src} onChange={handleInputChange}></input>*/}
                <input type='text' name='src' value={formData.src} onChange={handleInputChange}></input>
            </div>
            <div className='checkbox-div'>
                <label>It is visited?</label>
                <input type='checkbox' name='isVisited' checked={formData.isVisited} onChange={handleInputChange}></input>
            </div>

            <button className='button-submit' type='submit'>Add card</button>
            <button className='button-reset' type='button' onClick={handleReset}>Reset</button>
        </form>
    )
}

export default Cardform;