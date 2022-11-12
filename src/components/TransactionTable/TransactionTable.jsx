import {
  Table,
  TableHeading,
  TrData,
  StyledTd,
  DataHeading,
  DataValue,
  Wrapper,
} from './TransactionsTable.styled';
import { transformDate } from 'helpers/transformDate';
import { useMedia } from 'react-use';

export const TransactionTable = ({ transactions, categories }) => {
  const isShown = transactions.length > 0 && categories.length > 0;
  const isMobile = useMedia('(max-width: 767px)');
  const sortedTransactions = [...transactions].sort(
    (prevTr, nextTr) =>
      Date.parse(nextTr.transactionDate) - Date.parse(prevTr.transactionDate)
  );

  return (
    isShown && (
      <Wrapper>
        <Table>
          {!isMobile && (
            <thead>
              <tr>
                <TableHeading>Date</TableHeading>
                <TableHeading>Type</TableHeading>
                <TableHeading left>Category</TableHeading>
                <TableHeading left>Comment</TableHeading>
                <TableHeading>Sum</TableHeading>
                <TableHeading>Balance</TableHeading>
              </tr>
            </thead>
          )}

          <tbody>
            {sortedTransactions.map(
              ({
                id,
                transactionDate,
                type,
                categoryId,
                comment,
                amount,
                balanceAfter,
              }) => (
                <TrData key={id} type={type}>
                  <StyledTd>
                    {isMobile && <DataHeading>Date</DataHeading>}
                    {transformDate(transactionDate)}
                  </StyledTd>
                  <StyledTd>
                    {isMobile && <DataHeading>Type</DataHeading>}
                    {type === 'INCOME' ? '+' : '-'}
                  </StyledTd>
                  <StyledTd left>
                    {isMobile && <DataHeading>Category</DataHeading>}
                    {
                      categories.find(category => category.id === categoryId)
                        .name
                    }
                  </StyledTd>
                  <StyledTd left>
                    {isMobile && <DataHeading>Comment</DataHeading>}
                    <DataValue isScrollShown={comment.length > 30}>
                      {comment}
                    </DataValue>
                  </StyledTd>
                  <StyledTd type={type}>
                    {isMobile && <DataHeading>Sum</DataHeading>}
                    {Math.abs(amount).toFixed(2)}
                  </StyledTd>
                  <StyledTd>
                    {isMobile && <DataHeading>Balance</DataHeading>}
                    {balanceAfter.toFixed(2)}
                  </StyledTd>
                </TrData>
              )
            )}
          </tbody>
        </Table>
      </Wrapper>
    )
  );
};
