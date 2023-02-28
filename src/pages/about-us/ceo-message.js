import PageMainImage from "../../Components/PageMainImage/index";
import Head from "../../Components/Head/index";

import { fetchQuery } from "../../util";
const CeoMessage = ({ message }) => {
  const imgUrl = message.main_image
    ? message.main_image.data.attributes.url
    : "";

  return (
    <div>
      <Head title={message.meta_title} description={message.meta_description} />
      <PageMainImage mainImage={imgUrl} title={message.title} />
    </div>
  );
};

export default CeoMessage;
export async function getServerSideProps() {
  const response = await fetchQuery("ceo-message?populate=deep");

  return {
    props: { message: response.data.attributes },
  };
}
