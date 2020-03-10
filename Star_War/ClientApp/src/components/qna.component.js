import React from 'react';
import './../Assets/css/style.css'
class QnA extends React.Component{
    render() {
       
        let questions=[];
        for (let i = 0; i < this.props.testData.length; i++) {
            const reactStringReplace = require('react-string-replace')
            let answer = reactStringReplace(this.props.testData[i]["Answer"], '\r\n', (match, i) => (
                <br></br>
              ));
            questions.push(
            <div key={i}>
                <p className="question"> {this.props.testData[i]["QuestionTitle"]}</p>
                <p className="answer">{ answer}</p>
                <br/>
            </div>);
        }
        return (
            <div className="content">
            {questions}    
            </div>
        )
    }
}
export default QnA;