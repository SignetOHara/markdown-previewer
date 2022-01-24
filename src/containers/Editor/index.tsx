import { EditorWrap } from '../../components/Wrap/Wrap';
import { Toolbar } from '../../components/Toolbar/Toolbar';
import { TextArea } from '../../components/TextArea/TextArea';

interface Props {
  textAreaValue: string;
  setTextAreaValue: React.Dispatch<React.SetStateAction<string>>;
}

export const EditorContainer = ({ textAreaValue, setTextAreaValue }: Props) => {
  return (
    <EditorWrap>
      <Toolbar title="Editor" />
      <TextArea
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
      />
    </EditorWrap>
  );
};
