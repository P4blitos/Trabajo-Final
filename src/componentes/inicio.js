
import './inicio.css'
import john from './img/john_k.jpg';
import psicoanalista from './img/psicoanalista.jpg';
import jujutsu from './img/Jujutsu-Kaisen-1.png';
import {Link} from 'react-router-dom';


export const Inicio =()=>{
    return(
        <div>
            <body>
            
            <section class="contenido">
            <section class="articulos">
            <h2>Libro popular</h2>
            <section class="Secciones">
                <section>
                    
                    <h3>El psicoanalista</h3>
                    <p>-Feliz 53 cumpleaños, doctor. Bienvenido al primer día de su muerte. Pertenezco a algún momento de su pasado. Usted arruinó mi vida.
                     Quizá no sepa cómo por qué o cuándo, pero lo hizo. Llenó todos mis instantes de desastre y tristeza. Arruinó mi vida. Y ahora estoy decidido a arruinar la suya.</p>
                    <p>Así comienza el anónimo que recibe Fredrerick Starks, psicoanalista con una larga experiencia y una tranquila vida cotidiana.
                     Starks tendrá que emplear toda su astucia y rapidez para, en quince días, averiguar quién es el autor de esa amenazadora misiva que promete hacerle la existencia imposible.</p>
                </section>
                <section>
                    <div>
                    <Link to="/libros/psicoanalista"> <img src={psicoanalista} alt="El psicoanalista" /></Link>
                    </div>
                    
                </section>
            </section>

            <h2>Manga popular</h2>
            <section class="Secciones">
                <section>
                    
                    <h3>Jujutsu Kaisen</h3>
                    <p>-Yuuji Itadori, un estudiante de secundaria, que posee una rara habilidad física, pasa sus días visitando a su abuelo que se encontra hospitalizado.
                     Pero un día, espíritus malditos que duermen en su escuela, se liberan y aparecen criaturas fantasmas. A pesar de ello, Yuuji entra al complejo escolar para salvar a sus compañeros….!!</p>
                    
                </section>
                <section>
                    <div>
                    <Link to="/libros/jujutsu"><img src={jujutsu} alt="Jujutsu Kaisen" /></Link>
                    </div>
                    
                </section>
            </section>
            
        </section>
        <section class="menu_secundario">
            <h2>Sugeridos</h2>
            <Link to="/construccion"><a>La historia del loco</a></Link>
            <Link to="/construccion"><a>Estados unidos de Japón</a></Link>
            <Link to="/libros/berserk"><a>Berserk</a></Link>
            <Link to="/construccion"><a>Vinland Saga</a></Link>
            <section class="autores">
                <h2>Escritores</h2>
                <Link to="/construccion"><a>Gabriel García Márquez</a></Link>
                <Link to="/construccion"><a>Dan Brown</a></Link>
                <Link to="/construccion"><a>Rick Riordan</a></Link>
            </section>

            <section class="autores">
                <h2>Mangakas</h2>
                <Link to="/construccion"> <a>Kentaro Miura</a></Link>
                <Link to="/construccion"><a>Eiichirō Oda</a></Link>
                <Link to="/construccion"><a>Gege Akutami</a></Link>
            </section>
            
            
            
        </section>
    </section>

     <footer>
        <p>En algun lugar de un libro hay una frase esperandonos, para darle un sentido a nuestra existencia</p>
        <p>- Cervantes</p>
    </footer>
    </body>
        </div>

  )
}