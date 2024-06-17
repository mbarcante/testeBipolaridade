import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkboxText: {
    marginRight: 10,
    fontSize: 16,
  },
  answeredQuestions: {
    fontSize: 14,
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
});

export default styles;
