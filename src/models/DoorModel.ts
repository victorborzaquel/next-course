export default class DoorModel {
  constructor(
    private _number: number,
    private _selected: boolean = false,
    private _opened: boolean = false,
    private _hasGift: boolean = false
  ){}

  get number() {
    return this._number;
  }

  get selected() {
    return this._selected;
  }

  get opened() {
    return this._opened;
  }

  get hasGift() {
    return this._hasGift;
  }

  toggleSelection() {
    if (this._opened) return this;

    const selected = !this.selected;
    return new DoorModel(this.number, selected, this.opened, this.hasGift);
  }

  unselect() {
    const selected = false;
    return new DoorModel(this.number, selected, this.opened, this.hasGift);
  }

  open() {
    const opened = true;
    return new DoorModel(this.number, this.selected, opened, this.hasGift);
  }

  static builder(number: number) {
    return new DoorBuilder(number);
  }
}

class DoorBuilder {
  private _selected: boolean = false;
  private _opened: boolean = false;
  private _hasGift: boolean = false;

  constructor(private _number: number) {
  }

  selected(selected: boolean) {
    this._selected = selected;
    return this;
  }

  opened(opened: boolean) {
    this._opened = opened;
    return this;
  }

  hasGift(hasGift: boolean) {
    this._hasGift = hasGift;
    return this;
  }

  build() {
    return new DoorModel(this._number, this._selected, this._opened, this._hasGift);
  }
}