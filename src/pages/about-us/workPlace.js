import PageMainImage from "../../Components/PageMainImage/index";
import Head from "../../Components/Head/index";

import { fetchQuery } from "../../util";
const Careers = ({ story }) => {
  console.log(story);
  const imgUrl = story.main_image ? story.main_image.data.attributes.url : "";

  return (
    <div>
      <Head title={story.meta_title} description={story.meta_description} />
      <PageMainImage mainImage={imgUrl} title={story.title} />
    </div>
  );
};

export default Careers;
export async function getServerSideProps() {
  const response = await fetchQuery("story?populate=deep");

  return {
    props: { story: response.data.attributes },
  };
}
