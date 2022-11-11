import {
  Table,
  TableHeading,
  TrData,
  StyledTd,
} from './TransactionsTable.styled';
export const TransactionTable = ({ transactions, categories }) => {
  const isShown = transactions.length > 0 && categories.length > 0;
  const transformDate = date => {
    const dateString = new Date(date);
    const day = dateString.getDate().toString().padStart(2, '0');
    const month = (dateString.getMonth() + 1).toString().padStart(2, '0');
    const year = dateString.getFullYear().toString().slice(2);

    return `${day}.${month}.${year}`;
  };
  return (
    isShown && (
      <Table>
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
        <tbody>
          {transactions.map(
            ({
              id,
              transactionDate,
              type,
              categoryId,
              comment,
              amount,
              balanceAfter,
            }) => (
              <TrData key={id}>
                <StyledTd>{transformDate(transactionDate)}</StyledTd>
                <StyledTd>{type === 'INCOME' ? '+' : '-'}</StyledTd>
                <StyledTd left>
                  {categories.find(category => category.id === categoryId).name}
                </StyledTd>
                <StyledTd left>{comment}</StyledTd>
                <StyledTd type={type}>{Math.abs(amount).toFixed(2)}</StyledTd>
                <StyledTd>{balanceAfter.toFixed(2)}</StyledTd>
              </TrData>
            )
          )}
        </tbody>
      </Table>
    )
  );
};
