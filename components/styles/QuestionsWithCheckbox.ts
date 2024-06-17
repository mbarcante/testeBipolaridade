import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#222",
    color: "#fff"
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    color: "#ddd"
  },
  questionText: {
    fontSize: 16,
    marginBottom: 15,
    color: "#ddd"
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkboxText: {
    marginRight: 10,
    fontSize: 16,
    color: "#ddd"
  },
  answeredQuestions: {
    fontSize: 14,
    marginBottom: 15,
    color: "#ddd"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  button: {
    padding: 10 ,
  }
});

export default styles;
