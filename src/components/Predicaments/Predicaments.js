import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Predicaments.css";
import { baseUrl } from "../..";
import { fetchCategoriesList } from "../../asyncAction/categories";



function Categories() {


  const categories = useSelector((store) => store.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, []);


  function fourCategories(categories) {
    return categories.slice(0, 4);
  }


  let newCategories = fourCategories(categories);

  

  return (
    <div className="categories_wrapper" id="categories">
      <section className="categories_sec">
        <div className="cat_text-div">
          <h3 className="cat_text">Categories</h3>
          <Link to={"/allCategoriesList"}>
            <button className="all_cat-button">All Categories</button>
          </Link>
        </div>

        <div className="info_info">
          {newCategories.map((elem) => (
            <div key={elem.id} className="all_categ-photos">
              <Link
                className="allCategories_link"
                key={elem.id}
                to={`/allCategoriesList/${elem.id}`}
              >
                <h4 className="cat_title">{elem.title}</h4>
                <div
                  className="all_photos-div"
                  style={{ backgroundImage: `url(${baseUrl + elem.image})` }}
                >
                  {/* <img width={318} height = {350} className='all_photos-div' src={baseUrl + elem.image} alt= 'photo'/> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Categories;
