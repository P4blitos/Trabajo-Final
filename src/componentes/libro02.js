import publicidad from './img/publicidad.png';
import origen from './img/origen.jpg'
export const Libro02 = ()=>{
    return(
        <div>
            <body>
            
            <section class="contenido">
            <section class="articulos">
            <h2>Origen</h2>
            <section class="Secciones">
                <section>
                    <div className='ImgPsico'>
                        <img src={origen} alt="El psicoanalista" />
                        
                    </div>
                    
                </section>
                <section>
                    
                    <h3>Reseña del libro</h3>
                    <p>-Robert Langdon, profesor de simbología e iconografía religiosa de la universidad de Harvard, acude al Museo Guggenheim Bilbao para asistir a un trascendental anuncio que cambiará la faz de la ciencia para siempre.
                        El anfitrión de la velada es Edmond Kirsch, un joven multimillonario cuyos visionarios inventos tecnológicos y audaces predicciones lo han convertido en una figura de renombre mundial. 
                        Kirsch, uno de los alumnos más brillantes de Langdon años atrás, se dispone a revelar un extraordinario descubrimiento que dará respuesta a las dos preguntas que han obsesionado a la humanidad desde el principio de los tiempo. ¿De dónde venimos? ¿A dónde vamos? </p>
                    
                     <p></p>
                     <h3>Autor</h3>
                    <p> Dan Brown</p>
                    <p></p>
                     <h3>Categoria(S)</h3>
                    <p> Novela contemporanea, Ficcion moderna</p>
                    <p></p>
                    <h3>Idioma</h3>
                    <p> Español</p>
                    <p></p>
                    <h3>Numero de paginas</h3>
                    <p> 637</p>
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
        <p>"La historia es siempre la historia del poder, de aquellos que lo tienen y de aquellos que luchan por conseguirlo"</p>
        <p>- Dan Brown</p>
    </footer>
    </body>
        </div>
    )
}