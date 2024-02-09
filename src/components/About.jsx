import img from "../assets/about.png";
import React, { useState, useEffect } from 'react';

const About = () => {
  const [customerCount, setCustomerCount] = useState(25);
  const [awardCount, setAwardCount] = useState(1);
  const [menuCount, setMenuCount] = useState(10);

  useEffect(() => {
   const customInterval = setInterval(() => {
    setCustomerCount(prevCount => prevCount + 1)
   }, 200)
   const awardCountInterval = setInterval(() => {
    setAwardCount(prevCount => prevCount + 1)
   }, 200)
   const menuCountInterval = setInterval(() => {
    setMenuCount(prevCount => prevCount + 1 )
   }, 200)

   if(customerCount >= 100) clearInterval(customInterval);
   if(awardCount >= 5) clearInterval(awardCountInterval);
   if(menuCount >= 50) clearInterval(menuCountInterval);

   return () => {
    clearInterval(customInterval);
    clearInterval(awardCountInterval);
    clearInterval(menuCountInterval);
   }

  }, [customerCount, awardCount, menuCount]);

 
  return (
    <>
   
      <div className="container-fluid py-5" id="About">
        <div className="container">
          <div className="row gx-0 align-items-center">
            <div className="col-lg-6">
              <div className="about_col1">
                <img src={img} alt="About_img" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_col2">
                <h3>OVERVIEW</h3>
                <h1>A Little Information For Our Guest</h1>
                <p className="main_P py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Omnis
                  quidem veritatis cum cupiditate suscipit autem nisi Fugiat
                  quae amet. At beatae mollitia odio tempare est, Iaborum
                  aliquid voluptatum accusamus neque?
                </p>
                <div className="counter">
                    <div className="row">
                        <div className="col-md-5 py-3 py-md-0">
                            <h1 className="count" data-bs-target="500">{customerCount}k +</h1>
                            <h5>Happy Customer</h5>
                        </div>
                        <div className="col-md-4 py-3 py-md-0">
                            <h1 className="count" data-bs-target="430">{awardCount} +</h1>
                            <h5>Award Win</h5>
                        </div>
                        <div className="col-md-3 py-3 py-md-0">
                            <h1 className="count" data-bs-target="300">{menuCount} +</h1>
                            <h5>Food Menu</h5>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
