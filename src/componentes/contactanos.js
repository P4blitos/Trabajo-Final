import './contactanos.css'
import facebook from './img/Facebook.png'
import twitter from './img/twitter.png'
import instagram from './img/instagram.jpg'
export const Contactanos =()=>{
    return(
        <div className="redes">
            <div className= "Facebook">
             <a href="https://www.facebook.com/">
             <img src={facebook} alt="Facebook" />
             </a>
            </div>
            <div className= "Twitter">
             <a href="https://twitter.com/">
             <img src={twitter} alt="Twitter" />
             </a>
            </div>
            <div className= "Instagram">
             <a href="https://www.instagram.com/">
             <img src={instagram} alt="Twitter" />
             </a>
            </div>
            <div className="abajo">
            <footer>
            <p>En algun lugar de un libro hay una frase esperandonos, para darle un sentido a nuestra existencia</p>
            <p>- Cervantes</p>
            </footer> 
            </div> 
          
        </div>
        
        
    )
    
}