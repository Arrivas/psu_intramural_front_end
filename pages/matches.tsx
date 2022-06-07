import { GetServerSideProps } from 'next';
import axios from 'axios';
import links from '../config/links';
import MatchesComp from '../components/matches/MatchesComp'

interface MatchesProps {
  matches:any
}
 
const Matches: React.FC<MatchesProps> = ({matches}) => {
  return ( <>
  <MatchesComp matches={matches}/>
  </> );
}
 
export default Matches;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let matches: any = [];
  await axios
    .get(`${links.default}/matches`)
    .then((res) => (matches = res.data))
    .catch((err) => console.log(err));
  return {
    props: {
      matches,
    },
  };
};