const messages = {
    _focus: ['arms', 'legs', 'chest', 'abdomen', 'upper back', 'lower back'],
    _intended: ['flexibility', 'strength', 'speed', 'cardio', 'mobility'],
    _intensity: ['relaxing', 'easy', 'medium', 'hard', 'master'],
    get focus() {
        return this._focus;
    },
    set focus(focus) {
        this._focus.push(focus);
    },
    get intended() {
        return this._intended;
    },
    set intended(intended) {
        this._intended.push(intended);
    },
    get intensity() {
        return this._intensity;
    },
    set intensity(intensity) {
        this._intensity.push(intensity);
    },
    dropFocus(element) {
        if (element === undefined) {
            this._focus.pop();
            return;
        }
        let index = this._focus.indexOf(element);
        if (index === -1)
            return;
        this._focus.splice(index, 1);
    },
    dropIntended(element) {
        if (element === undefined) {
            this._intended.pop();
            return;
        }
        let index = this._intended.indexOf(element);
        if (index === -1)
            return;
        this._intended.splice(index, 1);
    },
    dropIntensity(element) {
        if (element === undefined) {
            this._intensity.pop();
            return;
        }
        if (index === -1)
            return;
        let index = this._intensity.indexOf(element);
        this._intensity.splice(index, 1);
    },
    randomlySelect(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },
    printRadomMessage() {
        console.log(`Today, you will focus on ${this.randomlySelect(this._focus)} \nYou will train for ${this.randomlySelect(this._intended)} \nAnd have a ${this.randomlySelect(this._intensity)} workout`);
    }

};
messages.printRadomMessage();