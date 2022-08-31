import { useContexState } from '../../hooks/context';
import { FilterCard } from '../../components/FilterCard';
import moment from 'moment';

import {
  ListContainer,
  Input,
  SearchWrapper,
  SearchIcon,
  ClearIcon
} from './styles';

interface ListProps {
  name: string;
  service: string;
  service_date: string;
  service_time: string;
  phone: string;
  identifier: string;
  employee: string;
}

export function Filter() {
  const setDuplicated = new Set();
  const { loadingList, search, setSearch } = useContexState();

  const filterDuplicatedIdentifier = loadingList?.filter((res) => {
    const duplicatedDate = setDuplicated.has(res.identifier);
    setDuplicated.add(res.identifier);
    return !duplicatedDate;
  });

  const filterText = search.length > 0
    ? filterDuplicatedIdentifier.filter(item => {
      return `
      ${item.name.replace(/_/g, ' ')}
      ${item.phone.split('@')[0].substring(2)}
      ${item.service.replace(/_/g, ' ')}
      ${item.employee.replace(/_/g, ' ')}
      ${item.service_time.substring(0, item.service_time.length - 3)}
      ${moment.utc(item.service_date).format('DD/MM/YY')}
      ${item.identifier}`.toLowerCase().includes(search.toLowerCase());
    })
    : filterDuplicatedIdentifier;

  const OrderByDate = filterText.sort(function (a, b) {
    const primary = moment.utc(a.service_date, "YYYY/MM/DD")
      .valueOf() + moment.utc(a.service_time, "HH:mm").valueOf();
    const secondary = moment.utc(b.service_date, "YYYY/MM/DD")
      .valueOf() + moment.utc(b.service_time, "HH:mm").valueOf();
    return primary - secondary
  });

  return (
    <>
      <SearchWrapper>
        <ClearIcon />
        <div>
          <Input
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Filtrar cadastros..."
          />
          <SearchIcon />
        </div>
      </SearchWrapper>

      <ListContainer>
        {OrderByDate.length > 0 ? (
          OrderByDate.map((item, index) => {
            return <FilterCard
              key={String(index)}
              name={item.name.replace(/_/g, ' ')}
              service={item.service.replace(/_/g, ' ')}
              employee={item.employee.replace(/_/g, ' ')}
              service_date={moment.utc(item.service_date).format('DD/MM/YY')}
              service_time={item.service_time.substring(0, item.service_time.length - 3)}
              phone={item.phone.split('@')[0].substring(2)}
              identifier={item.identifier}
            />
          })
        ) : <h1>Nenhuma espécie encontrada!</h1>}
      </ListContainer>
    </>
  );
}
