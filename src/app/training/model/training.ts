export class Training {

  private _id: number;
  private _title: string;
  private _sport: string;
  private _trainingDate: string;
  private _duration: number;
  private _distance: number;
  private _description: string;


  get title(): string {
    return this._title;
  }

  get sport(): string {
    return this._sport;
  }

  get trainingDate(): string {
    return this._trainingDate;
  }

  get duration(): number {
    return this._duration;
  }

  get distance(): number {
    return this._distance;
  }

  get description(): string {
    return this._description;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  constructor(id: number, title: string, sport: string, trainingDate: string, duration: number, distance: number, description: string) {
    this._id = id;
    this._title = title;
    this._sport = sport;
    this._trainingDate = trainingDate;
    this._duration = duration;
    this._distance = distance;
    this._description = description;
  }
}
