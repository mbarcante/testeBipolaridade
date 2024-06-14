import { View } from "react-native";

import { questions } from '../components/Questions'
import QuestionsWithCheckbox from '../components/QuestionsWithCheckbox';
import styles from '../styles/Index.style'
export default function Index() {

    const handleFinishAssessment = (yesCount: number) => {
      console.log("Assessment finished! Yes answers:", yesCount);
    };
  
    return (
      <View style={styles.container}>
        <QuestionsWithCheckbox questions={questions} onFinishAssessment={handleFinishAssessment} />
      </View>
    );
}