import { Watermelon, Slice, Button } from './Watermelon.styled.js';

export const WatermelonDiv = ({ openModal }) => {
  return (
    <Button type="button" onClick={openModal}>
      <p>Add transaction</p>
      <Watermelon>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </Watermelon>
      <Slice>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </Slice>
    </Button>
  );
};
