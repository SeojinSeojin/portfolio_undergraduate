import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';
interface StyledTextProps extends TextProps {
  children: string; // Expect the text to be passed as children
}

/*
// Define the letters you want to style
const highlightLetters = new Set(['G', 'A', 'T', 'C', 'g', 'a', 't', 'c']);


// Helper function to determine if a character should be highlighted
const isHighlighted = (char: string): boolean => {
  return highlightLetters.has(char);
};



const StyledText: React.FC<StyledTextProps> = ({ children, ...props }) => {
  const groupedText = React.useMemo(() => {
    const segments: { text: string; highlighted: boolean }[] = [];
    let currentSegment = { text: '', highlighted: isHighlighted(children[0]) };

    for (let i = 0; i < children.length; i++) {
      const char = children[i];
      const highlighted = isHighlighted(char);

      if (highlighted === currentSegment.highlighted) {
        // Continue the current segment
        currentSegment.text += char;
      } else {
        // Push the current segment and start a new one
        segments.push(currentSegment);
        currentSegment = { text: char, highlighted };
      }
    }
    // Push the last segment
    segments.push(currentSegment);
    return segments;
  }, [children]);

  return (
    <Text {...props}>
      {groupedText.map((segment, index) => (
        <span
          key={index}
          style={{ color: segment.highlighted ? '#a1ddff' : 'white' }}
        >
          {segment.text}
        </span>
      ))}
    </Text>
  );
};

*/

const StyledText: React.FC<StyledTextProps> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default StyledText;
