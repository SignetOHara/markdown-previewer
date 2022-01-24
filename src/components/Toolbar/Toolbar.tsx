import { StyledToolbar } from './styles';

interface Props {
  title: string;
}

export const Toolbar = ({ title }: Props) => {
  return (
    <StyledToolbar>
      <h2>{title}</h2>
    </StyledToolbar>
  );
};
