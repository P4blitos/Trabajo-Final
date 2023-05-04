
import './inicio.css'
import './img/john_k.jpg'
import './img/psicoanalista.jpg'

export const Inicio =()=>{
    return(
        <div>
            <body>
            <h1>Los mejores libros</h1>
            <nav>
            <ul>
            <li> <a > Inicio </a> </li>
            <li> <a > Inicio de sesion </a> </li>
            <li> <a> Libros </a> </li>
            <li> <a> Ayuda </a> </li>
            </ul>
            </nav>
            <section class="contenido">
            <section class="articulos">
            <h2>Libros Populares</h2>
            <section class="Secciones">
                <section>
                    
                    <h3>El psicoanalista</h3>
                    <p>-Feliz 53 cumpleaños, doctor. Bienvenido al primer día de su muerte. Pertenezco a algún momento de su pasado. Usted arruinó mi vida.
                     Quizá no sepa cómo por qué o cuándo, pero lo hizo. Llenó todos mis instantes de desastre y tristeza. Arruinó mi vida. Y ahora estoy decidido a arruinar la suya.</p>
                    <p>Así comienza el anónimo que recibe Fredrerick Starks, psicoanalista con una larga experiencia y una tranquila vida cotidiana.
                     Starks tendrá que emplear toda su astucia y rapidez para, en quince días, averiguar quién es el autor de esa amenazadora misiva que promete hacerle la existencia imposible.</p>
                </section>
                <section>
                    <img src='librosmangas\src\componentes\img\psicoanalista.jpg' alt="psicoanalista"></img>
                </section>
            </section>
            <h2>Autores</h2>
            <section class="Secciones">
                <section>
                    
                    <h3>John Katzenbach</h3>
                    <p>Autor americano, John Katzenbach estudió Periodismo antes de dedicarse a la literatura. Su experiencia en el campo de la información criminal y de sucesos en diarios como The Miami Herald o el Miami News le permitió una excelente formación para sus novelas de intriga y misterio.
                     Además, Katzenbach ha colaborado con otros medios tan prestigiosos como The Philadelphia Enquirer, el Washington Post o el New York Times.</p>
                     <p>En 1987 decidió abandonar la carrera periodística para dedicarse por completo a la escritura. Katzenbach es conocido por sus novelas de intriga psicológica y grandes dosis de acción que han obtenido un enorme éxito internacional. 
                        Varias de sus obras han sido llevadas al cine, y, en ocasiones, ha sido él mismo el encargado de elaborar el guion.</p>
                </section>
                <section>
                    <img src="librosmangas\src\componentes\img\john_k.jpg" alt="John Katzenbach"></img>
                </section>
            </section>
        </section>
        <section class="menu_secundario">
            <h2>Mas libros</h2>
            <a>La historia del loco</a>
            <a >Estados unidos de Japón</a>
            <a >Jaque al psicoanalista</a>
            <a >Cien años de soledad</a>
            <a >Al pueblo nunca le toca</a>
            <a>Percy Jackson: El ladron del rayo</a>
            <section class="autores">
                <h2>M&aacutes autores</h2>
            <a>Gabriel García Márquez</a>
            <a>Dan Brown</a>
            <a >Rick Riordan</a>
            <a>Alvaro Salom Becerra</a>
            <a>Blue Jeans</a>
            <a>James Bowden</a>
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