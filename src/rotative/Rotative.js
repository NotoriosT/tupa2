import React, { Component } from 'react';

class Typewriter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            currentWord: '',
            isTyping: true,
        };
    }

    componentDidMount() {
        this.typeWords();
    }

    componentWillUnmount() {
        clearInterval(this.typingInterval);
    }

    typeWords() {
        const { words, speed } = this.props;
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
                    }, 2000); // Tempo de espera entre palavras (ajuste conforme necessário)
                }
            }

            this.setState({ currentWord, isTyping });
        }, speed); // Velocidade de digitação (ajuste conforme necessário)
    }

    render() {
        return <div>{this.state.currentWord}</div>;
    }
}

export default Typewriter;
