import { GetServerSideProps } from 'next';
import axios from 'axios';
import links from '../config/links';
import VenueComp from '../components/venue/VenueComp';

interface VenueProps {
  venues: any;
}

const Venue: React.FC<VenueProps> = ({ venues }) => {
  return (
    <>
      <VenueComp venues={venues} />
    </>
  );
};

export default Venue;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let venues: any = [];
  await axios
    .get(`${links.default}/venues`)
    .then((res) => (venues = res.data))
    .catch((err) => console.log(err));
  return {
    props: {
      venues,
    },
  };
};
