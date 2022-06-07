import { GetServerSideProps } from 'next';
import axios from 'axios';
import links from '../config/links';
import LineupComp from '../components/lineup/LineupComp';

interface LineupProps {
  lineups: any;
}

const Lineup: React.FC<LineupProps> = ({ lineups }) => {
  return (
    <>
      <LineupComp lineups={lineups} />
    </>
  );
};

export default Lineup;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let lineups: any = [];
  await axios
    .get(`${links.default}/lineups`)
    .then((res) => (lineups = res.data))
    .catch((err) => console.log(err));
  return {
    props: {
      lineups,
    },
  };
};
