import {
  Container,
  Banner,
  Imagen,
  List
} from './styles';

import { useContexState } from '../../hooks/context';
import { DateCard } from '../../components/DateCard';
import moment from 'moment';

export function Home() {
  const { loadingList } = useContexState();

  const setDuplicatedDate = new Set();
  const filterOneSameDate = loadingList.filter((res) => {
    const duplicatedDate = setDuplicatedDate.has(res.service_date);
    setDuplicatedDate.add(res.service_date);
    return !duplicatedDate;
  });

  const registrationsQuantity = (date: string) => {
    const setDuplicatedIdentifier = new Set();
    const filterSameDate = loadingList.filter((res) => res.service_date === date);

    const filterDuplicatedIdentifier = filterSameDate.filter((res) => {
      const duplicatedIdentifier = setDuplicatedIdentifier.has(res.identifier);
      setDuplicatedIdentifier.add(res.identifier);
      return !duplicatedIdentifier;
    });
    return String(filterDuplicatedIdentifier.length);
  };

  const OrderByDate = filterOneSameDate.sort(function (a, b) {
    const primary = moment.utc(a.service_date).valueOf();
    const secondary = moment.utc(b.service_date).valueOf();
    return primary - secondary
  });

  return (
    <Container>
      <Banner>
        <Imagen />
      </Banner>
      <Container>
        <List>
          {OrderByDate.length > 0 && (
            OrderByDate.map((item, index) => {
              return <DateCard
                key={index}
                date={moment.utc(item.service_date).format('DD/MM/YY')}
                quantity={registrationsQuantity(item.service_date)}
              />
            })
          )}
        </List>
      </Container>
    </Container>
  );
}
