class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }


  // new method
  greet() {
    const greetingMessage = this.createChatBotMessage('Nice to you');
    const greeting = this.createChatBotMessage('I am a Full Stack developer');
    const greetnext = this.createChatBotMessage('want to contact me?');

    this.updateChatbotState(greetingMessage);
    this.updateChatbotState(greeting);
    this.updateChatbotState(greetnext);
  }

  vedio = () => {
    const v = this.createChatBotMessage(
      'So nice of you',
    );
    const u = this.createChatBotMessage('type email to get my email id.');
    const address = this.createChatBotMessage('type address to get my address');
    const sociallinks = this.createChatBotMessage('type social to get my social links');
    this.updateChatbotState(v);
    this.updateChatbotState(u);
    this.updateChatbotState(address);
    this.updateChatbotState(sociallinks);
  }

  Face = () => {
    const f = this.createChatBotMessage(
      'My email id is',
    );
    const hu = this.createChatBotMessage('sahanirmalya96@gmail.com');
    this.updateChatbotState(f);
    this.updateChatbotState(hu);
  }

  faceUse = () => {
    const fu = this.createChatBotMessage('I am from');
    const fuuu = this.createChatBotMessage('West Bengal');
    const ff = this.createChatBotMessage(
      'India',
    );
    this.updateChatbotState(fu);
    this.updateChatbotState(fuuu);
    this.updateChatbotState(ff);
  }

  colab = () => {
    const cz = this.createChatBotMessage(
      'I have two social accounts',
      );
    const cuf = this.createChatBotMessage('LinkedIn and Github which one you want to know');
    this.updateChatbotState(cz);
    this.updateChatbotState(cuf);
  }

  colabUse = () => {
    const cuu = this.createChatBotMessage('My LinkedIn id is Nirmalya Saha');
    const ccc = this.createChatBotMessage(
      'link: https://www.linkedin.com/in/nirmalya-saha-625993201/',
    );
    this.updateChatbotState(cuu);
    this.updateChatbotState(ccc);
  }

  codeP = () => {
    const pen = this.createChatBotMessage('My GitHub id is Nirmalya-Saha96');
    const penu = this.createChatBotMessage(
      'link: https://github.com/Nirmalya-Saha96',
    );
    this.updateChatbotState(pen);
    this.updateChatbotState(penu);
  }

  feedback = () => {
    const feedback = this.createChatBotMessage(
      'Thankyou..',
    );
    this.updateChatbotState(feedback);
  }



  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
