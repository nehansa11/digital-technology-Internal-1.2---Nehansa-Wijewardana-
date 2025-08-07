// Grab the HTML template for book cards (hidden <template> in the HTML)
const bookCardTemplate = document.querySelector("[data-book-template]")

// Grab the container where book cards will be displayed
const bookCardContainer = document.querySelector("[data-book-cards-container]")

// Grab the search input field
const searchInput = document.querySelector("[data-search]")

// Create an empty array to store the book data + card element
let books = []

// Add an event listener to the input box so that it runs this code whenever the book types
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase() // Get the input text and make it lowercase for case-insensitive matching

    // For each book object in the books array, check if it should be visible
    books.forEach(book => {
        const isVisible =
            book.title.toLowerCase().includes(value) || // check if title matches
            book.author.toLowerCase().includes(value)   // check if author matches

        // Show or hide the card based on whether it's a match
        book.element.classList.toggle("hide", !isVisible)
    })
})

//Books content for search
const json_content = [
    {
        "title": "The boy in the Stripped Pyjamas",
        "author": "John Boyne",
        "description": "Two boys become very good friends. But why is Shmuel in the camp...",
        "image": "images/the_boy_in_the_striped_pijamas.jpg",
        "reviews": "4.8 (470 reviews)"
    },
    {
        "title": "The Starlight Chronicles",
        "author": "Sarah Matthews",
        "description": "A captivating fantasy adventure about friendship and courage in...",
        "image": "images/the_starlight_chronicles.jpg",
        "reviews": "4.6 (380 reviews)"
    },
    {
        "title": "Murder, Mystics, and Menopause",
        "author": "Theresa Crater",
        "description": "A lighthearter, supernatural book in with clever puzzles!...",
        "image": "images/murder_mistics.jpg",
        "reviews": "4.3 (366 reviews)"
    },
    {
        "title": "Red Lily",
        "author": "Janice Graham",
        "description": "Paris 1989, A cold war ending, a new family is beginning, and one dog ...",
        "image": "images/red_lily.jpg",
        "reviews": "4.6 (323 reviews)"
    },
    {
        "title": "The Sword of Kaigen",
        "author": "M.L Wang",
        "description": "Better to die sharp in war than rust through a time of peace...",
        "image": "images/the_sward_of_kaigen.jpg",
        "reviews": "4.6 (311 reviews)"
    },
    {
        "title": "The Summer of Broken Rules",
        "author": "K.L Walther",
        "description": "It's all fun and games until someone loses their heart A romance novel ...",
        "image": "images/summer_of_broken_rules.jpg",
        "reviews": "4.3 (450 reviews)"
    },
    {
        "title": "Five Survive",
        "author": "Holly Jackson",
        "description": "Eighteen year old Red and her friends are on a road trip in...",
        "image": "images/five_six_friends_survive.jpg",
        "reviews": "4.6 (460 reviews)"
    },
    {
        "title": "The Boy who harnessed the wind",
        "author": "William Kamlwamba and Bryan Mealer",
        "description": "An inspiring true story of a Malawi teenagers who is a hero ...",
        "image": "images/the_boy_who_harnesses_the_wind.jpg",
        "reviews": "4.6 (540 reviews)"
    },
];

// Load book cards from the local JSON data
books = json_content.map(book => {
    // Clone the template element
    const card = bookCardTemplate.content.cloneNode(true).children[0];

    // Find the elements inside the card
    const title = card.querySelector("[data-title]");
    const author = card.querySelector("[data-author]");
    const description = card.querySelector("[data-description]");
    const image = card.querySelector("[data-image]");
    const reviews = card.querySelector("[data-reviews]");

    // Set the text content of the header and body
    title.textContent = book.title;
    author.textContent = book.author;
    description.textContent = book.description;
    reviews.textContent = book.reviews;
    image.src = book.image;

    // Add the card to the page
    bookCardContainer.append(card);

    // Return a custom object that includes book info and the DOM element
    return { title: book.title, author: book.author, description: book.description, image: book.image, reviews: book.reviews, element: card };
});
