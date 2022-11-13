import {
  Table,
  TableHeading,
  TrData,
  StyledTd,
  Wrapper,
} from './StatisticTable.styled';

export const StatisticTabel = ({ handleChange, trSummary }) => {
  return (
    <>
      <select onChange={handleChange} name="month">
        <option value="" hidden>
          Month
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <select onChange={handleChange} name="year">
        <option value="" hidden>
          Year
        </option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>

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
                              <StyledTd type={type}>
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
                <div>
                  <div>
                    <span>Expanses: </span>
                    <span>{Math.abs(trSummary.expenseSummary).toFixed(2)}</span>
                  </div>
                  <div>
                    <span>Incomes: </span>
                    <span>{Math.abs(trSummary.incomeSummary).toFixed(2)}</span>
                  </div>
                </div>
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
    </>
  );
};
