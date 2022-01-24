import { StyledTextArea } from './styles';

interface Props {
  textAreaValue: string;
  setTextAreaValue: React.Dispatch<React.SetStateAction<string>>;
}

export const TextArea = ({ textAreaValue, setTextAreaValue }: Props) => {
  return (
    <StyledTextArea
      as="textarea"
      value={textAreaValue}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
        setTextAreaValue(e.target.value)
      }
      id="editor"
      cols={30}
      rows={10}
    />
  );
};
