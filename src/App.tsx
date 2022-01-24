import { useState } from 'react';
import { Provider as ThemeProvider } from './theme/Provider';
import { Page } from './components/Page/Page';
import { EditorContainer } from './containers/Editor';
import { PreviewContainer } from './containers/Preview';
import { markdown } from './utilities/utilities';

function App() {
  const [textAreaValue, setTextAreaValue] = useState<string>(markdown);

  return (
    <ThemeProvider>
      <Page>
        <EditorContainer
          textAreaValue={textAreaValue}
          setTextAreaValue={setTextAreaValue}
        />
        <PreviewContainer textAreaValue={textAreaValue} />
      </Page>
    </ThemeProvider>
  );
}

export default App;
