import { Wrap } from '../../components/Wrap/Wrap';
import { Toolbar } from '../../components/Toolbar/Toolbar';
import { Preview } from '../../components/Preview/Preview';

interface Props {
  textAreaValue: string;
}

export const PreviewContainer = ({ textAreaValue }: Props) => {
  return (
    <Wrap>
      <Toolbar title="Preview" />
      <Preview textAreaValue={textAreaValue} />
    </Wrap>
  );
};
