import React from 'react'

const UglyForm = props => {
    const { handleChange, handleSubmit, inputs: { title, imgUrl, description}} = props
    return (
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            onChange={handleChange}
            value={title}
            name="title"
            placeholder= "Title" />
            <input
            type="imgUrl"
            onChange={handleChange}
            value={imgUrl}
            name="imgUrl"
            placeholder="Image Url" /> 
            <input 
            type="text"
            onChange={handleChange}
            value="description"
            name="description"
            placeholder="Description"/>
            <button>Submit</button>
        </form>
    )
}
export default UglyForm 