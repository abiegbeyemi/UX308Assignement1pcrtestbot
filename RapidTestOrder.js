class RapidTestOrder {
    constructor(sFrom) {
        this.OrderState = {
            WELCOMING: () => {
                let aReturn = [];
                this.stateCur = this.OrderState.FOOD_TYPE;
                aReturn.push("Welcome to Fridays Cafe and Eatery.");
                aReturn.push("What can I get for you today? We have Breakfast bagels or Panini wraps!");
                return aReturn;
            },

            FOOD_TYPE: (sInput) => {
                let aReturn = [];
                this.stateCur = this.OrderState.BREAD_TYPE;
                if (sInput.toLowerCase().startsWith('b')) {
                    aReturn.push("Nice choice! What kind of bagel would you like?");
                    aReturn.push("We have plain, sesame, jalepeno, and everything.")
                } else {
                    aReturn.push("Nice choice! What kind of Panini would you like?");
                    aReturn.push("We have smoked salmon, ham, piri chicken, and veggie.")
                }
                return aReturn;
            },

            BREAD_TYPE: (sInput) => {
                let aReturn = [];
                aReturn.push("Would you like a drink with that?")
                aReturn.push("We have small, medium, and large!")
                this.stateCur = this.OrderState.DRINK_TYPE;
                return aReturn;

            },

            DRINK_TYPE: (sInput) => {
                let aReturn = [];
                this.isDone = true
                aReturn.push("Thank you for your order! It will be ready in 20 minutes!")
                return aReturn;
            }
        }

        this.stateCur = this.OrderState.WELCOMING;
        this.isDone = false;
        this.sFrom = sFrom;
    }
    handleInput(sInput) {
        return this.stateCur(sInput);
    }
    isDone() {
        return this.isDone;
    }
}

export { RapidTestOrder }