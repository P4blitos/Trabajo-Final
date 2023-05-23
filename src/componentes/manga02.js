import publicidad from './img/publicidad.png';
import berserk from './img/berserk.jpg';
export const Manga02 =()=>{
    return(
        <body>
            
        <section class="contenido">
        <section class="articulos">
        <h2>Berserk</h2>
        <section class="Secciones">
            <section>
                <div className='ImgPsico'>
                    <img src={berserk} alt="El psicoanalista" />
                    
                </div>
                
            </section>
            <section>
                
                <h3>Reseña del manga</h3>
                <p> Un hombre completamente vestido de negro que se hace llamar Guts, que tiene una mano artificial de hierro duro y que carga una espada gigantesca que supera
                     su estatura. En el lugar al cual se dirige llueve sangre y hay montañas de cadáveres apilados.</p>
                
                 <p></p>
                 <h3>Autor</h3>
                <p> Kentaro Miura</p>
                <p></p>
                 <h3>Categoria(S)</h3>
                <p>Cómics,
                Generos De Novela Gráfica
                 Y Cómics
                Tiras De Cómics</p>
                <p></p>
                <h3>Idioma</h3>
                <p> Español</p>
                <p></p>
                <h3>Numero de paginas</h3>
                <p> 232</p>
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
        <img src={publicidad} alt="Publicidad" />
        <section class="autores">
            <img src={publicidad} alt="Publicidad" />
        </section>

        <section>
        <img src={publicidad} alt="El psicoanalista" />
        </section>
        
        
        
    </section>
</section>

 <footer>
    <p>"El mundo no está lleno de sol y arcoíris. Es un lugar duro y cruel, y por muy fuerte y duro que seas, te dará de golpes y te dejará de rodillas si se lo permites. No es cuántas veces caigas lo que importa, sino cuántas veces te levantes"</p>
    <p>- Guts</p>
</footer>
</body>
    
    )
}