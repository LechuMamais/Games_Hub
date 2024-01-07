import './style.css';

export const footer = (divApp) => {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <ul>
            <li><p>Web creada con JS Vainilla + Vite | Alexis Mamais</p></li>
            <li id="contacto"><a>Contacto ✉️</a></li>
        </ul>
    `
    divApp.append(footer)
}