import { View } from "react-native";

import { Questions } from '../components/Questions'
import QuestionsWithCheckbox from '../components/QuestionsWithCheckbox';
export default function Index() {

    const handleFinishAssessment = (yesCount: number) => {
      console.log("Assessment finished! Yes answers:", yesCount);
    };
  
    return (
      <View>
        <QuestionsWithCheckbox questions={Questions} onFinishAssessment={handleFinishAssessment} />
      </View>
    );
}