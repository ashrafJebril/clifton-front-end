import PageMainImage from "../../Components/PageMainImage/index";
import http from "../../http";
import { fetchQuery } from "../../util";
const Careers = ({ story }) => {
  console.log(story);
  const imgUrl = story.main_image ? story.main_image.data.attributes.url : "";

  return (
    <div>
      <PageMainImage mainImage={imgUrl} title={story.title} />
    </div>
  );
};

// const mapState = (state) => ({
//   careers: state.about.data,
// });
// const mapDispatch = (dispatch) => ({
//   getCareers: () => dispatch.about.getCareers(),
// });

export default Careers;
export async function getServerSideProps() {
  // Call the fetch method and passing
  // the pokeAPI link
  const response = await fetchQuery("story?populate=deep");

  return {
    props: { story: response.data.attributes },
  };
}

// Parse the JSON
// const data = await response.json();
// return {
//   props: { allPokemons: response },
// };
