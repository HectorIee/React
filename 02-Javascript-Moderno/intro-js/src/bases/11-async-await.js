

// const getImagenPromesa = () => 
//     new Promise((resolve, reject) => {
//         resolve('https:://asdasda.com')
//     })
// getImagenPromesa().then(console.log)


//      ASYNC
const getImange = async () => {
    return 'https:://asdasda.com'
}

getImange().then(console.log)


//      AWAIT
const getImange2 = async () => {
    try {
        const apiKey = 'vHUFWJGtR7cnmJ2tFk7tV1Dl3oA5d9iM'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const { data } = await resp.json()

        const { url } = data.images.original

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    } catch (error) {
        console.error(error)
    }
}

getImange2()