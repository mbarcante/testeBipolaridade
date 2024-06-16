import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import CheckBox from 'expo-checkbox';
import style from './styles/QuestionsWithCheckbox.css'
interface Question {
  text: string; // Question text
}

interface QuestionsWithCheckboxProps {
  questions: Question[]; // Array of questions
  onFinishAssessment?: (yesCount: number) => void; // Optional callback for results
}

const QuestionsWithCheckbox = ({ questions, onFinishAssessment }: QuestionsWithCheckboxProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [yesCount, setYesCount] = useState<number>(0);

  const handleCheckboxChange = (isChecked: boolean) => {
    if (isChecked) {
      setYesCount(yesCount + 1);
    } else {
      setYesCount(Math.max(0, yesCount - 1));
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      // setYesCount(0); // Reset yes count for the next question
    } else if (onFinishAssessment) {
      onFinishAssessment(yesCount); // Call callback with final yes count
    }
  };

  const handlePreviewsQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      // setYesCount(0); // Reset yes count for the next question
    } else if (onFinishAssessment) {
      onFinishAssessment(yesCount); // Call callback with final yes count
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View >
      <Text style={style.container}>
        Question {currentQuestionIndex + 1} of {questions.length}
      </Text>
      <Text>{currentQuestion.text}</Text>
      <View>
      <Text>Sim</Text>
        <CheckBox
          value= {yesCount > 0} // Checkbox reflects "Yes" selection state
          onValueChange={handleCheckboxChange}
        />
        <Text>Não</Text>
        <CheckBox value={false} onValueChange={() => {}} disabled />
      </View>
      <Text> {yesCount}</Text>
      <Button title="Próxima pergunta" onPress={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1} />
      <Button title="Pergunta anterior" onPress={handlePreviewsQuestion} disabled={currentQuestionIndex === questions.length - 1} />
    </View>
  );
};

export default QuestionsWithCheckbox;

