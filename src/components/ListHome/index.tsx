import { Container, Tweets } from './styles';
import { useContexState } from '../../hooks/context'

import { DateCard } from '../DateCard';

export function Feed() {
  const setResults = new Set();
  const { loadingList } = useContexState();

  const filterResults = loadingList.filter((res) => {
    const duplicatedDate = setResults.has(res.service_date);
    setResults.add(res.service_date);
    return !duplicatedDate;
  });

  const registrationsQuantity = (date: string) => {
    const filterResults = loadingList.filter((res) => res.service_date === date);

    const Results = filterResults.filter((res) => {
      const duplicatedIdentifier = setResults.has(res.identifier);
      setResults.add(res.identifier);
      return !duplicatedIdentifier;
    });
    return String(Results.length)
  };

  const formatDate = (date: string) => {
    const dateList = new Date(date);

    const dateListNow = [
      String(dateList.getDate()).padStart(2, '0'),
      String((dateList.getMonth() + 1)).padStart(2, '0'),
      String(dateList.getFullYear()).substring(2)
    ].join('/');
    return dateListNow
  }

  return (
    <Container>
      <Tweets>
        {filterResults.length > 0 ? (
          filterResults.map((item, index) => {
            return <DateCard
              date={formatDate(item.service_date)}
              quantity={registrationsQuantity(item.service_date)}
            />
          })
        ) : <h1>Nenhum agendamento</h1>}
      </Tweets>
    </Container>
  );
}
