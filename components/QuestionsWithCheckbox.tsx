import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import CheckBox from 'expo-checkbox';
import styles from '../styles/QuestionsWithCheckbox.style.js'; // Importe os estilos (opcional)
interface Question {
  text: string; // Question text
}

interface QuestionsWithCheckboxProps {
  questions: Question[]; // Array of questions
  onFinishAssessment?: (yesCount: number) => void; // Optional callback for results
}

const QuestionsWithCheckbox = ({ questions, onFinishAssessment }: QuestionsWithCheckboxProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0);
  const [yesCount, setYesCount] = useState<number>(0);

  const handleCheckboxChange = (isChecked: boolean) => {
    if (isChecked) {
      setYesCount(yesCount + 1);
    } else {
      setYesCount(Math.max(0, yesCount - 1));
    }
    setAnsweredQuestions(answeredQuestions + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnsweredQuestions(answeredQuestions + 1); // Assuming reset for next question
      setYesCount(0); // Reset yes count for the next question
    } else if (onFinishAssessment) {
      onFinishAssessment(yesCount); // Call callback with final yes count
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Question {currentQuestionIndex + 1} of {questions.length}
      </Text>
      <Text style={styles.questionText}>{currentQuestion.text}</Text>
      <View style={styles.checkboxContainer}>
      <Text>Sim</Text>
        <CheckBox
          value={yesCount > 0} // Checkbox reflects "Yes" selection state
          onValueChange={handleCheckboxChange}
        />
        <Text>Não</Text>
        <CheckBox value={false} onValueChange={() => {}} disabled /> {/* Disabled "Não" checkbox */}
      </View>
      <Text>You have answered {answeredQuestions} questions.</Text>
      <Button title="Próxima pergunta" onPress={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1} />
    </View>
  );
};

export default QuestionsWithCheckbox;

