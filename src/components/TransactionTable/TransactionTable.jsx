export const TransactionTable = ({ transactions, categories }) => {
  const isShown = transactions.length > 0 && categories.length > 0;
  return (
    isShown && (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
            <th>Balance</th>
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
              <tr key={id}>
                <td>{transactionDate}</td>
                <td>{type === 'INCOME' ? '+' : '-'}</td>
                <td>
                  {categories.find(category => category.id === categoryId).name}
                </td>
                <td>{comment}</td>
                <td>{amount}</td>
                <td>{balanceAfter}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    )
  );
};
