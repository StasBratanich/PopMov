class MovieClass {
  #title;
  #image;
  #overview;

  constructor(title, image, overview) {
    this.#title = title;
    this.#image = image;
    this.#overview = overview;
  }

  get Title() {
    return this.#title;
  }
  get Image() {
    return this.#image;
  }
  get Overview() {
    return this.#overview;
  }
  set Title(newTitle) {
    this.#title = newTitle;
  }
  set Image(newImage) {
    this.#image = newImage;
  }
  set Overview(newOverview) {
    this.#overview = newOverview;
  }
}
