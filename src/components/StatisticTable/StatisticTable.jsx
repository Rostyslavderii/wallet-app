import {
  Table,
  TableHeading,
  TrData,
  StyledTd,
  Wrapper,
  TrSummaryWrap,
  TrSummaryField,
  TrSummaryStr,
  TrSummaryNum,
  SelectWrap,
  NoDataField,
  TextMessage,
  Box,
} from './StatisticTable.styled';

import { customStylesSelect } from './StatisticTable.styled';
import { useMedia } from 'react-use';

import Select from 'react-select';

const dataMonth = [
  { label: 'January', value: 1 },
  { label: 'February', value: 2 },
  { label: 'March', value: 3 },
  { label: 'April', value: 4 },
  { label: 'May', value: 5 },
  { label: 'June', value: 6 },
  { label: 'July', value: 7 },
  { label: 'August', value: 8 },
  { label: 'September', value: 9 },
  { label: 'October', value: 10 },
  { label: 'November', value: 11 },
  { label: 'December', value: 12 },
];

function generateArrayOfYears() {
  var max = new Date().getFullYear();
  var min = max - 4;
  var years = [];

  for (var i = max; i >= min; i--) {
    years.push({
      value: i,
      label: i.toString(),
    });
  }
  return years;
}

export const StatisticTabel = ({
  trSummary,
  setYear,
  setMonth,
  month,
  year,
}) => {
  const isMobile = useMedia('(max-width: 767px)');

  const selectOption = data =>
    data.reduce((acc, item) => {
      acc.push({
        value: `${item.value}`,
        label: `${item.label}`,
      });

      return acc;
    }, []);

  return (
    <Box>
      <SelectWrap>
        <Select
          name="month"
          placeholder="Month"
          styles={customStylesSelect(isMobile)}
          onChange={evt => {
            setMonth(evt.value);
          }}
          options={selectOption(dataMonth)}
          value={dataMonth.find(({ value }) => value === month)}
        ></Select>

        <Select
          name="year"
          placeholder="Year"
          styles={customStylesSelect(isMobile)}
          onChange={evt => {
            setYear(evt.value);
          }}
          options={selectOption(generateArrayOfYears())}
          value={generateArrayOfYears().find(({ value }) => value === year)}
        ></Select>
      </SelectWrap>

      <Wrapper>
        {trSummary ? (
          <>
            {trSummary.categoriesSummary.length > 0 ? (
              <>
                <Table>
                  <thead>
                    <tr>
                      <TableHeading left>Category</TableHeading>
                      <TableHeading>Sum</TableHeading>
                    </tr>
                  </thead>
                  <tbody>
                    {trSummary.categoriesSummary.reduce(
                      (acc, { name, total, type }) => {
                        if (type !== 'INCOME') {
                          acc.push(
                            <TrData key={name} type={type}>
                              <StyledTd left name={name}>
                                {name}
                              </StyledTd>
                              <StyledTd right leftPosition>
                                {Math.abs(total).toFixed(2)}
                              </StyledTd>
                            </TrData>
                          );
                        }
                        return acc;
                      },
                      []
                    )}
                  </tbody>
                </Table>

                <TrSummaryWrap>
                  <TrSummaryField>
                    <TrSummaryStr>Expanses: </TrSummaryStr>
                    <TrSummaryNum red>
                      {Math.abs(trSummary.expenseSummary).toFixed(2)}
                    </TrSummaryNum>
                  </TrSummaryField>
                  <TrSummaryField>
                    <TrSummaryStr>Incomes: </TrSummaryStr>
                    <TrSummaryNum>
                      {Math.abs(trSummary.incomeSummary).toFixed(2)}
                    </TrSummaryNum>
                  </TrSummaryField>
                </TrSummaryWrap>
              </>
            ) : (
              <NoDataField>
                <TextMessage>
                  In this period you don't have any expances.
                </TextMessage>
              </NoDataField>
            )}
          </>
        ) : (
          <NoDataField>
            <TextMessage firtsTime>
              Choose month and year to see statistics.
            </TextMessage>
          </NoDataField>
        )}
      </Wrapper>
    </Box>
  );
};
