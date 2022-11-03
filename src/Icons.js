import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-scroll';

const Icons = () => {

    const styleforpaper = {
        width: '40px',
      height: '40px',
      padding: 1,  
      }
  return (
    <div className=" flex items-center justify-center   " > 
        <a href="https://www.linkedin.com/in/jyothesh-karnam-5a90241bb/" > 
          < LinkedInIcon  style={styleforpaper} 
          className=" mx-6  bg-black text-orange-400 rounded-xl shadow-lg shadow-orange-500/50 
          hover:bg-orange-400 hover:text-black hover:shadow-black hover:scale-130 transition transform duration-400 ease-out "  />
        </a>
  
        <a href="https://github.com/jyotheshkar" > 
          < GitHubIcon style={styleforpaper}
          className=" mx-6  bg-black text-orange-400 rounded-xl shadow-lg shadow-orange-500/50 hover:bg-orange-400 hover:text-black hover:shadow-black
          hover:scale-130 transition transform duration-400 ease-out  "  />
        </a>

        <a href="" > 

        <Link to='contact' smooth={true} duration={500}>
            
         
          < EmailIcon style={styleforpaper} 
          className=" mx-6 bg-black text-orange-400 rounded-xl shadow-lg shadow-orange-500/50 hover:bg-orange-400 hover:text-black hover:shadow-black
           hover:scale-130 transition transform duration-400 ease-out "  />
            </Link>
        </a>

        <a href="" > 
        <Link to='contact' smooth={true} duration={500}>
          < PersonIcon style={styleforpaper}
           className=" mx-6 bg-black text-orange-400 rounded-xl shadow-lg shadow-orange-500/50 hover:bg-orange-400 hover:text-black hover:shadow-black
           hover:scale-130 transition transform duration-400 ease-out  "  />
    </Link>
        </a>
      
  
         </div>

  )
}

export default Icons