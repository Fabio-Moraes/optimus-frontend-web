import { useContexState } from '../../hooks/context';
import { FilterCard } from '../../components/FilterCard';
import { useState } from 'react';
import moment from 'moment';
[].length
import {
  ListContainer,
  Input,
  SearchWrapper,
  SearchIcon,
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

  function convertList(item: ListProps) {
    const phoneList = item.phone.split('@')[0].substring(2)
    const timeList = item.service_time.substring(0, item.service_time.length - 3);
    const dateListNow = moment.utc(item.service_date).format('DD/MM/YY');
    return { timeList, dateListNow, phoneList }
  }

  const filterDuplicatedIdentifier = loadingList?.filter((res) => {
    const duplicatedDate = setDuplicated.has(res.identifier);
    setDuplicated.add(res.identifier);
    return !duplicatedDate;
  });

  const filterText = search.length > 0
    ? filterDuplicatedIdentifier.filter(item => {
      return `
      ${item.name.replace(/_/g, ' ')}
      ${convertList(item).phoneList}
      ${item.service.replace(/_/g, ' ')}
      ${item.employee.replace(/_/g, ' ')}
      ${convertList(item).timeList}${convertList(item).dateListNow}
      ${item.identifier}`.toLowerCase().includes(search.toLowerCase());
    })
    : filterDuplicatedIdentifier;

  const OrderByDate = filterText.sort(function (a, b) {
    const primary = moment.utc(a.service_date).valueOf();
    const secondary = moment.utc(b.service_date).valueOf();
    return primary - secondary
  });

  return (
    <>
      <SearchWrapper>
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
              service_date={convertList(item).dateListNow}
              service_time={convertList(item).timeList}
              phone={convertList(item).phoneList}
              identifier={item.identifier}
            />
          })
        ) : <h1>Nenhuma espécie encontrada!</h1>}
      </ListContainer>
    </>
  );
}
