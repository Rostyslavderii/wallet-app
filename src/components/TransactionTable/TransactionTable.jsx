import { useMedia } from 'react-use';
import { useDispatch } from 'react-redux';
import { MdDelete, MdEdit } from 'react-icons/md';
import {
  Table,
  TableHeading,
  TrData,
  StyledTd,
  DataHeading,
  DataValue,
  Wrapper,
  Button,
} from './TransactionsTable.styled';
import { transformDate } from 'helpers/transformDate';
import { deleteTransaction } from 'redux/transactions/transactionOperation';

export const TransactionTable = ({
  transactions,
  categories,
  openEditModal,
}) => {
  const dispatch = useDispatch();
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
                <TableHeading>Edit</TableHeading>
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
                    <DataValue>{comment}</DataValue>
                  </StyledTd>
                  <StyledTd type={type}>
                    {isMobile && <DataHeading>Sum</DataHeading>}
                    {Math.abs(amount).toFixed(2)}
                  </StyledTd>
                  <StyledTd>
                    {isMobile && <DataHeading>Balance</DataHeading>}
                    {balanceAfter.toFixed(2)}
                  </StyledTd>
                  <StyledTd>
                    <Button
                      aria-label="Edit"
                      type="button"
                      onClick={() =>
                        openEditModal({
                          id,
                          transactionDate,
                          type,
                          categoryId,
                          comment,
                          amount,
                        })
                      }
                    >
                      <MdEdit />
                    </Button>
                    <Button
                      aria-label="delete"
                      type="button"
                      onClick={() => dispatch(deleteTransaction(id))}
                      red
                    >
                      <MdDelete />
                    </Button>
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
