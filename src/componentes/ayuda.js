import './inicio.css'
import john from './img/john_k.jpg';
import psicoanalista from './img/psicoanalista.jpg';
import jujutsu from './img/Jujutsu-Kaisen-1.png';
import {Link} from 'react-router-dom';
import publicidad from './img/publicidad.png';
export const Ayuda =()=>{
    return(
        <div>
            <body>
            
            <section class="contenido">
            <section class="articulos">
            <h2>Ayuda</h2>
            <section class="Secciones">
                <section>
                    
                    <h3>Preguntas frecuentes</h3>
                    <h3 className='pregunta'> ¿Para leer se requiere de un pago?</h3>
                    <p>- los aficionados a los mangas y los libros han sido bendecidos con numerosas opciones para disfrutar de sus obras favoritas en línea. Afortunadamente, ya no es necesario abrir nuestros bolsillos para sumergirnos en emocionantes historias y cautivadoras ilustraciones.</p>
                    <p> Esta pagina ofrece acceso gratuito  a una amplia selección de mangas y libros, permitiéndonos explorar mundos fascinantes sin ningún costo adicional.</p>

                    <h3 className='pregunta'> ¿Se pueden adquirir los libros o mangas en fisico?</h3>
                    <p>En nuestra página web, nos enorgullece ofrecer una experiencia de lectura virtual excepcional. Entendemos que la comodidad y la accesibilidad son aspectos fundamentales para los amantes de los libros y los mangas en la era digital. Por eso, nos enfocamos en brindar una plataforma en línea donde los usuarios pueden sumergirse por completo en las páginas de sus obras favoritas sin la necesidad de adquirir copias físicas.</p>

                    <h3 className='pregunta'>¿Es necesario registrarse para leer en la plataforma?</h3>
                    <p>No, no es necesario registrarse para disfrutar de la lectura en nuestra plataforma. Valoramos la accesibilidad y la simplicidad, por lo que hemos eliminado cualquier barrera que pueda limitar tu experiencia. Puedes visitar nuestro sitio web y comenzar a explorar y leer libros y mangas de forma inmediata, sin tener que pasar por un proceso de registro.</p>

                    <h3 className='pregunta'>¿Puedo descargar los libros y mangas para leerlos offline?  </h3>
                    <p>Actualmente, nuestra plataforma no ofrece la opción de descargar libros y mangas para leerlos offline. Sin embargo, nos esforzamos por proporcionar una experiencia de lectura en línea fluida y conveniente. Puedes acceder a nuestros contenidos en cualquier momento y desde cualquier lugar con conexión a Internet.</p>

                    <h3 className='pregunta'>¿Hay algún límite de tiempo para acceder a los contenidos en tu página web?</h3>
                    <p>No, en nuestra página web no hay ningún límite de tiempo para acceder a los contenidos. Puedes disfrutar de la lectura de libros y mangas en nuestra plataforma sin restricciones temporales. Queremos que tengas la libertad de explorar y sumergirte en las historias a tu propio ritmo, sin preocuparte por fechas de vencimiento o límites de tiempo.</p>
                    <p>Nuestro objetivo es brindarte una experiencia de lectura sin presiones, para que puedas disfrutar plenamente de los libros y mangas que elijas, cuando mejor te convenga.</p>
                </section>
              
            </section>

            
        </section>
        <section class="menu_secundario">
            <img src={publicidad} alt="Publicidad" />
            <section class="autores">
            <img src={publicidad} alt="Publicidad" />
            </section>

            <section class="autores">
            <img src={publicidad} alt="Publicidad" />
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