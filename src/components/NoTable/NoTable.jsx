import { WatermelonDiv } from './Watermelon.jsx';
import { NoTable, Div } from './NoTable.styled';

export const NoTableImg = ({ openModal }) => {
  return (
    <Div>
      <WatermelonDiv openModal={openModal} />
      <NoTable>
        <p>
          Have you already bought <i> Kherson`s watermelon</i> <b>?</b>
        </p>
      </NoTable>
    </Div>
  );
};
