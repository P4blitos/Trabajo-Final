import lovecraft from './img/lovecraft.jpg';
import publicidad from './img/publicidad.png';
import './inicio.css';
export const Libro03 =()=>{
    return(
        <div>
            <body>
            
            <section class="contenido">
            <section class="articulos">
            <h2>Lovecraft</h2>
            <section class="Secciones">
                <section>
                    <div className='ImgPsico'>
                        <img src={lovecraft} alt="El psicoanalista" />
                        
                    </div>
                    
                </section>
                <section>
                    
                    <h3>Reseña del libro</h3>
                    <p>-A Howard Phillips Lovecraft (Providence, Estado de Rhode Island, Estados Unidos, 20 de agosto de 1890-15 de marzo de 1937), 
                        se le considera el creador del género del "terror cósmico". Algo mágico tenía este escritor, cuando, a pesar de que su literatura no le daba para vivir, levantó ese velo de admiración a su alrededor.</p>
                    <p>El francés Michel Houellebeqc escribió textualmente: «Siempre quiso verse como un gentilhombre de provincias, que cultiva la literatura como una de,
                        las bellas artes, para su propio deleite y sin preocuparse por los gustos del gran público, los temas de moda o cualquier otra cosa por el estilo».</p>
                     <p></p>
                     <h3>Autor</h3>
                    <p> H. P Lovecraft</p>
                    <p></p>
                     <h3>Categoria(S)</h3>
                    <p> Literatura fantastica, Terror</p>
                    <p></p>
                    <h3>Idioma</h3>
                    <p> Español</p>
                    <p></p>
                    <h3>Numero de paginas</h3>
                    <p> 366</p>
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
