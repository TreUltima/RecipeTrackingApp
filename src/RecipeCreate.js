import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({...initialFormState})

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    createRecipe(formData)
    setFormData({ ...initialFormState })
  }
  
  return (
    <form name="create" onSubmit={handleSubmit} >
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" 
              name="name" 
              id="name" 
              placeholder="Name" 
              onChange={handleChange} 
              value={formData.name} />
            </td>
            <td><input type="text" name="cuisine" id="cuisine" placeholder="Cuisine" onChange={handleChange} value={formData.cuisine} /></td>
            <td><input type="text" name="photo" id="photo" placeholder="URL" onChange={handleChange} value={formData.photo} /></td>
            <td><textarea name="ingredients" id="ingredients" placeholder="Ingredients" onChange={handleChange} value={formData.ingredients}></textarea></td>
            <td><textarea name="preparation" id="preparation" placeholder="Preparation" onChange={handleChange} value={formData.preparation}></textarea></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
