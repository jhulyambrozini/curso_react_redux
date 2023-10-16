import { Suspense, lazy } from 'react';

import Head from '../../helpers/Head';
import Loading from '../../helpers/Loading/Loading';
import Error from '../../helpers/Error';

import { useStatisticsGetQuery } from '../../services/api';

const UserStatisticsGraphs = lazy(
  () => import('./UserStatisticsGraphs/UserStatisticsGraphs')
);

const UserStatistics = () => {

  const token = window.localStorage.getItem('token');
  const { data, isError, isLoading, error } = useStatisticsGetQuery(token!)
  
  if (isLoading) return <Loading />;
  if (isError) return <Error error={error as string} />;
  if (!data) return null;

  const dataValid = data as GraphData[];
  return (
    <Suspense fallback={<div></div>}>
      <Head
        title="Estatísticas"
        description="Estatísticas sobre o perfil do usuário"
      />
      <UserStatisticsGraphs data={dataValid} />
    </Suspense>
  );
};

export default UserStatistics;
