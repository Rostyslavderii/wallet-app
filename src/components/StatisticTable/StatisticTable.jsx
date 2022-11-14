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
  SelectField,
  Select,
  Option,
} from './StatisticTable.styled';

export const StatisticTabel = ({ handleChange, trSummary }) => {
  return (
    <div>
      <SelectWrap>
        <SelectField>
          <Select onChange={handleChange} name="month">
            <Option value="" hidden>
              Month
            </Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="6">6</Option>
            <Option value="7">7</Option>
            <Option value="8">8</Option>
            <Option value="9">9</Option>
            <Option value="10">10</Option>
            <Option value="11">11</Option>
            <Option value="12">12</Option>
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
                              <StyledTd leftPosition>
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
              <div>In this period you don't have any expances</div>
            )}
          </>
        ) : (
          <div>
            Can you please put a month and year when you did a transactions
          </div>
        )}
      </Wrapper>
    </div>
  );
};
