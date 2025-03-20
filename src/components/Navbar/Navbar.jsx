import React, {useState} from 'react'
import Logo from '../../assets/Logo.png'

const navbarlinks = [
       {
        id:1,
        title:"Home",
        link:"/"
        },
       /* {
        id:2,
        title:"Sobre",
        link:""
        },*/
       /* {
        id:3,
        title:"Servicios",
        link:"#"
        },*/
        {
        id:4,
        title:"Contact",
        link:"https://linktr.ee/alexm522"
        },
]

const navbarRedes =[
    {
        id:1,
        tittle:"Instagram",
        link:"https://www.instagram.com/alexm522/",
        icon: 'bi bi-instagram',
    },
    {
        id:2,
        tittle:"Mas Info",
        link:"https://linktr.ee/alexm522",
        icon: 'bi bi-laptop color="white"'
    }
]

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
    setIsOpen(!isOpen);
};
    return (
    <nav className="fixed top-0 left-0 w-full  bg-opacity-30 backdrop-blur-md z-50">
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">

        {/*Logo navbar*/}
        <div>
            <img src={Logo} alt='Logo del sitio' className='w-[100px]'/>
        </div>
         
         {/*Boton de Hamburguesa*/}
         <button onClick={toggleMenu} className="md:hidden text-white">
            <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
            >
                {isOpen ? (<path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                />) : ( <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                />
                )}        
            </svg>
         </button>

         {/*Navegacion Desktop*/}
        <div className='hidden md:block'>
            <ul className='flex sm:space-x-8 space-x-4'>
                {navbarlinks.map((link)=>(
                        <li key={link.id}>
                            <a className='text-white sm:text-lg text-sm hover:text-sky-200 
                            transition-transform hover:scale-110 transform inline-block duration-300' 
                            href={'link.link'}>
                                {link.title}
                            </a>    
                        </li>
                ))}
            </ul>
        </div>


    {/*Navegacion Redes desktop*/}
        <div className='hidden md:block'>
            <ul className='flex space-x-4'>
            {navbarRedes.map((link)=>(
                        <li key={link.id}>
                            <a 
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block transition-transform duration-300 transform hover:scale-125'
                            href={link.link}
                            >
                                <i
                                 className={`${link.icon} sm:text-2x1 text-lg text-black hover:text-sky-200 transition-all
                                 duration-300`}
                                ></i>  
                            </a>    
                        </li>
                ))}
            </ul>
        </div>

         </div>

             {/*Menu Movil*/}
             <div className={`md:hidden absolute w-full bg-sky-950 transition-all duration-500 ${isOpen ? "opacity-100 visible" : 
                "opacity-0 invisible"}`}>
                <ul className='flex flex-col px-4 py-2'>
                {navbarlinks.map((link)=>(
                        <li key={link.id} className='py-2 text-center'>
                            <a className='text-white hover:text-sky-500' 
                            href={'link.link'} onClick={()=>setIsOpen(false)}>
                                {link.title}
                            </a>    
                        </li>
                ))}
            </ul>

            <ul className='flex space-x-4 px-4 py-2 border-t border-green-800 justify-center'>
            {navbarRedes.map((link)=>(
                        <li key={link.id}>
                            <a 
                            target='_blank'
                            rel='noopener noreferrer'
                            className=''
                            href={link.link}
                            onClick={()=>setIsOpen(false)}
                            >
                                <i
                                 className={`${link.icon} text-lg text-white hover:text-sky-200`}
                                ></i>  
                            </a>    
                        </li>
                ))}
            </ul>

            </div>
    </nav>
  )
}

export default Navbar
