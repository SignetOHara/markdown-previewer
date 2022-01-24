import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { StyledPreview } from './styles';

interface Props {
  textAreaValue: string;
}

export const Preview = ({ textAreaValue }: Props) => {
  return (
    <StyledPreview id="preview">
      <ReactMarkdown children={textAreaValue} remarkPlugins={[remarkGfm]} />
    </StyledPreview>
  );
};
