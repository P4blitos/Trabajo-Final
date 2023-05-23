import publicidad from './img/publicidad.png';
import berserk from './img/one_piece.jpg';
export const Manga03 =()=>{
    return(
        <body>
            
        <section class="contenido">
        <section class="articulos">
        <h2>One piece</h2>
        <section class="Secciones">
            <section>
                <div className='ImgPsico'>
                    <img src={berserk} alt="El psicoanalista" />
                    
                </div>
                
            </section>
            <section>
                
                <h3>Reseña del manga</h3>
                <p> One Piece relata las aventuras de Monkey D. Luffy, un joven que, inspirado en Shanks, un pirata que le salve la vida, desea convertirse en el Rey de los Piratas 
                    y encontrar el tesor o conocido como One Piece, que perteneca a Gol D. Roger. Ant es de ser ejecutado, hace 24 años, este legendario pirata con t al mundo sobre
                    la existencia de su tesoro. Esto dio inicio a lo que se conoce como 'la Gran era de los piratas': innumerables piratas se dispusieron a buscar ese tesoro,
                     causando grandes problemas al Gobierno Mundial. Luffy iniciar sus aventuras, reclutando amigos y nakamas que lo ayuden a cumplir su sueño.'</p>
                
                 <p></p>
                 <h3>Autor</h3>
                <p> Eiichiro Oda</p>
                <p></p>
                 <h3>Categoria(S)</h3>
                <p>Manga: Shonen</p>
                <p></p>
                <h3>Idioma</h3>
                <p> Español</p>
                <p></p>
                <h3>Numero de paginas</h3>
                <p> 200</p>
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