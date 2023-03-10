import PageMainImage from "../../Components/PageMainImage/index";

import { fetchQuery } from "../../util";
import Head from "../../Components/Head/index";
const Careers = ({ art }) => {
  console.log(art);
  const imgUrl = art.main_image ? art.main_image.data.attributes.url : "";

  return (
    <div>
      <Head title={art.meta_title} description={art.meta_description} />
      <PageMainImage mainImage={imgUrl} title={art.title} />
      <div className="flex justify-center">
        <h1>{art.art_title}</h1>
        <div className="w-1/2 text-center mt-2">{art.description}</div>
      </div>
    </div>
  );
};

export default Careers;
export async function getServerSideProps() {
  const response = await fetchQuery("art-prize?populate=deep");
  console.log();
  return {
    props: { art: response.data.attributes },
  };
}
