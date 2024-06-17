import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import CheckBox from 'expo-checkbox';
import styles from './styles/QuestionsWithCheckbox';
interface QuestionsWithCheckboxStyles {
  button: string; // Style class for buttons
}

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean; // Optional disabled prop
}

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
  const [selectedAnswers, setSelectedAnswers] = useState<boolean[]>(Array(questions.length).fill(false));
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const handleCheckboxChange = (isChecked: boolean) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = isChecked;
    setSelectedAnswers(updatedAnswers);
    setYesCount(updatedAnswers.filter(answer => answer).length);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (onFinishAssessment) {
      onFinishAssessment(yesCount); // Call callback with final yes count
    }
  };

  const handlePreviewsQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleEndAssesment = () => {
    setQuizFinished(true);
  };

  if (quizFinished) {
    if (yesCount > 18) {
      return (
        <View style={styles.container}>
          <Text>Parabéns! Você é bipolar!</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text>Que pena :/ Tente novamente mais tarde.</Text>
        </View>
      )
    }
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        Pergunta {currentQuestionIndex + 1} of {questions.length}
      </Text>
      <Text style={styles.questionText}>{currentQuestion.text}</Text>
      <View style={styles.checkboxContainer}>
        <View>
        <Text style={styles.checkboxText}>Sim</Text>
        <CheckBox
          value={selectedAnswers[currentQuestionIndex]} // Checkbox reflects "Yes" selection state
          onValueChange={handleCheckboxChange}
        />
        </View>
        <View>
        <Text style={styles.checkboxText}>Não</Text>
        <CheckBox
          value={!selectedAnswers[currentQuestionIndex]}
          onValueChange={(isChecked) => handleCheckboxChange(!isChecked)}
        />
        </View>
      </View>
      
      <Text style={styles.checkboxText}> {yesCount}</Text>

      <View style={styles.buttonContainer}>
      
      
      <View style={styles.button}>
        <Button
          title="Pergunta anterior"
          onPress={handlePreviewsQuestion}
          disabled={currentQuestionIndex === 0} />
      </View>
      <View style={styles.button}>
        <Button title='Terminar sessão' onPress={handleEndAssesment}></Button>
      </View>
      <View style={styles.button}>
        <Button title="Próxima pergunta"
          onPress={handleNextQuestion}
          disabled={currentQuestionIndex === questions.length - 1}
        />
      </View>
      </View>
    </View>
  );
};

export default QuestionsWithCheckbox;