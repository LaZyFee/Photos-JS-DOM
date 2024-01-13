
// ৮. প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা Div থাকবে। ক্লিক করার পর ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা লোড করার API এর লিংক এর পরে Photos এর পরে ডাইনামিকভাবে ${Id} বসিয়ে দিবে। এরপর ডিটেইল অংশে Photo এর Url দিয়ে মেইন ইমেজ এবং Thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে Title প্রপার্টিও দেখাবে। 

const loadPhotos = async () => {
    const url = `https://jsonplaceholder.typicode.com/photos`
    const res = await fetch(url);
    const data = await res.json();
    displayPhotos(data);
}

const displayPhotos = photos => {
    const photoContainer = document.getElementById('photos-container');

    photos.forEach(photo => {
        const photoDiv = document.createElement('div')
        photoDiv.classList.add('col')
        photoDiv.innerHTML = `
                        <div class="card">
                            <img class="object-fit-contain border rounded" src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${photo.id}</h5>
                                <p class="card-text">${photo.title}</p>
                            </div>
                            <div>
                            <button class="btn btn-info mb-2 mx-2 px-2 text-white" onclick="loadPhotoDetails(${photo.id})">Details</button>
                            </div>
                        </div>
        `
        photoContainer.appendChild(photoDiv);
    });
}

const loadPhotoDetails = id => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhotoDetails(data))
}
const displayPhotoDetails = photo => {
    const photoDetail = document.getElementById('Photo-details');
    photoDetail.innerHTML = `
             <div class="card">
                <div class="card-body">
                <img class="object-fit-cover border rounded" src="${photo.thumbnailUrl}"  alt="...">
                <img class="object-fit-fill border rounded img-fluid" src="${photo.url}" alt="...">
                  <h5 class="card-title">${photo.title}</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
    `
}
loadPhotos();