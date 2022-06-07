import { GetServerSideProps } from 'next';
import axios from 'axios';
import links from '../config/links';
import RankingComp from '../components/rankings/RankingComp';

interface RankingsProps {
  rankings: any
}

const Rankings: React.FC<RankingsProps> = ({rankings}) => {
  return (
    <>
      <RankingComp rankings={rankings}/>
    </>
  );
};

export default Rankings;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let rankings: any = [];
  await axios
    .get(`${links.default}/rankings`)
    .then((res) => (rankings = res.data))
    .catch((err) => console.log(err));
  return {
    props: {
      rankings,
    },
  };
};
