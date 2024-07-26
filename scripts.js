document.addEventListener('DOMContentLoaded', function() {
    const cakesList = document.getElementById('cakes-list');
  
    // Sample data for cakes (replace with your own data or fetch from server)
    const cakes = [
      { 
        name: 'Chocolate Cake',
        description: 'Moist and rich chocolate cake layered with creamy chocolate ganache.',
        image: 'https://via.placeholder.com/300x200',
        price: '$35.99'
      },
      { 
        name: 'Vanilla Cake',
        description: 'Classic vanilla cake with buttercream frosting, decorated with sprinkles.',
        image: 'https://via.placeholder.com/300x200',
        price: '$20.99'
      },
      { 
        name: 'Red Velvet Cake',
        description: 'Decadent red velvet cake with cream cheese frosting and chocolate shavings.',
        image: 'https://via.placeholder.com/300x200',
        price: '$45.99'
      }
    ];
  
    // Function to create a cake card using Bulma components
    function createCakeCard(cake) {
      const card = document.createElement('div');
      card.classList.add('column', 'is-one-third-desktop', 'is-half-tablet', 'is-full-mobile');
  
      const cardContent = document.createElement('div');
      cardContent.classList.add('card');
  
      const cardImage = document.createElement('div');
      cardImage.classList.add('card-image');
  
      const figure = document.createElement('figure');
      figure.classList.add('image', 'is-4by3');
      const img = document.createElement('img');
      img.src = cake.image;
      img.alt = `${cake.name} cake`;
      figure.appendChild(img);
      cardImage.appendChild(figure);
  
      const cardContentSection = document.createElement('div');
      cardContentSection.classList.add('card-content');
  
      const media = document.createElement('div');
      media.classList.add('media');
  
      const mediaContent = document.createElement('div');
      mediaContent.classList.add('media-content');
  
      const title = document.createElement('p');
      title.classList.add('title', 'is-4');
      title.textContent = cake.name;
  
      const content = document.createElement('div');
      content.classList.add('content');
      content.textContent = cake.description;
  
      const price = document.createElement('p');
      price.classList.add('subtitle', 'is-6', 'has-text-weight-semibold');
      price.textContent = cake.price;
  
      mediaContent.appendChild(title);
      mediaContent.appendChild(content);
      mediaContent.appendChild(price);
      media.appendChild(mediaContent);
      cardContentSection.appendChild(media);
  
      cardContent.appendChild(cardImage);
      cardContent.appendChild(cardContentSection);
  
      card.appendChild(cardContent);
  
      return card;
    }
  
    // Render each cake card
    cakes.forEach(function(cake) {
      const card = createCakeCard(cake);
      cakesList.appendChild(card);
    });
  });