import squatImg from "../../assets/Images/april-laugh-YecfeHnwib8-unsplash.jpg";
import pushup from "../../assets/Images/meagan-stone-kC5KL_iUpL4-unsplash.jpg";
import abs from "../../assets/Images/charles-gaudreault-xXofYCc3hqc-unsplash.jpg";
import cardio from "../../assets/Images/samuel-girven-RrCvrrYtlqQ-unsplash.jpg";
import trainer1 from "../../assets/Images/sushil-ghimire-DC5akQJyH4I-unsplash.jpg";
import trainer2 from "../../assets/Images/sushil-ghimire-5UbIqV58CW8-unsplash.jpg";
import trainer3 from "../../assets/Images/gordon-cowie-ohQiBoCqViM-unsplash.jpg";
import img6 from "../../assets/Images/luke-aguaita-Nm5yy2sbgB8-unsplash.jpg";
import img7 from "../../assets/Images/rachel-moore-vCOd2HJ97AI-unsplash.jpg";
import img8 from "../../assets/Images/hayley-kim-studios-eot-ka5dM7Q-unsplash.jpg";
import img9 from "../../assets/Images/rachel-moore-zfPEja1D0YA-unsplash.jpg";
import {FaWhatsapp} from "react-icons/fa"
import { useRef, useState } from "react";

const Home = () => {
    const {style} = useRef();
    return ( 
         <div> 
               <div className="home mx-0 px-0">
                    <div>
                        <h1 className="">Build a perfect Body</h1>
                        <h4>Transform Your Life</h4>
                        <button className="btn" style={{color:"white" , background:"black"}}>Learn More</button>
                    </div>
               </div>
               <div className="bg-dark py-5">
                     <p className="text-center text-white mb-4" style={{fontSize: "30px" , fontWeight: "lighter"}}>Build Your Best Body</p>
                     <div className="row d-flex align-items-center justify-content-center">
                          <div className="col-3">
                              <img src={squatImg} id="squat" className="img-fluid shadow-lg" alt=""/>
                          </div>   
                          <div className="col-3">
                              <img src={pushup} className="img-fluid shadow-lg" alt=""/>
                          </div>   
                          <div className="col-3">
                              <img src={abs} className="img-fluid shadow-lg" alt=""/>
                          </div>   
                     </div>
               </div>
               <div className="pb-4" style={{background: "black"}}>
                    <div className="row d-flex align-items-center justify-content-center">
                         <div className="col-sm-5 shadow-lg py-5 d-flex align-items-center justify-content-center">
                              <img src={cardio} alt="cardio" className="cardio" height={"500px"}/>
                         </div>
                         <div className="col-sm-5" style={{paddingLeft: "50px"}}>
                              <p style={{fontSize: "30px" , marginLeft:"12px" , fontWeight: "lighter" , color:"white"}}>Benefits of Working Out</p>
                              <ol style={{fontSize: "20px" , color: "gray"}}>
                                  <li>Exercise can make you feel happier.</li>
                                  <li>Exercise can help with weight loss.</li>
                                  <li>Exercise is good for your muscles and bones.</li>
                                  <li>Exercise can increase your energy levels.</li>
                                  <li>Exercise can reduce your risk of chronic diseases.</li>
                                  <li>Exercise can help skin health.</li>
                                  <li>Exercise can help your brain health and memory.</li>
                                  <li>Exercise can help with relaxation and sleep quality.</li>
                                  <li>Exercise can promote a better sex life.</li>
                                  <li>Exercise can reduce pain.</li>
                              </ol>
                              <button className="btn btn-outline-danger my-4 mx-2 text-white">Join Us</button>
                         </div>
                    </div>
               
                    <div className="my-5">
                         <h2 className="text-center text-white">Meet Our Trainers</h2>
                         <div className="row bg-none mt-5 d-flex align-items-center justify-content-center">
                              <div ref={style} id="trainer-col-1" className="col-6 col-sm-2 my-2 mx-3 p-0 shadow bg-dark">
                                   <img src={trainer1} id="trainerImg" className="img-fluid w-100 shadow" style={{height:"300px"}} alt=""/>
                                   <div className="about-trainer">
                                        <p>Jane Morgan</p>
                                        <FaWhatsapp size={40} color="pink" />
                                   </div>
                                   
                              </div>
                              <div ref={style} id="trainer-col-2" className="col-6 col-sm-3 my-2 mx-3 p-0">
                                   <img src={trainer2} id="trainerImg" className="img-fluid w-100 shadow" style={{height:"500px"}} alt=""/>
                                   <div className="about-trainer-2">
                                        <p>Jane Doe</p>
                                        <FaWhatsapp size={40} color="white" />
                                   </div>
                              </div>
                              <div ref={style} id="trainer-col-3" className="col-6 col-sm-2 my-2 mx-3 p-0 bg-danger">
                                   <img src={trainer3} id="trainerImg" className="img-fluid w-100 shadow" style={{height:"300px"}} alt=""/>
                                   <div className="about-trainer-3">
                                        <p>John Doe</p>
                                        <FaWhatsapp size={40} color="white" />
                                   </div>
                              </div>
                              
                              
                         </div>
                    </div>
               </div>
               <div className="mb-5">
                  <h2 className="text-center py-5 text-dark">All Times Fitness Gallery</h2>
                  <div className="row d-flex justify-content-center align-items-center">
                       <div className="col-10 col-sm-5">
                         <div className="row p-0">
                              <div className="col-6 d-flex justify-content-end align-items-center m-0 p-0">
                                   <img loading="lazy" src={img6}  style={{height:"200px"}} className="img-fluid w-50" alt=""/>
                              </div>
                              <div className="col-6 d-flex justify-content-start align-items-center m-0 p-0">
                                   <img loading="lazy" src={img7}  style={{height:"200px"}} className="img-fluid w-50" alt=""/>
                              </div>
                              <div className="col-6 d-flex justify-content-end align-items-center m-0 p-0">
                                   <img loading="lazy" src={img8}  style={{height:"200px"}} className="img-fluid w-50" alt=""/>
                              </div>
                              <div className="col-6 d-flex justify-content-start align-items-center m-0 p-0">
                                   <img loading="lazy" src={img9}  style={{height:"200px"}} className="img-fluid w-50" alt=""/>
                              </div>
                         </div>
                       </div>
                       <div className="col-10 p-5 col-sm-5 text-center d-flex align-items-center justify-content-center">
                              <p>
                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit numquam cupiditate reprehenderit, facilis, temporibus quae quasi, facere mollitia incidunt expedita odit asperiores. Porro id at aliquid earum. Aspernatur, beatae asperiores?
                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit numquam cupiditate reprehenderit, facilis, temporibus quae quasi, facere mollitia incidunt expedita odit asperiores. Porro id at aliquid earum. Aspernatur, beatae asperiores?
                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit numquam cupiditate reprehenderit, facilis, temporibus quae quasi, facere mollitia incidunt expedita odit asperiores. Porro id at aliquid earum. Aspernatur, beatae asperiores?
                                   <br/><button className="btn btn-outline-dark mt-4">Gallery</button>              
                              </p>
                      </div>

                  </div>
              </div>

             
         </div>
     );
}
 
export default Home;