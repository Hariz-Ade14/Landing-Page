import jog from "../../assets/Images/jogging.jpg";
import equipment1 from "../../assets/Images/andrew-valdivia-AB7TcT_GVU0-unsplash.jpg";
import equipment2 from "../../assets/Images/gordon-cowie-7oPvdWF9gi0-unsplash.jpg";
import equipment3 from "../../assets/Images/brett-jordan-U2q73PfHFpM-unsplash.jpg";


const Services = () => {
    return (
         <div className="">
              <div className="services">
                   <div>
                        <div>
                            <h1 className="text-center" style={{color:"orange"}}>Transform Your Life with Our Services</h1>
                            <button className="d-flex mx-auto btn text-white" style={{background:"orange"}}>Register Now!</button>
                        </div>
                        <div id="ABT" className="text-light d-flex align-items-center justify-content-between">
                             <div className="abt">
                                 <h1>55k+</h1>
                                 <p className="text-center" style={{fontSize: "14px"}}>Happy Clients</p>
                             </div>
                             <div className="abt">
                                 <h1>5 years+</h1>
                                 <p className="text-center" style={{fontSize: "14px"}}>Experience</p>
                             </div>
                             <div className="abt">
                                 <h1>Over 20</h1>
                                 <p className="text-center" style={{fontSize: "14px"}}>Expert Trainers</p>
                             </div>
                           
                        </div>
                   </div>
                  
              </div>
              <div style={{background:"black"}}>
                   <div className="row d-flex align-items-center justify-content-center" >
                        <div id="service" className="col-md-3 mx-3 text-center shadow-lg"> 
                            <h3>Consultancy</h3>
                            <p>
                                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor 
                                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor 
                            </p>
                        </div>
                        <div id="service" className="col-md-3 mx-3 text-center shadow-lg">
                            <h3>Nutrition</h3> 
                            <p>
                                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor 
                                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor 
                            </p>
                        </div>
                        <div id="service" className="col-md-3 mx-3 text-center shadow-lg">
                            <h3>Lifestyle</h3> 
                            <p>
                                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor 
                                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor 
                            </p>
                        </div>
                   
                   </div>
                   <div className="row mt-5">
                        <div className="col-sm-6 d-flex justify-content-center align-items-center">
                             <div>
                                <h1 className="text-center" style={{color: "white"}}>
                                    Why <span style={{color: "orange"}}>Choose us</span>
                                </h1> 
                                <ul className="text-light mx-5 py-4">
                                    <li>Our instructors are expert in what they do</li>
                                    <li>We also have expert nutritionist</li>
                                    <li>Our Gym is well exuiped with modern machines and equipments</li>
                                    <li>We also have expert nutritionist</li>
                                </ul>
                             </div>
                            
                        </div>
                        <div className="col-sm-6 d-flex justify-content-center">
                                <img src={jog} alt="" style={{width: "300px" , height:"400px"}}/>
                        </div>
                   </div>
              </div>
              <div className="equipments bg-dark p-5">
                   <h3 className="text-light text-center">Equipments</h3>
                   <div className="row mt-5">
                        <div className="col-sm-4 mt-4 mt-sm-0">
                             <img src={equipment1} className="img-fluid w-100 h-100" alt=""/>
                        </div>
                        <div className="col-sm-4 mt-4 mt-sm-0">
                             <img src={equipment2} className="img-fluid w-100 h-100" alt=""/>
                        </div>
                        <div className="col-sm-4 mt-4 mt-sm-0">
                             <img src={equipment3} className="img-fluid w-100 h-100" alt=""/>
                        </div>
                   </div>
                   
              </div>

             <div id="carouselExample" class="carousel slide my-4">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                         <img src={equipment1} class="img-fluid d-block w-50 w-sm-50 mx-auto" alt="..."/>
                    </div>
                    <div class="carousel-item">
                         <img src={equipment2} class="img-fluid d-block w-50 w-sm-50 mx-auto" alt="..."/>
                    </div>
                    <div class="carousel-item">
                         <img src={equipment3} class="img-fluid d-block w-50 w-sm-50 mx-auto" alt="..."/>
                    </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                         <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                         <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                         <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                         <span class="visually-hidden">Next</span>
                    </button>
            </div>
              
         </div>
      );
}
 
export default Services;
