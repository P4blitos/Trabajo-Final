import psicoanalista from './img/psicoanalista.jpg';
import publicidad from './img/publicidad.png';
import './inicio.css';
export const Libro01 =()=>{
    return(
        <div>
            <body>
            
            <section class="contenido">
            <section class="articulos">
            <h2>El Psicoanalista</h2>
            <section class="Secciones">
                <section>
                    <div className='ImgPsico'>
                        <img src={psicoanalista} alt="El psicoanalista" />
                        
                    </div>
                    
                </section>
                <section>
                    
                    <h3>Reseña del libro</h3>
                    <p>-Feliz 53 cumpleaños, doctor. Bienvenido al primer día de su muerte. Pertenezco a algún momento de su pasado. Usted arruinó mi vida.
                     Quizá no sepa cómo por qué o cuándo, pero lo hizo. Llenó todos mis instantes de desastre y tristeza. Arruinó mi vida. Y ahora estoy decidido a arruinar la suya.</p>
                    <p>Así comienza el anónimo que recibe Frederick Starks, psicoanalista con una larga experiencia y una tranquila vida cotidiana.
                     Starks tendrá que emplear toda su astucia y rapidez para, en quince días, averiguar quién es el autor de esa amenazadora misiva que promete hacerle la existencia imposible.</p>
                     <p></p>
                     <h3>Autor</h3>
                    <p> John Katzenbach</p>
                    <p></p>
                     <h3>Categoria(S)</h3>
                    <p> Thrillers Psicologicos, Terror y Sobrenatural</p>
                    <p></p>
                    <h3>Idioma</h3>
                    <p> Español</p>
                    <p></p>
                    <h3>Numero de paginas</h3>
                    <p> 523</p>
                    <button class="button">Leer</button>
                </section>
               
                
            </section>
            <h2>Comentarios</h2>
            <section class="Secciones">
            <label htmlFor="name"> Nombre:  </label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="comment">Comentario:</label>
            <textarea id="comment" name="comment" required></textarea>

            
            </section>
            <section>
            <button type="submit">Enviar</button>
            </section>
            <div>
     

       
    </div>

            
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

            <section>
            <img src={publicidad} alt="El psicoanalista" />
            </section>
            
            
            
        </section>
    </section>

     <footer>
        <p>La mente humana es un universo complejo, donde se esconden secretos insondables.</p>
        <p>- Psicoanalista</p>
    </footer>
    </body>
        </div>
    )
}




