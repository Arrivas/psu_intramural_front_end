import { GetServerSideProps } from 'next';
import axios from 'axios';
import links from '../config/links';
import GameResultComp from '../components/gameresult/GameResultComp';

interface GameResultProps {
  results: any;
}

const GameResult: React.FC<GameResultProps> = ({ results }) => {
  return (
    <>
      <GameResultComp results={results} />
    </>
  );
};

export default GameResult;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let results: any = [];
  await axios
    .get(`${links.default}/results`)
    .then((res) => (results = res.data))
    .catch((err) => console.log(err));
  return {
    props: {
      results,
    },
  };
};
