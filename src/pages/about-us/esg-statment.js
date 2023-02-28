import PageMainImage from "../../Components/PageMainImage/index";
import Head from "../../Components/Head/index";

import { fetchQuery } from "../../util";
const EsgStatment = ({ statment }) => {
  const imgUrl = statment.main_image
    ? statment.main_image.data.attributes.url
    : "";

  return (
    <div>
      <Head
        title="career"
        description="this is a test description for career "
      />
      <PageMainImage mainImage={imgUrl} title={statment.title} />
    </div>
  );
};

export default EsgStatment;
export async function getServerSideProps() {
  const response = await fetchQuery("seg-statment?populate=deep");

  return {
    props: { statment: response.data.attributes },
  };
}
