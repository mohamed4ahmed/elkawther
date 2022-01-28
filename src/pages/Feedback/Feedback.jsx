import React, { useEffect } from "react";
import FeedbackContainer from "../../containers/Feedback/Feedback";
const Feedback = () => {
  useEffect(() => {
    document.title = "Comment - ELKAWTHER MARKET";
  }, []);
  return <FeedbackContainer />;
};

export default Feedback;
