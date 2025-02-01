document.getElementById('loveButton').addEventListener('click', function() {
    // Display the message
    document.getElementById('message').innerText = '............';

    // Array of flower image URLs
    const flowers = [
        'images/f1.jpg',  // Replace these with the actual paths to your flower images
        'images/f2.jpg',
        'images/f3.jpg',
        'images/f4.jpg'
    ];

    // Generate a random index to pick a random flower image
    const randomIndex = Math.floor(Math.random() * flowers.length);

    // Set the source of the image to a random flower
    document.getElementById('images/lode').src = flowers[randomIndex];
});
