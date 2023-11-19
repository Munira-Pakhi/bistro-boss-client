import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular =menu.filter(item => item.category === 'popular');
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  return (
    <section className="my-12">
      <SectionTitle
        subHeading={"Should Try"}
        heading={"Chef recommends"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {
        popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))
        }
      </div>
      <div className=" flex justify-center mt-5">
      <button className="btn btn-outline border-0 border-b-4 mt-4">
        View Full Menu
      </button>
      </div>
    </section>
  );
};

export default PopularMenu;
