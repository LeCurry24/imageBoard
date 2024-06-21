import { useState } from "react";
import ImageList from "./ImageList";

const ImageForm = () => {
    const [images, setImages] = useState ([]);
      
    

    const handleChange = (event) => {
       const {target} = event;
       const {files} = target;
       const newImageArray = [...images, files[0]]
       setImages (newImageArray);
    };

    const handlesubmit = (event) => {
        event.preventDefault();
        
    };

    return(
     <>
        <form onSubmit={handlesubmit}>
            <label>
                ImageURL
                <input
                type="file"
                name="imageURL"              
                onChange={handleChange}
                multiple
                accept="image/*"
                />
            </label>
              <button>Add image</button>    
        </form>
        <ImageList images = {images} />
    </>
        
        
    );
};
export default ImageForm