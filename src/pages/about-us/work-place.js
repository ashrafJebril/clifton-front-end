import PageMainImage from "../../Components/PageMainImage/index";
import Head from "../../Components/Head/index";

import { fetchQuery } from "../../util";
const WorkPlace = ({ work }) => {
  const imgUrl = work.main_image ? work.main_image.data.attributes.url : "";
  return (
    <div>
      <Head title={work.meta_title} description={work.meta_description} />
      <PageMainImage mainImage={imgUrl} title={work.title} />
    </div>
  );
};

export default WorkPlace;
export async function getServerSideProps() {
  const response = await fetchQuery("work-place?populate=deep");

  return {
    props: { work: response.data.attributes },
  };
}
