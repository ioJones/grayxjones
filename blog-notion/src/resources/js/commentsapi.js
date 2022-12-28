const template = async  () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data2 = await res.json()
    const resImg = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    const dataImg = await resImg.json()
    const response = await fetch('../../../components/comment.html')
    const data = await response.text()
 

    const parser = new DOMParser()
    let parsedData2 = parser.parseFromString(data,'text/html')
    console.log(parsedData2)
    let card = parsedData2.querySelector('.card')

    for (let i=0;i<10;i++){
        console.log(dataImg)
        let comments = document.querySelector('.comments')
        let card = document.createElement('div')
        card.innerHTML = ` <article class="card" tabindex=0>
        <div class="cardHeader">
            <img src="${dataImg[i].url}" alt="${dataImg[i].title}" class="cardImage">
            <div class="cardName">
                <h4 class="cardTitle">${data2[i].name}</h4>
                <p class="userDesc">Director, Film Company</p>
            </div>
        </div>
        <blockquote>
            ${data2[i].body}
        </blockquote>
    </article>`
    comments.appendChild(card)
        // comments.appendChild(card.cloneNode(true))
        // let commentBody = document.querySelectorAll('blockquote')
        // console.log(commentBody)
        // commentBody.content = data2[i].body

    }

};

template()





