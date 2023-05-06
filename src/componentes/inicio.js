
import './inicio.css'
import john from './img/john_k.jpg';
import psicoanalista from './img/psicoanalista.jpg';
import jujutsu from './img/Jujutsu-Kaisen-1.png'


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
                        <img src={psicoanalista} alt="El psicoanalista" />
                    </div>
                    
                </section>
            </section>

            <h2>Manga popular</h2>
            <section class="Secciones">
                <section>
                    
                    <h3>Jujutsu Kaisen</h3>
                    <p>-Yuuji Itadori, un estudiante de secundaria, que posee una rara habilidad física, pasa sus días visitando a su abuelo que se encontra hospitalizado.
                     Pero un día, espíritus malditos que duermen en su escuela, se liberan y aparecen criaturas fantasmas. A pesar de ello, Yuuji entra al complejo escolar para salvar a sus compañeros…!</p>
                    
                </section>
                <section>
                    <div>
                        <img src={jujutsu} alt="Jujutsu Kaisen" />
                    </div>
                    
                </section>
            </section>
            
        </section>
        <section class="menu_secundario">
            <h2>Sugeridos</h2>
            <a>La historia del loco</a>
            <a >Estados unidos de Japón</a>
            <a>Berserk</a>
            <a>Vinland Saga</a>
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
    </section>

     <footer>
        <p>En algun lugar de un libro hay una frase esperandonos, para darle un sentido a nuestra existencia</p>
        <p>- Cervantes</p>
    </footer>
    </body>
        </div>

  )
}