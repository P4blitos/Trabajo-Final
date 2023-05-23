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
                    <Link to="/libros/origen"><img src={origen} alt="Origen" /></Link>
                </section>
                <section>           
                    <h3>Lovecraft</h3>
                    <Link to="/libros/lovecraft"><img src={lovecraft} alt="Lovecraft" /></Link>
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
                    <Link to="/libros/berserk"><img src={berserk} alt="Berserk" /></Link>
                </section>
                <section>
                    <h3>One piece</h3>
                    <Link to="/libros/onepiece"><img src={one_piece} alt="one piece" /></Link>
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
                <Link to="/construccion"><a>Gabriel García Márquez</a></Link>
                <Link to="/construccion"><a>Dan Brown</a></Link>
                <Link to="/construccion"><a >Rick Riordan</a></Link>
            </section>

            <section class="autores">
                <h2>Mangakas</h2>
                <Link to="/construccion"><a>Kentaro Miura</a></Link>
                <Link to="/construccion"><a>Eiichirō Oda</a></Link>
                <Link to="/construccion"><a >Gege Akutami</a></Link>
            </section>
 
        </section>
            

                <footer>
                    <p>"La felicidad se encuentra en las cosas más simples y extraordinarias"</p>
                    <p>- El Principito</p>
                </footer>
            </body>
        </div>
    )
}