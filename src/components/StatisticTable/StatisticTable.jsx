// import { DropdownMonth } from './DropdownMonth';
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
  // SelectField,
  // Select,
  // Option,
  NoDataField,
  TextMessage,
} from './StatisticTable.styled';

import { customStylesSelect } from './StatisticTable.styled';
import { useMedia } from 'react-use';

import Select from 'react-select';

const dataMonth = [
  { id: 0, label: 'January', value: '1' },
  { id: 1, label: 'February', value: '2' },
  { id: 2, label: 'March', value: '3' },
  { id: 3, label: 'April', value: '4' },
  { id: 4, label: 'May', value: '5' },
  { id: 5, label: 'June', value: '6' },
  { id: 6, label: 'July', value: '7' },
  { id: 7, label: 'August', value: '8' },
  { id: 8, label: 'September', value: '9' },
  { id: 9, label: 'October', value: '10' },
  { id: 10, label: 'November', value: '11' },
  { id: 11, label: 'December', value: '12' },
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

export const StatisticTabel = ({ trSummary, setYear, setMonth }) => {
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
    <div>
      {/* <DropdownMonth onChange={handleChange} /> */}
      <SelectWrap>
        <Select
          name="month"
          placeholder="Month"
          styles={customStylesSelect(isMobile)}
          onChange={evt => {
            setMonth(evt.value);
          }}
          options={selectOption(dataMonth)}
        ></Select>

        <Select
          name="year"
          placeholder="Year"
          styles={customStylesSelect(isMobile)}
          onChange={evt => {
            setYear(evt.value);
          }}
          options={selectOption(generateArrayOfYears())}
        ></Select>
      </SelectWrap>

      {/* <SelectWrap>
        <SelectField>
          <Select onChange={handleChange} name="month">
            <Option value="" hidden>
              Month
            </Option>
            <Option value="1">January</Option>
            <Option value="2">February</Option>
            <Option value="3">March</Option>
            <Option value="4">April</Option>
            <Option value="5">May</Option>
            <Option value="6">June</Option>
            <Option value="7">July</Option>
            <Option value="8">August</Option>
            <Option value="9">September</Option>
            <Option value="10">October</Option>
            <Option value="11">November</Option>
            <Option value="12">December</Option>
          </Select>
        </SelectField>

        <SelectField>
          <Select onChange={handleChange} name="year">
            <Option value="" hidden>
              Year
            </Option>
            <Option value="2022">2022</Option>
            <Option value="2023">2023</Option>
          </Select>
        </SelectField>
      </SelectWrap> */}

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
                  In this period you don't have any expances
                </TextMessage>
              </NoDataField>
            )}
          </>
        ) : (
          <NoDataField>
            <TextMessage>
              Could you please indicate the month and year when you made any
              transactions?
            </TextMessage>
          </NoDataField>
        )}
      </Wrapper>
    </div>
  );
};
