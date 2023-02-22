import PageMainImage from "../../Components/PageMainImage/index";
import Head from "../../Components/Head/index";

import { fetchQuery } from "../../util";
const Careers = ({ careers }) => {
  console.log(careers);
  const imgUrl = careers.main_image
    ? careers.main_image.data.attributes.url
    : "";

  return (
    <div>
      <Head
        title="career"
        description="this is a test description for career "
      />
      <PageMainImage mainImage={imgUrl} title={careers.title} />
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
  const response = await fetchQuery("career?populate=deep");

  return {
    props: { careers: response.data.attributes },
  };
}

// Parse the JSON
// const data = await response.json();
// return {
//   props: { allPokemons: response },
// };
