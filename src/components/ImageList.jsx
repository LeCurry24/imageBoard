const ImageList = ({images}) => {
    return(
        <>
        {images.length > 0 ? (
            <>{images.map((image) => (
                <img src={URL.createObjectURL(image)} key={image.lastModified} />
            ))}
            </>
        ) : (
            <p>no image</p>
        )}
        
        </>
    );
};

export default ImageList;