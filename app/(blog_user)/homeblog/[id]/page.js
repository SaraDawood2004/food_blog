import styles from "../../styles/hom.module.css";
import bean from "../../images/bean.jpeg";
import beef from "../../images/beef.jpeg";
import bir from "../../images/bir.jpeg";
import bread from "../../images/bread.jpeg";
import cake from "../../images/cake.jpeg";
import cour from "../../images/cour.jpeg";
import crab from "../../images/crab.jpeg";
import gar from "../../images/gar.jpeg";
import goulash from "../../images/goulash.jpeg";
import mac from "../../images/mac.jpeg";

const foodData = {
  bean: {
    name: "Bean Salad",
    img: bean,
    description: "This was a refreshing dish during my summer picnic. The beans were tangy and crisp!",
  },
  beef: {
    name: "Chicken Shakshuka",
    img: beef,
    description: "My first time trying this and I was amazed by the flavor of tomatoes with poached chicken.",
  },
  bir: {
    name: "Dham Biryani",
    img: bir,
    description: "An unforgettable dinner at a friend's wedding. The biryani was smoky and aromatic.",
  },
  bread: {
    name: "Bread Tom Salad",
    img: bread,
    description: "Tried this in a food festival, so crunchy and juicy with olive oil drizzled.",
  },
  cake: {
    name: "Cheese Cake",
    img: cake,
    description: "Baked this for my birthday, turned out creamy and rich!",
  },
  cour: {
    name: "Courgette Grattin",
    img: cour,
    description: "A light and healthy dish I tried during my diet. Still tasted amazing.",
  },
  crab: {
    name: "Crab Cake",
    img: crab,
    description: "Had it at a coastal restaurant—soft on the inside and crispy on the outside.",
  },
  gar: {
    name: "Garlic Chicken",
    img: gar,
    description: "My comfort food. Made this multiple times during lockdown!",
  },
  goulash: {
    name: "Goulash Gravy",
    img: goulash,
    description: "Hearty and flavorful. Tried this at a Hungarian restaurant.",
  },
  mac: {
    name: "Cheese Pasta",
    img: mac,
    description: "Late night cravings solved with this gooey cheesy dish.",
  },
};

const DynamicPage = ({ params }) => {
  const { id } = params;
  const food = foodData[id];

  if (!food) {
    return <div className={styles.container_dynamic}><h2>Food not found</h2></div>;
  }

  return (
    <div className={styles.container_dynamic}>
      <h1>{food.name}</h1>
      <br></br>
      <img src={food.img.src} alt={food.name} className={styles.image1} />
        <br></br>
      <p className={styles.description}>{food.description}</p>
    </div>
  );
};

export default DynamicPage;
