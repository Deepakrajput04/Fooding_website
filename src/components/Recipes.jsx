import img1 from "../assets/recipe1.png";
import img2 from "../assets/recipe2.png";
import img3 from "../assets/recipe3.png";

const Recipes = () => {
  return (
    <>
      <div className="container-fluid Recipes py-5 my-2" id="menu">
        <div className="container">
          <div className="row pb-5 pd-mb-0 align-items-center">
            <div className="col-lg-10 col-6">
              <h1 className="main-heading">
                <span>Trending</span> Recipes
              </h1>
            </div>
            <div className="col-lg-2 col-6 text-end">
              <button className="btn1 btn_0 fs-lg-5 fs-5">
                See All <i class="fa-solid fa-arrow-right ps-2"></i>
              </button>
            </div>
          </div>
          <div className="row gx-0 mt-lg-4 align-items-center">
            <div className="col-lg-4 py-3 py-lg-0">
              <img src={img1} alt="" />
              <div className="Recipes_col1">
                <h4>$40</h4>
                <h5>Vegan Sweet & Chikenpea Curry</h5>
                <div className="Recipes_mid py-2">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-5">
                      <div className="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="col-12 col-lg-7 py-3 py-lg-0">
                      {""}
                      <button className="border-0">
                        Add To Cart {""}
                        <i class="fa-solid fa-cart-shopping"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 py-3 py-lg-0">
              <img src={img2} alt="" />
              <div className="Recipes_col1">
                <h4>$30</h4>
                <h5>Pepper Steak</h5>
                <div className="Recipes_mid py-2">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-5">
                      <div className="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="col-12 col-lg-7 py-3 py-lg-0">
                      {""}
                      <button className="border-0">
                        Add To Cart {""}
                        <i class="fa-solid fa-cart-shopping"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 py-3 py-lg-0">
              <img src={img3} alt="" />
              <div className="Recipes_col1">
                <h4>$39.9</h4>
                <h5>Penne Pasta IN Tomato Sauce</h5>
                <div className="Recipes_mid py-2">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-5">
                      <div className="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="col-12 col-lg-7 py-3 py-lg-0">
                      {""}
                      <button className="border-0">
                        Add To Cart {""}
                        <i class="fa-solid fa-cart-shopping"></i>
                      </button>
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

export default Recipes;
