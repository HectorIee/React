

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = 'vHUFWJGtR7cnmJ2tFk7tV1Dl3oA5d9iM';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

      return url

    } catch (error) {
        // manejo del error
        console.error(error)
        console.log('No se encontró la imagen')
    }
    
    
    
}

 getImagen();



