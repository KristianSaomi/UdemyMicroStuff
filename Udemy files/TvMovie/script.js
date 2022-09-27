const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    try {
        e.preventDefault();
        const searchTerm = (form.elements.query.value);
        const config = { params: { q: searchTerm } }
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
        makeImages(res.data);
        form.elements.query.value = '';
    } catch (e) {
        console.log("error", e);
    };
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.id = "imagesNow"
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}

const deleteBtn = document.querySelector('#deleteBtn');

const deleteImages = () => {
    if (!document.querySelector("#imagesNow")) {
        console.log("No image attached")
    }
    document.querySelector("#imagesNow").remove();
    console.log('Images now removed');
}
deleteBtn.addEventListener('click', deleteImages);
