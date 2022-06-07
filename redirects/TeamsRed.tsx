import TeamsComp from '../components/teams/TeamsComp';

interface TeamsRedProps {
  teams: any;
}

const TeamsRed: React.FC<TeamsRedProps> = ({ teams }) => {
  return (
    <>
      <TeamsComp teams={teams} />
    </>
  );
};

export default TeamsRed;
