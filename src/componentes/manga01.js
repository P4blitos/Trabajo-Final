import publicidad from './img/publicidad.png';
import jujutsu from './img/Jujutsu-Kaisen-1.png';
export const Manga01 =()=>{
    return(
        <body>
            
        <section class="contenido">
        <section class="articulos">
        <h2>Jujutsu Kaisen</h2>
        <section class="Secciones">
            <section>
                <div className='ImgPsico'>
                    <img src={jujutsu} alt="El psicoanalista" />
                    
                </div>
                
            </section>
            <section>
                
                <h3>Reseña del manga</h3>
                <p>Jujutsu Kaisen se ambienta en una sociedad contemporánea en la que existen las “maldiciones”, apariciones grotescas nacidas de la negatividad y perfidia humana.
                    Para enfrentarlas existen los “hechiceros”, personas que manipulan la “energía maldita” para exorcizar estos males. No obstante, la existencia de estos fenómenos es un secreto para el común de la gente..</p>
                <p>La serie sigue la historia de Yuji Itadori, un estudiante de secundaria con una fuerza física excepcional. 
                    Después de un encuentro con los artefactos malditos, objetos poseídos por maldiciones, su vida da un giro inesperado.</p>
                 <p></p>
                 <h3>Autor</h3>
                <p> Gege Akutami</p>
                <p></p>
                 <h3>Categoria(S)</h3>
                <p> Novela Grafica, Manga</p>
                <p></p>
                <h3>Idioma</h3>
                <p> Español</p>
                <p></p>
                <h3>Numero de paginas</h3>
                <p> 192</p>
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
    <p>Eres tan valiente y tranqula, que en ocasiones olvido que sufres.</p>
    <p>- Ernest Hemingway</p>
</footer>
</body>
    
    )
}