import { StyledWrap, StyledEditorWrap } from './styles';

interface Props {
  children: React.ReactNode;
}

export const Wrap = ({ children }: Props) => {
  return <StyledWrap>{children}</StyledWrap>;
};

export const EditorWrap = ({ children }: Props) => {
  return <StyledEditorWrap>{children}</StyledEditorWrap>;
};
