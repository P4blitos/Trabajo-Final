import psicoanalista from './img/psicoanalista.jpg';
import jujutsu from './img/Jujutsu-Kaisen-1.png';
import origen from './img/origen.jpg';
import lovecraft from './img/lovecraft.jpg';
import berserk from './img/berserk.jpg';
import one_piece from './img/one_piece.jpg';
import {Link} from 'react-router-dom'

export const Libros = ()=>{
    return(
        <div>
            <body>
            <section class="articulos">
            <h2>Catalogo libros</h2>
            
            <section class="catalogoL">
                <section>           
                    <h3>El Psicoanalista</h3>
                    <Link to="/libros/psicoanalista"><img src={psicoanalista} alt="El psicoanalista" /></Link> 
                </section>
                <section>           
                    <h3>Origen</h3>
                    <img src={origen} alt="Origen" />
                </section>
                <section>           
                    <h3>Lovecraft</h3>
                    <img src={lovecraft} alt="Lovecraft" />
                </section>
                
                
            </section>

            <h2>Catalogo Mangas</h2>
            <section className='catalogoM'>
                <section>
                    <h3>Jujutsu Kaisen</h3>
                    <Link to="/libros/jujutsu"><img src={jujutsu} alt="Jujutsu Kaisen" /></Link>
                </section>
                <section>
                    <h3>Berserk</h3>
                    <img src={berserk} alt="Berserk" />
                </section>
                <section>
                    <h3>One piece</h3>
                    <img src={one_piece} alt="one piece" />
                </section>
            </section>
        </section>
            
        <section class="menu_segundo">
            <h2>Publicidad</h2>
            <a></a>
            <a >Espacio Publicidad</a>
            <a></a>
            <a></a>
            <section class="autores">
                <h2>Escritores</h2>
            <a>Gabriel García Márquez</a>
            <a>Dan Brown</a>
            <a >Rick Riordan</a>
            </section>

            <section class="autores">
                <h2>Mangakas</h2>
            <a>Kentaro Miura</a>
            <a>Eiichirō Oda</a>
            <a >Gege Akutami</a>
            </section>
 
        </section>
            

                <footer>
                    <p>Debes ser mejor que ayer y peor que mañana</p>
                    <p>- Kaisen</p>
                </footer>
            </body>
        </div>
    )
}