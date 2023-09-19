import { Suspense, lazy, useEffect } from 'react';

import useFetch from '../../hooks/useFetch';

import Head from '../../helpers/Head';
import Loading from '../../helpers/Loading/Loading';
import Error from '../../helpers/Error';

import { STATISTICS_GET } from '../../api';

const UserStatisticsGraphs = lazy(
  () => import('./UserStatisticsGraphs/UserStatisticsGraphs')
);

const UserStatistics = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem('token');
      if (token) {
        const { url, options } = STATISTICS_GET(token);
        await request(url, options);
      }
    };
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
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
