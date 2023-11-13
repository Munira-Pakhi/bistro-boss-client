import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item  
         bg-fixed text-white pt-8 my-20">
            <SectionTitle 
            subHeading={"Check it out"}
            heading={"From our menu"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-800 bg-opacity-40 py-20 px-36 ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className=" uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illum eligendi incidunt aperiam voluptate sed expedita minus dolore inventore tempore, vitae odio totam sit consequatur iure aut magni distinctio consequuntur voluptatum facere ipsum! Excepturi temporibus, qui, id deserunt perferendis laudantium impedit omnis minima aut, dolores quisquam nam alias earum reprehenderit.</p>
                    <button className="btn btn-outline text-white border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;