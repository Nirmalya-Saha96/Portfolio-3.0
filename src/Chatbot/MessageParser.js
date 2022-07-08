// MessageParser starter code in MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hi')) {
      this.actionProvider.greet();
    }

    else if(lowerCaseMessage.includes('yes')) {
      this.actionProvider.vedio();
    }

    else if(lowerCaseMessage.includes('email')) {
      this.actionProvider.Face();
    }

    else if(lowerCaseMessage.includes('address')) {
      this.actionProvider.faceUse();
    }

    else if(lowerCaseMessage.includes('social')) {
      this.actionProvider.colab();
    }

    else if(lowerCaseMessage.includes('linkedin')) {
      this.actionProvider.colabUse();
    }

    else if(lowerCaseMessage.includes('github')) {
      this.actionProvider.codeP();
    }

    else if (lowerCaseMessage.includes('good')) {
      this.actionProvider.feedback();
    }

    else if (lowerCaseMessage.includes('bad')) {
      this.actionProvider.feedback();
    }

    else {
      this.actionProvider.sorry();
    }
  }
}

export default MessageParser;
