/*
# Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*

#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

# ****BONUS**
 1. Formattare le date in formato italiano (gg/mm/aaaa)
 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente 
    (es. Luca Formicola  => LF).
 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore 
    e cambiare il colore del bottone.

# Consigli del giorno:
 Ragioniamo tanto sulla definizione dell'oggetto, se sbagliamo quello tutto diventa più difficile!
*/

// Funzione per creare un elemento
const createElement = (tag, ...classNames) => {
    let myElement;
    myElement = document.createElement(tag);
    myElement.classList.add(...classNames);
    return myElement
}

// Creo l'array
const display = document.getElementById('container')

const posts = [
    {
        postId: 1,
        authorName: 'Phil Mangione',
        authorPic: 'https://unsplash.it/300/300?image=15',
        publicationDate: '09/23/2006',
        postDescription: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postPicture: 'https://unsplash.it/600/300?image=171',
        postLikes: 10
    },
    {
        postId: 2,
        authorName: 'Eiran Roselyn',
        authorPic: 'https://unsplash.it/300/300?image=14',
        publicationDate: '09/23/2006',
        postDescription: '',
        postPicture: 'https://picsum.photos/id/236/200/300',
        postLikes: 79
    },
    {
        postId: 3,
        authorName: 'Jana Dídac',
        authorPic: 'https://unsplash.it/300/300?image=13',
        publicationDate: '09/23/2006',
        postDescription: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.',
        postPicture: 'https://picsum.photos/id/237/200/300',
        postLikes: 48
    },
    {
        postId: 4,
        authorName: 'Joaquima Manyara',
        authorPic: 'https://unsplash.it/300/300?image=12',
        publicationDate: '09/23/2006',
        postDescription: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postPicture: 'https://picsum.photos/id/238/200/300',
        postLikes: 3
    }

]
  

for(const item of posts) {
    // DIV PRINCIPALE
    const divPost = createElement('div', 'post');
    display.append(divPost);


    // POST HEADER
    const postHeader = createElement('div', 'post__header');
    divPost.append(postHeader);

    const postMeta = createElement('div', 'post-meta');
    postHeader.append(postMeta);

    const postMetaIcon = createElement('div', 'post-meta__icon');
    postMeta.append(postMetaIcon);

    postMetaIcon.innerHTML = `<img class="profile-pic" src="${item['authorPic']}" alt="${item['authorName']}" />`

    const postMetaData = createElement('div', 'post-meta__data');
    postMeta.append(postMetaData);

    const postMetaAuthor = createElement('div', 'post-meta__author');
    postMetaData.append(postMetaAuthor);
    postMetaAuthor.innerText = item['authorName'];

    const postMetaTime = createElement('div', 'post-meta__time');
    postMetaData.append(postMetaTime);
    postMetaTime.innerText = item['publicationDate'];

    // POST TEXT
    const postText = createElement('div', 'post__text');
    divPost.append(postText);
    postText.innerText = item['postDescription']

    // POST IMAGE

    const postImage = createElement('div', 'post__image');
    divPost.append(postImage);
    postImage.innerHTML = `<img src="${item['postPicture']}" alt="" />`;

    // POST FOOTER

    const postFooter = createElement('div', 'post__footer');
    divPost.append(postFooter);

    const postLikesJS = createElement('div', 'likes', 'js-likes');
    postFooter.append(postLikesJS);

    const postLikesCTA = createElement('div', 'likes__cta');
    postLikesJS.append(postLikesCTA);

    const postLikesButton = createElement('a', 'like-button', 'js-like-button');
    postLikesCTA.append(postLikesButton);

    const postLikesButtonIcon = createElement('i', 'like-button__icon', 'fas', 'fa-thumbs-up');
    postLikesButton.append(postLikesButtonIcon);

    const postLikesLabel = createElement('span', 'like-button__label');
    postLikesButton.append(postLikesLabel);
    postLikesLabel.innerText = ' Mi Piace';

    const postLikesCounter = createElement('div', 'likes__counter');
    postLikesJS.append(postLikesCounter);
    postLikesCounter.innerText = 'Piace a ' + item['postLikes'] + ' persone';

    // Al click del bottone
    postLikesButton.addEventListener('click', function(){
        if(!this.classList.contains('_bg-green')) {
            this.classList.add('_bg-green');
            postLikesCounter.innerText = 'Piace a ' + (item['postLikes'] + 1) + ' persone';
        } else if (this.classList.contains('_bg-green')) {
            this.classList.remove('_bg-green')
            postLikesCounter.innerText = 'Piace a ' + item['postLikes'] + ' persone';
            }
    })}