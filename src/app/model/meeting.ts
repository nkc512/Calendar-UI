export class Meeting {
    id: number;
    name:string;
    start_date:string;
    end_date:string;
    frequency:string;
    constructor(name:string,start_date:string,end_date:string,frequency:string)
    {
        this.name=name;
        this.start_date=start_date;
        this.end_date=end_date;
        this.frequency=frequency;
    }
}
