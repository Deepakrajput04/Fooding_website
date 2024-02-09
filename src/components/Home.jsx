import heroimg from "../assets/Home3.png";


const Home = () => {

  return (
    <>
      <div className="container-fluid home_main" id="Home">
        <div className="container">
          <div className="row align-items-lg-center">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="hero_col1">
                <h1>The taste of tradition's with a modern twist.</h1>
                <p className="py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.Alliquam, voluptas? Voluplate sapiente harum, a qui
                  veritatis obacaecatil nostrum quidem quis expedita unde amet
                  ducimus!
                </p>
                <div className="hero btns">
                  <button className="btn1 s-5 btn0 my-2 mx-md-0">Get Started</button>
                  <button className="btn1 mx-lg-4 fs-5 btn00 my-2 mx-md-0">
                    see ours menus
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="hero_col2">
                <img src={heroimg} alt="heroimg" className="img-fluid img_back" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
