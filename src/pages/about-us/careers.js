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

export default Careers;
export async function getServerSideProps() {
  const response = await fetchQuery("career?populate=deep");

  return {
    props: { careers: response.data.attributes },
  };
}
