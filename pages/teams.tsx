import { GetServerSideProps } from 'next';
import TeamsRed from '../redirects/TeamsRed';
import axios from 'axios';
import links from '../config/links';

interface TeamsProps {
  teams: any;
}

const Teams: React.FC<TeamsProps> = ({ teams }) => {
  return (
    <>
      <TeamsRed teams={teams} />
    </>
  );
};

export default Teams;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let teams: any = [];
  await axios
    .get(`${links.default}/teams`)
    .then((res) => (teams = res.data))
    .catch((err) => console.log(err));
  return {
    props: {
      teams,
    },
  };
};
