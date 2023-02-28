import PageMainImage from "../../Components/PageMainImage/index";
import Head from "../../Components/Head/index";

import { fetchQuery } from "../../util";
const CeoMessage = ({ message }) => {
  const imgUrl = message.main_image
    ? message.main_image.data.attributes.url
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

export default CeoMessage;
export async function getServerSideProps() {
  const response = await fetchQuery("career?populate=deep");

  return {
    props: { message: response.data.attributes },
  };
}
