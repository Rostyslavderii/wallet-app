import { WatermelonDiv } from './Watermelon.jsx';
import { NoTable, Div } from './NoTable.styled';

export const NoTableImg = ({ openModal }) => {
  return (
    <Div>
      <WatermelonDiv openModal={openModal} />
      <NoTable>
        <p>Have you already bought Kherson`s watermelon?</p>
      </NoTable>
    </Div>
  );
};
