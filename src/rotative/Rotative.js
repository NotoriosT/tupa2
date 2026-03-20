import React, { Component } from 'react';
import './RotatingWords.css';

class Typewriter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      currentWord: '',
      isTyping: true,
    };
    this.typingInterval = null;
  }

  componentDidMount() {
    this.typeWords();
  }

  componentWillUnmount() {
    clearInterval(this.typingInterval);
  }

  typeWords() {
    const { words, speed = 100 } = this.props;
    let currentIndex = this.state.currentIndex;

    this.typingInterval = setInterval(() => {
      let currentWord = this.state.currentWord;
      let isTyping = this.state.isTyping;

      if (isTyping) {
        currentWord = words[currentIndex].substring(0, currentWord.length + 1);
        if (currentWord === words[currentIndex]) {
          isTyping = false;
          clearInterval(this.typingInterval);
          setTimeout(() => {
            currentIndex = (currentIndex + 1) % words.length;
            this.setState({ currentIndex, isTyping: true, currentWord: '' }, () => {
              this.typeWords();
            });
          }, 2200);
        }
      }

      this.setState({ currentWord, isTyping });
    }, speed);
  }

  render() {
    return (
      <span className="typewriter-text">
        {this.state.currentWord}
        <span className="typewriter-cursor">|</span>
      </span>
    );
  }
}

export default Typewriter;
