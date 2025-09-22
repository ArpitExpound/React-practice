import React from "react";

const title='Indecision';
const subtitle='Put your life in the hands of a computer';
const options=['Thing one', 'Thing two', 'Thing four'];

class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <Option/>
        <AddOption/>
      </div>
    );
  }
}

  class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      );
    }
  }

  class Action extends React.Component {
    handlePick() {
      alert('handlePick');
    }
    render() {    
      return (
        <div>
          <button onClick={this.handlePick}>What should I do?</button>
        </div>
      );
    }
  }

  class Options extends React.Component {
    
    handleRemoveAll() {
      alert('handleRemoveAll');
    }

    render() {    
      return (
        <div>
          <button onClick={this.handleRemoveAll}>Remove All</button>
          {this.props.options.map((option) => <Option key={option} optionText={option}/>)}   
        </div>
      );
    }
  }

  class Option extends React.Component {
    render() {    
      return (
        <div>
          {this.props.optionText}
        </div>
      );
    }
  }

  class AddOption extends React.Component {
    
    onFormSubmit(e) {
      e.preventDefault();

      const option = e.target.elements.option.value.trim();

      if (option) {
        alert(option);
      }

      e.target.elements.option.value = '';
    } 
    render() {    
      return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
        </div>
      );
    }
  }

export default IndecisionApp;