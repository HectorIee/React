const apiKey = 'vHUFWJGtR7cnmJ2tFk7tV1Dl3oA5d9iM'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

//Promesas en cadena
peticion
    .then(resp => resp.json())
    .then(( { data } ) => {
        const {url} = data.images.original
        
        const img = document.createElement('img')
        img.src = url
        
        document.body.append(img)

    }) 
    .catch(console.warn)