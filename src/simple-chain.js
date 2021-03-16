const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chains: [],

    getLength() {
      return this.chains.length;
    },

    addLink(value) {
      if (value !== undefined) {
        this.chains.push('' + value);
      }
        return this;
      },

    removeLink(position) {
        if (typeof position !== 'number' || position < 0) {
          this.chains.splice(0)
          throw new Error
        } else { 
          this.chains.splice(position - 1, 1);
        }
        return this;
      },

    reverseChain() {
        this.chains.reverse()
        return this;
      },

    finishChain() {
        let finishedChain = '( ' + this.chains.join(' )~~( ') + ' )';
        this.chains.splice(0)
        return finishedChain;

      }
};

module.exports = chainMaker;
