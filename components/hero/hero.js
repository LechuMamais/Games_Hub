import './style.css';

export const hero = (heroContainer)=>{
    const hero = document.createElement('div');
    hero.id = "hero";
    const heroText = document.createElement('h1');
    heroText.id = "hero-text";
    heroText.textContent = "Choose your Adventure!";
    const heroImg = document.createElement('img');
    heroImg.id = 'hero-img';
    heroImg.setAttribute('src', 'Video-Game-Controller-Icon.png');

    hero.appendChild(heroText);
    hero.appendChild(heroImg);
    heroContainer.appendChild(hero);
}