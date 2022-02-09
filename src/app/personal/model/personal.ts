export class Personal {
  private _weight: number;
  private _date: string;
  private _restHeartRate: number;

  constructor(weight: number, date: string, restHeartRate: number) {
    this._weight = weight;
    this._date = date;
    this._restHeartRate = restHeartRate;
  }

  get restHeartRate(): number {
    return this._restHeartRate;
  }

  set restHeartRate(value: number) {
    this._restHeartRate = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }
}
