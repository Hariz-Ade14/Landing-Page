import {FaWhatsapp , FaCopyright , FaTwitter , FaInstagram} from "react-icons/fa";

const Footer = () => {
    return (
         <div>
               <footer className="my-5">
                    <div className="socials d-flex mb-4 mx-auto justify-content-evenly w-25">
                          <FaWhatsapp size={30}/>
                          <FaTwitter size={30}/>
                          <FaInstagram size={30}/>
                    </div>
                    <div>
                         <p className="text-center"><FaCopyright color="white"/>gymix@gmail.com</p>
                    </div>
              </footer>
    </div> 
    );
}
 
export default Footer;