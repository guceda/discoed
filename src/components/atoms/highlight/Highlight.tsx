import { FC } from 'react';
import Highlighter from 'react-highlight-words';

interface HighlightProps {
  children: string;
  search?: string;
}

const Highlight: FC<HighlightProps> = ({ children, search }) => {
  return (
    <Highlighter
      // highlightClassName="YourHighlightClass"
      searchWords={[search || '']}
      autoEscape={true}
      textToHighlight={children}
    />
  );
};

export default Highlight;
